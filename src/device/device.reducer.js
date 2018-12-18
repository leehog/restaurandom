// @flow
import {
  SET_DEVICE_SIZE,
  SHOW_SPINNER,
  HIDE_SPINNER
} from './device.actions'
import type {
  setDeviceSizeAction,
  showSpinnerAction,
  hideSpinnerAction
} from './device.actions'

const initializedState = {
  height: -1,
  width: -1,
  loading: false
}
type State = {
  height: number,
  width: number,
  loading: boolean
}

type Action = setDeviceSizeAction | showSpinnerAction | hideSpinnerAction

export function Reducer(state: State = initializedState, action: Action) {
  switch (action.type) {
    case SET_DEVICE_SIZE:
      return { ...state, ...action.payload }
    case SHOW_SPINNER:
      return { ...state, loading: true }
    case HIDE_SPINNER:
      return { ...state, loading: false }
    default:
      return state
  }
}