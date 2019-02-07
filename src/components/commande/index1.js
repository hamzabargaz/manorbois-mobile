import {
  StyleSheet,
  View,
  Text,
  ViewPagerAndroid,
  ScrollView,
  Image
} from "react-native";
import React, { Component } from "react";
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "rn-viewpager";
import StepIndicator from "react-native-step-indicator";
import { Item, Button, Picker, DatePicker, CheckBox, Icon } from "native-base";

const labels = ["Détail de la Commande", "Type de Camion", "Paiment Méthode"];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "black",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "black",
  stepStrokeUnFinishedColor: "white",
  separatorFinishedColor: "grey",
  separatorUnFinishedColor: "white",
  stepIndicatorFinishedColor: "black",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "black",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 20,
  stepIndicatorLabelCurrentColor: "white",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "black",
  labelSize: 13,
  currentStepLabelColor: "white"
};

export default class ViewPagerPage extends Component {
  constructor() {
    super();
    this.state = {
      selected: null,
      currentPosition: 0,
      textposition: 0,
      chosenDate: new Date()
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  onPageSelected = event => {
    this.setState({ currentPosition: event.nativeEvent.position });
  };

  Nextpage = () => {
    this.viewPager.setPage(1);
    this.setState({ currentPosition: 1 });
  };

  render() {
    return (
      <View style={styles.Form}>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 35,
            fontWeight: "600",
            marginBottom: 10
          }}
        >
          Votre commande
        </Text>

        <StepIndicator
          customStyles={customStyles}
          stepCount={3}
          currentPosition={this.state.currentPosition}
          labels={labels}
        />
        <ViewPagerAndroid
          ref={viewPager => {
            this.viewPager = viewPager;
          }}
          style={{ height: 380 }}
          indicator={this._renderDotIndicator()}
          //   onPageScroll={this.onPageScroll}
          onPageSelected={this.onPageSelected}
        >
          <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            <ScrollView
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.TextLabel}>Départ de</Text>
              <Item rounded style={styles.Item}>
                <Picker
                  mode="dialog"
                  placeholder="Selectioner Votre Ville"
                  style={styles.Pickerfield}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Agadir" value="Agadir" />
                  <Picker.Item label="Casablanca" value="Casablanca" />
                  <Picker.Item label="Marakkech" value="Marakkech" />
                  <Picker.Item label="Rabat" value="Rabat" />
                </Picker>
              </Item>
              <Text style={styles.TextLabel}>Date plannifiée </Text>
              <Item rounded style={styles.Item}>
                <DatePicker
                  defaultDate={new Date()}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2019, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Selectioner un date"
                  textStyle={{ color: "#444444" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setDate}
                  disabled={false}
                />
              </Item>
              <Text style={styles.TextLabel}>Arrivée à</Text>
              <Item rounded style={styles.Item}>
                <Picker
                  mode="dialog"
                  placeholder="Selectioner Votre Ville"
                  style={styles.Pickerfield}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Agadir" value="Agadir" />
                  <Picker.Item label="Casablanca" value="Casablanca" />
                  <Picker.Item label="Marakkech" value="Marakkech" />
                  <Picker.Item label="Rabat" value="Rabat" />
                </Picker>
              </Item>

              <Button
                dark
                style={styles.btn}
                rounded
                block
                onPress={this.Nextpage}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Suivant</Text>
              </Button>
            </ScrollView>
          </View>
          <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            <View style={styles.row}>
              <Image
                source={require("../../assets/img/delivery-truck.png")}
                style={{ height: 60, width: 60 }}
              />
              <View style={styles.textcapacite}>
                <Text style={{ color: "#000" }}> Poids léger </Text>
                <Text style={{ color: "#fff" }}> Capacité 1 unité </Text>
              </View>
              <CheckBox style={styles.chk} checked={false} />
            </View>
            <View style={styles.row}>
              <Image
                source={require("../../assets/img/delivery-truck.png")}
                style={{ height: 60, width: 60 }}
              />
              <View style={styles.textcapacite}>
                <Text style={{ color: "#000" }}> Poids moyen </Text>
                <Text style={{ color: "#fff" }}> Capacité 3 - 4 unités </Text>
              </View>
              <CheckBox style={styles.chk} checked={true} />
            </View>
            <View style={styles.row}>
              <Image
                source={require("../../assets/img/delivery-truck.png")}
                style={{ height: 60, width: 60 }}
              />
              <View style={styles.textcapacite}>
                <Text style={{ color: "#000" }}> Poids léger </Text>
                <Text style={{ color: "#fff" }}> Capacité +4 unités </Text>
              </View>
              <CheckBox style={styles.chk} checked={false} />
            </View>
            <Button
              dark
              style={styles.btn}
              rounded
              block
              onPress={this.Nextpage}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>Suivant</Text>
            </Button>
          </View>

          <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            <Text style={styles.TextLabel}>Mode de Paiement ? </Text>
            <Button
              transparent
              block
              rounded
              style={[
                styles.btn,
                {
                  borderColor: "black",
                  borderWidth: 3,
                  margin: 20,
                  marginLeft: 40,
                  marginRight: 40
                }
              ]}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>Chéque</Text>
              <Icon
                name="check"
                type="Entypo"
                style={{ fontSize: 30, color: "white", display: "none" }}
              />
            </Button>

            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                textAlign: "center"
              }}
            >
              Ou
            </Text>
            <Button
              dark
              block
              rounded
              style={[
                styles.btn,
                {
                  borderColor: "black",
                  borderWidth: 3,
                  margin: 20,
                  marginLeft: 40,
                  marginRight: 40
                }
              ]}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>Virement</Text>
              <Icon
                name="check"
                type="Entypo"
                style={{ fontSize: 30, color: "white" }}
              />
            </Button>
            <Button
              style={[styles.btn, { backgroundColor: "#fff" }]}
              rounded
              block
              onPress={this.Nextpage}
            >
              <Text style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>
                Envoyer
              </Text>
            </Button>
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

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  Form: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
    // padding: 40
  },
  Item: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderColor: "#000",
    marginLeft: 40,
    marginRight: 40
  },
  btn: {
    margin: 40,
    padding: 20
  },
  TextLabel: {
    marginTop: 10,
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  Pickerfield: {
    color: "#444444",
    marginLeft: 90
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40
  },
  textcapacite: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  chk: {
    borderColor: "black",
    borderRadius: 10,
    width: 30,
    height: 30,
    paddingLeft: 6,
    paddingTop: 2
  }
});
