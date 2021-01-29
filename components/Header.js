import React from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback, Animated} from 'react-native';
import {screenWidth, screenHeight, fontScale} from './Scaler';
import {white, purple} from './Consts';
import {Icon} from 'react-native-elements';

function ProfilePic({imgUri}) {
  return (
    <View>
      <Image 
        style={styles.profpic}
        source={{uri: imgUri}}
      />
    </View>
  )
}

export default function Header() {
  return (
    <View style={styles.header}> 
      <ProfilePic 
        imgUri={'https://avatars.githubusercontent.com/u/46336318?s=400&u=2c84b9fe9d824931ca6e794fcd57c08e3672c5ad&v=4'}
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
  profpic: {
    position:'absolute',
    left:-150,
    top:-23,
    width:45,
    height:45,
    borderRadius:45/2,
  },
  icon: {
    
  }
})