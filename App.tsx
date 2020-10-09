import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navigator from './src/navigator/index'
import 'react-native-gesture-handler';
import BottomTabs from './src/navigator/BottomTabs';

export default class App extends Component {
  render() {
    return (
      // <BottomTabs></BottomTabs>
      <Navigator>
      </Navigator>
    )
  }
}