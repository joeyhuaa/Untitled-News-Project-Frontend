import React, {useRef} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedbackBase, Animated, TouchableWithoutFeedback} from 'react-native';
import {screenWidth, fontScale, verticalScale, screenHeight} from './Scaler';
import {white, purple, viewWidth, viewPadding} from './Consts';

export default function Sidebar({
  leftPos,
  setView
}) {
  let options = {
    home: 'Home Feed',
    trending: 'Trending',
    profile: 'Profile',
    settings: 'Settings',
    about: 'About Us',
    donate: 'Donate',
    rate: 'Rate App'
  }
  return (
    <Animated.View style={{...styles.sidebar, left:leftPos}}>
      {Object.entries(options).map(o => 
        <Text 
          key={o[0]} 
          style={styles.text}
          onPress={() => setView(o[0])}
        >{o[1]}</Text>
      )}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor:white,
    width:screenWidth() * 0.5,
    height:screenHeight(),
    paddingTop:50,
    position:'absolute',
    zIndex:10
  },
  text: {
    fontSize:fontScale(20),
    fontWeight:'bold',
    lineHeight:50,
    marginLeft:25
  }
})