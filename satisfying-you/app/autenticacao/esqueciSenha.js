
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Botao from "../../src/components/Botao";
import { router } from "expo-router";

export default function esqueciSenhaScreen() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(true);

  const handleesqueciSenha = () => {
    if (email.length === 0) {
        setErrorMessage("O campo email não pode ser vazio");
        return; // Interromper a execução após encontrar um erro
      }
  
      if (!email.includes("@") || !email.includes(".")) {
        setErrorMessage("Insira um email válido");
        return;
      }
    console.log("Email:", email);

    setError(false);
    setErrorMessage("");

    router.push("/autenticacao/login");
  };

  return (
    <View style={styles.container}>
      

      <Text style={[styles.text, {fontSize: 28}]}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder ="email@dominio.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={[styles.text, { color: "#FD7979" }]}>{errorMessage}</Text>
      
      <Botao
        color={"#37BD6D"}
        fontFamily={"AveriaLibre"}
        title="RECUPERAR"
        onPress={handleesqueciSenha}
        textColor={"#fff"}
        size={10}
      />
      

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "AveriaLibre",
    fontSize: 16,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#372775",
  },
  title: {
    color: "#fff",
    fontSize: 50,
    fontFamily: "AveriaLibre",
    marginBottom: 26,
    textAlign: "center",
  },
  input: {
    fontFamily: "AveriaLibre",
    color: "#3F92C5",
    height: 40,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 16,
    marginLeft: 16,
  },
  textWithImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});