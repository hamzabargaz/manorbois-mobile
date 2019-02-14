import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
  AsyncStorage
} from "react-native";
import { Item, Button, Text, Icon } from "native-base";
import LinearGradient from "react-native-linear-gradient";

export class index extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  static navigationOptions = {
    // title: "Welcome to the Homepage!"
    header: null
  };

  _onPressButton = () => {
    this.setState({
      text: "its works"
    });
  };

  _showMoreApp = () => {
    this.props.navigation.navigate("Commande");
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <LinearGradient
        colors={["#0068bf", "#6ec5ff"]}
        style={styles.linearGradient}
      >
        <View style={styles.Container}>
          <StatusBar backgroundColor="#0069c0" barStyle="light-content" />
          <Button
            block
            rounded
            style={[styles.Item]}
            onPress={this._signOutAsync}
          >
            <Text>I'm done, sign me out</Text>
          </Button>

          <Text
            style={{
              color: "#fff",
              fontSize: 40,
              fontWeight: "700",
              margin: 20
            }}
          >
            Bienvenu
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 20,
              margin: 5,
              textAlign: "center"
            }}
          >
            Mr. Rabii
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              margin: 10,
              textAlign: "center"
            }}
          >
            Choisissez une option
          </Text>
          <View style={styles.Item}>
            <TouchableHighlight
              underlayColor="rgba(145, 145, 145,0.5)"
              onPress={() => this.props.navigation.navigate("Commande")}
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: 10,
                shadowOffset: { width: 10, height: 10 },
                shadowColor: "black",
                shadowOpacity: 1.0
                // elevation: 1
              }}
            >
              <View style={styles.Btn}>
                <Icon name="form" type="AntDesign" style={styles.Iconbtn} />
                <Text style={styles.textbtn}>List Commandes</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="rgba(145, 145, 145,0.5)"
              onPress={() => this.props.navigation.navigate("Profile")}
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: 10,
                marginLeft: 10
              }}
            >
              <View style={styles.Btn}>
                <Icon name="gear" type="FontAwesome" style={styles.Iconbtn} />
                <Text style={styles.textbtn}>Actualiser vos infos</Text>
              </View>
            </TouchableHighlight>
          </View>

          {/* <View style={styles.Item}>
            <TouchableHighlight
              underlayColor="rgba(145, 145, 145,0.5)"
              onPress={this._onPressButton}
              style={{ backgroundColor: "#f0f0f0", borderRadius: 20 }}
            >
              <View style={styles.Btn}>
                <Icon
                  name="truck"
                  type="MaterialCommunityIcons"
                  style={styles.Iconbtn}
                />
                <Text style={styles.textbtn}>Suivre votre commande</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="rgba(145, 145, 145,0.5)"
              onPress={this._onPressButton}
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: 10,
                marginLeft: 10
              }}
            >
              <View style={styles.Btn}>
                <Icon
                  name="info-with-circle"
                  type="Entypo"
                  style={styles.Iconbtn}
                />
                <Text style={styles.textbtn}>Commande infos</Text>
              </View>
            </TouchableHighlight>
          </View> */}
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: 20
  },
  Btn: {
    // flex: 1,
    flexDirection: "column",
    // width: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#000",
    width: 120,
    padding: 10
  },
  Iconbtn: {
    // flex: 1,
    marginBottom: 10
  },
  textbtn: {
    // flex: 1,
    textAlign: "center"
  }
});

export default index;
