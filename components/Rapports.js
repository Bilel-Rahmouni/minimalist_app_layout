import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Rapports({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Rapports</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    marginTop: 400,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Rapports;
