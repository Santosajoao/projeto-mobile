import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, ScrollView, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Botao from "../../src/components/Botao";
import Card from "../../src/components/Card";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../src/firebase/config";

const Home = () => {
  const [pesquisas, setPesquisas] = useState([]);
  const pesquisasCollection = collection(db, "pesquisas");

  useEffect(() => {
    const querySnapshot = onSnapshot(pesquisasCollection, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setPesquisas(data);
    });
  }, []);

  if (pesquisas.length === 0) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Carregando...</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={25}
          color="#8B8B8B"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Insira o termo de busca..."
        />
      </View>
      
        <ScrollView
          contentContainerStyle={styles.cardContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {pesquisas.map((pesquisa, index) => (
            <Card
              key={index}
              iconName={pesquisa.iconName}
              iconSize={100}
              iconColor={pesquisa.iconColor}
              title={pesquisa.nome}
              caption={pesquisa.data}
              route={"pesquisa/acoesPesquisa"}
              imagem={pesquisa.imagem || null}
              pesquisa={pesquisa}
            />
          ))}
        </ScrollView>

      <Botao
        color={"#37BD6D"}
        fontFamily={"AveriaLibre"}
        title={"Nova Pesquisa".toUpperCase()}
        textColor={"#fff"}
        size={20}
        marginTop={30}
        link="/pesquisa/novaPesquisa"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#372775",
  },
  containerCards: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#372775",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchIcon: {
    position: "absolute",
    zIndex: 1,
    left: 10,
  },
  searchInput: {
    height: 40,
    color: "#8B8B8B",
    paddingHorizontal: 40,
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "AveriaLibre",
  },
  cardContainer: {
    flexGrow: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
});

export default Home;
