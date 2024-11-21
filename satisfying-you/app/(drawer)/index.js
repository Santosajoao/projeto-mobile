import React from "react";
import { View, TextInput, StyleSheet, ScrollView, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Botao from "../../src/components/Botao";
import Card from "../../src/components/Card";

const Home = () => {
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

      {/* Cards */}
      <View style={styles.cardContainer}>
        <Card
          iconName="devices"
          iconSize={100}
          iconColor="#704141"
          title="Secomp 2023"
          caption="10/10/2023"
          route={"pesquisa/acoesPesquisa"}
        />
        <Card
          iconName="groups"
          iconSize={100}
          iconColor="#383838"
          title="Ubuntu 2022"
          caption="06/06/2022"
          route={"pesquisa/acoesPesquisa"}
        />
        <Card
          iconName="woman"
          iconSize={100}
          iconColor="#D71616"
          title="Meninas CPU"
          caption="01/04/2022"
          route={"pesquisa/acoesPesquisa"}
        />
        <Card
          iconName="celebration"
          iconSize={100}
          iconColor="#C60EB3"
          title="Carnaval"
          caption="01/04/2022"
          route={"pesquisa/acoesPesquisa"}
        />
      </View>
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
