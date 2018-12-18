// @flow
import { toggleCategorySelection, setSearchRadius } from './filter.actions'
import { showSpinner, hideSpinner } from '../../device/device.actions'

export default (dispatch: Function) => {
  return {
    startLoading: () => dispatch(showSpinner()),
    stopLoading: () => dispatch(hideSpinner()),
    toggleChosenFilter: (category: string) => dispatch(toggleCategorySelection(category)),
    setSearchRadius: (radius: number) => dispatch(setSearchRadius(radius))
  }
}