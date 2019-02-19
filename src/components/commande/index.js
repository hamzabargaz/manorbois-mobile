import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  FlatList,
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
    await AsyncStorage.getItem("user_id")
      .then(value => {
        this.setState({ idcl: value });
        console.log(" value async  :", value);
      })
      .catch(error => {
        console.log(" error async  :", error);
      });

    console.log(" state async  :", this.state.idcl);
    await axios
      .get(
        "http://seetrip.fun/codgen/Cls/getCommandeByIdCl/" +
          this.state.idcl +
          ""
      )
      .then(response => {
        // console.log(response.data.message);
        this.setState({
          message: response.data.message,
          commandes: response.data.commandes,
          loading: false
        });
        console.log(this.state.commandes);
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
            <FlatList
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
            />
          )}
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
  }
});

// index.defaultProps = {
//   onSelect: f => f
// };

// index.propTypes = {
//   onColorSelected: React.PropTypes.func
// };

export default index;
