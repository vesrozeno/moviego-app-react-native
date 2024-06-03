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
import { ListItem } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { Divider } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
const TMDB_API_KEY = "8bb51d05c8c98d7ff15be6ae8b9282bb";

export default ({ route }) => {
  const [expanded, setExpanded] = useState(false);
  const [cast, setCast] = useState(false);
  const [seen, setSeen] = useState(false); // Depois mudar aqui pra receber se o filme já está em alguma dessas listas
  const [fav, setFav] = useState(false);
  const [wlist, setWList] = useState(false);
  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const toggleCast = () => {
    setCast(!cast);
  };
  const toggleSeen = () => {
    setSeen(!seen);
  };
  const toggleFav = () => {
    setFav(!fav);
  };
  const toggleWList = () => {
    setWList(!wlist);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);

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

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${year}`;
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 90 }}
    >
      <StatusBar animated={true} backgroundColor="#4E4C4C" hidden={false} />
      <View style={styles.backgroundContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`,
          }}
          style={styles.backgroundImage}
        />
        <LinearGradient
          colors={["transparent", "rgba(50,50,50,1)"]}
          style={{ position: "absolute", width: "100%", height: "100%" }}
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
            <Text style={styles.title}>
              {movieDetails.title}{" "}
              <Text style={styles.year}>
                {formatDate(movieDetails.release_date)}
              </Text>
            </Text>

            <Text style={styles.subtitle}>DIRIGIDO POR: </Text>
            <Text style={styles.director}>{movieDetails.director}</Text>
            <Text style={styles.subtitle}>
              {formatRuntime(movieDetails.runtime)}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={toggleExpanded}>
            {!expanded ? (
              <Text style={styles.collapsed}>
                {movieDetails.overview.slice(0, 100) + "..."}{" "}
                {<Text style={styles.synopsis}>ver mais</Text>}
              </Text>
            ) : (
              <Text style={styles.description}>
                {movieDetails.overview}{" "}
                {<Text style={styles.synopsis}>ver menos</Text>}
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.sectionTitle}>Avaliações:</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>
              {(movieDetails.vote_average / 2).toFixed(1)}
            </Text>
            <StarRatingDisplay
              rating={movieDetails.vote_average / 2}
              color={"white"}
              starSize={20}
              enableHalfStar={1}
            />
          </View>

          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={toggleSeen}>
              <Icon
                name={seen ? "eye" : "eye-outline"}
                size={50}
                color="#fff"
              />
              <Text style={styles.actionText}>Já vi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={toggleFav}>
              <Icon
                name={fav ? "star" : "star-outline"}
                size={50}
                color="#fff"
              />
              <Text style={styles.actionText}>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={toggleWList}>
              <Icon
                name={wlist ? "time" : "time-outline"}
                size={50}
                color="#fff"
              />
              <Text style={styles.actionText}>Quero ver</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cast}>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <TouchableOpacity style={styles.elencoButton} onPress={toggleCast}>
              <FontAwesome name="user" size={10} color="#fff" />
              <Text style={styles.subtitleButton}>Ver elenco do filme</Text>
            </TouchableOpacity>
          </View>

          {cast &&
            movieDetails.cast.slice(0, 10).map((actor) => (
              <ListItem
                key={actor.id}
                containerStyle={styles.cast_list}
                topDivider
              >
                <ListItem.Content>
                  <ListItem.Title style={styles.actorName}>
                    {actor.name}
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.charName}>
                    {actor.character}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
  },
  backgroundContainer: {
    width: "100%",
    height: 200,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  contentContainer: {
    //paddingHorizontal: 20,
    paddingTop: 30,
    //alignItems: "center",
  },
  movieContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  posterContainer: {
    marginTop: -50,
    zIndex: 1,
  },
  poster: {
    width: 103,
    height: 149,
    borderRadius: 5,
  },
  textContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingStart: 15,
    marginTop: -50,
    flex: 7,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "flex-start",
    marginBottom: 10,
  },
  year: {
    color: "#aaa",
    fontSize: 17,
    fontWeight: "regular",
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
  },
  subtitleButton: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 5,
  },
  director: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  runtime: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  description: {
    color: "#aaa",
    paddingHorizontal: 15,
    color: "#fff",
    textAlign: "justify",
  },
  collapsed: {
    paddingHorizontal: 15,
    color: "#fff",
    overflow: "hidden",
  },
  synopsis: {
    color: "#A6A6A6",
    paddingHorizontal: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: "#fff",
    width: 300,
    marginBottom: 20,
  },
  rating: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "bold",
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
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 347,
  },
  elencoButton: {
    flexDirection: "row",
    backgroundColor: "#555",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 150,
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  actorName: {
    fontSize: 15,
    color: "#ccc",
    fontWeight: "bold",
  },
  charName: {
    fontSize: 12,
    color: "#ccc",
  },
  cast: {
    paddingTop: 10,
  },
  cast_list: {
    backgroundColor: "#323232",
  },
  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#323232",
  },
});
