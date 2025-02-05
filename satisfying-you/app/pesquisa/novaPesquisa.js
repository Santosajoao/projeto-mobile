import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import Botao from "../../src/components/Botao";
import { router } from "expo-router";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../../src/firebase/config";
import { launchImageLibrary } from "react-native-image-picker";
import ImageResizer from "react-native-image-resizer";
import * as ImagePicker from 'expo-image-picker';

export default function novaPesquisa() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [imagem, setImagem] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(true);
  const [message, setMessage] = useState("");

  const pesquisasCollection = collection(db, "pesquisas");

  const handlenovaPequisa = () => {
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

    addDoc(pesquisasCollection, {
      nome: nome,
      data: data,
      imagem: imagem,
    })
      .then((docRef) => {
        const novaPesquisa = {
          nome: nome,
          data: data,
          imagem: imagem,
          iconName: "",
          iconColor: "",
          id: docRef.id,
          avRuim: 0,
          avBom: 0,
          avExcelente: 0,
          avNeutro: 0,
          avPessimo: 0,
        };

        // Atualize o documento com o id
        updateDoc(docRef, novaPesquisa)
          .then(() => {
            setMessage("Pesquisa cadastrada com sucesso!");
            setTimeout(() => {
             router.push("/(drawer)");
            }, 3000);
          })
          .catch((error) => {
            setErrorMessage("Erro ao cadastrar pesquisa");
          });

      })
      .catch((error) => {
        setErrorMessage("Erro ao cadastrar pesquisa");
      });
  };

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
  const pickImage = async () => {
    // Solicitar permissão para acessar a galeria
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      setErrorMessage("Permissão para acessar a galeria negada");
      return;
    }
  
    // Abrir a galeria
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  S
  
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    } else {
      setErrorMessage("Imagem não selecionada");
    }
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

          <Pressable onPress={pickImage}>
            <View style={styles.inputContainerImagem}>
                <Text style={styles.textInputimagem}>
                  Câmera/Galeria de imagens
                </Text>
            </View>
          </Pressable>
        {imagem && (
          <Image
            source={{ uri: imagem }}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
        )}

        <Text style={[styles.text, { color: "#FD7979" }, { fontSize: 16 }]}>
          {errorMessage}
        </Text>

        <Botao
          color={"#37BD6D"}
          fontFamily={"AveriaLibre"}
          title="CADASTRAR"
          onPress={handlenovaPequisa}
          textColor={"#fff"}
          size={20}
          marginTop={15}
        />

        <View style={{ height: 50 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 0,
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

  inputimagem: {
    fontFamily: "AveriaLibre",
    color: "#3F92C5",
    height: 70,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderWidth: 1,
    paddingHorizontal: 6,
    backgroundColor: "#fff",
    width: "40%",
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
  textWithImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
