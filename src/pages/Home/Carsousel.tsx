import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import SnapCarousel, { AdditionalParallaxProps, ParallaxImage } from 'react-native-snap-carousel'
import { viewPortWidth, wp, hp } from '../../utils';


const data = ['http://file06.16sucai.com/2016/0507/3061924b603fe039dfd2508c2d49b897.jpg',
  'http://file06.16sucai.com/2016/0507/3061924b603fe039dfd2508c2d49b897.jpg',
  'http://file06.16sucai.com/2016/0507/3061924b603fe039dfd2508c2d49b897.jpg'];

const sliderWidth = viewPortWidth;
const itemWidth = wp(92);
const sliderHeight = hp(26);

export default class Carsousel extends Component {

  renderItem = ({ item }: { item: string }, parallaxProps?: AdditionalParallaxProps) => {
    return (
      <ParallaxImage
        source={{uri: item}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        {...parallaxProps}
      />
      // <Image source={{ uri: item }} style={styles.image} />
    )
  }


  render() {
    return (
      <View>
        <SnapCarousel data={data} renderItem={this.renderItem} sliderWidth={sliderWidth} itemWidth={itemWidth} hasParallaxImages/>
      </View>
    )
  }
}


const styles = StyleSheet.create(
  {
    image: {
      // width: itemWidth,
      // height: sliderHeight
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover'
    },
    imageContainer: {
      width: itemWidth,
      height: sliderHeight
    }
  },
  
)