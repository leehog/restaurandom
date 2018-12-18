// @flow
import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import MapView from 'react-native-maps'
import { Location, Permissions } from 'expo'

import { styles, customMapStyle } from './map.style'

type Props = {
  setRestaurant: Function,
  height: number
}
type State = {
  displayMap: boolean,
  mapPosition: {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
  },
  userPosition: {
    latitude: number,
    longitude: number
  }
}

export default class extends React.Component<Props, State> {
  animations: {
    scroll: *
  }
  watchPosition: * = null

  constructor() {
    super()
    this.state = {
      displayMap: false,
      mapPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      },
      userPosition: {
        latitude: 0,
        longitude: 0
      }
    }
    this.animations = {
      scroll: new Animated.Value(0)
    }
  }

  componentDidMount() {
    console.debug('[MAP] successfully mounted')
    this.watchUser()
  }

  watchUser = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status === 'granted') {
      this.watchPosition = Location.watchPositionAsync({ enableHighAccuracy: true }, (location: *) => {
        const { latitude, longitude } = location.coords
        const userPosition = {
          latitude,
          longitude
        }
        if (this.state.mapPosition.latitude === 0) {
          this.setState({ displayMap: true, userPosition: userPosition, mapPosition: { ...this.state.mapPosition, ...userPosition } })
        } else {
          this.setState({ userPosition: userPosition })
        }
      }).catch((error) => console.log(error))
    }
  }

  watchMap = (coords: *) => {
    const { longitudeDelta, latitudeDelta } = coords
    this.setState({ mapPosition: {...this.state.mapPosition, longitudeDelta, latitudeDelta} })
  }

  componentWillUnmount() {
    this.watchPosition.remove()
  }

  render() {
    const { height } = this.props
    const { scroll } = this.animations
    return (
      <Animated.View style={{
        ...styles.mapWrapper,
        transform: [{ translateY: Animated.multiply(scroll, 0.5) }],
        height
      }}>
        {this.state.displayMap ? <MapView
          style={{ ...StyleSheet.absoluteFillObject, ...styles.map }}
          customMapStyle={customMapStyle}
          initialRegion={this.state.mapPosition}
          onRegionChangeComplete={this.watchMap}>
          <MapView.Marker title="Location" coordinate={this.state.userPosition} />
        </MapView> : null}
      </Animated.View>
    )
  }
}