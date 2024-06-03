import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  HomeNavigation,
  SearchNavigation,
  ListsNavigation,
  ProfileNavigation,
} from "./StackNavigation";
const Tab = createBottomTabNavigator();
export default function HomeNavigationTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#4E4C4C",
          paddingTop: 7,
          borderTopWidth: 0.5,
          borderTopColor: "gray",
          height: "7.5%",
          position: "absolute",
          overflow: "hidden",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons
                size={25}
                name={focused ? "home" : "home-outline"}
                color={focused ? "white" : "gray"}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons
                size={25}
                name={focused ? "search" : "search-outline"}
                color={focused ? "white" : "gray"}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="ListsTab"
        component={ListsNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons
                size={25}
                name={focused ? "list" : "list-outline"}
                color={focused ? "white" : "gray"}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons
                size={25}
                name={focused ? "person" : "person-outline"}
                color={focused ? "white" : "gray"}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
