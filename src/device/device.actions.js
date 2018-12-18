// @flow
import type { DeviceSize } from '../types/device.types'

export const SET_DEVICE_SIZE = 'SET_DEVICE_SIZE'
export type setDeviceSizeAction = { type: 'SET_DEVICE_SIZE', payload: DeviceSize }

export function setDeviceSize(size: DeviceSize): setDeviceSizeAction {
  return {
    type: SET_DEVICE_SIZE,
    payload: size
  }
}

export const SHOW_SPINNER = 'SHOW_SPINNER'
export type showSpinnerAction = { type: 'SHOW_SPINNER' }

export function showSpinner(): showSpinnerAction {
  return {
    type: SHOW_SPINNER
  }
}

export const HIDE_SPINNER = 'HIDE_SPINNER'
export type hideSpinnerAction = { type: 'HIDE_SPINNER' }

export function hideSpinner(): hideSpinnerAction {
  return {
    type: HIDE_SPINNER
  }
}