import { StyleSheet, View, Text, ViewPagerAndroid } from "react-native";
import React, { Component } from "react";
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "rn-viewpager";
import StepIndicator from "react-native-step-indicator";
import { Item, Button } from "native-base";

const labels = ["Delivery Address", "Order Summary", "Payment Method"];

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

export default class ViewPagerPage extends Component {
  constructor() {
    super();
    this.state = {
      currentPosition: 0,
      textposition: 0
    };
  }

  onPageSelected = event => {
    this.setState({ currentPosition: event.nativeEvent.position });
  };

  Nextpage = () => {
    // this.setState({ currentPosition: ev });
    this.ViewPagerAndroid.setPage(1);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StepIndicator
          customStyles={customStyles}
          stepCount={3}
          currentPosition={this.state.currentPosition}
          labels={labels}
        />
        <ViewPagerAndroid
          style={{ height: 200 }}
          indicator={this._renderDotIndicator()}
          //   onPageScroll={this.onPageScroll}
          onPageSelected={this.onPageSelected}
        >
          <View style={{ backgroundColor: "cadetblue" }}>
            <Text>page one</Text>
            <Button block primary onPress={this.Nextpage}>
              <Text>Next</Text>
            </Button>
          </View>
          <View style={{ backgroundColor: "cornflowerblue" }}>
            <Text>page two this : {this.state.textposition} </Text>
          </View>

          <View style={{ backgroundColor: "#1AA094" }}>
            <Text>page three</Text>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }

  //   onPageScroll = (e) => {
  //     this.setState({progress: e.nativeEvent});
  //   };

  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={["one", "two", "three"]} />;
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }

  _renderTabIndicator() {
    let tabs = [
      {
        text: "Home"
      },
      {
        text: "Message"
      },
      {
        text: "Profile"
      }
    ];
    return <PagerTabIndicator tabs={tabs} />;
  }
}
