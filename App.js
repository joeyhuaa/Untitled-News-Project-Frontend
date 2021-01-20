import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Panel from './components/Panel';

export default function App() {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={styles.container}>
        <Panel 
          imgUri={'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
          title={'Pfizer-BioNTech Vaccine Making Progress Towards Beating COVID-19'}
          summary={'The Pfizer-BioNTech vaccine has been shown to be at least 90% effectives in preventing COVID-19. Read all about it here.'}
          articles={[
            {
              headline: '19% or 95%?',
              writers: 'L. Shumei & B. Yunyi',
              bias_score: 0,
              url: 'https://www.globaltimes.cn/page/202101/1212746.shtml'
            },
            {
              headline: 'Safety & Efficacy',
              writers: 'N England Journal Med',
              bias_score: 0,
              url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2034577'
            }
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    display:'flex',
    flex:1,
    // paddingTop:Platform.OS === "android" ? 0 : 0
  },
  container: {
    display:'flex',
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    // justifyContent:'center',
  },
});
