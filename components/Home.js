import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Panel from './Panel';
import {white} from './Consts';

export default function Home({
  topics
}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {topics.map(topic => 
          <Panel 
            imgUri={topic.imgUri}
            title={topic.title}
            summary={topic.summary}
            articles={topic.articles}
            key={topic.title}
          />
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:1,
    backgroundColor:white,
    alignItems:'center',
  },
})