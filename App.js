import React, {useState, useRef} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, TouchableWithoutFeedback, View, SafeAreaView, Animated} from 'react-native';
import {screenWidth} from './components/Scaler';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';

export default function App() {
  let [isDarkMode, setIsDarkMode] = useState(false);
  let [view, setView] = useState('home');
  let sideBarLeftPosAnim = useRef(new Animated.Value(-screenWidth() / 2)).current;

  let showSidebar = () => {
    Animated.timing(sideBarLeftPosAnim, {
      toValue:0,
      duration:500,
      useNativeDriver:false
    }).start()
  }

  let hideSidebar = () => {
    Animated.timing(sideBarLeftPosAnim, {
      toValue:-screenWidth() / 2,
      duration:500,
      useNativeDriver:false
    }).start()
  }

  let currentView = () => {
    hideSidebar();
    if (view === 'home') return <Home />
    if (view === 'about') return <About />
  }

  return (
    <TouchableWithoutFeedback onPress={hideSidebar}>
      <View style={styles.appContainer}>
        <Header showSidebar={showSidebar} />
        <Sidebar leftPos={sideBarLeftPosAnim} setView={setView} />
        <SafeAreaView style={styles.appContainer}>
          {currentView()}
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    display:'flex',
    flex:1,
    // paddingTop:Platform.OS === "android" ? 0 : 0
  },
});
