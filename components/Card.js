import React, { Component } from "react";
import { View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.container = null;
  }

  render() {
    return (
      <View ref={(container) => (this.container = container)}>
        <TouchableWithoutFeedback
          onPress={() =>
            this.container.measure((fx, fy, width, height, px, py) => {
              this.props.selectCard(px, py, this.props.id);
            })
          }
        >
          <View style={styles.card}>
            <Text style={{color:"white", textAlign:'center'}}>{this.props.topics.headline}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignContent:'center',
    justifyContent: 'center',
    height: 500,
    width: 350,
    borderRadius: 10,
    backgroundColor: "#2E1A47",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  }
});
