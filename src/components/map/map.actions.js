// @flow
export const SET_SELECTED_RESTAURANT = 'SET_SELECTED_RESTAURANT'
export type setSelectedRestaurantAction = { type: 'SET_SELECTED_RESTAURANT', payload: number }

export function setSelectedRestaurant(id: number): setSelectedRestaurantAction {
  return {
    type: SET_SELECTED_RESTAURANT,
    payload: id
  }
}
