// @flow
import React from 'react'
import { Animated } from 'react-native'

type Props = {
  shouldHide: boolean,
  duration: number,
  style?: *,
  children: *
}
type State = {
  hide: boolean
}

export default class extends React.Component<Props, State> {
  opacity: *

  constructor(props: Props) {
    super(props)
    this.state = {
      hide: props.shouldHide
    }
    this.opacity = new Animated.Value(props.shouldHide ? 0 : 1)
  }

  componentDidUpdate(prevProps: Props) {
    const { shouldHide, duration } = this.props
    if (prevProps.shouldHide !== shouldHide && shouldHide === true) {
      Animated.timing(this.opacity,
        { toValue: 0, duration }
      ).start(() => this.setState({ hide: shouldHide }))
    } else if (prevProps.shouldHide !== shouldHide && shouldHide === false) {
      this.setState({ hide: shouldHide })
      Animated.timing(this.opacity,
        { toValue: 1, duration }
      ).start()
    }
  }

  render() {
    const { style, children, ...rest } = this.props
    return (
      <Animated.View {...rest} style={{ ...style, opacity: this.opacity, zIndex: this.state.hide ? -1 : 0 }}>
        {children}
      </Animated.View>
    )
  }
}