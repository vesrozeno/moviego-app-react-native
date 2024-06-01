import image from "../../img/moviego-small.png";
import { StyleSheet, View, Image } from "react-native";
import Constants from "expo-constants";

export default (props) => {
  return (
    <View style={styles.topBar}>
      <Image source={image} style={styles.topBarImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#4E4C4C",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  topBarImage: {
    height: "70%",
    resizeMode: "contain",
  },
});
