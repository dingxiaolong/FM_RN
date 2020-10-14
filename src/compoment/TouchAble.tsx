import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'

class TouchAble extends Component<TouchableOpacityProps> {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} {...this.props}/>
    )
  }
}
export default TouchAble