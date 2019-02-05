import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Container, Item, Input, Button, Text, Icon } from "native-base";

export class index extends Component {
  render() {
    return (
      <View style={styles.View}>
        <Image
          source={require("../../assets/img/delivery-truck.png")}
          style={{ height: 100, width: 100 }}
        />
        <Text
          style={{
            textAlign: "center",
            color: "#000",
            fontSize: 35,
            fontWeight: "700",
            margin: 20
          }}
        >
          Track Service
        </Text>
        <Text style={styles.Text}>Veuillez vous identfier</Text>
        <Button dark block rounded style={[styles.Item]}>
          <Text>Login</Text>
        </Button>

        <Text style={[styles.Text, { marginTop: 20 }]}>
          Si vous n'êtes pas inscrit veuillez vous enregistrez
        </Text>
        <Button
          block
          transparent
          rounded
          style={{ borderColor: "#000", borderWidth: 2 }}
        >
          <Text>S'inscrire</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  },
  Text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "100",
    marginBottom: 20
  }
});

export default index;
