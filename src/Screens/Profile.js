import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TopBar from "../components/TopBar";
import commonStyles from "../../styles/commonStyles";
export default ({ route, navigation }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.containerTop}>
        <TopBar></TopBar>
        <View>
          <View
            style={{
              marginTop: 10,
              marginRight: 10,
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity style={styles.edit_button}>
              <Text style={styles.edit_text}>editar dados</Text>
              <FontAwesome name="pencil" size={15} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: 30,
              paddingTop: 5,
            }}
          >
            <FontAwesome name="user-circle" size={55} color="#ccc" />
            <Text style={styles.name_text}>Nome do usuário</Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    backgroundColor: "#323232",
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
    marginTop: 5,
    padding: 10,
  },
  input: {
    width: 305,
    height: 42,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    fontSize: 14,
    color: "#fff",
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
