import React, {useState, useRef} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, TouchableWithoutFeedback, View, SafeAreaView, Animated} from 'react-native';
import {screenWidth} from './components/Scaler';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Settings from './components/Settings'
import Donate from './components/Donate'
import Trending from './components/Trending'

export default function App() {
  let [isDarkMode, setIsDarkMode] = useState(false);
  let [view, setView] = useState('home');
  let sideBarLeftPosAnim = useRef(new Animated.Value(-screenWidth() / 2)).current;

  // these will be props fetched from server
  let profImgUri = 'https://avatars.githubusercontent.com/u/46336318?s=400&u=2c84b9fe9d824931ca6e794fcd57c08e3672c5ad&v=4';
  let name = 'Joey Hua';
  let username = 'jhua525';
  let topics = [
    {
      title:'Pfizer-BioNTech Vaccine Making Progress Towards Beating COVID-19',
      summary:'The Pfizer-BioNTech vaccine has been shown to be at least 90% effective in preventing COVID-19. Read all about it here.',
      imgUri:'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      articles:[
        {
          headline:'19% or 95%?',
          date:'1-26-20',
          writers:'L. Shumei & B. Yunyi',
          bias_score:0,
          url:'https://www.globaltimes.cn/page/202101/1212746.shtml'
        },
        {
          headline:'Safety & Efficacy',
          date:'1-26-20',
          writers:'N England Journal Med',
          bias_score:0,
          url:'https://www.nejm.org/doi/full/10.1056/NEJMoa2034577'
        },
        {
          headline:'Vaccine vs. New Variant',
          date:'1-26-20',
          writers:'Dr. C. Schuster-Bruce',
          bias_score:0,
          url:'https://www.businessinsider.com/coronavirus-variant-vaccine-pfizer-biontech-works-uk-study-2021-1'
        }
      ]
    }
  ]
  let savedTopics = topics;


  let purpleTopics = [
    {
      key: 1,
      headline: 'Jeff Bezos sells Amazon to ISIS to expand drone operations',
      image: require('./assets/images/jeffbezos.png'),
      date: '5-30-21',
      writers: ['John Smith', 'John Doe', 'Allan Pierce'],
      category:'Technology and Science'
    },
    {
      key: 2,
      headline: 'Joe Biden says communism is inevitable and it will help spaghetti stackers the most',
      image: require('./assets/images/joebiden.png'),
      date: '5-30-21',
      writers: ['John Smith', 'John Doe', 'Allan Pierce'],
      category: 'Politics'
    },
    {
      key: 3,
      headline: 'Sacramento Kings lose 25 games in a row. Coach Luke Walton says Playoffs are still achieveable.',
      image: require('./assets/images/jeffbezos.png'),
      date: '5-30-21',
      writers: ['John Smith', 'John Doe', 'Allan Pierce'],
      category: 'Religion'
    },
    {
      key: 4,
      headline: 'Acclaimed Jewel Thief Larry Lawton given Presidential Medal of Freedom',
      image: require('./assets/images/jeffbezos.png'),
      date: '5-30-21',
      writers: ['John Smith', 'John Doe', 'Allan Pierce'],
      category: 'National Trend'
    }
  ]

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
    if (view === 'home') return <Home topics={purpleTopics} />
    if (view === 'about') return <About />
    if (view === 'profile') return (
      <Profile 
        imgUri={profImgUri} 
        name={name} 
        username={username} 
        savedTopics={savedTopics} 
      />
    )
    if (view==='settings') return <Settings/>
    if (view==='donate') return <Donate/>
    if (view==='trending') return <Trending/>
  }

  return (
    <TouchableWithoutFeedback onPress={hideSidebar}>
      <View style={styles.appContainer}>
        <Header 
          showSidebar={showSidebar} 
          profImgUri={profImgUri}
          profImgStyles={{
            position:'absolute',
            left:-150,
            top:-23,
            width:45,
            height:45,
            borderRadius:45/2
          }}
        />
        <Sidebar 
          leftPos={sideBarLeftPosAnim} 
          setView={setView} 
          name={name}
          username={username}
          profImgUri={profImgUri}
          profImgStyles={{
            width:60,
            height:60,
            borderRadius:30,
            alignSelf:'center'
          }}
        />
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
