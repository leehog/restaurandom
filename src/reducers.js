import { combineReducers } from 'redux'
import { Reducer as AppReducer } from './components/map/map.reducer'
import { Reducer as DeviceReducer } from './device/device.reducer'
import { Reducer as FilterReducer } from './components/filter/filter.reducer'

export default combineReducers({
  AppReducer,
  DeviceReducer,
  FilterReducer
})