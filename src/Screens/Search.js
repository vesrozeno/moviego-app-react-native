import React, { useState, useContext } from "react";
import { SearchBar } from "@rneui/themed";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// custom Components
import TopBar from "../components/TopBar";

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
        <TopBar />

        <View
          style={{
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchBar
            placeholder="Pesquise por filmes"
            onChangeText={onChangeSearch}
            value={searchQuery}
            lightTheme={true}
            round={true}
            containerStyle={{
              backgroundColor: "transparent",
              borderWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
            }}
            inputContainerStyle={{
              backgroundColor: "#4E4C4C",
              width: 350,
              height: 42,
            }}
          ></SearchBar>
        </View>
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
    borderRadius: 12,
    marginTop: 20,
    height: 42,
    width: 347,
  },

  textColor: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "auto",
  },
});
