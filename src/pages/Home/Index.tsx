import { connect, ConnectedProps } from 'react-redux'
import React, { Component } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { RootStackNavigation } from '../../navigator/index'
import { RootStates } from '../../model'
import Carsousel from './Carsousel'
import Config from 'react-native-config'

const mapStateToProps = ({ home ,loading}: RootStates) => {
  return { carousels: home.carousels,loading: loading.effects['home/fetchCarousels'] }
}


const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface Iprops extends ModelState {
  navigation: RootStackNavigation
};

class Home extends Component<Iprops> {


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(
      {
        type: 'home/fetchCarousels',
      }
    )
  }

  onpress = () => {
    const { navigation } = this.props;
    navigation.push("Detail", { id: 100 });
  }
  handelAdd = () => {
    const { dispatch } = this.props;
    dispatch(
      {
        type: 'home/add',
        payload: {
          num: 3
        }
      }
    )
    // Alert.alert('我被点击了');
  }

  handelAddAsync = () => {
    const { dispatch } = this.props;
    dispatch(
      {
        type: 'home/asyncAdd',
        payload: {
          num: 10
        }
      }
    )
  }

  render() {
    const { carousels ,loading} = this.props;

    return (
      <View>
        {/* <Text> 首页{num} </Text> */}
        <Text>{Config.API_URL}</Text>
        <Text> {loading ? '正在努力计算中' : ''} </Text>
        {/* <Button title='加' onPress={this.handelAdd}></Button>
        <Button title='异步加' onPress={this.handelAddAsync}></Button> */}

        <Button title='跳转到详情页' onPress={this.onpress}></Button>
        <Carsousel/>
      </View>
    )
  }
}

export default connector(Home);