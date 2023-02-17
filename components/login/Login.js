import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Login({ navigation }) {
  return (
    <View style={styles.form_container}>
      <Text>Login Page</Text>
      <TextInput placeholder='Name' />
      <TextInput placeholder='Email' />
      <TextInput placeholder='Password' />
      <TouchableOpacity
        style={styles.submit}
        onPress={() => navigation.goBack()}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form_container: {},
  submit: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
});

export default Login;
