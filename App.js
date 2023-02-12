import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage";

const Stack = createNativeStackNavigator();

function myStack() {
  return (
    <Stack.Navigator initialRouteName='HomePage'>
      <Stack.Screen name='HomePage' component={HomePage} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <myStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
