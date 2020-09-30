import { RouteProp } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../navigator'


interface IProps {
  router : RouteProp<RootStackParamList,'Detail'>;
}

export default class Detail extends Component {

  render() {
    // const {router} = this.props;

    return (
      <View>
        <Text> Detail </Text>
      </View>
    )
  }
}