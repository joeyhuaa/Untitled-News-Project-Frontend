import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import {screenWidth, fontScale, verticalScale, screenHeight} from './Scaler';
import {white, purple, viewWidth, viewPadding} from './Consts';

export default function About() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.emphaticHeading}>The News App You've Always Dreamt Of.</Text>
        <View style={{paddingTop:20, borderTopWidth:1, borderColor:'darkgray'}}>
          <Text style={styles.emphaticParagraph}>
            What exactly is Untitled News App?
          </Text>
          <Text style={styles.bigEmphaticParagraph}>
            A news feed free of corporate interests, clickbait headlines, and recommendation algorithms designed to keep you in an echo chamber.
          </Text>
          <Text style={styles.emphaticParagraph}>
            Don't let yourself be treated like a puppet when it comes to being informed, thinking critically, and developing a cognizant worldview. 
          </Text>
          <Text style={styles.emphaticParagraph}>
            Now is not the time for at-your-throat political toxicity on Twitter.
          </Text>
          <Text style={styles.emphaticParagraph}>
            Now is not the time to let your opinions be blown left and right like chaff in the wind.
          </Text>
          <Text style={styles.emphaticParagraph}>
            Now IS the time to take control of the information you receive.
          </Text>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableHighlight>
        </View>
      </View> 
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:1,
    backgroundColor:white,
    width:viewWidth,
    alignSelf:'center',
    paddingTop:20
  },
  title: {
    fontSize:fontScale(16),
    fontWeight:'bold'
  },
  emphaticHeading: {
    fontSize:fontScale(32),
    fontWeight:'bold',
    color:purple,
    lineHeight:30,
    marginTop:10,
    marginBottom:20
  },
  emphaticParagraph: {
    fontSize:fontScale(16),
    fontWeight:'bold',
    marginBottom:15
  },
  bigEmphaticParagraph: {
    fontSize:fontScale(24),
    fontWeight:'bold',
    marginBottom:15
  },
  button: {
    backgroundColor:purple,
    width:screenWidth() * 0.25,
    height:screenHeight() * 0.05,
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:20
  },
  buttonText: {
    color:white,
    fontWeight:'bold',
  }
})