import React from "react";
import { Text, View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigationTabs from "./BottomTabs";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Lists from "../Screens/Lists";
import Profile from "../Screens/Profile";

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={LoginNavigation} />
    <Stack.Screen name="Home" component={HomeNavigationTabs} />
  </Stack.Navigator>
);
export function LoginNavigation({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginStack"
        component={Login}
        options={{
          headerShown: false,
          title: "LOGIN",
        }}
      />
      <Stack.Screen
        name="SignUpStack"
        component={SignUp}
        options={{
          headerShown: false,
          title: "SIGNUP",
        }}
      />
    </Stack.Navigator>
  );
}
export function HomeNavigation({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={Home} />
    </Stack.Navigator>
  );
}

export function SearchNavigation({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchStack"
        component={Search}
        options={{
          headerShown: false,
          title: "SEARCH",
        }}
      />
    </Stack.Navigator>
  );
}

export function ListsNavigation({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListsStack"
        component={Lists}
        options={{
          headerShown: false,
          title: "LISTS",
        }}
      />
    </Stack.Navigator>
  );
}

export function ProfileNavigation({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileStack"
        component={Profile}
        options={{
          headerShown: false,
          title: "Profile",
        }}
      />
    </Stack.Navigator>
  );
}
