// @flow
import React from 'react'
import { View, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import { styles } from './App.style'
import Main from './views/main'
import { setDeviceSize } from './device/device.actions'
import type { DeviceSize } from './types/device.types'
import Spinner from './components/spinner/spinner'

type Props = {
  setDeviceSize: Function,
  loading: boolean
}

const { height, width } = Dimensions.get('window')
class App extends React.Component<Props, null> {
  componentDidMount() {
    this.props.setDeviceSize({ width, height })
  }

  render() {
    return (
      <View style={styles.container}>
        <Main height={height} />
        {this.props.loading ? <Spinner /> : null}
      </View>
    )
  }
}

const mapState = state => {
  const { loading } = state.DeviceReducer
  return {
    loading
  }
}

const mapDispatch = dispatch => {
  return {
    setDeviceSize: (size: DeviceSize) => {
      dispatch(setDeviceSize(size))
    }
  }
}

export default connect(mapState, mapDispatch)(App)
