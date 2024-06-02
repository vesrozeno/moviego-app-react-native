import { fonts } from "@rneui/base";
import React from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const { width } = Dimensions.get("window");

export default ({ title, data, moveTela }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>{title}</Text>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.7}
          //onPress={() => moveTela()}
        >
          <AntDesign name="right" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item)}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment={"start"}
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        style={{ marginTop: 15 }}
        renderItem={({ item }) => (
          <>
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
                  source={require("../../../assets/relampagoMcQueen.jpg")}
                  resizeMode="repeat"
                  style={{ height: width / 2.4, width: width * 0.3 }}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  containerTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titulo: {
    color: "#FFF",
    fontSize: 19,
    fontWeight: "bold",
  },
  botao: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});
