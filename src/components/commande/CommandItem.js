import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet, con } from "react-native";
import { Icon, Right } from "native-base";
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
          <View style={styles.detail}>
            <Text style={[styles.detailnumcmd, {}]}>
              Command : #{cmdnumero}
            </Text>
            <Text style={[styles.detaildate, {}]}>
              {Moment(datecmd).format("D / MM / YYYY")}
            </Text>
          </View>

          <View style={styles.iconarow}>
            <Icon type="AntDesign" name="right" size={30} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  wrapitem: {
    backgroundColor: "#f0f0f0",
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    marginLeft: 10,
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  detail: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 5
  },
  iconarow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  detailnumcmd: {
    fontSize: 18,
    marginBottom: 2
  },
  detaildate: {
    // padding: 10
  }
});

// commandItem.propTypes = {

// }

export default CommandItem;
