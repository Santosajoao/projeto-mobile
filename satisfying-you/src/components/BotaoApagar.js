import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from 'expo-router'; 
import CustomAlert from "./CustomAlert";

const BotaoApagar = ({ iconName, iconSize, iconColor, title, route }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const router = useRouter(); 
  const handlePress = () => {
    setAlertVisible(true);
  };

  const handleConfirm = () => {
    setAlertVisible(false);
    router.push(route);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
      <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "AveriaLibre",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default BotaoApagar;
