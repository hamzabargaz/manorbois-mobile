import React, { Component } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { Form, Item, Input, Button, Text, Picker, Icon } from "native-base";
import LinearGradient from "react-native-linear-gradient";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  static navigationOptions = {
    title: "Profile"
  };

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <LinearGradient
        colors={["#0068bf", "#6ec5ff"]}
        style={styles.linearGradient}
      >
        <Form style={styles.Form}>
          <StatusBar backgroundColor="#0069c0" barStyle="light-content" />
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 30,
                fontWeight: "700",
                margin: 10,
                textAlign: "center"
              }}
            >
              Mise à jour
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                margin: 5,
                textAlign: "center"
              }}
            >
              Veuillez mettre à jour les champs de votre choix
            </Text>
            <Item rounded style={styles.Item}>
              <Input placeholder="Nom" style={styles.Textfield} />
            </Item>
            <Item rounded style={styles.Item}>
              <Input placeholder="Prenom" style={styles.Textfield} />
            </Item>
            <Item rounded style={styles.Item}>
              <Input placeholder="Adresse Email" style={styles.Textfield} />
            </Item>
            <Item rounded style={styles.Item}>
              <Input placeholder="Téléphone" style={styles.Textfield} />
            </Item>
            <Item rounded style={styles.Item}>
              <Picker
                mode="dialog"
                placeholder="Selectioner Votre Ville"
                style={styles.Pickerfield}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Agadir" value="Agadir" />
                <Picker.Item label="Casablanca" value="Casablanca" />
                <Picker.Item label="Marakkech" value="Marakkech" />
                <Picker.Item label="Rabat" value="Rabat" />
              </Picker>
            </Item>
            <Item rounded style={styles.Item}>
              <Input
                placeholder="Mot de passe"
                style={styles.Textfield}
                secureTextEntry={true}
              />
            </Item>
            <Item rounded style={styles.Item}>
              <Input
                placeholder="Confirmer le Mot de passe"
                style={styles.Textfield}
                secureTextEntry={true}
              />
            </Item>
            <Button dark block rounded style={[styles.Item]}>
              <Text>Mettre à jour</Text>
            </Button>
          </ScrollView>
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
    alignItems: "center",
    padding: 40
  },
  linearGradient: {
    flex: 1
  },
  Item: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#000",
    borderRadius: 15,
    borderColor: "#6ec6ff"
  },
  Textfield: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    borderRadius: 15,
    borderColor: "#6ec6ff",
    borderWidth: 1
  },
  Pickerfield: {
    color: "#444444",
    marginLeft: 80,
    borderRadius: 15,
    borderColor: "#6ec6ff",
    borderWidth: 1
  }
});
export default index;
