// @flow
import React from 'react'
import FilterItem from './filter-item'
import uuid from 'uuid/v4'
import { styles } from '../filter.styles'
import { View } from 'react-native'

const categories = [
  {
    name: 'indian',
    picUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/9d/92/d3/traditional-indian-food.jpg'
  },
  {
    name: 'hamburgers',
    picUrl: 'https://i.redd.it/tomdyjesf2901.png'
  }
]

type Props = {
  toggleChosenFilter: Function,
  categories: {
    [string]: boolean
  }
}
type State = {
  chosenCategories: Array<string>
}
export default class FilterList extends React.PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.listWrap}>
        {categories.map(category => <FilterItem
          foodName={category.name}
          categoryChosen={!!this.props.categories[category.name]}
          picUrl={category.picUrl}
          toggleChosenFilter={this.props.toggleChosenFilter}
          key={uuid()}
        />)
        }
      </View>
    )
  }
}