import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

const TMDB_API_KEY = "8bb51d05c8c98d7ff15be6ae8b9282bb";

export default ({ route }) => {
  const [expanded, setExpanded] = useState(false);
  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=pt-BR`
        );
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${TMDB_API_KEY}&language=pt-BR`
        );

        const movie = response.data;
        const crew = creditsResponse.data.crew;
        const director = crew.find((member) => member.job === "Director");

        setMovieDetails({
          ...movie,
          director: director ? director.name : "Desconhecido",
          cast: creditsResponse.data.cast,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  const formatDate= (dateString) => {
    const [year, month, day] = dateString.split('-');
    
    const months = [
        'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 
        'jul', 'ago', 'set', 'out', 'nov', 'dez'
    ];

    const monthName = months[parseInt(month, 10) - 1];

    return `${day} de ${monthName}. de ${year}`;
}

  return (
    <ScrollView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#4E4C4C" hidden={false} />
      <View style={styles.backgroundContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`,
          }}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.movieContainer}>
          <View style={styles.posterContainer}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
              }}
              style={styles.poster}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{movieDetails.title}</Text>
            <Text style={styles.year}>{formatDate(movieDetails.release_date)}</Text>
            <Text style={styles.subtitle}>
              DIRIGIDO POR:{" "}
              <Text style={styles.director}>{movieDetails.director}</Text>
            </Text>
            <Text style={styles.subtitle}>
              DURAÇÃO:{" "}
              <Text style={styles.director}>
                {formatRuntime(movieDetails.runtime)}
              </Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={toggleExpanded}>
          <Text style={[styles.description, !expanded && styles.collapsed]}>
            {movieDetails.overview}
          </Text>
          {!expanded && <Text style={styles.synopsis}>ver mais</Text>}
          {expanded && <Text style={styles.synopsis}>ver menos</Text>}
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Nota:</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{movieDetails.vote_average}/10</Text>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="eye" size={24} color="#fff" />
            <Text style={styles.actionText}>Já vi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="heart" size={24} color="#fff" />
            <Text style={styles.actionText}>Favoritos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="plus" size={24} color="#fff" />
            <Text style={styles.actionText}>Quero ver</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar à listas</Text>
        </TouchableOpacity>
        <View style={styles.cast}>
          <Text style={styles.subtitle}>Elenco:</Text>
          {movieDetails.cast.slice(0, 10).map((actor) => (
            <Text key={actor.id} style={styles.actorName}>
              {actor.name} como {actor.character}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  backgroundContainer: {
    width: "100%",
    height: 170,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: "center",
  },
  movieContainer: {
    flexDirection: "row",
  },
  posterContainer: {
    width: 120,
    height: 150,
    marginTop: -10,
    zIndex: 1,
    flex: 3,
  },
  poster: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  textContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingStart: 15,
    marginTop: -20,
    flex: 7,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  year: {
    color: "#aaa",
    fontSize: 20,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 5,
  },
  director: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  runtime: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  description: {
    color: "#aaa",
    marginTop: 10,
    textAlign: "justify",
  },
  collapsed: {
    height: 60, // Limit the height to show only 3 lines
    overflow: "hidden",
  },
  synopsis: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  rating: {
    color: "#fff",
    fontSize: 24,
    marginRight: 5,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "100%",
  },
  actionButton: {
    alignItems: "center",
    flex: 1,
  },
  actionText: {
    color: "#fff",
    marginTop: 5,
  },
  addButton: {
    backgroundColor: "#555",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  actorName: {
    fontSize: 16,
    color: "#ccc",
  },
  cast: {
    marginBottom: 70,
  },
});
