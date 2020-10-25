import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import { RootStates } from '../../model/index'
import lodash from 'lodash'
import { ICategory } from '../../model/category'
import { viewPortWidth } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { RootStackNavigation, RootStackParamList } from '../../navigator'
import { RouteProp, StackRouterOptions } from '@react-navigation/native'
import HeadRightBtn from './HeadRightBtn'
import TouchAble from '../../compoment/TouchAble'
import storage from '../../config/storage'
interface Istates {
  myCategorys: ICategory[]
}

interface Ipros {
  navigation: RootStackNavigation,
  // route: StackRouterOptions,
  // route : RouteProp<RootStackParamList,'Detail'>;
}

const parentWidth = viewPortWidth - 10;
const itemWidth = (parentWidth - 40) / 4.0;

class Category extends Component<Ipros> {
  onsubmit = () => {
    console.log(this.state.isEdit);

    if (this.state.isEdit) {
      storage.save(
        {
          key: 'myCategorys',
          data: this.state.myCategorys
        }
      )
    }

    this.setState(
      {
        isEdit: !this.state.isEdit
      }
    )
    this.props.navigation.setOptions(
      {
        headerRight: this.headRight
      }
    )
  }

  headRight = () => {
    return (
      <HeadRightBtn onpress={this.onsubmit} isEdit={this.state.isEdit}/>
    )
  }
  constructor(props: Ipros) {
    super(props)
    props.navigation.setOptions(
      {
        headerRight: this.headRight
      }
    )
  }

  state = {
    isEdit: false,
    myCategorys: [
      {
        id: 'home',
        name: '推荐'
      },
      {
        id: 'vip',
        name: 'vip'
      }
    ],
    categorys: [{
      "id": "2",
      "name": "小说",
      "classify": "推荐"
    }, {
      "id": "3",
      "name": "直播",
      "classify": "推荐"
    }, {
      "id": "4",
      "name": "广播",
      "classify": "推荐"
    }, {
      "id": "5",
      "name": "儿童",
      "classify": "推荐"
    }, {
      "id": "6",
      "name": "精品",
      "classify": "推荐"
    }, {
      "id": "7",
      "name": "畅销书",
      "classify": "推荐"
    }, {
      "id": "8",
      "name": "头条",
      "classify": "推荐"
    }, {
      "id": "9",
      "name": "武汉",
      "classify": "推荐"
    }, {
      "id": "10",
      "name": "70年",
      "classify": "推荐"
    }, {
      "id": "11",
      "name": "开学季",
      "classify": "推荐"
    }, {
      "id": "12",
      "name": "历史",
      "classify": "知识"
    }, {
      "id": "13",
      "name": "历史",
      "classify": "知识"
    }, {
      "id": "14",
      "name": "商业财经",
      "classify": "知识"
    }, {
      "id": "15",
      "name": "育儿百科",
      "classify": "知识"
    }, {
      "id": "16",
      "name": "人文",
      "classify": "知识"
    }, {
      "id": "17",
      "name": "英语",
      "classify": "知识"
    }, {
      "id": "18",
      "name": "个人成长",
      "classify": "知识"
    }, {
      "id": "19",
      "name": "IT科技",
      "classify": "知识"
    }, {
      "id": "20",
      "name": "国学书院",
      "classify": "知识"
    }, {
      "id": "21",
      "name": "小语种",
      "classify": "知识"
    }, {
      "id": "22",
      "name": "名校公开课",
      "classify": "知识"
    }, {
      "id": "23",
      "name": "好书精讲",
      "classify": "知识"
    }, {
      "id": "24",
      "name": "少儿英语",
      "classify": "知识"
    }, {
      "id": "25",
      "name": "学科教育",
      "classify": "知识"
    }, {
      "id": "26",
      "name": "音乐",
      "classify": "娱乐"
    }, {
      "id": "27",
      "name": "相声",
      "classify": "娱乐"
    }, {
      "id": "28",
      "name": "段子",
      "classify": "娱乐"
    }, {
      "id": "29",
      "name": "情感生活",
      "classify": "娱乐"
    }, {
      "id": "30",
      "name": "广播剧",
      "classify": "娱乐"
    }, {
      "id": "31",
      "name": "娱乐",
      "classify": "娱乐"
    }, {
      "id": "32",
      "name": "影视",
      "classify": "娱乐"
    }, {
      "id": "33",
      "name": "二次元",
      "classify": "娱乐"
    }, {
      "id": "34",
      "name": "广播剧",
      "classify": "娱乐"
    }, {
      "id": "35",
      "name": "旅游",
      "classify": "生活"
    }, {
      "id": "36",
      "name": "健康养生",
      "classify": "生活"
    }, {
      "id": "37",
      "name": "时尚生活",
      "classify": "生活"
    }, {
      "id": "38",
      "name": "戏曲",
      "classify": "生活"
    }, {
      "id": "39",
      "name": "时尚生活",
      "classify": "生活"
    }]
  };
  componentDidMount() {
  }
  // componentWillUnmount() {
  //   this.setState(
  //     {
  //       isEdit: false,
  //     }
  //   )
  //   this.props.navigation.setOptions(
  //     {
  //       headerRight: this.headRight
  //     }
  //   )
  // }
  renderItem = (item: ICategory, index: number) => {
    const {isEdit} = this.state ;
    const {selected} = item;
    return (
      <TouchAble onPress={() => this.onItemPress(item, index, true)}>
        <View key={item.id} style={styles.item}>
          <Text>
            {item.name}
          </Text>
          {
            isEdit && (
              <View style={styles.icon}>
                <Text style={{ flex: 1, textAlign: 'center', color: 'white', lineHeight: 16 }}>-</Text>
              </View>
            )
          }
        </View>
      </TouchAble>
    )
  }

  onLongPress = () => {
    const {navigation} = this.props;
    this.setState(
      {
        isEdit: true,
      }
    )
    navigation.setOptions(
      {
        headerRight: this.headRight
      }
    )
    console.log('bei dianji000');
  }

  onItemPress = (item: ICategory, index: number, selected: boolean) => {
    console.log(item.name);
    const {isEdit,myCategorys} = this.state;
     if (isEdit) {

      if (selected) {
        this.setState(
          {
           myCategorys: myCategorys.filter(selItem => selItem.id != item.id)
          }
        )
      }else {
        this.setState(
          {
           myCategorys: myCategorys.concat(item)
          }
        )
      }
     }
  }

  renderUnSelectedItem = (item: ICategory, index: number) => {
    const {isEdit} = this.state;
    const {selected} = item;
    return (
      <TouchAble onLongPress={this.onLongPress} onPress={() => this.onItemPress(item, index,false)}>
        <View key={item.id} style={styles.item}>
          <Text>
            {item.name}
          </Text>
          {
            isEdit && (
              <View style={styles.icon}>
                <Text style={{ flex: 1, textAlign: 'center', color: 'white', lineHeight: 16 }}>+</Text>
              </View>
            )
          }
        </View>
      </TouchAble>
    )
  }

  render() {
    const { categorys } = this.state;
    let { myCategorys } = this.state;
    // if (storage.getAllDataForKey('myCategorys') != undefined) {
    //   myCategorys = storage.getAllDataForKey('myCategorys');
    // }
    
    const categorysGroup = lodash.groupBy(
      categorys, (item) => item.classify 
    )
    console.log(myCategorys);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.classyname}>
          我的分类
        </Text>
        <View style = {styles.classyView}>
          {myCategorys.map(this.renderItem)}
        </View>
        <View>
          {
            Object.keys(categorysGroup).map(
              (classflname) => {
                return (
                  <View key={classflname}>
                    <Text style={styles.classyname}>
                      {classflname}
                    </Text>
                    <View style={styles.classyView}>
                      {categorysGroup[classflname].map((item, index) => {
                        if (myCategorys.find(selItem => item.id === selItem.id)) {
                          return null;
                        }
                        return this.renderUnSelectedItem(item,index);
                      })}
                    </View>
                  </View>
                )
              }
            )
          }
        </View>
      </ScrollView>
    )
  }
}

export default Category;


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      // backgroundColor: 'red',
    },
    classyname: {
      fontSize: 16,
      marginTop: 14,
      marginBottom: 8,
      marginLeft: 10,
    },

    classyView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 0,
      marginTop: 5
      // padding: 5,

      // justifyContent: 'center',
    },

    item: {
      width: itemWidth, 
      backgroundColor: 'white', 
      marginLeft: 10, 
      height: 40, 
      alignItems: 'center', 
      justifyContent: 'center', 
      marginBottom: 5, 
      borderRadius: 4
    },

    icon: {
      position: 'absolute',
      top: -8,
      right: -6,
      width: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f86442',
      borderRadius: 8,


    }

  }
);