import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
export default ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../img/moviego-big.png")} style={styles.logo} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>ENTRAR NA SUA CONTA:</Text>
        <TextInput
          style={styles.input}
          placeholder="e-mail"
          placeholderTextColor="#4E4C4C"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          placeholderTextColor="#4E4C4C"
          secureTextEntry
        />
        <View
          style={{
            justifyContent: "flex-end",
            marginLeft: 175,
          }}
        >
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate("ProfileSetupStack")}
          >
            <Text style={styles.createButtonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.loginButtonText}>Ainda não tem uma conta?</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text
          style={styles.createButtonText}
          onPress={() => navigation.navigate("SignUpStack")}
        >
          CRIAR
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4E4C4C",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    marginTop: 80,
    width: 270,
    height: 110,
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 19,
    marginBottom: 20,
    marginTop: 30,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 14,
    color: "#fff",
    marginBottom: 15,
  },
  createButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    width: 110,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 45,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    width: 70,
    height: 33,
    justifyContent: "center",
    marginBottom: 45,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
});
