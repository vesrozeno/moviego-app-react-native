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
  {
    name: "Lista Personalizada",
    color: "#00B3E6",
  },
  {
    name: "Lista Personalizada",
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
              <TouchableOpacity style={styles.botao} activeOpacity={0.7}>
                <Text style={styles.textoBotao}>Nova lista</Text>
                <AntDesign name="pluscircle" size={24} color="#FFF" />
              </TouchableOpacity>
            </View>
            {minhasListas.map((item, index) => (
              <>
                <View style={styles.containerFlexList} key={index}>
                  <View
                    style={{
                      backgroundColor: item.color,
                      height: width / 2.4,
                      width: width * 0.3,
                      marginHorizontal: 7,
                      borderRadius: 12,
                    }}
                  >
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => handlePress()}
                    >
                      <Image
                        source={require("../../assets/relampagoMcQueen.jpg")}
                        resizeMode="repeat"
                        style={{ height: width / 2.4, width: width * 0.3 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.nomeLista}>{item.name}</Text>
                </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  containerFlexList: {
    marginTop: 30,
    flexDirection: "row",
  },
  titulo: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
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
