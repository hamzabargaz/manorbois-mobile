import React, { Component } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { Form, Item, Input, Button, Text, Picker, Icon } from "native-base";
import LinearGradient from "react-native-linear-gradient";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <LinearGradient
        colors={["#0068bf", "#6ec5ff"]}
        style={styles.linearGradient}
      >
        <StatusBar backgroundColor="#0069c0" barStyle="light-content" />
        <Form style={styles.Form}>
          <Text>About Page</Text>
        </Form>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  Form: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
    // padding: 40
  },
  linearGradient: {
    flex: 1
  }
});
export default index;
