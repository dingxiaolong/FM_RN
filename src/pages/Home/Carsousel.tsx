import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import SnapCarousel, { AdditionalParallaxProps, Pagination, ParallaxImage } from 'react-native-snap-carousel'
import { viewPortWidth, wp, hp } from '../../utils';


const data = ['https://file06.16sucai.com/2016/0507/3061924b603fe039dfd2508c2d49b897.jpg',
  'http://file06.16sucai.com/2016/0507/3061924b603fe039dfd2508c2d49b897.jpg',
  'http://file06.16sucai.com/2016/0507/3061924b603fe039dfd2508c2d49b897.jpg'];

const sliderWidth = viewPortWidth;
const itemWidth = wp(92);
const sliderHeight = hp(26);

export default class Carsousel extends Component {


  state = {activeSlider: 0}

  renderItem = ({ item }: { item: string }, parallaxProps?: AdditionalParallaxProps) => {
    return (
      <ParallaxImage
        source={{uri: item}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8}
        showSpinner
        spinnerColor='rgba(0,0,0,0.25)'
        {...parallaxProps}
      />
      // <Image source={{ uri: item }} style={styles.image} />
    )
  }


  pagination = () => {
    return (
      <View style={styles.paginationWrap}>
        <Pagination
        containerStyle={styles.paginationContainer}
        dotContainerStyle={styles.dotContainer}
        dotStyle={styles.dot}
        dotsLength={data.length} 
        inactiveDotScale={0.7}
        inactiveDotOpacity={0.4}
        activeDotIndex = {this.state.activeSlider}/>
      </View>
    )
  }

  onSnapToItem = (index: number) => {
    this.setState(
      {activeSlider: index}
    )
  }


  render() {
    return (
      <View>
        <SnapCarousel 
        data={data} 
        renderItem={this.renderItem} 
        sliderWidth={sliderWidth} 
        itemWidth={itemWidth} 
        hasParallaxImages 
        loop 
        // autoplay 
        // autoplayDelay={2}
        onSnapToItem={this.onSnapToItem}
        />
        {this.pagination()}
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
      resizeMode: 'cover',
      borderRadius: 5
    },
    imageContainer: {
      width: itemWidth,
      height: sliderHeight,
      borderRadius: 5
    },
    paginationWrap: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      
    },

    paginationContainer: {
      backgroundColor: 'rgba(0,0,0,0.35)',
      position: "absolute",
      top: -22,
      // height: 30
      // left: viewPortWidth/2
      paddingHorizontal: 4,
      paddingVertical: 4,
      borderRadius: 8,

    },
    dotContainer: {
      marginHorizontal: 6
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: 'rgba(255,255,255,0.92)',
    }
  },
  
)