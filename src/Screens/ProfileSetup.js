import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default ({ route, navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [data, setData] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirmDate = (date) => {
    dataLida =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    setData(dataLida);
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <Image source={require("../img/moviego-big.png")} style={styles.logo} />
      <View style={styles.formContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 20,
            paddingTop: 10,
          }}
        >
          <FontAwesome name="user-circle" size={55} color="#ccc" />
          <TouchableOpacity style={styles.photoUploadButton}>
            <Text style={styles.photoUploadText}>Fazer upload de foto</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#4E4C4C"
        />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.dateInput} onPress={showDatePicker}>
            <FontAwesome name="calendar" size={14} color="#4E4C4C" />
            <Text style={styles.dateInputText}>
              {data == null ? "Data de nascimento" : data}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            locale="pt_BR"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
            containerStyle={styles.dateInput}
          />
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.completeButtonText}>CONCLUIR</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: -80,
    marginBottom: 15,
    width: 270,
    height: 99,
    resizeMode: "contain",
  },
  formContainer: {
    width: 330,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 15,
  },
  photoUploadButton: {
    backgroundColor: "#4E4C4C",
    borderRadius: 8,
    width: 145,
    marginLeft: 25,
    height: 33,
    alignItems: "center",
  },
  photoUploadText: {
    color: "#ccc",
    marginTop: 10,
  },
  input: {
    width: 305,
    height: 42,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 14,
    color: "#fff",
    marginBottom: 25,
  },
  dateInput: {
    width: 143,
    height: 42,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    marginBottom: 25,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dateInputText: {
    color: "#4E4C4C",
    marginLeft: 10,
    fontSize: 11,
  },
  completeButton: {
    backgroundColor: "#4E4C4C",
    borderRadius: 8,
    width: 85,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
  },
  completeButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});
