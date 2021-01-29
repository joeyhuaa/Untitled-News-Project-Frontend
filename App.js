import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

export default function App() {
  let [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.appContainer}>
      <Header />
      <SafeAreaView style={styles.appContainer}>
        {/* <Home /> */}
        <About />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    display:'flex',
    flex:1,
    // paddingTop:Platform.OS === "android" ? 0 : 0
  },
});
