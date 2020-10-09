import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackNavigation } from '../navigator/index'


interface Iprops {
  navigation: RootStackNavigation
};

export default class Home extends Component<Iprops> {

  onpress = () => {
    const { navigation } = this.props;
    navigation.push("Detail", { id: 100 });
  }

  render() {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text> 首页 </Text>
        <Button title='跳转到详情页' onPress={this.onpress}></Button>
      </View>
    )
  }
}