import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, RouteProp, TabNavigationState } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeTabs from './HomeTabs'
import Detail from '../pages/Detail'
import Listen from '../pages/Listen'
import Found from '../pages/Found'
import Account from '../pages/Account'
import { HeaderTitle, StackNavigationProp } from '@react-navigation/stack'
import { RootStackNavigation, RootStackParamList } from '.'
import IconFont from '../assets/iconfont'


export type BottomTabParamList = {
    HomeTabs: undefined,
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


function getHeadTitle(routename: string) {
    // const routename = route.state ? route.state.routes[route.state.index].name : '首页';
    switch (routename) {
        case 'HomeTabs':
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
        this.setNavBarHidden();
    }

    componentDidMount() {
        this.setNavBarHidden();
    }

    setNavBarHidden = () => {
        const { navigation, route } = this.props;
        const routename = route.state ? route.state.routes[route.state.index].name : '首页';
        // if (routename === 'HomeTabs') {
        //     navigation.setOptions(
        //         {
        //             headerTitle: '',
        //             headerTransparent: true
        //         }
        //     )
        // }else {
        //     navigation.setOptions(
        //         {
        //             headerTitle: getHeadTitle(routename),
        //             headerTransparent: false
        //         }
        //     )
        // }
        navigation.setOptions(
            {
                headerTitle: getHeadTitle(routename),
                headerTransparent: false
            }
        )
    }

    render() {
        return (
            // <View>
            //     <Text>导航控制器测试的</Text>
            // </View>
            <Tab.Navigator tabBarOptions={{ activeTintColor: '#f86442' }}>
                <Tab.Screen
                    name="HomeTabs"
                    component={HomeTabs}
                    options={{
                        tabBarLabel: '首页',
                        tabBarIcon: ({
                            size, color,focused
                        }) => {
                            return <IconFont name='iconshouyeshouye' color={color} size={size}></IconFont>
                        }
                    }}></Tab.Screen>
                <Tab.Screen name="Listen" component={Listen}
                    options={{
                        tabBarLabel: '我听',
                        tabBarIcon: ({
                            size, color
                        }) => {
                            return <IconFont name='icontingshu' color={color} size={size}></IconFont>
                        }
                    }}></Tab.Screen>
                <Tab.Screen name="Found" component={Found}
                    options={{
                        tabBarLabel: '发现',
                        tabBarIcon: ({
                            size, color
                        }) => {
                            return <IconFont name='iconfaxian' color={color} size={size}></IconFont>
                        }
                    }}></Tab.Screen>
                <Tab.Screen name="Account" component={Account}
                    options={{
                        tabBarLabel: '我的',
                        tabBarIcon: ({
                            size, color
                        }) => {
                            return <IconFont name='icondibudaohanglan-' color={color} size={size}></IconFont>
                        }
                    }}></Tab.Screen>
            </Tab.Navigator>
        )
    }
}