import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import {fontScale, screenWidth, screenHeight} from './Scaler';
import {white, purple, viewWidth} from './Consts';
import {ProfilePic} from './Header';
import Home from './Home';

export default function Profile({
  imgUri,
  name,
  username,
  savedTopics,
  savedArticles
}) {
  let [selected, setSelected] = useState('topics');

  return (
    <View style={styles.container}>
      <ProfilePic 
        imgUri={imgUri}
        name={name}
        username={username}
        imgStyles={styles.profImg}
        nameStyles={styles.name}
        usernameStyles={styles.username}
      />

      <TouchableHighlight style={styles.editProfButton}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableHighlight>

      <View style={{
        width:screenWidth(), 
        flexDirection:'row',
        marginTop:25, 
        height:screenHeight() * 0.06,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:purple
      }}>
        <TouchableWithoutFeedback 
          onPress={() => setSelected('topics')}
        >
          <View style={{...styles.selector, backgroundColor: selected === 'topics' ? purple : white}}>
            <Text style={{fontWeight:'bold', color: selected === 'topics' ? white : purple}}>Saved Topics</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback 
          onPress={() => setSelected('articles')}
        >
          <View style={{...styles.selector, backgroundColor: selected === 'articles' ? purple : white}}>
            <Text style={{fontWeight:'bold', color: selected === 'articles' ? white : purple}}>Saved Articles</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {selected === 'topics' && 
        <Home topics={savedTopics} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:1,
    backgroundColor:white,
    width:viewWidth,
    alignSelf:'center',
    paddingTop:20,
    alignItems:'center'
  },
  profImg: {
    height:60,
    width:60,
    borderRadius:30,
    alignSelf:'center'
  },
  name: {
    fontSize:fontScale(24),
    fontWeight:'bold',
    alignSelf:'center'
  },
  username: {
    fontSize:fontScale(12),
    alignSelf:'center'
  },
  editProfButton: {
    backgroundColor:purple,
    width:screenWidth() * 0.3,
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
  },
  selector: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
})