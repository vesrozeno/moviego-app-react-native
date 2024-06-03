import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// Custom Components
import commonStyles from "../../styles/commonStyles";
import TopBar from "../components/TopBar";
import { Divider } from "react-native-paper";

const { width } = Dimensions.get("window");

const minhasListas = [
  {
    name: "Já vi",
    color: "#3366E6", // Capa (com image na FlatList)
  },
  {
    name: "Favoritos",
    color: "#E6B333",
  },
  {
    name: "Quero ver",
    color: "#00B3E6",
  },
];

export default ({ route, navigation }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar animated={true} backgroundColor="#4E4C4C" hidden={false} />
      <TopBar></TopBar>
      <ScrollView
        style={commonStyles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={commonStyles.container}>
          <View style={styles.container}>
            <View style={styles.containerTitulo}>
              <Text style={styles.titulo}>Minhas Listas</Text>
            </View>
            {minhasListas.map((item, index) => (
              <>
                <View style={styles.containerFlexList} key={index}>
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => handlePress()}
                    >
                      <Image
                        source={require("../../assets/relampagoMcQueen.jpg")}
                        resizeMode="cover"
                        style={{
                          height: 131,
                          width: 88,
                          borderRadius: 5,
                          borderColor: "gray",
                          borderWidth: 0.4,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.nomeLista}>{item.name}</Text>
                </View>
                <Divider style={{ backgroundColor: "gray" }} />
              </>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  containerTitulo: {
    alignItems: "flex-start",
    paddingHorizontal: 15,
  },
  containerFlexList: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
  },
  titulo: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "regular",
  },
  nomeLista: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    alignSelf: "center",
    marginLeft: 15,
  },
  textoBotao: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFF",
    marginRight: 10,
  },
  botao: {
    backgroundColor: "#4E4C4C",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  flatListStyle: {
    marginTop: 15,
  },
});
