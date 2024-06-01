import image from "../../img/moviego-small.png";
import { StyleSheet, View, Image } from "react-native";

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
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  topBarImage: {
    marginTop: 6,
    height: 40,
    resizeMode: "contain",
  },
});
