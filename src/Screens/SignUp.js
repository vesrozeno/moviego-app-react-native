import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/moviego-big.png')} style={styles.logo} />
      <Text style={styles.title}>CRIE SUA CONTA:</Text>
      <TextInput
        style={styles.input}
        placeholder="e-mail"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="senha"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>CRIAR</Text>
      </TouchableOpacity>
        <Text style={styles.loginButtonText}>Já tem uma conta?</Text>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.loginButtonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 20,
  },
  logo: {
    marginTop: 25,
    width:270,
    height:160,
    resizeMode:'contain'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    marginTop:30
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#555',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#fff',
    marginBottom: 15,
  },
  createButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 45,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginButton: {
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
});

export default SignUp;
