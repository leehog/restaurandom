// @flow
import React from 'react' // eslint-disable-line
import { View, Image, Modal } from 'react-native'

import { styles } from './spinner.styles'
import PizzaSpinner from '../../resources/pizza_spinner.gif'

export default () => {
  return(
    <Modal transparent={true} animationType={'fade'} onRequestClose={() => console.log('close')}>
      <View style={styles.wrapper}>
        <Image style={styles.spinner} source={PizzaSpinner} />
      </View>
    </Modal>
  )
}