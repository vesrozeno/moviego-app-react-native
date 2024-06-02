import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

// Custom Components
import commonStyles from "../../styles/commonStyles";
import TopBar from "../components/TopBar";

export default (props) => {
  return (
    <View style={commonStyles.container}>
      <TopBar></TopBar>
    </View>
  );
};
