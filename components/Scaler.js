// import { Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');

// //Guideline sizes are based on standard ~5" screen mobile device
// const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 680;

// const scale = size => width / guidelineBaseWidth * size;
// const verticalScale = size => height / guidelineBaseHeight * size;
// const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

// export {scale, verticalScale, moderateScale};

import {Dimensions, Platform, PixelRatio} from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iPhone X dims
const widthScale = SCREEN_WIDTH / 375;
const heightScale = SCREEN_HEIGHT / 812;

let screenWidth = () => SCREEN_WIDTH;
let screenHeight = () => SCREEN_HEIGHT;

let fontScale = size => {
  const newSize = size * widthScale; 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 5
  }
}

let verticalScale = size => {
  const newSize = size * heightScale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) + 150
  }
}

export {screenWidth, screenHeight, fontScale, verticalScale};

