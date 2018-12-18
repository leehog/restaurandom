import React from 'react' /* eslint-disable-line */
import { connect } from 'react-redux'
import stateToProps from './filter.state-to-props'
import dispatchToProps from './filter.dispatch-to-props'
import Filter from './filter'

const FilterContainer = (props) => {
  return(
    <Filter {...props} />
  )
}

export default connect(stateToProps, dispatchToProps)(FilterContainer)