import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
  Alert,
  AsyncStorage
} from "react-native";
import { Item, Button, Text, Icon } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import firebase from "react-native-firebase";
import axios from "axios";

export class index extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        textAlign: "center",
        fontSize: 25,
        flexGrow: 1,
        alignSelf: "center"
      },

      headerRight: (
        <Button
          transparent
          onPress={async event => {
            event.preventDefault();
            await AsyncStorage.clear();
            navigation.navigate("Auth");
          }}
        >
          <Icon
            name="log-out"
            type="Entypo"
            style={{ color: "#6d6d6d", fontSize: 30, marginTop: 5 }}
          />
        </Button>
      )
    };
  };

  /************************************************************************* */

  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners(); //add this line
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
  }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  async createNotificationListeners() {
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const { title, body } = notification;
        console.log("onNotification:");
        // this.showAlert(title, body);
        // alert('message');

        const localNotification = new firebase.notifications.Notification({
          // sound: 'sampleaudio',
          show_in_foreground: true
        })
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          // .setSubtitle(notification.subtitle)
          .setBody(notification.body)
          // .setData(notification.data)
          .android.setChannelId("fcm_default_channel") // e.g. the id you chose above
          .android.setSmallIcon("@mipmap/ic_launcher_round") // create this icon in Android Studio
          .android.setColor("#000000") // you can set a color here
          .android.setPriority(firebase.notifications.Android.Priority.High);

        firebase
          .notifications()
          .displayNotification(localNotification)
          .catch(err => console.error(err));
      });

    const channel = new firebase.notifications.Android.Channel(
      "fcm_default_channel",
      "Manorbois",
      firebase.notifications.Android.Importance.High
    ).setDescription("Manorbois description");
    // .setSound('sampleaudio.mp3');
    firebase.notifications().android.createChannel(channel);

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        console.log("onNotificationOpened:");
        // this.showAlert(title, body);
      });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      console.log("getInitialNotification:");
      // this.showAlert(title, body);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    let iduser = await AsyncStorage.getItem("user_id");

    var bodyFormData = new FormData();

    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        console.log("fcmToken:", fcmToken);
        console.log("id-user:", iduser);

        bodyFormData.append("token", fcmToken);
        bodyFormData.append("id_user", iduser);

        await AsyncStorage.setItem("fcmToken", fcmToken);

        axios({
          method: "post",
          url: "http://seetrip.fun/codgen/Cls/UpdateToken",
          data: bodyFormData
        })
          .then(response => {
            console.log("response is : ", response.data);
          })
          .catch(err => {
            console.log("Error logging in : ...", err);
          });
      }
    }
    console.log("fcmToken:", fcmToken);
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log("permission rejected");
    }
  }

  /************************************************************************* */

  _onPressButton = () => {
    this.setState({
      text: "its works"
    });
  };

  _showMoreApp = () => {
    this.props.navigation.navigate("Commande");
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.Container}>
        <StatusBar backgroundColor="#0069c0" barStyle="light-content" />
        <View
          style={[
            {
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }
          ]}
        >
          <Text
            style={{
              color: "#6d6d6d",
              fontSize: 35,
              fontWeight: "700",
              margin: 20
            }}
          >
            Bienvenue
          </Text>
          <Text
            style={{
              color: "#6d6d6d",
              fontSize: 25,
              fontWeight: "400",
              margin: 5,
              textAlign: "center"
            }}
          >
            Mr. HAMZA
          </Text>
        </View>

        <View style={[styles.Item, { width: "100%" }]}>
          <LinearGradient
            colors={["#0068bf", "#6ec5ff"]}
            style={styles.linearGradient}
          >
            <TouchableHighlight
              underlayColor="rgba(145, 145, 145,0.5)"
              onPress={() => this.props.navigation.navigate("Commande")}
              style={[styles.touchhightlight, {}]}
            >
              <View style={styles.Btn}>
                <Icon name="form" type="AntDesign" style={styles.Iconbtn} />
                <Text style={styles.textbtn}>List Commandes</Text>
              </View>
            </TouchableHighlight>
          </LinearGradient>
          <LinearGradient
            colors={["#0068bf", "#6ec5ff"]}
            style={styles.linearGradient}
          >
            <TouchableHighlight
              underlayColor="rgba(145, 145, 145,0.5)"
              onPress={() => this.props.navigation.navigate("Profile")}
              style={[styles.touchhightlight, {}]}
            >
              <View style={styles.Btn}>
                <Icon name="gear" type="FontAwesome" style={styles.Iconbtn} />
                <Text style={styles.textbtn}>Actualiser vos infos</Text>
              </View>
            </TouchableHighlight>
          </LinearGradient>
        </View>

        <View style={[styles.Item, { width: "100%" }]}>
          <LinearGradient
            colors={["#6ec5ff", "#005792"]}
            style={styles.linearGradient}
          >
            <TouchableHighlight
              underlayColor="rgba(145, 145, 145,0.5)"
              onPress={() => this.props.navigation.navigate("Map")}
              style={[styles.touchhightlight, {}]}
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
          </LinearGradient>

          <LinearGradient
            colors={["#6ec5ff", "#005792"]}
            style={styles.linearGradient}
          >
            <TouchableHighlight
              underlayColor="rgba(145, 145, 145,0.5)"
              onPress={() => this.props.navigation.navigate("About")}
              style={[styles.touchhightlight, {}]}
            >
              <View style={styles.Btn}>
                <Icon
                  name="info-with-circle"
                  type="Entypo"
                  style={styles.Iconbtn}
                />
                <Text style={styles.textbtn}>A propos de nous</Text>
              </View>
            </TouchableHighlight>
          </LinearGradient>
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
    alignItems: "center"
    // padding: 40
  },
  linearGradient: {
    flex: 1,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5
  },
  Item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
    // margin: 20
  },
  touchhightlight: {
    flex: 1,
    backgroundColor: "transparent",
    // borderRadius: 20,
    width: "100%",
    height: "100%"
    // borderWidth: 1,
    // borderColor: "white"
    // borderBottomWidth: 1,
    // borderBottomColor: "white"
  },
  Btn: {
    flex: 1,
    flexDirection: "column",
    // width: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    padding: 5
  },
  Iconbtn: {
    // flex: 1,
    color: "#fff",
    marginBottom: 10,
    fontSize: 40
  },
  textbtn: {
    // flex: 1,
    color: "#fff",
    textAlign: "center"
  }
});

export default index;
