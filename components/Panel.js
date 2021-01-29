import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback, Linking, Animated} from 'react-native';
import {Icon} from 'react-native-elements';
import {fontScale, verticalScale} from './Scaler';
import {whitetan, white, purple, viewPadding, viewWidth} from './Consts';

/**
 * displays title and summary for the panel
 * touching it toggles ArticleList 
 */
function MainTouchable({
  title,
  summary,
  isExpanded,
  setExpanded
}) {
  let animRef = useRef(new Animated.Value(1)).current;

  let animate = () => {
    Animated.timing(animRef, {
      toValue:0, 
      duration:100,
      useNativeDriver:false
    }).start(() => {
      Animated.timing(animRef, {
        toValue:1, 
        duration:100,
        useNativeDriver:false
      }).start();
    });
  }

  let interpolation = animRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(224,224,224)', 'rgb(255,255,255)']
  }) 

  return (
    <Animated.View
      style={{...styles.mainTouchable, backgroundColor:interpolation}}
    >
      <TouchableWithoutFeedback 
        onPress={() => {
          setExpanded(); animate();
        }}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.summary}>{summary}</Text>
          {isExpanded ? 
            <Icon 
              type='evilicon'
              name='chevron-up'
              size={40}
            /> : 
            <Icon 
              type='evilicon'
              name='chevron-down'
              size={40}
            />
          }
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  )
}

/**
 * displays the list of articles
 */
function ArticleList({
  articles
}) {
  let animRefs = articles.map(() => useRef(new Animated.Value(1)).current);

  let animate = ref => {
    Animated.timing(ref, {
      toValue:0, 
      duration:100,
      useNativeDriver:false
    }).start(() => {
      Animated.timing(ref, {
        toValue:1, 
        duration:100,
        useNativeDriver:false
      }).start();
    });
  }

  let interpolation = ref => ref.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(224,224,224)', 'rgb(255,255,255)']
  }) 

  return (
    <View style={styles.articleList}>
      {articles.map((a,i) => 
        <Animated.View 
          style={{backgroundColor:interpolation(animRefs[i])}}
          key={`article-${i}`}
        >
          <TouchableWithoutFeedback 
            onPress={() => {
              Linking.openURL(a.url)
              animate(animRefs[i]);
            }}
          >
            <View style={styles.articleListRow}>
              <Text 
                style={{...styles.articleItemLeft, fontWeight:'bold'}}
              >{a.headline}</Text>
              <Text style={styles.articleItemRight}>{a.date}</Text>
              <Text style={styles.articleItemLeft}>{a.writers}</Text>
              <Text style={styles.articleItemRight}>{a.bias_score}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      )}
    </View>
  )
}

/**
 * the main panel component
 */
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
        isExpanded={expanded}
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
        isExpanded={expanded}
        setExpanded={() => setExpanded(!expanded)}
      />
      <ArticleList 
        articles={articles}
      />
    </View>
  )

  let renderView = () => expanded ? expandedView() : collapsedView()

  return (
    renderView()
  )
}

/**
 * styles
 */
const styles = StyleSheet.create({
  containerCollapsed: {
    marginTop:40,
    display:'flex',
    backgroundColor:white,
    alignSelf:'center',
    alignItems:'center',
    height:verticalScale(400),
    width:viewWidth,
    borderBottomWidth:1,
    borderColor:'darkgray'
  },
  containerExpanded: {
    marginTop:40,
    display:'flex',
    backgroundColor:white,
    alignSelf:'center',
    alignItems:'center',
    paddingBottom:30,
    width:viewWidth,
    borderBottomWidth:1,
    borderColor:'darkgray'
  },
  image: {
    height:200,
    width:viewWidth,
    alignSelf:'center',
  },
  mainTouchable: {
    display:'flex', 
    width:viewWidth,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:viewPadding,
    paddingRight:viewPadding
  },
  title: {
    fontWeight:'bold',
    fontSize:fontScale(20),
  },
  summary: {
    fontSize:fontScale(15),
    marginTop:5,
    lineHeight:25
  },
  articleList: {
    display:'flex',
    backgroundColor:white,
    width:viewWidth,
    // borderWidth:1
  },
  articleListRow: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignContent:'center',
    padding:5,
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
})