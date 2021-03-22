import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

import Card from "./Card";
import ExpandedCard from "./ExpandedCard";

export default class Home extends React.Component {
  state = { yOffset: null, xOffset: null, selectedCard: null };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        >
          {this.props.topics.map((topic, key) => (
            <Card
              topics={this.props.topics[key]}
              key={key}
              id={`${key}`}
              selectCard={(px, py, id) =>
                this.setState({ yOffset: py, xOffset: px, selectedCard: id })
              }
            />
          ))}
        </ScrollView>

        {this.state.selectedCard && (
            <ExpandedCard
              yOffset={this.state.yOffset}
              xOffset={this.state.xOffset}
              card={this.state.selectedCard}
              topics={this.props.topics}
              unselectCard={() => this.setState({ selectedCard: null })}
            />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: "#2E1A47"
  },
  title: {
    height: 60,
    backgroundColor: "#edf5e1",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#05386b"
  },
  list: {
    alignItems: "center",
    paddingTop: 20
  }
});
