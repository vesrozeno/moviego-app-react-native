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
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          borderLeftWidth: 0.2,
          borderRightWidth: 0.2,
          borderTopWidth: 0.2,
          height: 61,
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
                size={35}
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
                size={35}
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
                size={35}
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
                size={35}
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
