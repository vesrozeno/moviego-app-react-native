import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default ({ route, navigation }) => {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.backgroundContainer}>
            <Image source={require('../img/carros2.jpg')} style={styles.backgroundImage} />
          </View>
          <View style={styles.contentContainer}>
            
            <View style={styles.movieContainer}>
                <View style={styles.posterContainer}>
                    <Image source={require('../img/carros1.jpeg')} style={styles.poster} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Carros <Text style={styles.year}>2006</Text></Text>
                    <Text style={styles.subtitle}>DIRIGIDO POR</Text>
                    <Text style={styles.director}>John Lasseter</Text>
                    <Text style={styles.runtime}>117 mins</Text>
                </View>
            </View>

            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec tortor dui.
                Integer est leo, commodo quis dictum vel ... <Text style={styles.synopsis}>ver sinopse</Text>
            </Text>

            <Text style={styles.sectionTitle}>Avaliações:</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4,4</Text>
              <FontAwesome name="star" size={24} color="gold" />
            </View>
            <View style={styles.actionContainer}>
              <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="eye" size={24} color="#fff" />
                <Text style={styles.actionText}>Já vi</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="heart" size={24} color="#fff" />
                <Text style={styles.actionText}>Favoritos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="plus" size={24} color="#fff" />
                <Text style={styles.actionText}>Quero ver</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Adicionar à listas</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
    },
    backgroundContainer: {
      width: '100%',
      height: 170,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    contentContainer: {
      paddingHorizontal: 20,
      paddingTop: 30,
      alignItems: 'center',
    },
    movieContainer: {
        flexDirection: 'row'
    },
    posterContainer: {
      width: 93,
      height: 139,
      marginTop: -40,
      zIndex: 1,
      flex: 3
    },
    poster: {
      width: '100%',
      height: '100%',
      borderRadius: 10
    },
    textContainer: {
      width: '100%',
      alignItems: 'flex-start',
      paddingStart: 15,
      marginTop: -20,
      flex: 7
    },
    title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    year: {
      color: '#aaa',
      fontSize: 20,
    },
    subtitle: {
      color: '#aaa',
      fontSize: 14,
      marginTop: 5,
    },
    director: {
      color: '#fff',
      fontSize: 16,
      marginTop: 5,
    },
    runtime: {
      color: '#fff',
      fontSize: 16,
      marginTop: 5,
    },
    description: {
      color: '#aaa',
      marginTop: 10,
      textAlign: 'justify',
    },
    synopsis: {
      color: '#fff',
      textDecorationLine: 'underline',
    },
    sectionTitle: {
      color: '#fff',
      fontSize: 18,
      marginBottom: 10,
      marginTop: 20,
      textAlign: 'center',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    rating: {
      color: '#fff',
      fontSize: 24,
      marginRight: 5,
    },
    actionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
      width: '100%',
    },
    actionButton: {
      alignItems: 'center',
      flex: 1
    },
    actionText: {
      color: '#fff',
      marginTop: 5,
    },
    addButton: {
      backgroundColor: '#555',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: '100%',
    },
    addButtonText: {
      color: '#fff',
      fontSize: 18,
    },
  });