import React from "react";
import { Text, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import commonStyles from "../../styles/commonStyles";
import Carrosel from "../components/Carrosel";
import TopBar from "../components/TopBar";

export default ({ route, navigation }) => {
  const { id_user } = route.params;

  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar animated={true} backgroundColor="#4E4C4C" hidden={false} />
      <TopBar></TopBar>
      <ScrollView contentContainerStyle={{ paddingBottom: 100, paddingTop: 5 }}>
        <View style={commonStyles.container}>
          <Carrosel
            title="Nos cinemas"
            list_type={"now_playing"}
            id_user={id_user}
          />
          <Carrosel title="Popular" list_type={"popular"} id_user={id_user} />
          <Carrosel
            title="Melhor avaliados"
            list_type={"top_rated"}
            id_user={id_user}
          />
          <Carrosel
            title="Lançamentos"
            list_type={"upcoming"}
            id_user={id_user}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
