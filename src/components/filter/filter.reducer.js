// @flow
import {
  SET_SEARCH_RADIUS,
  TOGGLE_CATEGORY_SELECTION
} from './filter.actions'
import type {
  setSearchRadiusAction,
  toggleCategorySelectionAction
} from './filter.actions'

const initilizedState = {
  searchRadius: 0,
  categories: {}
}
type State = {
  searchRadius: number,
  categories: {
    [string]: boolean
  }
}

type Actions = setSearchRadiusAction | toggleCategorySelectionAction

export function Reducer(state: State = initilizedState, action: Actions) {
  switch (action.type) {
    case SET_SEARCH_RADIUS:
      return { ...state, searchRadius: action.payload }
    case TOGGLE_CATEGORY_SELECTION:
      return { ...state, categories: { ...state.categories, [action.payload]: !state.categories[action.payload] } }
    default:
      return state
  }
}