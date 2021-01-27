import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Home from './components/Home';


export default function App() {
  let [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    display:'flex',
    flex:1,
    // paddingTop:Platform.OS === "android" ? 0 : 0
  },
});
