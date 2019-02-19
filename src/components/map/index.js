import React, { Component } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { Form, Item, Input, Button, Text, Picker, Icon } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Map"
  };

  render() {
    return (
      <LinearGradient
        colors={["#0068bf", "#6ec5ff"]}
        style={styles.linearGradient}
      >
        <StatusBar backgroundColor="#0069c0" barStyle="light-content" />
        <View style={styles.container}>
          {/* <Text>Maps Page</Text> */}
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            initialRegion={{
              latitude: 33.5898263,
              longitude: -7.6024001,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker
              coordinate={{ latitude: 33.5898263, longitude: -7.6024001 }}
              image={require("../../assets/img/pin-truck.png")}
            />
          </MapView>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  linearGradient: {
    flex: 1
  }
});
export default index;
