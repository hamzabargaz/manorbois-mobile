import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  AsyncStorage
} from "react-native";
import { Form, Item, Input, Button, Text, Picker, Icon } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../Loader";
import axios from "axios";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      telephone: "",
      adresse: null,
      password: "",
      confirmationpassword: "",
      Message: ""
    };
  }

  static navigationOptions = {
    title: "Update"
  };

  _Updateuser = async () => {
    const {
      nom,
      prenom,
      telephone,
      adresse,
      password,
      confirmationpassword
    } = this.state;

    var bodyFormData = new FormData();

    console.log(nom, prenom, telephone, adresse, password);

    bodyFormData.append("nom", nom);
    bodyFormData.append("prenom", prenom);
    bodyFormData.append("telephone", telephone);
    bodyFormData.append("adresse", adresse);
    bodyFormData.append("password", password);

    this.setState({
      loading: true
    });

    const iduser = await AsyncStorage.getItem("user_id");
    console.log("id user ,", iduser);

    axios({
      method: "post",
      url: "http://seetrip.fun/codgen/Cls/edit_user/" + iduser + "",
      data: bodyFormData
    })
      .then(response => {
        console.log("response is : ", response.data);
        this.setState({
          loading: false,
          Message: response.data.message
        });
        this.props.navigation.navigate("Home");
      })
      .catch(err => {
        console.log("Error logging in : ...", err);
      });
  };

  renderLoader = () => {
    if (this.state.loading) {
      return <Loader size="large" />;
    } else {
      return (
        <Button
          primary
          block
          rounded
          style={[
            {
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 40
            }
          ]}
          onPress={this._Updateuser}
        >
          <Text>Mettre à jour</Text>
        </Button>
      );
    }
  };

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
                color: "#fff",
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
            <Item regular style={styles.Item}>
              <Input
                placeholder="Nom"
                style={styles.Textfield}
                onChangeText={value => {
                  this.setState({ nom: value });
                }}
                textContentType="familyName"
              />
            </Item>
            <Item regular style={styles.Item}>
              <Input
                placeholder="Prenom"
                style={styles.Textfield}
                onChangeText={value => {
                  this.setState({ prenom: value });
                }}
                textContentType="name"
              />
            </Item>
            <Item regular style={styles.Item}>
              <Input
                placeholder="Téléphone"
                style={styles.Textfield}
                onChangeText={value => {
                  this.setState({ telephone: value });
                }}
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
              />
            </Item>
            <Item regular style={styles.Item}>
              <Picker
                mode="dialog"
                style={styles.Pickerfield}
                itemStyle={{ textAlign: "center", backgroundColor: "red" }}
                placeholderTextColor="white"
                selectedValue={this.state.adresse}
                onValueChange={value => {
                  this.setState({ adresse: value });
                }}
              >
                <Picker.Item label="Agadir" value="Agadir" />
                <Picker.Item label="Casablanca" value="Casablanca" />
                <Picker.Item label="Marakkech" value="Marakkech" />
                <Picker.Item label="Rabat" value="Rabat" />
              </Picker>
            </Item>
            <Item regular style={styles.Item}>
              <Input
                placeholder="Mot de passe"
                style={styles.Textfield}
                secureTextEntry={true}
                onChangeText={value => {
                  this.setState({ password: value });
                }}
                textContentType="newPassword"
              />
            </Item>
            <Item regular style={styles.Item}>
              <Input
                placeholder="Confirmer le Mot de passe"
                style={styles.Textfield}
                secureTextEntry={true}
                onChangeText={value => {
                  this.setState({ confirmationpassword: value });
                }}
                textContentType="newPassword"
              />
            </Item>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                margin: 5,
                textAlign: "center"
              }}
            >
              {this.state.Message}
            </Text>
            {this.renderLoader()}
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
    alignItems: "center"
    // padding: 40
  },
  linearGradient: {
    flex: 1
  },
  Item: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#000",
    borderColor: "#6ec6ff",
    marginLeft: 40,
    marginRight: 40
  },
  Textfield: {
    // color: "#fff",
    backgroundColor: "#fff",
    fontSize: 15,
    textAlign: "left",
    borderColor: "#6ec6ff",
    borderWidth: 1
  },
  Pickerfield: {
    // color: "#444444",
    backgroundColor: "#fff",
    // marginLeft: 80,
    borderColor: "#6ec6ff",
    borderWidth: 1,
    paddingLeft: 80
  }
});
export default index;
