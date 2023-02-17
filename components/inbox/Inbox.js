import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Inbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <Text style={styles.heading}>Inbox</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innercontainer: {
    // backgroundColor: "#DA555850",
    width: "85%",
    height: "95%",
  },
  heading: {
    fontWeight: "600",
    fontSize: 30,
  },
});

export default Inbox;
