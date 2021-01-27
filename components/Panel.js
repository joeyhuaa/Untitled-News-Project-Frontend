import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback, Linking, Animate, Animated} from 'react-native';
import {screenWidth, screenHeight, fontScale, verticalScale} from './Scaler';
import {whitetan, white, purple} from './Colors';

/**
 * dimensions
 */
const viewWidth = screenWidth() * 0.9;

/**
 * displays title and summary for the panel
 * touching it toggles articleList 
 */
function MainTouchable({
  title,
  summary,
  setExpanded
}) {
  let highlightAnim = useRef(new Animated.Value(1)).current;

  let animate = () => {
    Animated.timing(highlightAnim, {
      toValue:0, 
      duration:100,
      useNativeDriver:false
    }).start(() => {
      Animated.timing(highlightAnim, {
        toValue:1, 
        duration:100,
        useNativeDriver:false
      }).start();
    });
  }

  let interpolation = highlightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(208, 208, 208)', 'rgb(224, 224, 224)']
  }) 

  return (
    <Animated.View
      style={{backgroundColor:interpolation}}
    >
      <TouchableWithoutFeedback 
        style={styles.infoView}
        onPress={() => {
          setExpanded(); animate();
        }}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.summary}>{summary}</Text>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  )
}

export default function Panel({
  imgUri,
  title,
  summary,
  articles
}) {
  let [expanded, setExpanded] = useState(false);

  let collapsedView = () => (
    <View style={styles.containerCollapsed}>
      <Image 
        style={styles.image}
        source={{
          uri: imgUri
        }}
      />
      <MainTouchable 
        title={title}
        summary={summary}
        setExpanded={() => setExpanded(!expanded)}
      />
    </View>
  )

  let expandedView = () => (
    <View style={styles.containerExpanded}>
      <Image 
        style={styles.image}
        source={{
          uri: imgUri
        }}
      />
      <MainTouchable 
        title={title}
        summary={summary}
        setExpanded={() => setExpanded(!expanded)}
      />
      <View>
        <View style={styles.articleList}>
          {articles.map((a,i) => 
            <View style={styles.articleListRow} key={`article-${i}`}>
              <Text 
                style={{...styles.articleItemLeft, fontWeight:'bold'}}
                onPress={() => Linking.openURL(a.url)}
              >{a.headline}</Text>
              <Text style={styles.articleItemRight}>{a.date}</Text>
              <Text style={styles.articleItemLeft}>{a.writers}</Text>
              <Text style={styles.articleItemRight}>{a.bias_score}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )

  let renderView = () => expanded ? expandedView() : collapsedView()

  return (
    renderView()
  )
}

const styles = StyleSheet.create({
  containerCollapsed: {
    marginTop:20,
    display:'flex',
    backgroundColor:whitetan,
    alignSelf:'center',
    alignItems:'center',
    height:verticalScale(430),
    width:viewWidth
  },
  containerExpanded: {
    marginTop:20,
    display:'flex',
    backgroundColor:whitetan,
    alignSelf:'center',
    alignItems:'center',
    paddingBottom:30,
    width:viewWidth
  },
  image: {
    height:200,
    alignSelf:'stretch'
  },
  infoView: {
    display:'flex', 
    width:viewWidth
  },
  title: {
    fontWeight:'bold',
    fontSize:fontScale(20),
    marginTop:10
  },
  summary: {
    fontSize:fontScale(15),
    marginTop:5,
    lineHeight:25
  },
  articleList: {
    display:'flex',
    marginTop:10,
    backgroundColor:white,
    padding:10
  },
  articleListRow: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    height:60,
  },  
  articleItemLeft: {
    fontSize:fontScale(15),
    flexBasis:'80%'
  },
  articleItemRight: {
    fontSize:fontScale(15),
    flexBasis:'20%',
    textAlign:'right'
  },
  readButton: {
    width:100,
    height:45,
    backgroundColor:purple,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    marginTop:20,
  },
  readButtonText: {
    color:'white',
  }
})