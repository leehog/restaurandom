// @flow
import React from 'react'
import { CustomText } from '../../../fonts'
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native'
import { styles } from '../filter.styles'

type Props = {
  foodName: string,
  picUrl: string,
  toggleChosenFilter: Function,
  categoryChosen: boolean
}

export default class FilterItem extends React.PureComponent<Props, null> {
  onPress = () => {
    const { foodName, toggleChosenFilter } = this.props
    toggleChosenFilter(foodName)
  }

  render() {
    const { foodName, picUrl } = this.props
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={styles.listItem}>
          <Image source={{ uri: picUrl }} style={styles.backgroundImage} />
          <CustomText font='CircularBold' style={styles.categoryText}>{foodName}</CustomText>
          {this.props.categoryChosen ? <Text style={{ color: 'rgb(0,255,0)', fontSize: 68 }}>X</Text> : null}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}