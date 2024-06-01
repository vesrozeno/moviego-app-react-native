import React, { useState, useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
// custom Components
import TopBar from "../components/topBarMovieGo";

export default (props) => {
  const initialState = "";
  //const { state, dispatch } = useContext(EventsContext);
  const [searchQuery, setSearchQuery] = useState(initialState);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  {
    /*const filteredEvents = state.events.filter((event) =>
    event.Nome.toLowerCase().includes(searchQuery.toLowerCase())
  );*/
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <TopBar />

        <View style={{ height: 30 }} />

        <Searchbar
          placeholder="Pesquise o evento"
          placeholderTextColor="#FFF"
          iconColor="#FFF"
          inputStyle={styles.textColor}
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBarStyle}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
  },
  searchBarStyle: {
    backgroundColor: "#4E4C4C",
  },
  textColor: {
    color: "#FFF",
  },
});
