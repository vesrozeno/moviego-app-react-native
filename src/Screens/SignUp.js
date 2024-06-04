import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
} from "react-native";
import uuid from "react-native-uuid";

import { setItem, getItem } from "../storage/AsyncStorage";

export default ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async (email, password) => {
    try {
      // Gera um id para novo usuário
      id_user = uuid.v4();
      // Recupera usuários já existentes
      const storedData = await getItem("@credentials");
      const parsedData = storedData ? JSON.parse(storedData) : [];
      // Cria um novo objeto email e senha
      const newCredentials = { id_user, email, password };
      // Adiciona novo objeto ao array de credenciais
      parsedData.push(newCredentials);
      // Salva o array atualizado de credenciais
      await setItem("@credentials", JSON.stringify(parsedData));

      console.log("Credenciais salvas com sucesso", newCredentials);
      setEmail("");
      setPassword("");
      navigation.navigate("ProfileSetupStack", { id_user });
    } catch (error) {
      console.error("Erro ao salvar credenciais: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#4E4C4C" hidden={false} />
      <Image source={require("../img/moviego-big.png")} style={styles.logo} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>CRIE SUA CONTA:</Text>
        <TextInput
          style={styles.input}
          placeholder="e-mail"
          placeholderTextColor="#4E4C4C"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={email}
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          placeholderTextColor="#4E4C4C"
          secureTextEntry
          onChangeText={(newText) => setPassword(newText)}
          defaultValue={password}
        />
        <View
          style={{
            justifyContent: "flex-end",
            marginLeft: 175,
          }}
        >
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => {
              if (email.trim() !== "" && password.trim() != "") {
                createAccount(email, password);
              } else {
                Alert.alert(
                  "Campos Vazios",
                  "Por favor, preencha todos os campos antes de criar uma conta."
                );
              }
            }}
          >
            <Text style={styles.createButtonText}>CRIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.loginButtonText}>Já tem uma conta?</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          setEmail("");
          setPassword("");
          navigation.navigate("SignInStack");
        }}
      >
        <Text style={styles.createButtonText}>ENTRAR</Text>
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
    color: "#000",
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
    width: 90,
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
