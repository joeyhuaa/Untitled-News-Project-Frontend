import React from 'react';
import {StyleSheet, View, Image, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import {screenWidth, screenHeight, fontScale} from './Scaler';
import {white, purple} from './Consts';
import {Icon} from 'react-native-elements';

export function ProfilePic({
  imgUri,
  name,
  username,
  imgStyles,
  nameStyles,
  usernameStyles,
  showSidebar,
}) {
  return (
    <TouchableWithoutFeedback onPress={showSidebar}>
      <View>
        <Image 
          style={imgStyles}
          source={{uri: imgUri}}
        />
        {name && <Text style={nameStyles}>{name}</Text>}
        {username && <Text style={usernameStyles}>{username}</Text>}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default function Header({
  showSidebar,
  profImgUri,
  profImgStyles
}) {
  return (
    <View style={styles.header}> 
      <ProfilePic 
        imgUri={profImgUri}
        imgStyles={profImgStyles}
        showSidebar={showSidebar}
      />
      <View style={styles.icon} >
        <Icon 
          name='reader-outline' 
          type='ionicon' 
          size={50} 
          color={purple}
        />
      </View>
    </View>
  )
}

let styles = StyleSheet.create({
  header: {
    zIndex:10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
    minHeight:screenHeight() * 0.125,
    width:screenWidth(),
    backgroundColor:white,
    shadowColor:'#989898',
    shadowOpacity:0.8,
    shadowRadius:4,
    shadowOffset: {
      height:1,
      width:1
    },
  },
})