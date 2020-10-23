import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import { RootStates } from '../../model/index'
import { ICategory } from '../../model/category'
interface Istates {
  myCategorys: ICategory[]
}
class Category extends Component {
  state = {
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
  renderItem = (item: ICategory, index: number) => {
    return (
      <View key={item.id}>
        <Text>
          {item.name}
        </Text>
      </View>
    )
  }
  render() {
    const { categorys } = this.state;
    const { myCategorys } = this.state;
    console.log(myCategorys);
    return (
      <View style={styles.container}>
        <Text style={styles.classyname}>
          我的分类
        </Text>
        <View style = {styles.classyView}>
          {myCategorys.map(this.renderItem)}
        </View>
        <View>
          <Text>
            所有分类
        </Text>
          <View style = {styles.classyView}>
            {categorys.map(this.renderItem)}
          </View>
        </View>
      </View>
    )
  }
}

export default Category;


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
    classyname: {
      fontSize: 16,
      marginTop: 14,
      marginBottom: 8
    },

    classyView: {
      flexDirection: 'row',
      flexWrap: 'wrap',

    }

  }
);