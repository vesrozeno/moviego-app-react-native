import React, { useState, useContext } from "react";
import { SearchBar } from "@rneui/themed";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";
import axios from "axios";
import TopBar from "../components/TopBar";
import commonStyles from "../../styles/commonStyles";
import MovieList from "./MovieList";

const TMDB_API_KEY = "8bb51d05c8c98d7ff15be6ae8b9282bb";

export default (props) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: TMDB_API_KEY,
            query: query,
            language: "pt-BR",
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar animated={true} backgroundColor="#4E4C4C" hidden={false} />
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
            onChangeText={setQuery}
            value={query}
            onSubmitEditing={searchMovies}
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
          />
        </View>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loading}
          />
        ) : (
          <MovieList movies={movies} />
        )}
      </View>
    </SafeAreaView>
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
  loading: {
    marginTop: 20,
  },
});
