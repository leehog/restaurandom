import { connect } from 'react-redux'
import Map from './map'
import stateToProps from './map.state-to-props'
import dispatchToProps from './map.dispatch-to-props'

export default connect(stateToProps, dispatchToProps)(Map)