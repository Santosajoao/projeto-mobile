import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Botao from "../../src/components/Botao";

const CriarConta = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = () => {
    // Add your account creation logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.text}>Repetir Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Botao
        color={"#37BD6D"}
        fontFamily={"AveriaLibre"}
        title="Criar conta"
        textColor={"#fff"}
        size={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "AveriaLibre",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#372775",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
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
});

export default CriarConta;
