import React, { Component } from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
} from "react-native";
import { Logo_links } from "../assets/Logo_link";
import Login from "../login/Login";
import Places from "../Places";
import Travell from "../Travell";
import Ionicons from "react-native-vector-icons/Ionicons";
function HomePage() {
  const [isenable, setIsenable] = useState(false);
  const toggleSwitch = () => setIsenable((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* Search bar */}

      <View style={styles.searchBar}>
        <View style={styles.search_or_text}>
          <Ionicons
            name='search'
            style={{ fontSize: 25, marginRight: 15, marginLeft: 10 }}
          />
          <View>
            <Text style={{ fontWeight: "600" }}>where to?</Text>
            <Text style={{ opacity: 0.5 }}>Anywhere/Anyweek/add guests</Text>
          </View>
        </View>
        <Ionicons
          name='flash'
          style={{
            fontSize: 25,
            marginRight: 10,
            // borderWidth: 1,
            borderRadius: 50,
            padding: 5,
            elevation: 4,
            shadowColor: "#000",
            backgroundColor: "white",
          }}
        />
      </View>
      {/* LOGOS and Labels */}
      <View
        style={{
          width: 380,
          height: 100,
          marginLeft: 10,
          borderBottomWidth: 0.6,
          borderBottomColor: "#10000030",
        }}
      >
        <ScrollView horizontal>
          <View style={styles.type_of_places}>
            {Logo_links.map((item) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                }}
              >
                <Image
                  style={styles.Logo_links}
                  source={{ uri: item.imgSrc }}
                />
                <Text style={{ fontSize: 13 }}>{item.label} </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      {/* ----------------------- */}
      {/* scroll View */}
      <ScrollView style={{ flex: 1, marginTop: 15 }}>
        <View style={styles.detailTotalPrice}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Display total price
            </Text>
            <Text style={{ opacity: 0.5 }}>Display total price</Text>
          </View>
          <View>
            <Switch onValueChange={toggleSwitch} value={isenable} />
          </View>
        </View>

        {/* Travell Cards */}
        <Travell />
        <Travell />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailTotalPrice: {
    width: 350,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#10000040",
  },
  type_of_places: {
    width: "100%",
    height: 100,
    flexDirection: "row",
  },
  Logo_links: {
    width: 30,
    height: 30,
  },
  searchBar: {
    width: 350,
    // borderWidth: 1,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#171717",
    elevation: 5,
    backgroundColor: "#ffffff",
  },
  search_or_text: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default HomePage;
