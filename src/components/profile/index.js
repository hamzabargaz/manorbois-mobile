import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  AsyncStorage
} from "react-native";
import { Form, Item, Input, Button, Text, Picker, Icon } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../Loader";
import axios from "axios";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      telephone: "",
      adresse: "",
      email: "",
      loading: true
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile",
      headerStyle: {
        // backgroundColor: "transparent"
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        textAlign: "center",
        // fontSize: 25,
        flexGrow: 1,
        alignSelf: "center"
      },

      headerRight: (
        <Button
          transparent
          onPress={async event => {
            event.preventDefault();
            navigation.navigate("Update");
          }}
        >
          <Icon
            name="user-edit"
            type="FontAwesome5"
            style={{ color: "black" }}
          />
        </Button>
      )
    };
  };

  componentDidMount() {
    this._getuserData();
  }

  _getuserData = async () => {
    const {
      nom,
      prenom,
      telephone,
      adresse,
      password,
      confirmationpassword
    } = this.state;
    const iduser = await AsyncStorage.getItem("user_id");

    axios({
      method: "post",
      url: "https://seetrip.fun/codgen/Cls/getUser/" + iduser + ""
    })
      .then(response => {
        console.log("response get user is : ", response.data);
        this.setState({
          nom: response.data.user["0"].last_name,
          prenom: response.data.user["0"].first_name,
          telephone: response.data.user["0"].phone,
          adresse: response.data.user["0"].adresse,
          email: response.data.user["0"].email,
          loading: false
        });
      })
      .catch(err => {
        console.log("Error logging in : ...", err);
      });
  };

  renderLoader = () => {
    if (this.state.loading) {
      return <Loader size="large" />;
    } else {
      return (
        <Button
          dark
          block
          rounded
          style={[styles.Item]}
          onPress={this._Updateuser}
        >
          <Text>Mettre à jour</Text>
        </Button>
      );
    }
  };

  render() {
    return (
      <LinearGradient
        colors={["#0068bf", "#6ec5ff"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="#0069c0" barStyle="light-content" />
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {this.state.loading ? (
              <Loader size="large" />
            ) : (
              <View style={styles.profile}>
                <View style={[styles.name, {}]}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 40,
                      color: "#fff",
                      fontWeight: "800"
                    }}
                  >
                    {this.state.nom} {this.state.prenom}
                  </Text>
                </View>
                <View style={[styles.infocard, {}]}>
                  <View style={[styles.labelinfo, {}]}>
                    <Icon
                      name="email"
                      type="Entypo"
                      style={{ color: "#0069c0", fontSize: 15 }}
                    />
                    <Text style={[styles.labeltext, {}]}>Email</Text>
                  </View>
                  <Text style={[styles.textinfo, {}]}>{this.state.email}</Text>
                </View>
                <View style={[styles.infocard, {}]}>
                  <View style={[styles.labelinfo, {}]}>
                    <Icon
                      name="phone"
                      type="Entypo"
                      style={{ color: "#0069c0", fontSize: 15 }}
                    />
                    <Text style={[styles.labeltext, {}]}>Telephone</Text>
                  </View>
                  <Text style={[styles.textinfo, {}]}>
                    {this.state.telephone}
                  </Text>
                </View>
                <View style={[styles.infocard, {}]}>
                  <View style={[styles.labelinfo, {}]}>
                    <Icon
                      name="location-pin"
                      type="Entypo"
                      style={{ color: "#0069c0", fontSize: 15, marginRight: 5 }}
                    />
                    <Text style={[styles.labeltext, {}]}>Adresse</Text>
                  </View>
                  <Text style={[styles.textinfo, {}]}>
                    {this.state.adresse}
                  </Text>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  linearGradient: {
    flex: 1
  },
  profile: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column"
  },
  name: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    marginBottom: 15
  },
  infocard: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    margin: 10,
    backgroundColor: "#fff",
    width: "95%",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5
  },
  labelinfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "#0069c0"
  },
  labeltext: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 17,
    color: "#0069c0"
  },
  textinfo: {
    margin: 10
  }
});
export default index;
