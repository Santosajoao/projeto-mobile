import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import Botao from "../../src/components/Botao";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(true);

  const handleLogin = () => {
    // Verificando se o email é válido
    if (email.length === 0) {
      setErrorMessage("O campo email não pode ser vazio");
      return;
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

    if (password !== '12345') {
      setErrorMessage("E-mail ou senha inválidos");
      return;
    }

    // Se não houver erros, podemos definir que não há erro
    setError(false);
    setErrorMessage("");

    router.push("/(drawer)");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textWithImage}>
        <Text style={styles.title}>Satisfying.you</Text>
        <Image
          source={require("../../assets/images/image.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={[styles.text, { color: "#FD7979" }]}>{errorMessage}</Text>

      <Botao
        color={"#37BD6D"}
        fontFamily={"AveriaLibre"}
        title="Entrar"
        onPress={handleLogin}
        textColor={"#fff"}
        size={20}
      />

      <View style={{ height: 50 }} />

      <Botao
        color="#419ED7"
        title="Criar minha conta"
        fontFamily="AveriaLibre"
        textColor="#fff"
        size={20}
        link="/autenticacao/criarConta"
      />

      <Botao
        color={"#B0CCDE"}
        title="Esqueci minha senha"
        onPress={handleLogin}
        fontFamily="AveriaLibre"
        textColor={"#fff"}
        size={20}
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
  textButton: {
    //vou fazer um botão na mão
    color: "#419ED7",
    fontSize: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: "100%",
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
