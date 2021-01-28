import React from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback, Animated} from 'react-native';
import newspaper from '../assets/newspaper.jpg';
import {screenWidth, screenHeight, fontScale, verticalScale} from './Scaler';
import {white, purple} from './Colors';
// import EvilIcons from 'expo/vector-icons/EvilIcons';

function ProfilePic({img}) {
  return (
    <View>
      <Image 
      />
    </View>
  )
}

export default function Header() {
  return (
    <View style={styles.header}>
      <Image  
        source={newspaper}
        style={styles.icon}
      />
    </View>
  )
}

let styles = StyleSheet.create({
  header: {
    // position:'absolute',
    // zIndex:10,
    display:'flex',
    justifyContent:'center',
    minHeight:screenHeight() * 0.1,
    width:screenWidth(),
    backgroundColor:white,
    shadowColor:'#989898',
    shadowOpacity:0.8,
    shadowRadius:4,
    shadowOffset: {
      height:1,
      width:1
    }
  },
  icon: {
    width:50, 
    height:50, 
    resizeMode:'stretch',
    alignSelf:'center',
  }
})