import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Form, Item, Input, Button, Text, Picker, Icon } from "native-base";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Form style={styles.Form}>
        <Text
          style={{ color: "#000", fontSize: 40, fontWeight: "700", margin: 20 }}
        >
          S'inscrire
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            margin: 10,
            textAlign: "center"
          }}
        >
          Veuillez remplir ces champs pour vous inscrire
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
        <Button block rounded style={[styles.Item]}>
          <Text>S'inscrire</Text>
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
  },
  Pickerfield: {
    color: "#444444",
    marginLeft: 100
  }
});
export default index;
