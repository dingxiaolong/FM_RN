import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import Home from '../pages/Home'
import Detail from '../pages/Detail'


export type RootStackParamList = {
    Home: undefined,
    Detail: undefined
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
                    gestureDirection: 'horizontal',
                    headerStyle : {
                        ...Platform.select({
                            android: {
                                elevation: 0,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }
                        })
                    }
                }}>
                    <Stack.Screen options={{headerTitle: '首页'}} name="Home" component={Home}></Stack.Screen>
                    <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}