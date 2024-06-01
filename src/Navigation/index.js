import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./BottomTabs.js";
import StackNavigation from "./StackNavigation.js";

export default () => (
  <NavigationContainer>
    {/* <BottomNavigation /> */}
    <StackNavigation></StackNavigation>
  </NavigationContainer>
);
