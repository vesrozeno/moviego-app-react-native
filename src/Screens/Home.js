import React from "react";
import { Text, View } from "react-native";
import commonStyles from "../../styles/commonStyles";
import Carrosel from "../components/Carrosel";
import TopBar from "../components/TopBar";

const data = [
  {
    title: "Laranja",
    color: "#FF6633",
  },
  {
    title: "Pele",
    color: "#FFB399",
  },
  {
    title: "Rosa",
    color: "#FF33FF",
  },
  {
    title: "Amarelo",
    color: "#FFFF99",
  },
  {
    title: "Azul Claro",
    color: "#00B3E6",
  },
  {
    title: "Dijon",
    color: "#E6B333",
  },
  {
    title: "Azul Royal",
    color: "#3366E6",
  },
];
export default (props) => {
  return (
    <View style={commonStyles.container}>
      <TopBar></TopBar>

      <Carrosel title="Nos Cinemas" data={data} />
      <Carrosel title="Popular" data={data} />
      <Carrosel title="Melhor Avaliados" data={data} />
    </View>
  );
};
