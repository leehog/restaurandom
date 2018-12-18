// @flow
import type { Restaurant } from '../../types/map.types'
import { SET_SELECTED_RESTAURANT } from './map.actions'
import type { setSelectedRestaurantAction } from './map.actions'

export const initialState = {
  selectedRestaurant: {
    id: -1,
    name: ''
  }
}
type State = {
  selectedRestaurant: Restaurant
}
type Actions = setSelectedRestaurantAction

export function Reducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case SET_SELECTED_RESTAURANT:
      return { ...state, selectedRestaurant: action.payload }
    default:
      return { ...state }
  }
}