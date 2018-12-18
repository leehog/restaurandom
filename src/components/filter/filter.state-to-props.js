export default (state) => {
  const { categories, searchRadius } = state.FilterReducer
  const { height } = state.DeviceReducer
  return {
    categories,
    searchRadius,
    height
  }
}