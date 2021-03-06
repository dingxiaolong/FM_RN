import React, { Component } from 'react'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import Category from '../pages/Category/index'

import Detail from '../pages/Detail'
import Album from '../pages/album/index'
import BottomTabs from './BottomTabs'


export type RootStackParamList = {
    BottomTabs: undefined,
    Category: undefined,
    Detail: { id: number },
    Album: {
        id: string,
        title: string,
        image: string
    }
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>()

export default class Navigator extends Component {
    render() {
        return (
            // <View>
            //     <Text>导航控制器测试的</Text>
            // </View>
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="float"

                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled: true,
                        // ...Platform.select(
                        //     {
                        //         android: {
                        //             headerStatusBarHeight: StatusBar.currentHeight,
                        //         }
                        //     }
                        // ),
                        headerBackTitleVisible: false,
                        headerTintColor: '#333333',
                        gestureDirection: 'horizontal',
                        headerStyle: {
                            // backgroundColor: 'red',
                            ...Platform.select({
                                android: {
                                    elevation: 0,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                }
                            })
                        }
                    }}>
                    <Stack.Screen options={{ headerTitle: '首页' }} name="BottomTabs" component={BottomTabs}></Stack.Screen>
                    <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
                    <Stack.Screen name="Album" component={Album}></Stack.Screen>
                    
                    <Stack.Screen options={{ headerTitle: '分类' }} name="Category" component={Category}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}