import { fonts } from "@rneui/base";
import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Vibration,
  TouchableHighlight,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-paper";

import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";

//const { width } = Dimensions.get("window");
const TMDB_API_KEY = "8bb51d05c8c98d7ff15be6ae8b9282bb";

export default ({ title, list_type, id_user }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigation = useNavigation();
  const [seen, setSeen] = useState(false); // Depois mudar aqui pra receber se o filme já está em alguma dessas listas
  const [fav, setFav] = useState(false);
  const [wlist, setWList] = useState(false);

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
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${list_type}?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  const handleLongPress = (movie) => {
    setSelectedMovie(movie);
  };

  const handlePress = (id) => {
    navigation.navigate("MovieStack", { movieId: id });
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const goToMovieScreen = () => {
    navigation.navigate("MovieStack", { movieId: selectedMovie.id, id_user });
    closeModal();
  };
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${year}`;
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#626060"
      onLongPress={() => (
        handleLongPress(item),
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
      )}
      onPress={() => handlePress(item.id)}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        resizeMode="cover"
        style={styles.poster}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.7}
        //onPress={() => moveTela()}
      >
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>{title}</Text>
          <FontAwesome
            name="chevron-right"
            size={15}
            color="#4E4C4C"
            style={styles.botao}
          />
        </View>
      </TouchableHighlight>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment={"start"}
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        style={{ marginTop: 15 }}
        renderItem={renderItem}
      />
      {selectedMovie && (
        <Modal visible={true} animationType="fade" transparent={true}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedMovie.title}</Text>
            <Text style={styles.modalSubtitle}>
              {formatDate(selectedMovie.release_date)}
            </Text>
            <View style={styles.modalContent}>
              <View style={styles.actionContainer}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={toggleSeen}
                >
                  <Icon
                    name={seen ? "eye" : "eye-outline"}
                    size={50}
                    color="#fff"
                  />
                  <Text style={styles.actionText}>Já vi</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={toggleFav}
                >
                  <Icon
                    name={fav ? "star" : "star-outline"}
                    size={50}
                    color="#fff"
                  />
                  <Text style={styles.actionText}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={toggleWList}
                >
                  <Icon
                    name={wlist ? "time" : "time-outline"}
                    size={50}
                    color="#fff"
                  />
                  <Text style={styles.actionText}>Quero ver</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableHighlight
                  style={styles.actionButtonText}
                  activeOpacity={0.6}
                  underlayColor="#626060"
                  onPress={goToMovieScreen}
                >
                  <Text style={styles.buttonText}>Ir para o filme</Text>
                </TouchableHighlight>
              </View>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Concluído</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 0,
  },
  containerTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: -2,
  },
  titulo: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 6,
  },
  poster: {
    height: 140,
    width: 95,
    borderRadius: 5,
    marginHorizontal: 6,
    borderColor: "#4E4C4C",
    borderWidth: 0.4,
  },
  botao: {
    paddingHorizontal: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  modalContent: {
    width: 353,
    backgroundColor: "#4E4C4C",
    borderRadius: 9,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 0,
  },
  modalSubtitle: {
    color: "#fff",
    fontSize: 17,
    marginTop: 0,
    marginBottom: 5,
  },
  modalDirector: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  modalRuntime: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  modalDescription: {
    color: "#aaa",
    marginTop: 10,
    textAlign: "justify",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#4E4C4C",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 171,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 12,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBlockColor: "#fff",
  },
  actionButton: {
    alignItems: "center",
    flex: 1,
  },
  actionText: {
    color: "#fff",
    marginTop: 5,
    fontSize: 12,
    fontWeight: "regular",
  },
  buttonText: {
    margin: 15,
    color: "#fff",
    fontSize: 20,
  },
  actionButtonText: {
    backgroundColor: "#4E4C4C",
    width: 340,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});
