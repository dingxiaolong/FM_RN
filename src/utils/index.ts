import { Dimensions } from "react-native";


const {width: viewPortWidth,height: viewPortHeight} = Dimensions.get('window');

function wp(percentage:number) {
    const value = (percentage * viewPortWidth) / 100;
    return Math.round(value);
}

function hp(percentage:number) {
    const value = (percentage * viewPortHeight) / 100;
    return Math.round(value);
}

export {viewPortWidth,viewPortHeight, wp, hp};