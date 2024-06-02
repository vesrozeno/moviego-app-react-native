import { fonts } from "@rneui/base";
import React, { useState } from "react";
import {
    View,
    FlatList,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Modal
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FontAwesome } from '@expo/vector-icons';


const { width } = Dimensions.get("window");

export default ({ title, data, moveTela }) => {
    const [expanded, setExpanded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const handlePress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };


    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>{title}</Text>
                <TouchableOpacity
                    style={styles.botao}
                    activeOpacity={0.7}
                //onPress={() => moveTela()}
                >
                    <AntDesign name="right" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => String(item)}
                showsHorizontalScrollIndicator={false}
                horizontal
                snapToAlignment={"start"}
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                style={{ marginTop: 15 }}
                renderItem={({ item }) => (
                    <>
                        <View
                            style={{
                                backgroundColor: item.color,
                                height: width / 2.4,
                                width: width * 0.3,
                                marginHorizontal: 7,
                                borderRadius: 20,
                            }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => handlePress()}
                            >
                                <Image
                                    source={require("../../../assets/relampagoMcQueen.jpg")}
                                    resizeMode="repeat"
                                    style={{ height: width / 2.4, width: width * 0.3, borderRadius:20 }}
                                />
                            </TouchableOpacity>
                            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <Text style={styles.modalTitle}>Carros</Text>
                                        <Text style={styles.modalSubtitle}>2006</Text>
                                        <View style={styles.actionContainer}>
                                            <TouchableOpacity style={styles.actionButton}>
                                                <FontAwesome name="eye" size={30} color="#fff" />
                                                <Text style={styles.actionText}>Já vi</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.actionButton}>
                                                <FontAwesome name="heart" size={30} color="#fff" />
                                                <Text style={styles.actionText}>Favoritos</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.actionButton}>
                                                <FontAwesome name="plus" size={30} color="#fff" />
                                                <Text style={styles.actionText}>Quero ver</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity style={styles.actionButtonText}>
                                                <Text style={styles.buttonText}>Ir para o filme</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.actionButtonText}>
                                                <Text style={styles.buttonText}>Adicionar à listas</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                            <Text style={styles.closeButtonText}>Concluído</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
    },
    containerTitulo: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titulo: {
        color: "#FFF",
        fontSize: 19,
        fontWeight: "bold",
    },
    botao: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#444',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -80
    },
    modalSubtitle: {
        color: '#fff',
        fontSize: 14,
        marginTop: 0,
    },
    modalDirector: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
    },
    modalRuntime: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
    },
    modalDescription: {
        color: '#aaa',
        marginTop: 10,
        textAlign: 'justify',
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#555',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '100%',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        width: '100%',
        marginTop:20,
    },
    actionButton: {
        alignItems: 'center',
        flex: 1
    },
    actionText: {
        color: '#fff',
        marginTop: 5,
    },
    buttonText: {
        margin: 15,
        color: '#fff',
        fontSize: 18
    },
    actionButtonText: {
        backgroundColor: '#000',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    }
});
