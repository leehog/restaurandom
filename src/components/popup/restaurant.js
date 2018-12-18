// @flow
import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './restaurant.styles'
import { Button } from 'native-base'
import { styles as filterStyles } from '../filter/filter.styles'
import { CustomText } from '../../fonts'

const restaurant = {
  name: 'Indian garden',
  picUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/9d/92/d3/traditional-indian-food.jpg',
  location: 'skanstull97',
  open: '11-24:00',
  website: 'jodhman.se',
  phone: '0704288701'
}

type Props = {
}

export default class extends React.Component<Props, null> {
  render() {
    return (
      <View style={ styles.popup }>
        <View style={ styles.imgWrapper }>
          <Image source={{ uri: restaurant.picUrl }} style={styles.background} />
        </View>
        <Button rounded style={styles.mapButton}>
          <CustomText font='CircularBold' style={styles.mapButtonText}>Directions</CustomText>
        </Button>
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.location}>{restaurant.location}</Text>
          <Text style={styles.infoText}>Open {restaurant.open}</Text>
          <Text style={styles.infoText}>{restaurant.website}</Text>
          <Text style={styles.infoText}>{restaurant.phone}</Text>
        </View>
        <Button rounded style={filterStyles.searchCallToAction}>
          <CustomText font='CircularBold' style={filterStyles.searchCallToActionText}>Back</CustomText>
        </Button>
      </View>
    )
  }
}