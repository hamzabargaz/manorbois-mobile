import React, { Component } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export class CommandDetail extends Component {
  static navigationOptions = {
    title: "Commande Detail"
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    // const { itemid } = navigation.getParam("id", "NO-ID");
    const {
      Client,
      ADRESSELIV,
      Commercial,
      Conducteur,
      DATECMD,
      DATELIV,
      ETAT,
      IDCMD,
      NUMCMD,
      Phone,
      client_id,
      commerc_id,
      conduct_id
    } = navigation.getParam("item");

    return (
      <LinearGradient
        colors={["#0068bf", "#6ec5ff"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="#0069c0" barStyle="light-content" />
          <Text> Command Details Client : {Client} </Text>
          <Text> Command Details ADresse livraison: {ADRESSELIV} </Text>
          <Text> Command Details Nom Commercial : {Commercial} </Text>
          <Text> Command Details Date Commande: {DATECMD} </Text>
          <Text> Command Details Date Livraison: {DATELIV} </Text>
          <Text> Command Details l'Etat: {ETAT} </Text>
          <Text> Command Details Num de Commande: {NUMCMD} </Text>
          <Text> Command Details Telephone Commercial: {Phone} </Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  linearGradient: {
    flex: 1
  }
});

export default CommandDetail;
