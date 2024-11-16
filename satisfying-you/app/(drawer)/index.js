import React from "react";
import { View, TextInput, StyleSheet, ScrollView, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={25} color="#8B8B8B" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Insira o termo de busca..."
        />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text>Card 1</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 3</Text>
        </View>
      </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 5,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flex: 1,
    marginHorizontal: 5,
  },
});

export default Home;
