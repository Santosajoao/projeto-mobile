import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import Botao from "../../src/components/Botao";
import { router } from "expo-router";
import Apagar from "../../src/components/BotaoApagar";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../src/firebase/config";
import { useSelector } from "react-redux";
import { launchImageLibrary } from "react-native-image-picker";
import ImageResizer from "react-native-image-resizer";

export default function modificarPesquisa() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(true);
  const pesquisa = useSelector((state) => state.pesquisa);
  const [imagem, setImagem] = useState("");

  // UseEffect para pegar os dados da pesquisa
  useEffect(() => {
    getDoc(doc(db, "pesquisas", pesquisa.pesquisaInfo.id))
      .then((doc) => {
        if (doc.exists()) {
          setNome(doc.data().nome);
          setData(doc.data().data);
          setImagem(doc.data().imagem);
        }
      })
      .catch((error) => {
        return null;
      });
  }, []);

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

    const pesquisaRef = doc(db, "pesquisas", pesquisa.pesquisaInfo.id);

    // Atualizando os dados da pesquisa
    updateDoc(pesquisaRef, {
      nome: nome,
      data: data,
      imagem: imagem,
    })
      .then(() => {
        setMessage("Pesquisa modificada com sucesso");
        setTimeout(() => {
          router.push("/(drawer)");
        }, 3000);
      })
      .catch((error) => {
        setErrorMessage("Erro ao modificar a pesquisa");
      });
  };

  // Função para converter a imagem em base64
  const convertUriToBase64 = async (uri) => {
    const resizedImage = await ImageResizer.createResizedImage(
      uri,
      100,
      100,
      "JPEG",
      100
    );
    const imageUri = await fetch(resizedImage.uri);
    const imageBlob = await imageUri.blob();
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagem(reader.result);
    };
    reader.readAsDataURL(imageBlob);
  };

  // Função para pegar a imagem da galeria
  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          setErrorMessage("Imagem não selecionada");
        } else if (response.errorCode) {
          setErrorMessage("Erro ao selecionar a imagem");
        } else {
          setImagem(response.assets[0].uri);
        }
      }
    );
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
          <Pressable onPress={pickImage}>
            <Text style={styles.textInputimagem}>
              Câmera/Galeria de imagens
            </Text>
          </Pressable>
        </View>

        <Text style={[styles.text, { color: "#37BD6D" }]}>{message}</Text>

        {imagem && (
          <Image
            source={{ uri: imagem }}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
        )}

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
            pesquisaInfo={pesquisa.pesquisaInfo}
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
  textInputimagem: {
    fontFamily: "AveriaLibre",
    color: "#3F92C5",
    paddingHorizontal: 6,
    backgroundColor: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  imagemodificar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
