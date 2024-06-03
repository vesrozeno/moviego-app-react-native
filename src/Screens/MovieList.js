import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function MovieList({ movies }) {
  const navigation = useNavigation();

  const handlePress = (id) => {
    navigation.navigate("MovieStack", { movieId: id });
  };

  const formatDate = (dateString) => {
    const [year] = dateString.split("-");

    return `${year}`;
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={styles.item}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          style={styles.poster}
        />
        <View style={styles.details}>
          <Text style={styles.title}>
            {item.title}{" "}
            <Text style={styles.subtitle}>{formatDate(item.release_date)}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      style={{ marginBottom: 65 }}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
  },
  poster: {
    width: 41,
    height: 61,
    marginRight: 10,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 0.3,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 13,
    color: "#b7b7b7",
    fontWeight: "regular",
  },
  overview: {
    fontSize: 14,
  },
  director: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
