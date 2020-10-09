import { RouteProp } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../navigator/index'


interface IProps {
  route : RouteProp<RootStackParamList,'Detail'>;
}

export default class Detail extends Component<IProps> {

  render() {
    const {route} = this.props;
    return (
      <View>
        <Text> Detail </Text>
        {/* <Text> {route.params.id} </Text> */}
      </View>
    )
  }
}