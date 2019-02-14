import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Moment from "moment";

export class CommandItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _DetailCommande = () => {
    console.log("Test is working");
  };

  render() {
    const { cmdnumero, datecmd, onSelect = f => f } = this.props;
    Moment.locale("en");
    return (
      <TouchableHighlight
        underlayColor="rgba(145, 145, 145,0.5)"
        style={styles.wrapitem}
        onPress={() => onSelect()}
      >
        <View style={styles.item}>
          <View style={styles.detail_name}>
            <Text style={[styles.textitem, {}]}>Num de Commande : </Text>
            <Text style={[styles.textitem, {}]}>Date :</Text>
          </View>

          <View style={styles.detail_resp}>
            <Text style={[styles.textitem, {}]}>{cmdnumero} </Text>
            <Text style={[styles.textitem, {}]}>
              {Moment(datecmd).toNow(true)}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  wrapitem: {
    backgroundColor: "#f0f0f0",
    margin: 10,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    borderLeftColor: "#2196f3",
    borderLeftWidth: 4,
    borderTopEndRadius: 10
  },
  item: {
    flexDirection: "row",
    alignItems: "center"
  },
  textitem: {
    fontSize: 18,
    margin: 5
  }
  // detail_name: {
  //   padding: 10
  // },
  // detail_resp: {
  //   padding: 10
  // }
});

// commandItem.propTypes = {

// }

export default CommandItem;
