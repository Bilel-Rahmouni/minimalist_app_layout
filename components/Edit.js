import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Edit({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity style={styles.addContainer}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Edit;
const styles = StyleSheet.create({
  addContainer: {
    height: 200,
    width: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 100, color: "dodgerblue" },
});
