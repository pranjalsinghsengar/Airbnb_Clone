import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import { Link } from "./assets/Details";

function Travell() {
  return (
    // <ScrollView style={{ flex: 1 }}>
    <View style={styles.detailCard}>
      <View style={styles.horizontalImages}>
        <ScrollView horizontal>
          {Link.map((item) => (
            <View style={styles.Card} key={item.key}>
              <Image
                // key={i}
                // key={item.key}
                source={{ uri: item.img_src }}
                style={styles.ImageView}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      {Link.map((item) => (
        <View>
          <Text style={styles.bold}>{item.title}</Text>
          <Text>{item.buildIn} </Text>
          <Text>{item.approxDate} </Text>
          <Text style={styles.bold}>{item.perNightRate} </Text>
        </View>
      ))}
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailCard: {
    // marginBottom: 10,
    // backgroundColor: "red",
    height: 420,
  },
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

export default Travell;

// style={{ width: 300, height: 350 }}
