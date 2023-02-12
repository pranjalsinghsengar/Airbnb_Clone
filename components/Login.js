import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

class Login extends Component {
  render() {
    return (
      <View style={styles.form_container}>
        <Text>Login Page</Text>
        <TextInput placeholder='Name' />
        <TextInput placeholder='Email' />
        <TextInput placeholder='Password' />
        <TouchableOpacity style={styles.submit} onPress={""}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
