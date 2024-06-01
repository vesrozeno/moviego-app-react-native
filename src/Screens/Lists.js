import React from "react";
import { Text, View } from "react-native";
import commonStyles from "../../styles/commonStyles";
import TopBar from "../components/TopBar";

export default (props) => {
  return (
    <View style={commonStyles.container}>
      <TopBar></TopBar>
    </View>
  );
};
