import * as Expo from 'expo'
import React from 'react'
import { View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducers from './reducers'

const store = createStore(reducers)

class index extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Expo.registerRootComponent(index);