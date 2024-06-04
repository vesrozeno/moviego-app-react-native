import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TopBar from "../components/TopBar";
import commonStyles from "../../styles/commonStyles";

import { setItem, getItem } from "../storage/AsyncStorage";

export default ({ route, navigation }) => {
  const { id_user } = route.params;
  const [userData, setUserData] = useState(null);

  const searchUserData = async (id_user) => {
    try {
      const storedData = await getItem("@userData");
      const parsedData = storedData ? JSON.parse(storedData) : [];

      let userDataFound = null;
      parsedData.forEach((element) => {
        if (element.id_user === id_user.id_user) {
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

  return (
    <SafeAreaView style={commonStyles.container}>
      <>
        <StatusBar animated={true} backgroundColor="#4E4C4C" hidden={false} />
        <TopBar></TopBar>
        <View style={styles.containerTop}>
          <View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              {userData && userData.image ? (
                <>
                  <Image
                    source={{ uri: userData.image }}
                    style={styles.imageIcon}
                  />
                  <Text style={styles.name_text}>{userData.name}</Text>
                </>
              ) : (
                <FontAwesome name="user-circle" size={150} color="#ccc" />
              )}
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
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    backgroundColor: "#323232",
    paddingVertical: 100,
  },

  name_text: {
    color: "#ccc",
    fontWeight: "bold",
    fontSize: 28,
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
  completeButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  imageIcon: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "gray",
  },
});
