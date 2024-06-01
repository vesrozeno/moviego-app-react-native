import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginRight: -75 }}>
        <TouchableOpacity style={styles.edit_button}>
          <Text style={styles.edit_text}>editar dados</Text>
          <FontAwesome name="pencil" size={15} color="#ccc" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 40,
          paddingTop: 10,
        }}
      >
        <FontAwesome name="user-circle" size={55} color="#ccc" />
        <Text style={styles.name_text}>Nome do usuário</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.statsButton}
          onPress={() => navigation.navigate("SignInStack")}
        >
          <View style={{ flexDirection: "column" }}>
            <FontAwesome name="eye" size={30} color="#ccc" />
            <Text style={styles.tinyButtonText}>Já vi</Text>
          </View>
          <Text style={styles.statsButtonText}>100 filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.statsButton}
          onPress={() => navigation.navigate("SignInStack")}
        >
          <View style={{ flexDirection: "column" }}>
            <FontAwesome name="star" size={30} color="#ccc" />
            <Text style={styles.tinyButtonText}>Favoritos</Text>
          </View>
          <Text style={styles.statsButtonText}>56 filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.statsButton}
          onPress={() => navigation.navigate("SignInStack")}
        >
          <View style={{ flexDirection: "column" }}>
            <FontAwesome name="list" size={30} color="#ccc" />
            <Text style={styles.tinyButtonText}>Quero ver</Text>
          </View>
          <Text style={styles.statsButtonText}>89 filmes</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() => navigation.navigate("SignInStack")}
        >
          <Text style={styles.completeButtonText}>SAIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
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
  edit_button: {
    backgroundColor: "#4E4C4C",
    borderRadius: 13,
    width: 137,
    marginLeft: 25,
    height: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  edit_text: {
    color: "#ccc",
    marginRight: 5,
    fontSize: 15,
  },
  name_text: {
    color: "#ccc",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
    padding: 10,
  },
  input: {
    width: 305,
    height: 42,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 14,
    color: "#fff",
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
  statsButton: {
    marginBottom: 10,
    backgroundColor: "#4E4C4C",
    borderRadius: 12,
    width: 235,
    height: 110,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  statsButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  tinyButtonText: {
    color: "#fff",
    fontSize: 11,
  },
  completeButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});
