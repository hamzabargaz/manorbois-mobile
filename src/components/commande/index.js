import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  SectionList,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import CommandItem from "./CommandItem";
import Loader from "../Loader";

export class index extends Component {
  static navigationOptions = {
    title: "Commande List"
  };

  constructor() {
    super();
    this.state = {
      commandes: [],
      enattente: [],
      encours: [],
      livrer: [],
      facture: [],
      message: "",
      errormsg: "",
      idcl: 0,
      loading: false
    };
  }

  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    this.setState({ loading: true });
    console.log("it s work here");
    const idCl = await AsyncStorage.getItem("user_id");

    console.log(" id cl  :", idCl);
    await axios
      .get("http://seetrip.fun/codgen/Cls/getCommandeByIdCl/" + idCl + "")
      .then(response => {
        // console.log(response.data.message);
        this.setState({
          message: response.data.message,
          commandes: response.data.commandes
        });
        this.state.commandes.map(commands => {
          switch (commands.ETAT) {
            case "En attente":
              this.setState({
                enattente: [...this.state.enattente, commands]
              });
              break;
            case "En Cours":
              this.setState({
                encours: [...this.state.encours, commands]
              });
              break;
            case "Livrer":
              this.setState({
                livrer: [...this.state.livrer, commands]
              });
              break;
            case "Facturé":
              this.setState({
                facture: [...this.state.facture, commands]
              });
              break;

            default:
              this.setState({ currentPosition: 0 });
              break;
          }
        });
        this.setState({
          loading: false
        });
        console.log(" Commands : ", this.state.commandes);
        console.log(" En attente : ", this.state.enattente);
        console.log(" En cours : ", this.state.encours);
        console.log(" Livrer : ", this.state.livrer);
        console.log(" Facture : ", this.state.facture);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errormsg: error
        });
      });
  };

  render() {
    return (
      <LinearGradient
        colors={["#0068bf", "#6ec5ff"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="#0069c0" barStyle="light-content" />

          {/* <Text> {this.state.message} </Text> */}
          {this.state.loading ? (
            <Loader size="large" />
          ) : (
            <SectionList
              renderItem={({ item, index, section }) => (
                // <Text key={index}>{item.IDCMD}</Text>
                <CommandItem
                  key={item.IDCMD}
                  cmdnumero={item.NUMCMD}
                  datecmd={item.DATECMD}
                  onSelect={() =>
                    this.props.navigation.navigate("CommandDetail", { item })
                  }
                />
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionheader}>{title}</Text>
              )}
              sections={[
                { title: "En Attente", data: this.state.enattente },
                { title: "En Cours", data: this.state.encours },
                { title: "Livrer", data: this.state.livrer },
                { title: "Facture", data: this.state.facture }
              ]}
              keyExtractor={(item, index) => item + index}
            />
          )}

          {/* <FlatList
              data={this.state.commandes}
              renderItem={({ item }) => (
                <CommandItem
                  key={item.IDCMD}
                  cmdnumero={item.NUMCMD}
                  datecmd={item.DATECMD}
                  onSelect={() =>
                    this.props.navigation.navigate("CommandDetail", { item })
                  }
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            /> */}
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
    alignItems: "flex-start"
  },
  linearGradient: {
    flex: 1
  },
  sectionheader: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#f0f0f0",
    color: "#535353"
  }
});

// index.defaultProps = {
//   onSelect: f => f
// };

// index.propTypes = {
//   onColorSelected: React.PropTypes.func
// };

export default index;
