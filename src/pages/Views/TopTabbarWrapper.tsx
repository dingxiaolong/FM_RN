import { MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import TouchAble from '../../compoment/TouchAble';

export default class TopTabbarWrapper extends Component<MaterialTopTabBarProps> {
  render() {
      const height = getStatusBarHeight();
      console.log(height);
      const {props} = this;
    return (
        <View style={styles.container}>
            <MaterialTopTabBar {...props} style={styles.tabbar} />
            <TouchAble style={styles.categoryBtn}>
                <Text>分类</Text>
            </TouchAble>
        </View>
    )
  }
}
const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#fff',
            paddingTop: getStatusBarHeight(),
            flexDirection: 'row',
            alignItems: 'center'
        },
        tabbar: {
            elevation: 0,
            flex: 1,
            backgroundColor: 'transparent'
        },
        topBarView: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        categoryBtn: {
            paddingHorizontal: 15,
            borderLeftColor: '#555',
            borderLeftWidth: StyleSheet.hairlineWidth,
        },
        searchBtn: {

        },
        historyBtn: {

        }
    }
)