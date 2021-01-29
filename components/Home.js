import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Panel from './Panel';
import {whitetan, white} from './Consts';

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Panel 
          imgUri={'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
          title={'Pfizer-BioNTech Vaccine Making Progress Towards Beating COVID-19'}
          summary={'The Pfizer-BioNTech vaccine has been shown to be at least 90% effective in preventing COVID-19. Read all about it here.'}
          articles={[
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
          ]}
        />
        <Panel 
          imgUri={'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
          title={'Pfizer-BioNTech Vaccine Making Progress Towards Beating COVID-19'}
          summary={'The Pfizer-BioNTech vaccine has been shown to be at least 90% effective in preventing COVID-19. Read all about it here.'}
          articles={[
            {
              headline:'19% or 95%?',
              writers:'L. Shumei & B. Yunyi',
              bias_score:0,
              url:'https://www.globaltimes.cn/page/202101/1212746.shtml'
            },
            {
              headline:'Safety & Efficacy',
              writers:'N England Journal Med',
              bias_score:0,
              url:'https://www.nejm.org/doi/full/10.1056/NEJMoa2034577'
            },
            {
              headline:'Vaccine vs. New Variant',
              writers:'Dr. C. Schuster-Bruce',
              bias_score:0,
              url:'https://www.businessinsider.com/coronavirus-variant-vaccine-pfizer-biontech-works-uk-study-2021-1'
            }
          ]}
        />
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