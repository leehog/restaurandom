// @flow
import { setSelectedRestaurant } from './map.actions'

export default (dispatch: Function) => {
  return {
    setRestaurant: (id: number) => {
      dispatch(setSelectedRestaurant(id))
    }
  }
}