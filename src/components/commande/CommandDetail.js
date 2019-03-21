import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  PermissionsAndroid
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "rn-viewpager";
import StepIndicator from "react-native-step-indicator";
import { Item, Button, Icon, Textarea } from "native-base";
import Moment from "moment";
import RNFetchBlob from "rn-fetch-blob";

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
    // async function requestExternalWritePermission() {
    //   try {
    //     const granted = await PermissionsAndroid.request(
    //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //       {
    //         title: "App External Storage Write Permission",
    //         message: "App needs access to Storage data in your SD Card "
    //       }
    //     );
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //       //If WRITE_EXTERNAL_STORAGE Permission is granted
    //       //changing the state to show Create PDF option
    //       that.setState({ isPermitted: true });
    //     } else {
    //       alert("WRITE_EXTERNAL_STORAGE permission denied");
    //     }
    //   } catch (err) {
    //     alert("Write permission err", err);
    //     console.warn(err);
    //   }
    // }
    // //Calling the External Write permission function
    // requestExternalWritePermission();
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

  // requestCameraPermission = async () => {

  // };

  createPDF = async () => {
    const { navigation } = this.props;
    // const { itemid } = navigation.getParam("id", "NO-ID");
    const { IDCMD } = navigation.getParam("item");
    console.log("IDCM : ", IDCMD);

    const dirs = RNFetchBlob.fs.dirs;
    console.log(dirs.DocumentDir);
    console.log(dirs.CacheDir);
    console.log(dirs.DCIMDir);
    console.log(dirs.DownloadDir);

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission",
          message:
            " needs access to your Storage permission" +
            "so you can take save your pdf.",
          // buttonNeutral: 'Ask Me Later',
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can save your pdf");
        const { config, fs } = RNFetchBlob;
        let DownloadDir = fs.dirs.DownloadDir; // this is the pictures directory. You can check the available directories in the wiki.
        let options = {
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
            // title: "Facture.pdf",
            notification: true,
            description: "Downloading PDF.",
            mime: "application/pdf"
          },
          path: DownloadDir, // this is the path where your downloaded file will live in,
          appendExt: "pdf"
        };
        config(options)
          .fetch(
            "GET",
            "https://www.seetrip.fun/codgen/Cls/GenerateFacture/" + IDCMD + ""
          )
          .then(res => {
            // do some magic here
          });
      } else {
        console.log("storage permission denied");
        alert("WRITE_EXTERNAL_STORAGE permission denied");
      }
    } catch (err) {
      alert("Write permission err", err);
      console.warn(err);
    }

    // let dirs = RNFetchBlob.fs.dirs;
    // RNFetchBlob.config({
    //   path: dirs.DownloadDir
    // })
    //   .fetch("GET", "https://www.seetrip.fun/codgen/Cls/GenerateFacture/875", {
    //     //some headers .
    //   })
    //   .then(res => {
    //     // the path should be dirs.DocumentDir + 'path-to-file.anything'
    //     console.log("The file saved to ", res.path());
    //   })
    //   .catch(err => {
    //     console.log(" ERROR The file ERROR : ", err);
    //   });

    // let options = {
    //   html: "<h1>PDF TEST</h1>",
    //   fileName: "testPDF",
    //   directory: "Donwloads"
    // };

    // RNFetchBlob.fs
    //   .writeFile(dirs.DownloadDir, await RNHTMLtoPDF.convert(options), "utf8")
    //   .then(response => {
    //     console.log("Success Log: ", response);
    //   })
    //   .catch(errors => {
    //     console.log(" Error Log: ", errors);
    //   });
    // RNHTMLtoPDF.convert(options)
    //   .then(data => {
    //     console.log(data.filePath);
    //     alert(file.filePath);
    //   })
    //   .catch(err => {
    //     console.log(" Error Log: ", err);
    //   });

    // let file = await RNHTMLtoPDF.convert(options);
    // console.log(file.filePath);
    // alert(file.filePath);

    // if (
    //   options.hasKey("directory") &&
    //   options.getString("directory").equals("Documents")
    // ) {
    //   let state = Environment.getExternalStorageState();
    //   let path = Environment.MEDIA_MOUNTED.equals(state)
    //     ? new File(
    //         Environment.getExternalStorageDirectory(),
    //         Environment.DIRECTORY_DOCUMENTS
    //       )
    //     : new File(
    //         mReactContext.getFilesDir(),
    //         Environment.DIRECTORY_DOCUMENTS
    //       );

    //   if (!path.exists()) path.mkdir();
    //   destinationFile = new File(path, fileName + ".pdf");
    // }

    // let file = await RNHTMLtoPDF.convert(options);
    // RNFetchBlob.fs.dirs.DownloadDir it's getting the download folder from internal storage
    // let filePath = RNFetchBlob.fs.dirs.DownloadDir + "/testPDF.pdf";

    // try {
    //   let file = await RNHTMLtoPDF.convert(options);
    //   console.log("Success", file);
    //   alert(file.filePath);
    // } catch {
    //   err => console.log("the error is : ", err);
    // }

    // console.log(file.filePath);
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
                  // onPressIn={event => {
                  //   event.preventDefault();
                  //   this.props.navigation.navigate("ViewPDF", { uri });
                  // }}
                  onPress={this.createPDF}
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
    justifyContent: "center",
    alignItems: "center",
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
