import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TopBar from "../components/TopBar";
import commonStyles from "../../styles/commonStyles";

import { setItem, getItem } from "../storage/AsyncStorage";

export default ({ route, navigation }) => {
  const { id_user } = route.params;
  console.log(id_user);

  const [userData, setUserData] = useState(null);

  const searchUserData = async (id_user) => {
    try {
      const storedData = await getItem("@userData");
      const parsedData = storedData ? JSON.parse(storedData) : [];

      let userDataFound = null;
      parsedData.forEach((element) => {
        if (element.id_user === id_user) {
          userDataFound = element;
        }
      });

      if (userDataFound) {
        console.log("Usuário encontrado: ", userDataFound);
        return userDataFound;
      } else {
        console.log("Usuário não encontrado.");
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Carrega dados do usuário
  useEffect(() => {
    (async () => {
      const data = await searchUserData(id_user);
      setUserData(data);
    })();
  }, []);

  console.log(userData);

  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar animated={true} backgroundColor="#4E4C4C" hidden={false} />
      <TopBar></TopBar>
      <View
        style={{
          marginTop: 10,
          marginRight: 10,
          alignItems: "flex-end",
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: 30,
          paddingTop: 5,
        }}
      >
        {userData && userData.image ? (
          <>
            <Image source={{ uri: userData.image }} style={styles.imageIcon} />
            <Text style={styles.name_text}>{userData.name}</Text>
          </>
        ) : null}
      </View>
      <ScrollView
        style={commonStyles.container}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 20 }}
      >
        <View style={styles.containerTop}>
          <View>
            <View
              style={{
                marginTop: 10,
                marginRight: 25,
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
      </ScrollView>
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
  imageIcon: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
});
