import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { Item, Button, Text, Icon } from "native-base";

export class index extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  _onPressButton = () => {
    this.setState({
      text: "its works"
    });
  };

  render() {
    return (
      <View style={styles.Container}>
        <Text
          style={{ color: "#fff", fontSize: 40, fontWeight: "700", margin: 20 }}
        >
          Bienvenu
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 20,
            margin: 10,
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
            onPress={this._onPressButton}
            style={{ backgroundColor: "#f0f0f0", borderRadius: 20 }}
          >
            <View style={styles.Btn}>
              <Icon name="form" type="AntDesign" style={styles.Iconbtn} />
              <Text style={styles.textbtn}>Editer la Commande</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="rgba(145, 145, 145,0.5)"
            onPress={this._onPressButton}
            style={{
              backgroundColor: "#f0f0f0",
              borderRadius: 20,
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
        </View>

        <View style={styles.Item}>
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
              borderRadius: 20,
              marginLeft: 10
            }}
          >
            <View style={styles.Btn}>
              <Icon name="gear" type="FontAwesome" style={styles.Iconbtn} />
              <Text style={styles.textbtn}>Actualiser vos infos</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
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
  Item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20
  },
  Btn: {
    flex: 1,
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
    flex: 1,
    marginBottom: 10
  },
  textbtn: {
    flex: 1,
    textAlign: "center"
  }
});

export default index;
