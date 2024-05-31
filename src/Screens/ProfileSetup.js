import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileSetupScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/moviego-big.png')} style={styles.logo} />
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.photoUploadButton}>
          <FontAwesome name="user-circle" size={80} color="#ccc" />
          <Text style={styles.photoUploadText}>Fazer upload de foto</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.dateInput}>
          <FontAwesome name="calendar" size={24} color="#ccc" />
          <Text style={styles.dateInputText}>Data de nascimento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.completeButton}>
          <Text style={styles.completeButtonText}>CONCLUIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    marginTop: 0,
    width:270,
    height:160,
    resizeMode:'contain'
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  photoUploadButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photoUploadText: {
    color: '#ccc',
    marginTop: 10,
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
  dateInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#555',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#fff',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateInputText: {
    color: '#aaa',
    marginLeft: 10,
  },
  completeButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileSetupScreen;
