import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import IconFont from '../../assets/iconfont';
import { IChannel } from '../../model/home'
import Touchable from '../../compoment/TouchAble'
interface IProps {
    data: IChannel
    onpress: (data: IChannel) => void
}

export default class ChannelItem extends Component<IProps> {
    onpress = () => {
        const { data, onpress } = this.props;
        if (typeof(onpress) == 'function') {
            onpress(data);
        }
    }
    render() {
        const { data, onpress } = this.props;
        return (
            <Touchable onPress={this.onpress}>
                <View style={{
                    flexDirection: 'row', margin: 10, padding: 10, borderRadius: 8, backgroundColor: 'white',
                    shadowColor: '#ccc', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.5, shadowRadius: 10,
                    elevation: 10
                }}>

                    <Image source={{ uri: data.image }} style={{ width: 100, height: 100, borderRadius: 8, marginRight: 10, }}></Image>
                    <View style={{ justifyContent: 'space-between' }}>
                        <Text numberOfLines={1}> {data.title} </Text>
                        <Text numberOfLines={2} style={{ backgroundColor: '#f8f8f8', padding: 10, marginBottom: 10, borderRadius: 6 }}> {data.remark} </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                                <IconFont name='iconfaxian' size={12} />
                                <Text style={{ marginLeft: 3 }}>{data.playing}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <IconFont name='iconfaxian' size={12} />
                                <Text style={{ marginLeft: 3 }}>{data.palyed}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Touchable>
        )
    }
}