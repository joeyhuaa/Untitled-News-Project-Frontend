import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';

export default function Panel({
  imgUri,
  title,
  summary
}) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{
          uri: imgUri
        }}
      />
      <View style={{display:'flex', paddingLeft:30, paddingRight:30}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.summary}>{summary}</Text>
        <View style={styles.readButton}>
          <Button 
            title={'Read'} 
            color={'#8000ff'}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor:'#D0D0D0',
    alignSelf:'stretch',
    alignItems:'center',
    height:400,
  },
  image: {
    height:200,
    alignSelf:'stretch'
  },
  title: {
    fontWeight:'bold',
    fontSize:20,
    marginTop:10
  },
  summary: {
    fontSize:15,
    marginTop:5,
    lineHeight:25
  },
  readButton: {
    width:100,
    height:40,
    backgroundColor:'#8000ff',
    display:'flex',
    justifyContent:'center',
    borderRadius:5,
    marginTop:20
  }
})