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
    height: "9%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBlockColor: "gray",
  },
  topBarImage: {
    marginTop: 10,
    height: "55%",
    resizeMode: "contain",
  },
});
