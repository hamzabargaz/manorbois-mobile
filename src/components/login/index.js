import React, { Component } from "react";
import {
  View,
  Modal,
  Alert,
  StyleSheet,
  Image,
  AsyncStorage,
  StatusBar,
  ImageBackground
} from "react-native";
import { Form, Item, Input, Button, Text, Label } from "native-base";
import Loader from "../Loader";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import OfflineNotice from "../OfflineNotice";

export class index extends Component {
  constructor() {
    super();
    this.state = {
      identity: "",
      password: "",
      loading: false,
      isAuthenticated: false,
      errorMessage: "",
      modalVisible: false
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
        <Button
          block
          rounded
          style={[styles.Item, { marginLeft: 50, marginRight: 50 }]}
          onPress={this._signInAsync}
        >
          <Text>Se Connecter</Text>
        </Button>
      );
    }
  };

  render() {
    return (
      // <LinearGradient
      //   colors={["#0068bf", "#6ec5ff"]}
      //   style={styles.linearGradient}
      // >
      <ImageBackground
        source={require("../../assets/img/artboard1x.png")}
        style={styles.bgimg}
      >
        <Form style={styles.Form}>
          <StatusBar backgroundColor="#0069c0" barStyle="light-content" />
          <OfflineNotice />
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <Text>Hello World!</Text>

                <Button
                  block
                  rounded
                  style={[styles.Item, { marginLeft: 50, marginRight: 50 }]}
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >
                  <Text>Hide Modal</Text>
                </Button>
              </View>
            </View>
          </Modal>
          <Image
            source={require("../../assets/img/logo_manorbois-white.png")}
            style={{ height: 120, width: 200 }}
          />

          <Item regular style={styles.Item}>
            <Input
              placeholder="Adresse Email"
              placeholderTextColor="white"
              style={styles.Textfield}
              onChangeText={identity => this.setState({ identity })}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </Item>
          <Item regular style={styles.Item}>
            <Input
              placeholder="Mot de passe"
              placeholderTextColor="white"
              style={styles.Textfield}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              onSubmitEditing={this._signInAsync}
              textContentType="password"
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
          {/* <Button
            block
            rounded
            style={[styles.Item, { marginLeft: 50, marginRight: 50 }]}
            onPress={() => {
              this.setState({ modalVisible: true });
            }}
          >
            <Text>Show Modal</Text>
          </Button> */}
        </Form>
      </ImageBackground>
      // </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  Form: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  linearGradient: {
    flex: 1
  },
  bgimg: {
    flex: 1
    // width: "100%",
    // height: "100%"
  },
  Item: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    borderRadius: 10,
    borderColor: "#fff"
    // borderWidth: 2
  },
  Textfield: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    borderRadius: 7,
    borderColor: "#fff",
    borderWidth: 1
  }
});

export default index;
