import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackNavigation } from '../navigator'


interface Iprops {
  navigation: RootStackNavigation
};

export default class Account extends Component<Iprops> {

  onpress = () => {
    const { navigation } = this.props;
    navigation.push("Detail");
  }

  render() {
    return (
      <View style={{backgroundColor:'red'}}>
        <Text> account </Text>
        <Button title='跳转到详情页' onPress={this.onpress}></Button>
      </View>
    )
  }
}