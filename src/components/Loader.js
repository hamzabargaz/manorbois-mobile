import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const Loader = ({ size, color }) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={size || "small"} color={color || "white"} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Loader;
