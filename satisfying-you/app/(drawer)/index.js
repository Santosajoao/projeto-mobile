import React from "react";
import { View, TextInput, StyleSheet, ScrollView, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Botao from "../../src/components/Botao";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Search Input no topo */}
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
        <View style={styles.card}>
          <Icon name="devices" size={100} color="#704141" />
          <Text style={styles.cardText}>SECOMP 2023</Text>
          <Text style={styles.cardCaption}>10/10/2023</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 2</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 3</Text>
        </View>
      </View>
      <Botao
        color={"#37BD6D"}
        fontFamily={"AveriaLibre"}
        title={"Nova Pesquisa".toUpperCase()}
        textColor={"#fff"}
        size={20}
        marginTop={30}
        // onPress={handleCreateAccount}
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  card: {
    width: 271,
    height: 238,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    color: "#3F92C5",
    fontFamily: "AveriaLibre-Light",
  },
  cardCaption: {
    color: "#8B8B8B",
    fontFamily: "AveriaLibre",
    fontSize: 12,
  },
});

export default Home;
