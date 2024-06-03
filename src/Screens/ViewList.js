import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
} from "react-native";

// Custom Components
import commonStyles from "../../styles/commonStyles";
import TopBar from "../components/TopBar";

export default (props) => {
  return (
    <View style={commonStyles.container}>
      <StatusBar animated={true} backgroundColor="#4E4C4C" hidden={false} />
      <TopBar></TopBar>
    </View>
  );
};
