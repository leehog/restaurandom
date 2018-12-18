// @flow
import React from 'react'
import { Animated, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'

import { styles } from './styles'
import Fade from '../../components/animations/fade'
import Map from '../../components/map/map.container'
import Filter from '../../components/filter/filter.container'
import Restaurant from '../../components/popup/restaurant'

type Props = {
  height: number
}
type State = {
  hideFilter: boolean
}

export default class extends React.Component<Props, State> {
  animations: {
    scroll: *
  }

  constructor() {
    super()
    this.state = {
      hideFilter: false
    }
    this.animations = {
      scroll: new Animated.Value(0)
    }
  }

  toggleFilter = () => {
    this.setState({ hideFilter: !this.state.hideFilter })
  }

  render() {
    const { hideFilter } = this.state
    const { scroll } = this.animations
    return(
      <Animated.ScrollView
        style={styles.wrapper}
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }], { useNativeDriver: true })} >
        <Map />
        <Restaurant />
        <Fade shouldHide={hideFilter} duration={400} style={{ ...styles.gradientWrapper, height: this.props.height * 0.8 }}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.0)', 'rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 1)']}
            locations={[0, 0.7, 1]}
            style={StyleSheet.absoluteFill}
          />
        </Fade>
        <Filter toggleFilter={this.toggleFilter} shouldHide={hideFilter} />
      </Animated.ScrollView>
    );
  }
}