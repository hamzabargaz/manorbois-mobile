import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "rn-viewpager";
import StepIndicator from "react-native-step-indicator";
import { Item, Button, Icon } from "native-base";
import Moment from "moment";

const labels = ["En attente", "En Cours", "Livrer", "Facturé"];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#0069c0",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#0069c0",
  stepStrokeUnFinishedColor: "#dedede",
  separatorFinishedColor: "#0069c0",
  separatorUnFinishedColor: "#dedede",
  stepIndicatorFinishedColor: "#0069c0",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: "#ffffff",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#0069c0",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#0069c0"
};

export class CommandDetail extends Component {
  static navigationOptions = {
    title: "Commande Detail"
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      currentPosition: 0,
      textposition: 0
    };
  }

  componentDidMount() {
    this.setEtat();
  }

  setEtat = () => {
    const { ETAT } = this.props.navigation.getParam("item");
    console.log("the etet : ", ETAT);
    switch (ETAT) {
      case "En attente":
        this.setState({ currentPosition: 0 });
        break;
      case "En Cours":
        this.setState({ currentPosition: 1 });
        break;
      case "Livrer":
        this.setState({ currentPosition: 2 });
        break;
      case "Facturé":
        this.setState({ currentPosition: 3 });
        break;

      default:
        this.setState({ currentPosition: 0 });
        break;
    }
  };

  createPDF = async () => {
    let options = {
      html: "<h1>PDF TEST</h1>",
      fileName: "test",
      directory: "Documents"
    };

    let file = await RNHTMLtoPDF.convert(options);
    // console.log(file.filePath);
    alert(file.filePath);
  };

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
    const uri =
      "https://www.seetrip.fun/codgen/Cls/GenerateFacture/" + IDCMD + "";

    return (
      <LinearGradient
        colors={["#ffffff", "#e6e6e6"]}
        style={styles.linearGradient}
      >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <StatusBar backgroundColor="#0069c0" barStyle="light-content" />

            <View style={styles.stepperEtat}>
              <StepIndicator
                customStyles={customStyles}
                stepCount={4}
                currentPosition={this.state.currentPosition}
                labels={labels}
              />
            </View>

            <View style={styles.Detailcmd}>
              <View style={styles.itemdetail}>
                <View style={styles.icon}>
                  <Icon
                    style={{ fontSize: 40, color: "#0069c0" }}
                    type="Octicons"
                    name="organization"
                  />
                </View>
                <View style={styles.detaildata}>
                  <Text style={{ margin: 2 }}>
                    <Text style={styles.alltext}>Numero de la commande: </Text>
                    {NUMCMD}
                  </Text>
                  <Text style={{ margin: 2 }}>
                    <Text style={styles.alltext}>Date de la commande: </Text>
                    {Moment({ DATECMD }).format("D / MM / YYYY")}
                  </Text>
                </View>
              </View>
              <View style={styles.itemdetail}>
                <View style={styles.icon}>
                  <Icon
                    style={{ fontSize: 40, color: "#0069c0" }}
                    type="FontAwesome5"
                    name="truck"
                  />
                </View>
                <View style={styles.detaildata}>
                  <Text style={{ margin: 2 }}>
                    <Text style={styles.alltext}>
                      Adresse de la livraison:{" "}
                    </Text>
                    {ADRESSELIV}
                  </Text>
                  <Text style={{ margin: 2 }}>
                    <Text style={styles.alltext}>Date de la livraison: </Text>
                    {Moment({ DATELIV }).format("D / MM / YYYY")}
                  </Text>
                </View>
              </View>
              <View style={styles.itemdetail}>
                <View style={styles.icon}>
                  <Icon
                    style={{ fontSize: 40, color: "#0069c0" }}
                    type="FontAwesome"
                    name="user-circle"
                  />
                </View>
                <View style={[styles.detaildata, {}]}>
                  <Text style={{ margin: 2 }}>
                    <Text style={styles.alltext}> Nom du commercial: </Text>
                    {Commercial}
                  </Text>
                  <Text style={{ margin: 2 }}>
                    <Text style={styles.alltext}>Telephone du commercial:</Text>
                    {Phone}
                  </Text>
                </View>
              </View>
              <View style={styles.btnfacture}>
                <Button
                  style={
                    {
                      // flex: 1,
                      // justifyContent: "center",
                      // justifyContent: "center"
                      // marginLeft: 110,
                      // marginTop: 50
                    }
                  }
                  primary
                  onPressIn={event => {
                    event.preventDefault();
                    this.props.navigation.navigate("ViewPDF", { uri });
                  }}
                >
                  <Text style={{ color: "white", padding: 10 }}>
                    Générer votre Facture
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  contentContainer: {
    paddingVertical: 20
  },
  linearGradient: {
    flex: 1
  },
  stepperEtat: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    marginVertical: 50
  },
  Detailcmd: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  itemdetail: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 5,
    width: "97%",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  icon: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#0069c0"
  },
  detaildata: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 10
  },
  alltext: {
    fontSize: 15,
    fontWeight: "bold"
  },
  btnfacture: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 5,
    width: "100%"
  }
});

export default CommandDetail;
