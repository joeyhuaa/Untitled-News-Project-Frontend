import React, { Component } from "react";
import { Animated, Dimensions, TouchableWithoutFeedback, View, StyleSheet} from "react-native";
import {Text} from 'react-native-elements';

const ELEMENT_HEIGHT = 250;



export default class ExpandedCard extends Component {
  constructor(props){
    super(props);
  }
  state = { animatedValue: new Animated.Value(0) };
  render() {
    const { height: windowHeight } = Dimensions.get("window");
    const topTranslate = this.getTranslate([this.props.yOffset, 0]);
    const leftTranslate = this.getTranslate([this.props.xOffset, 0]);
    const rightTranslate = this.getTranslate([this.props.xOffset, 0]);
    const bottomTranslate = this.getTranslate([
      windowHeight - this.props.yOffset - ELEMENT_HEIGHT,
      0
    ]);
    return ( 
      <Animated.View
        style={[
          {
            position: "absolute",
            top: topTranslate,
            left: leftTranslate,
            right: rightTranslate,
            bottom: bottomTranslate,
            backgroundColor: "#2E1A47"
          }
        ]}
      >
        <TouchableWithoutFeedback onPress={this.unselectCard}>
          <Animated.Text
            style={{
              color: "white",
              position: "absolute",
              top: 20,
              right: 20,
              zIndex: 200,
              opacity: this.getTranslate([0, 1])
            }}
          >
            Done
          </Animated.Text>
        </TouchableWithoutFeedback>

        <View>
          <Text h3 style={styles.headline}>{this.props.topics[this.props.card].headline}</Text>
        </View>
      </Animated.View>
    );
  }
  componentDidMount() {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 500,
    }).start();
  }
  unselectCard = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 0,
      duration: 500,
    }).start(() => this.props.unselectCard());
  };
  getTranslate = (outputRange) => {
    return this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange
    });
  };
}


const styles = StyleSheet.create({
  headline: {
    color:'white',
    marginTop: '15%',
    marginLeft: '5%'
  }
})