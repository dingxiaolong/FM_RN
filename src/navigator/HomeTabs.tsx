import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../pages/Home/Index'
import { NavigationContainer } from '@react-navigation/native';
import { HeaderTitle } from '@react-navigation/stack';

type HomeTabsParamalist = {
    Home : undefined,
    Home1 : undefined,
    Home3 : undefined,

}

const TabConatainer = createMaterialTopTabNavigator<HomeTabsParamalist>();
export default class HomeTabs extends Component {
  render() {
    return (
          <TabConatainer.Navigator 
            tabBarOptions={{
                scrollEnabled:false,
                tabStyle: {
                    width: 100
                },
                indicatorStyle: {
                    height: 2,
                    width: 20,
                    marginLeft: 40,
                    borderRadius: 3,
                    backgroundColor: '#f86442',
                },
                activeTintColor: '#f86442',
                inactiveTintColor: '#333',
            }}
          >
              <TabConatainer.Screen name='Home' component={Home} options={{title: '推荐'}}/>
              <TabConatainer.Screen name='Home1' component={Home}/>
              <TabConatainer.Screen name='Home3' component={Home}/>
          </TabConatainer.Navigator>
    )
  }
}