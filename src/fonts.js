// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { Font } from 'expo'

const fontlist = {
  'CircularRegular': require('./resources/fonts/CircularStd-Book.ttf'),
  'CircularBold': require('./resources/fonts/CircularStd-Bold.ttf'),
}

function setupFonts() {
  return Font.loadAsync(fontlist)
}

type CustomTextProps = {
  children: string,
  font: string,
  style?: *
}

type CustomTextState = {
  fontsLoaded: boolean
}

export class CustomText extends React.Component<CustomTextProps, CustomTextState> {
  constructor() {
    super()
    this.state = {
      fontsLoaded: false
    }
  }

  async componentDidMount() {
    await setupFonts()
    this.setState({ fontsLoaded: true })
  }

  render() {
    const { font, style } = this.props
    const { fontsLoaded } = this.state
    return (
      <View>
        {fontsLoaded ?
          <Text style={style ? { ...style, fontFamily: font } : { fontFamily: font }}>
            {this.props.children}
          </Text>
          : null}
      </View>
    )
  }
}