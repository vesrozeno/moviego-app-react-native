import React from "react";
import { Text, View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigationTabs from "./BottomTabs";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Lists from "../Screens/Lists";
import Profile from "../Screens/Profile";
import ProfileSetup from "../Screens/ProfileSetup";
import Movie from "../Screens/Movie";
import ViewList from "../Screens/ViewList";

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={LoginNavigation} />
  </Stack.Navigator>
);
export function LoginNavigation({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="SignUpStack">
      <Stack.Screen
        name="SignInStack"
        component={SignIn}
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
      <Stack.Screen
        name="ProfileSetupStack"
        component={ProfileSetup}
        options={{
          headerShown: false,
          title: "SETUP",
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeNavigationTabs}
        options={{
          headerShown: false,
          title: "HOME",
        }}
      />
    </Stack.Navigator>
  );
}
export function HomeNavigation({ route, navigation }) {
  const { id_user } = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        initialParams={{ id_user: id_user }}
        options={{
          headerShown: false,
          title: "Home",
        }}
      />

      <Stack.Screen
        name="MovieStack"
        component={Movie}
        options={{
          headerShown: false,
          title: "Movie",
        }}
      />
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

      <Stack.Screen
        name="MovieStack"
        component={Movie}
        options={{
          headerShown: false,
          title: "Movie",
        }}
      />
    </Stack.Navigator>
  );
}

export function ListsNavigation({ route, navigation }) {
  const id_user = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListsStack"
        component={Lists}
        initialParams={{ id_user: id_user }}
        options={{
          headerShown: false,
          title: "LISTS",
        }}
      />
      <Stack.Screen
        name="ViewList"
        component={ViewList}
        options={{
          headerShown: false,
          title: "VIEWLISTS",
        }}
      />
    </Stack.Navigator>
  );
}

export function ProfileNavigation({ route, navigation }) {
  const id_user = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileStack"
        component={Profile}
        initialParams={{ id_user: id_user }}
        options={{
          headerShown: false,
          title: "Profile",
        }}
      />
    </Stack.Navigator>
  );
}
