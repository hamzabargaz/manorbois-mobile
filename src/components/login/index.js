import React, { Component } from "react";
import { View, StyleSheet, Image, AsyncStorage, StatusBar } from "react-native";
import { Form, Item, Input, Button, Text } from "native-base";
import Loader from "../Loader";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";

export class index extends Component {
  constructor() {
    super();
    this.state = {
      identity: "",
      password: "",
      loading: false,
      isAuthenticated: false,
      errorMessage: ""
    };
  }

  static navigationOptions = {
    // title: "Please sign in"
    header: null
  };

  _signInAsync = () => {
    const { identity, password } = this.state;
    var bodyFormData = new FormData();
    bodyFormData.append("identity", identity);
    bodyFormData.append("password", password);

    console.log(identity);
    console.log(password);
    this.setState({
      loading: true
    });
    axios({
      method: "post",
      url: "http://seetrip.fun/codgen/Cls/login",
      data: bodyFormData
    })
      .then(response => {
        console.log("response is : ", response.data);
        if (response.data.login === "Success") {
          AsyncStorage.setItem("user_id", response.data.user_id);
          this.props.navigation.navigate("App");
        } else if (response.data.login === "Failure") {
          console.log("response is : ", response.data);
          this.setState({
            loading: false,
            errorMessage: response.data.message
          });
        }
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
        <Button block rounded style={[styles.Item]} onPress={this._signInAsync}>
          <Text>Se Connecter</Text>
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
          <Image
            source={require("../../assets/img/delivery-truck.png")}
            style={{ height: 100, width: 100 }}
          />
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 35,
              fontWeight: "700",
              margin: 5
            }}
          >
            Track Service
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 14,
              fontWeight: "100",
              margin: 5,
              textAlign: "center"
            }}
          >
            Veuillez vous identfier pour suivre votre commande
          </Text>
          <Item rounded style={styles.Item}>
            <Input
              placeholder="Adresse Email"
              style={styles.Textfield}
              onChangeText={identity => this.setState({ identity })}
            />
          </Item>
          <Item rounded style={styles.Item}>
            <Input
              placeholder="Mot de passe"
              style={styles.Textfield}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Text
            style={{
              color: "red",
              fontSize: 16,
              margin: 5,
              textAlign: "center"
            }}
          >
            {this.state.errorMessage}
          </Text>
          {this.renderLoader()}
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
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#6ec6ff",
    borderRadius: 15,
    borderColor: "#6ec6ff"
    // borderWidth: 2
  },
  Textfield: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    borderRadius: 15,
    borderColor: "#6ec6ff",
    borderWidth: 2
  }
});

export default index;
