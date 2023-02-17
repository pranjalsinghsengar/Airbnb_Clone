import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import { Link } from "./assets/Details";
import Travell from "./Travell";
import Inbox from "./inbox/Inbox";
function Places() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Travell />
      <Travell />
      <Travell />
      <Travell />
      <Travell />
      <Travell />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  horizontalImages: {
    width: 350,
    height: 300,
    borderRadius: 20,
    marginTop: 30,
    overflow: "hidden",
  },
  ImageView: {
    width: 350,
    height: 320,
  },
  bold: {
    fontWeight: "500",
    paddingTop: 10,
  },
});

export default Places;
