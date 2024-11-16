import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Botao from "../../src/components/Botao";
import { router } from "expo-router";

const CriarConta = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(true);

  const handleCreateAccount = () => {
    // Verificando se o email é válido
    if (email.length === 0) {
      setErrorMessage("O campo email não pode ser vazio");
      return; // Interromper a execução após encontrar um erro
    }

    if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("Insira um email válido");
      return;
    }

    // Verificando se a senha e a confirmação de senha são iguais
    if (password.length === 0) {
      setErrorMessage("O campo senha não pode ser vazio");
      return;
    }

    if (confirmPassword.length === 0) {
      setErrorMessage("O campo confirmar senha não pode ser vazio");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("O campo repetir senha está diferente do campo senha");
      return;
    }

    // Se não houver erros, podemos definir que não há erro
    setError(false);
    setErrorMessage("");

    router.push("/(drawer)")
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
      <Text style={[styles.text, { color: "#FD7979" }]}>{errorMessage}</Text>

      <Botao
        color={"#37BD6D"}
        fontFamily={"AveriaLibre"}
        title="Criar conta"
        textColor={"#fff"}
        size={20}
        marginTop={30}
        onPress={handleCreateAccount}
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
