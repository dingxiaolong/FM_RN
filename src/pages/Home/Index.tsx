import { connect, ConnectedProps } from 'react-redux'
import React, { Component } from 'react'
import { Alert, Button, FlatList, ScrollView, Text, View } from 'react-native'
import { RootStackNavigation } from '../../navigator/index'
import { RootStates } from '../../model'
import Carsousel from './Carsousel'
import Config from 'react-native-config'
import Guess from './Guess'
import { IChannel } from '../../model/home'
import ChannelItem from './ChannelItem'

const mapStateToProps = ({ home, loading }: RootStates) => {
  return { carousels: home.carousels, channels: home.channels, loading: loading.effects['home/fetchCarousels'] }
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
    dispatch(
      {
        type: 'home/fetchChannel',
      }
    )
  }

  onpress = () => {
    const { navigation } = this.props;
    navigation.push("Detail", { id: 100 });
  }
  onpressChanel = (data: IChannel) => {

    const {navigation} = this.props;
    navigation.navigate('Album',data);
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

  onEndReached = () => {
    console.log('下拉刷新');
    const { dispatch } = this.props;
    dispatch(
      {
        type: 'home/fetchChannel',
      }
    )
  }

  renItemChannels = ({ item }: { item: IChannel }) => {
    // return (
    //     <View>
    //       <Text>我是列表</Text>
    //     </View>
    // )
    return (<ChannelItem data={item} onpress={this.onpressChanel} />)
  }

  listHeaderComponent = () => {
    const { carousels, channels, loading } = this.props;
    console.log(carousels + '轮播如数据');
    return (
      <View>
        <Carsousel data={carousels} />
        <Guess go2AlbumDetail={this.onpressChanel}/>
      </View>
    )
  }

  render() {
    const { carousels, channels, loading } = this.props;
    // console.log(carousels);
    return (
      <FlatList 
      ListHeaderComponent={this.listHeaderComponent} 
      data={channels} 
      renderItem={this.renItemChannels} 
      onEndReached={this.onEndReached}
      onEndReachedThreshold={0.2}
      />
      // <ScrollView>
      //   {/* <Text> 首页{num} </Text> */}
      //   {/* <Text>{Config.API_URL}</Text>
      //   <Text> {loading ? '正在努力计算中' : ''} </Text> */}
      //   {/* <Button title='加' onPress={this.handelAdd}></Button>
      //   <Button title='异步加' onPress={this.handelAddAsync}></Button> */}

      //   {/* <Button title='跳转到详情页' onPress={this.onpress}></Button> */}
      //   <Carsousel data={carousels}/>
      //   <Guess/>
      //   <FlatList data={channels} renderItem={this.renItemChannels}/>
      // </ScrollView>
    )
  }
}

export default connector(Home);