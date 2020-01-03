import React, { Fragment } from 'react'

import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import SwitchNavigator from './navigation/SwitchNavigator'
import Firebase, { FirebaseProvider } from './utils'
import TabNavigator from './navigation/TabNavigator'
import reducer from './reducers'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

/*export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SwitchNavigator />
            </Provider>
        )
    }
}*/

/*const ApplicationContent = () => (
    <Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <Provider store={store}>
            <TabNavigator />
        </Provider>
        <FirebaseProvider value={Firebase}>
            <TabNavigator />
        </FirebaseProvider>
        
    
        
    </Fragment>
)*/
  
const App = () => (
    <Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
        
                <FirebaseProvider value={Firebase}>
            <TabNavigator />
        </FirebaseProvider>
        </ApplicationProvider>
    </Fragment>
)

  
export default App
  
