import React, { Component } from "react";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const Wishlist = () => {
  const [Card, setCard] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <View style={styles.wl_container}>
          <Text style={styles.wltext_h}>Wishlists</Text>
          <Text style={styles.wltext_sh}>Create your first Wishlist</Text>
          <Text style={styles.wltext_p}>
            As you search, tab the heart icon to save your favorite places to
            stay or things to do to a wishlist...
          </Text>
        </View>
      </View>
    </View>
  );
};

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
  wl_container: {
    // justifyContent: "center",
    // flex: 1 / 2,
  },
  wltext_h: {
    color: "#FFA500",
    fontSize: 35,
    fontWeight: "700",
  },
  wltext_sh: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "500",
  },
  wltext_p: {
    marginTop: 10,
    fontSize: 15,
    // borderWidth: 0.5,
    // borderRadius: 10,
    // padding: 20,
  },
});

export default Wishlist;
