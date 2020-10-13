import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home/Index';

const stack = createStackNavigator();

export default class componentName extends Component {
  render() {
    return (
      <NavigationContainer>

        <stack.Navigator>
            <stack.Screen component={Home} name = 'home'></stack.Screen>
        </stack.Navigator>

      </NavigationContainer>
    )
  }
}