import React, { useState, useEffect } from "react";
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
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyCi7A2O0Lm4bm9EwwI3RGa_8rc2zQEEKvs",
  authDomain: "test-app-38056.firebaseapp.com",
  projectId: "test-app-38056",
  storageBucket: "test-app-38056.appspot.com",
  messagingSenderId: "178104326190",
  appId: "1:178104326190:web:10fd8b18d2a9b96902a7bf",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App({ navigation }) {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() =>
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false), setLoaded(true);
      } else {
        setLoggedIn(true), setLoaded(true);
      }
    })
  );
  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Loading</Text>
      </View>
    );
  }
  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
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
