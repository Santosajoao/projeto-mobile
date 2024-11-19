import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from "react-native";
import Botao from "../../src/components/Botao";
import { router } from "expo-router";
import Apagar from "../../src/components/BotaoApagar";

export default function modificarPesquisa() {
  const [nome, setNome] = useState("Carnaval 2024");
  const [data, setData] = useState("16/02/2024");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(true);

  const handlemodificarPequisa = () => {
    // Verificando se o nome não está vazio
    if (nome.length === 0) {
      setErrorMessage("Preencha o nome da pesquisa");
      return;
    }

    // Verificando se a data não está vazia
    if (data.length === 0) {
      setErrorMessage("Preencha a data");
      return;
    }

    // Se não houver erros, podemos definir que não há erro
    setError(false);
    setErrorMessage("");

    router.push("/(drawer)");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Nome</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        <Text style={styles.text}>Data</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputdata}
            value={data}
            onChangeText={setData}
          />
          <Image
            source={require("../../assets/images/calendar.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>Imagem</Text>
        <View style={styles.inputContainerImagem}>
          <Image
            source={require("../../assets/images/carnaval.png")}
            style={styles.imagemodificar}
          />
        </View>

        <Text style={[styles.text, { color: "#FD7979" }, { fontSize: 16 }]}>
          {errorMessage}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Botão de icone de apagar */}
          <Botao
            color={"#37BD6D"}
            fontFamily={"AveriaLibre"}
            title="SALVAR"
            onPress={handlemodificarPequisa}
            textColor={"#fff"}
            size={20}
            width={"80%"}
            borderRadius={0}
          />
          <Apagar
            iconName="trash-o"
            iconSize={40}
            iconColor="#fff"
            title="Apagar"
            route={"/(drawer)"}
          />
        </View>

        <View style={{ height: 50 }} />
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "AveriaLibre",
    color: "#3F92C5",
    height: 40,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
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
    paddingHorizontal: 6,
    backgroundColor: "#fff",
  },
  inputdata: {
    fontFamily: "AveriaLibre",
    color: "#3F92C5",
    height: 40,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderWidth: 1,
    paddingHorizontal: 6,
    backgroundColor: "#fff",
    width: "97.3%",
    alignItems: "flex-start",
  },

  inputContainerImagem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "AveriaLibre",
    color: "#3F92C5",
    height: 70,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderWidth: 1,
    paddingHorizontal: 6,
    width: "40%",
    marginBottom: 42,
  },

  image: {
    width: 20,
    height: 20,
    marginRight: 10, // Espaçamento entre a imagem e o input
  },
  imagemodificar: {
    width: 50,
    height: 50,
    marginRight: 10, // Espaçamento entre a imagem e o input
  },
});
