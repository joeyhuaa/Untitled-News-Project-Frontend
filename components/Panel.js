import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';

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
      <View style={{display:'flex', paddingLeft:30, paddingRight:30}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.summary}>{summary}</Text>
        <View style={styles.readButton}>
          <Button 
            title={'Read'} 
            color={'#8000ff'}
            onPress={() => setExpanded(!expanded)}
          />
        </View>
      </View>
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
      <View style={{display:'flex', paddingLeft:30, paddingRight:30}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.summary}>{summary}</Text>

        <View style={styles.articleList}>
          {articles.map((a,i) => 
            <View style={styles.articleListRow} key={`article-${i}`}>
              <Text 
                style={{fontWeight:'bold'}}
                onPress={() => Linking.openURL(a.url)}
              >{a.headline}</Text>
              <Text>{a.writers}</Text>
              <Text>{a.bias_score}</Text>
            </View>
          )}
        </View>

        <View style={styles.readButton}>
          <Button 
            title={'Collapse'} 
            color={'#8000ff'}
            onPress={() => setExpanded(!expanded)}
          />
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
    display:'flex',
    backgroundColor:'#D0D0D0',
    alignSelf:'stretch',
    alignItems:'center',
    height:430
  },
  containerExpanded: {
    display:'flex',
    backgroundColor:'#D0D0D0',
    alignSelf:'stretch',
    alignItems:'center',
    height:800
  },
  articleList: {
    marginTop:10,
    backgroundColor:'whitesmoke',
    padding:10
  },
  articleListRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:40,
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