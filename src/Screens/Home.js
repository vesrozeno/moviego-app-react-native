import React from "react";
import { Text, View } from "react-native";
import commonStyles from "../../styles/commonStyles";
import Carrosel from "../components/Carrosel";
import TopBar from "../components/TopBar";

export default (props) => {
  return (
    <View style={commonStyles.container}>
      <TopBar></TopBar>

      <Carrosel title="Nos Cinemas" list_type={'now_playing'} />
      <Carrosel title="Popular" list_type={'popular'} />
      <Carrosel title="Melhor Avaliados" list_type={'top_rated'} />
    </View>
  );
};
