import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import HomePage from "../home/HomePage";

function Airbnb({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.bnb_heading}>Trips</Text>
        {/* <Span></Span> */}
        <View style={styles.bnb_midContent}>
          <Text style={styles.bnb_subHeading}>No tirps books...yet!</Text>
          <Text style={styles.bnb_text}>
            Time to dust off your bags and start planning your next adventure
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Explore")}
            style={styles.bnb_btn}
          >
            <Text style={styles.bnb_btn_text}>Start searching</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.bnb_bottom_text}>
          Can't find your reservation here?{" "}
          <Text style={styles.bnb_inner_bottom_text}>
            Visit the Help Center{" "}
          </Text>
        </Text>
      </View>
    </View>
  );
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
  bnb_heading: {
    fontSize: 30,
    fontWeight: "700",
  },
  bnb_midContent: {
    marginVertical: 50,
  },
  bnb_subHeading: {
    fontSize: 25,
    fontWeight: "500",
  },
  bnb_text: {
    marginVertical: 5,
    fontSize: 17,
  },
  bnb_btn: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  bnb_btn_text: {
    fontSize: 18,
  },
  bnb_bottom_text: {},
  bnb_inner_bottom_text: {
    fontWeight: "700",
  },
});

export default Airbnb;
