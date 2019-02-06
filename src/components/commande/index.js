import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, Text } from "react-native";
import { ViewPager } from "rn-viewpager";

import StepIndicator from "react-native-step-indicator";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

// const labels = [
//   { key: 1, value: "Page 1" },
//   { key: 2, value: "Page 2" },
//   { key: 3, value: "Page 3" },
//   { key: 4, value: "Page 4" },
//   { key: 5, value: "Page 5" }
// ];

const labels = [
  "Cart",
  "Delivery Address",
  "Order Summary",
  "Payment Method",
  "Track"
];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#fe7013"
};

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      currentPosition: 0
    };
  }

  render() {
    return (
      <StepIndicator
        customStyles={customStyles}
        currentPosition={this.state.currentPosition}
        labels={labels}
      />
    );
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
}

const styles = StyleSheet.create({});
