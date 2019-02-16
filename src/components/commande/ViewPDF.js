import React, { Component } from "react";
import { WebView, StyleSheet } from "react-native";

export class ViewPDF extends Component {
  static navigationOptions = {
    title: "Facture"
  };

  componentDidMount() {
    console.log("url is : ", this.props.navigation.getParam("uri"));
  }

  render() {
    return (
      <WebView
        style={styles.container}
        source={{ uri: this.props.navigation.getParam("uri") }}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccess={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ViewPDF;
