import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function MovieList({ movies }) {
    const navigation = useNavigation()

    const handlePress = (id) => {
        navigation.navigate("MovieStack", { movieId: id });
    };

    const formatDate= (dateString) => {
        const [year, month, day] = dateString.split('-');
        
        const months = [
            'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
            'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ];
    
        const monthName = months[parseInt(month, 10) - 1];
    
        return `${monthName}. de ${year}`;
    }
    
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View style={styles.item}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                    style={styles.poster}
                />
                <View style={styles.details}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{formatDate(item.release_date)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
  
    return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      style={{marginBottom: 65}}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
  },
  poster: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitle: {
    fontSize: 14,
    color: '#b7b7b7'
  },
  overview: {
    fontSize: 14,
  },
});
