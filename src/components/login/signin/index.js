import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Form, Item, Input, Button, Text } from "native-base";

export class index extends Component {
  render() {
    return (
      <Form style={styles.Form}>
        <Text
          style={{ color: "#000", fontSize: 40, fontWeight: "700", margin: 20 }}
        >
          LOGIN
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            margin: 10,
            textAlign: "center"
          }}
        >
          Veuillez vous identfier pour suivre votre commande
        </Text>
        <Item rounded style={styles.Item}>
          <Input placeholder="Adresse Email" style={styles.Textfield} />
        </Item>
        <Item rounded style={styles.Item}>
          <Input
            placeholder="Mot de passe"
            style={styles.Textfield}
            secureTextEntry={true}
          />
        </Item>
        <Button block rounded style={[styles.Item]}>
          <Text>Se Connecter</Text>
        </Button>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  Form: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  },
  Item: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#000"
  },
  Textfield: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  }
});

export default index;
