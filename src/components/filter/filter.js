// @flow
import React from 'react'
import { View, Text, Slider } from 'react-native'
import { Button } from 'native-base'

import { styles, filterListStyle } from './filter.styles'
import Fade from '../animations/fade'
import { CustomText } from '../../fonts'
import FilterList from './components/filter-list'

type Props = {
  shouldHide: boolean,
  height: number,
  searchRadius: string,
  setSearchRadius: Function,
  categories: {
    [string]: boolean
  },
  toggleChosenFilter: Function,
  toggleFilter: Function,
  startLoading: Function,
  stopLoading: Function
}

export default class extends React.Component<Props, null> {
  findRestaurant = () => {
    this.props.startLoading()
    this.props.toggleFilter()
    setTimeout(() => this.props.stopLoading(), 3500)
  }

  render() {
    return (
      <Fade shouldHide={this.props.shouldHide} duration={400} style={{ ...styles.filterWrapper, top: -(this.props.height * 0.2) }}>
        <Button rounded style={styles.searchCallToAction} onPress={this.findRestaurant}>
          <CustomText font='CircularBold' style={styles.searchCallToActionText}>FIND MY MEAL!</CustomText>
        </Button>
        <View style={filterListStyle.wrapper}>
          <Text style={{ alignSelf: 'center' }}>{this.props.searchRadius}m</Text>
          <Slider
            style={styles.slider}
            step={1}
            minimumValue={0}
            maximumValue={5000}
            value={this.props.searchRadius}
            onValueChange={val => this.props.setSearchRadius(val)}
          />
        </View>
        <FilterList
          categories={this.props.categories}
          toggleChosenFilter={this.props.toggleChosenFilter} />
      </Fade>
    )
  }
}