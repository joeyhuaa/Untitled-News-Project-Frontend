import React from 'react';
import {StyleSheet, View, Text, Animated, TouchableWithoutFeedback} from 'react-native';
import {screenWidth, fontScale, screenHeight} from './Scaler';
import {white} from './Consts';
import {ProfilePic} from './Header';

export default function Sidebar({
  leftPos,
  setView,
  name,
  username,
  profImgUri,
  profImgStyles
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
      <View style={styles.profView}>
        <ProfilePic 
          imgUri={profImgUri} 
          name={name}
          username={username}
          imgStyles={profImgStyles} 
          nameStyles={styles.name}
          usernameStyles={styles.username}
        />
      </View> 
      <View style={styles.optionView}>
        {Object.entries(options).map(o => 
          <Text 
            key={o[0]} 
            style={styles.option}
            onPress={() => setView(o[0])}
          >{o[1]}</Text>
        )}
      </View>
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
  profView: {
    borderBottomWidth:1, 
    borderColor:'darkgray',
    paddingBottom:25,
    marginLeft:10,
    marginRight:10
  },
  optionView: {
    paddingTop:25
  },  
  option: {
    fontSize:fontScale(20),
    fontWeight:'bold',
    marginBottom:25,
    marginLeft:25
  },
  name: {
    fontSize:fontScale(24),
    fontWeight:'bold',
    alignSelf:'center'
  },
  username: {
    fontSize:fontScale(12),
    alignSelf:'center'
  }
})