import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, RouteProp, TabNavigationState } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Listen from '../pages/Listen'
import Found from '../pages/Found'
import Account from '../pages/Account'
import { HeaderTitle, StackNavigationProp } from '@react-navigation/stack'
import { RootStackNavigation, RootStackParamList } from '.'


export type BottomTabParamList = {
    Home: undefined,
    Listen: undefined,
    Found: undefined,
    Account: undefined,
};


type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
    state?: TabNavigationState
};

interface IPros {
    navigation: RootStackNavigation,
    route: Route
}


const Tab = createBottomTabNavigator<BottomTabParamList>()


function getHeadTitle(route: Route) {
    const routename = route.state ? route.state.routes[route.state.index].name : '首页';
    switch (routename) {
        case 'Home':
            return '首页';
            break;
        case 'Listen':
            return '我听';
            break;
        case 'Found':
            return '发现';
            break;
        case 'Account':
            return '我的';
            break;
        default:
            return '首页';
            break;
    }
}


export default class BottomTabs extends Component<IPros> {
    componentDidUpdate() {
        const { navigation ,route} = this.props;
        navigation.setOptions(
            {
                headerTitle: getHeadTitle(route)
            }
        )
    }

    render() {
        return (
            // <View>
            //     <Text>导航控制器测试的</Text>
            // </View>
            <Tab.Navigator tabBarOptions={{ activeTintColor: '#f86442' }}>
                <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: '首页' }}></Tab.Screen>
                <Tab.Screen name="Listen" component={Listen} options={{ tabBarLabel: '我听' }}></Tab.Screen>
                <Tab.Screen name="Found" component={Found} options={{ tabBarLabel: '发现' }}></Tab.Screen>
                <Tab.Screen name="Account" component={Account} options={{ tabBarLabel: '我的' }}></Tab.Screen>
            </Tab.Navigator>
        )
    }
}