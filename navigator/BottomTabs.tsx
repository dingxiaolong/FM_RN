import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Listen from '../pages/Listen'
import Found from '../pages/Found'
import Account from '../pages/Account'
import { HeaderTitle } from '@react-navigation/stack'


export type BottomTabParamList = {
    Home: undefined,
    Listen: undefined,
    Found: undefined,
    Account: undefined,
};


const Tab = createBottomTabNavigator<BottomTabParamList>()

export default class BottomTabs extends Component {
    render() {
        return (
            // <View>
            //     <Text>导航控制器测试的</Text>
            // </View>
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{activeTintColor:'#f86442'}}>
                    <Tab.Screen name="Home" component={Home} options={{tabBarLabel:'首页'}}></Tab.Screen>
                    <Tab.Screen name="Listen" component={Listen}></Tab.Screen>
                    <Tab.Screen name="Found" component={Found}></Tab.Screen>
                    <Tab.Screen name="Account" component={Account}></Tab.Screen>
                </Tab.Navigator>

            </NavigationContainer>
        )
    }
}