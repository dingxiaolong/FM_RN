import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createMaterialTopTabNavigator, MaterialTopTabBar, MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import Home from '../pages/Home/Index'
import { NavigationContainer } from '@react-navigation/native';
import { HeaderTitle } from '@react-navigation/stack';
import TopTabbarWrapper from '../pages/Views/TopTabbarWrapper';
import TouchAble from '../compoment/TouchAble';

type HomeTabsParamalist = {
    Home : undefined,
    Home1 : undefined,
    Home3 : undefined,
}

const TabConatainer = createMaterialTopTabNavigator<HomeTabsParamalist>();
export default class HomeTabs extends Component {

  rendTabbar = (props: MaterialTopTabBarProps) => {
    return (
      // <View style={{backgroundColor: 'red', height: 100}}>
      //   <MaterialTopTabBar {...props}/>
      // </View>
      <View>
        <TopTabbarWrapper {...props}/>
        <View style={styles.searchBtnContainer}>
          <TouchAble style={styles.searchBtn}>
            <Text>搜索</Text>
          </TouchAble>
          <TouchAble style={styles.historyBtn}>
            <Text>历史记录</Text>
          </TouchAble>
        </View>
        
      </View>
    )
  }

  render() {
    return (
          <TabConatainer.Navigator 
            tabBar={this.rendTabbar}
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
              {/* <TabConatainer.Screen name='Home1' component={Home}/>
              <TabConatainer.Screen name='Home3' component={Home}/> */}
          </TabConatainer.Navigator>
    )
  }
}


const styles = StyleSheet.create({
  searchBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 6
  },
  searchBtn: {
    flex: 1,
    paddingLeft: 12,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(3,3,3,0.1)',
    justifyContent: 'center'
  },
  historyBtn: {
    // paddingLeft: 20
    marginLeft: 15
  }
});