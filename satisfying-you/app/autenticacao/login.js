import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from "react-native";
import Botao from "../../src/components/Botao";
import { router } from "expo-router";
import { auth } from "../../src/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

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

    // Se não houver erros, podemos definir que não há erro
    setError(false);
    setErrorMessage("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userLogged) => {
        router.push("/(drawer)");
      })
      .catch((error) => {
        const errorMessage = error.message;
        errorMessage == "Firebase: Error (auth/invalid-credential)." ? setErrorMessage("Email ou senha inválidos") : setErrorMessage(errorMessage);
      });
  };

  return (
    <ScrollView>
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
          placeholder="Senha"
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
          fontFamily="AveriaLibre"
          textColor={"#fff"}
          size={20}
          link="/autenticacao/esqueciSenha"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "AveriaLibre",
    fontSize: 20,
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
