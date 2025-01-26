
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Botao from "../../src/components/Botao";
import { router } from "expo-router";
import { auth } from "../../src/firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

export default function esqueciSenhaScreen() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(true);
  const [message, setMessage] = useState("");

  const handleesqueciSenha = () => {
    if (email.length === 0) {
        setErrorMessage("O campo email não pode ser vazio");
        return;
      }
  
      if (!email.includes("@") || !email.includes(".")) {
        setErrorMessage("Insira um email válido");
        return;
      }

    setError(false);
    setErrorMessage("");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Email enviado com sucesso");
        setTimeout(() => {
          router.push("/autenticacao/login");
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("falha" + errorCode + errorMessage);
      });
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
      <Text style={[styles.text, { color: "#37BD6D" }]}>{message}</Text>
      
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