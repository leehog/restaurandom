// @flow

export const SET_SEARCH_RADIUS = 'SET_SEARCH_RADIUS'
export type setSearchRadiusAction = { type: 'SET_SEARCH_RADIUS', payload: number }

export function setSearchRadius(radius: number): setSearchRadiusAction {
  return {
    type: SET_SEARCH_RADIUS,
    payload: radius
  }
}

export const TOGGLE_CATEGORY_SELECTION = 'TOGGLE_CATEGORY_SELECTION'
export type toggleCategorySelectionAction = { type: 'TOGGLE_CATEGORY_SELECTION', payload: string }

export function toggleCategorySelection(category: string): toggleCategorySelectionAction {
  return {
    type: TOGGLE_CATEGORY_SELECTION,
    payload: category
  }
}