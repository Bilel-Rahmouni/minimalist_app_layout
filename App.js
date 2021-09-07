import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Home";
import ProfileScreen from "./components/Profile";
import SettingsScreen from "./components/Settings";
import EditScreen from "./components/Edit";
import RapportsScreen from "./components/Rapports";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              return <AntDesign name="home" size={24} color="black" />;
            } else if (route.name === "Profile") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              return (
                <MaterialIcons name="account-circle" size={24} color="black" />
              );
            } else if (route.name === "Settings") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              return <AntDesign name="setting" size={24} color="black" />;
            } else if (route.name === "Edit") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              return <Feather name="edit" size={24} color="black" />;
            } else if (route.name === "Rapports") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              return <AntDesign name="areachart" size={24} color="black" />;
            }
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Rapports" component={RapportsScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
