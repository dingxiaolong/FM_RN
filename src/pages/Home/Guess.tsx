import React, { Component, version } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { connect, ConnectedProps } from 'react-redux'
import IconFont from '../../assets/iconfont';
import TouchAble from '../../compoment/TouchAble';
import { RootStates } from '../../model';
import { IGuess } from '../../model/home';

const mapStateToProps = ({ home }: RootStates) => {
    return ({
        guess: home.guesses,
    })
}
const connector = connect(mapStateToProps);


// const ModelState = ConnectedProps<typeof connector>;
type ModelState = ConnectedProps<typeof connector>;
class Guess extends Component<ModelState> {

    componentDidMount() {
        this.fetch();
    }

    fetch = () => {
        const { dispatch } = this.props;
        dispatch(
            {
                type: 'home/fetchGuess'
            }
        )
    }

    onpress = () => {
        Alert.alert('我被点击了');
    }

    renderItem = ({ item }: { item: IGuess }) => {
        return (
            <TouchAble style={styles.item} onPress={this.onpress}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text numberOfLines={2}>{item.title}</Text>
            </TouchAble>
        )
    }

    render() {
        const { guess } = this.props;
        console.log(guess);
        return (
            <View style={styles.container}>
                {/* <Text> 猜你喜欢 </Text> */}
                {/* <Text>{JSON.stringify(guess)}</Text> */}

                <View style={styles.head}>
                    <View style={styles.headLeft}>
                        <IconFont name="iconfaxian" size={16} />
                        <Text style={styles.headLeftTitle}>猜你喜欢</Text>
                    </View>
                    <View style={styles.headRight}>
                        <Text style={styles.headRightTitle}>更多</Text>
                        <IconFont name='iconjiantou' size={18} />
                    </View>
                </View>
                <FlatList
                    style={styles.list}
                    data={guess}
                    renderItem={this.renderItem}
                    numColumns={3}
                />

                <TouchAble style={styles.changeGuess} onPress={this.fetch}>
                    <IconFont name="iconfaxian" size={16} />
                    <Text style={styles.headLeftTitle}>换一批</Text>
                </TouchAble>

            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#fff',
            borderRadius: 8,
            margin: 16
        },
        item: {
            flex: 1,
            marginHorizontal: 5,
            marginVertical: 10
        },
        image: {
            width: '100%',
            height: 100,
            borderRadius: 8,
            marginBottom: 10,
        },
        head: {
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15,
            borderBottomWidth: StyleSheet.hairlineWidth, //0.1,
            borderBottomColor: '#efefef',
        },
        headLeft: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        headLeftTitle: {
            marginLeft: 5,
            color: '#333'
        },
        headRight: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        headRightTitle: {
            // marginRight: 5
            color: '#6f6f6f'
        },
        changeGuess: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
        },
        list: {
            padding: 10,
        }
    }
)

export default connector(Guess);