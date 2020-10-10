import { connect, ConnectedProps } from 'react-redux'
import React, { Component } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { RootStackNavigation } from '../navigator/index'
import { RootStates } from '../model'


const mapStateToProps = ({ home }: RootStates) => {
  return {num: home.num}
}


const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface Iprops extends ModelState {
  navigation: RootStackNavigation
};

class Home extends Component<Iprops> {
  
  onpress = () => {
    const { navigation } = this.props;
    navigation.push("Detail", { id: 100 });
  }
  handelAdd = () => {
    Alert.alert('我被点击了');
  }

  render() {
    const {num} = this.props;
    console.log(num);
    
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text> 首页{num} </Text>
        <Button title='加' onPress={this.handelAdd}></Button>
        <Button title='跳转到详情页' onPress={this.onpress}></Button>
      </View>
    )
  }
}

export default connector(Home);