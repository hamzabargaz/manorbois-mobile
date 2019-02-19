import React, { Component } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { Form, Item, Input, Button, Text, Picker, Icon } from "native-base";
import LinearGradient from "react-native-linear-gradient";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <LinearGradient
        colors={["#0068bf", "#6ec5ff"]}
        style={styles.linearGradient}
      >
        <StatusBar backgroundColor="#0069c0" barStyle="light-content" />
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 30,
                color: "black",
                marginTop: 20,
                fontWeight: "bold"
              }}
            >
              Manorbois
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: "black",
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 20
              }}
            >
              Fondée en 1954, la Société Marocaine et Nordique des Bois
              Manorbois a bâti son leadership pour devenir un acteur
              incontournable dans l’importation et le négoce d’une large gamme
              de produits comprenant essentiellement :
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                fontSize: 16,
                color: "black",
                paddingLeft: 20,
                paddingRight: 20,
                textAlign: "left",
                marginTop: 10
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: "left"
                }}
              >
                - les bois,
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: "left"
                }}
              >
                - Les contreplaqués et panneaux,
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: "left"
                }}
              >
                - Les matériaux d’isolation et d’étanchéité,
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: "left"
                }}
              >
                - Les matériaux d’aménagement et de décoration,
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                fontSize: 16,
                color: "black",
                paddingLeft: 20,
                paddingRight: 20,
                textAlign: "left",
                marginTop: 5
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                Contactez-nous :
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: "left"
                }}
              >
                +212 522-401 300 - Siège
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: "left"
                }}
              >
                +212 522-404 100 - Fax
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: "left"
                }}
              >
                27, Avenue Pasteur, Casablanca, Maroc
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginBottom: 20,
                  textAlign: "left"
                }}
              >
                manorbois@manorbois.com
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#6ec6ff",
    // width: "95%",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2
  },
  linearGradient: {
    flex: 1
  }
});
export default index;
