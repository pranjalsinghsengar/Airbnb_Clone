import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// import Login from "./components/Login";
import HomePage from "./components/home/HomePage";
import Profile from "./components/profile/Profile";
import Airbnb from "./components/airbnb/Airbnb";
import Wishlist from "./components/wishlist/Wishlist";
import Inbox from "./components/inbox/Inbox";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
      }}
    >
      {/* Explore */}
      <Tab.Screen
        name='Explore'
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' color={color} size={size} />
          ),
        }}
      />
      {/* Wishlist */}
      <Tab.Screen
        name='Wishlists'
        component={Wishlist}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='heart-outline' color={color} size={size} />
          ),
        }}
      />
      {/* Airbnb */}
      <Tab.Screen
        name='Airbnb'
        component={Airbnb}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={"airbnb"} color={color} size={size} />
            // <Ionicons name='airbnb' color={color} size={size} />
          ),
        }}
      />
      {/* Inbox */}
      <Tab.Screen
        name='Inbox'
        component={Inbox}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='chatbubble-outline' color={color} size={size} />
          ),
        }}
      />
      {/* Profile */}
      <Tab.Screen
        name='profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-outline' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
