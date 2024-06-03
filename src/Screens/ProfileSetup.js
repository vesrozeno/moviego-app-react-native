import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from "expo-image-picker";
import { setItem, getItem } from "../storage/AsyncStorage";

export default ({ route, navigation }) => {
  const { id_user } = route.params;
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveUserData = async (id_user, name, image) => {
    try {
      // Recupera usuários já existentes
      const storedData = await getItem("@userData");
      const parsedData = storedData ? JSON.parse(storedData) : [];
      // Cria um novo objeto email e senha
      const newData = { id_user, name, image };
      // Adiciona novo objeto ao array de credenciais
      parsedData.push(newData);
      // Salva o array atualizado de credenciais
      await setItem("@userData", JSON.stringify(parsedData));

      console.log("Dados salvos com sucesso", newData);
      navigation.navigate("SignInStack");
    } catch (error) {
      console.error("Erro ao salvar dados: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#4E4C4C" hidden={false} />
      <Image source={require("../img/moviego-big.png")} style={styles.logo} />
      <View style={styles.formContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingBottom: 20,
            paddingTop: 10,
          }}
        >
          {image ? (
            <Image source={{ uri: image }} style={styles.imageIcon} />
          ) : (
            <FontAwesome name="user-circle" size={55} color="#ccc" />
          )}
          <TouchableOpacity
            style={styles.photoUploadButton}
            onPress={pickImage}
          >
            <Text style={styles.photoUploadText}>Fazer upload de foto</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#4E4C4C"
          onChangeText={(newText) => setName(newText)}
          defaultValue={name}
        />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => saveUserData(id_user, name, image)}
          >
            <Text style={styles.completeButtonText}>CONCLUIR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4E4C4C",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    marginTop: -80,
    marginBottom: 15,
    width: 270,
    height: 99,
    resizeMode: "contain",
  },
  formContainer: {
    width: 330,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 15,
  },
  photoUploadButton: {
    backgroundColor: "#4E4C4C",
    borderRadius: 8,
    width: "45%",
    marginLeft: 25,
    height: 33,
    alignItems: "center",
    alignContent: "center",
  },
  photoUploadText: {
    color: "#ccc",
    marginTop: 10,
    fontSize: 11,
    fontStyle: "italic",
  },
  input: {
    width: 305,
    height: 42,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 14,
    color: "#000",
    marginBottom: 25,
  },
  dateInput: {
    width: 143,
    height: 42,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    marginBottom: 25,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dateInputText: {
    color: "#4E4C4C",
    marginLeft: 10,
    fontSize: 11,
  },
  completeButton: {
    backgroundColor: "#4E4C4C",
    borderRadius: 8,
    width: 85,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
  },
  completeButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  imageIcon: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
});
