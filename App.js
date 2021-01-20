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
          title={'US Purchases More Vaccine Doses'}
          summary={'The US Government has purchased 100 million more doses of the COVID-19 vaccine from Pfizer.'}
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
