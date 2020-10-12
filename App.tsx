import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import Navigator from './src/navigator/index'
import 'react-native-gesture-handler';
import BottomTabs from './src/navigator/BottomTabs';
import { Provider } from 'react-redux';
import store from './src/config/dva'

export default class App extends Component {
  render() {
    return (
      // <BottomTabs></BottomTabs>
      <Provider store={store}>
        <Navigator/>
        <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent/>
      </Provider>
    )
  }
}