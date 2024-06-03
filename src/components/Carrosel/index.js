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
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

//const { width } = Dimensions.get("window");
const TMDB_API_KEY = "8bb51d05c8c98d7ff15be6ae8b9282bb";

export default ({ title, list_type }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigation = useNavigation();

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

  const handlePress = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const goToMovieScreen = () => {
    navigation.navigate("MovieStack", { movieId: selectedMovie.id });
    closeModal();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7} onPress={() => handlePress(item)}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        resizeMode="cover"
        style={styles.poster}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTitulo}
        activeOpacity={0.7}
        //onPress={() => moveTela()}
      >
        <Text style={styles.titulo}>{title}</Text>
        <FontAwesome
          name="chevron-right"
          size={15}
          color="#4E4C4C"
          style={styles.botao}
        />
      </TouchableOpacity>
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
        <Modal visible={true} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedMovie.title}</Text>
              <Text style={styles.modalSubtitle}>
                {selectedMovie.release_date}
              </Text>
              <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.actionButton}>
                  <FontAwesome name="eye" size={30} color="#fff" />
                  <Text style={styles.actionText}>Já vi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <FontAwesome name="heart" size={30} color="#fff" />
                  <Text style={styles.actionText}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <FontAwesome name="plus" size={30} color="#fff" />
                  <Text style={styles.actionText}>Quero ver</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.actionButtonText}
                  onPress={goToMovieScreen}
                >
                  <Text style={styles.buttonText}>mais informações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButtonText}>
                  <Text style={styles.buttonText}>Adicionar à listas</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Concluído</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#444",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
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
    fontSize: 14,
    marginTop: 0,
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
    backgroundColor: "#555",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "100%",
    marginTop: 20,
  },
  actionButton: {
    alignItems: "center",
    flex: 1,
  },
  actionText: {
    color: "#fff",
    marginTop: 5,
  },
  buttonText: {
    margin: 15,
    color: "#fff",
    fontSize: 18,
  },
  actionButtonText: {
    backgroundColor: "#000",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});
