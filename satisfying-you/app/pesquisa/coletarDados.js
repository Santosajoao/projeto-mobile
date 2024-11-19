import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Rating from "../../src/components/rating";

export default function coletarDados() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>O que você achou do carnaval? 2024</Text>
        <View style={styles.cardContainer}>
          <Rating
            iconName="sentiment-very-dissatisfied"
            iconSize={100}
            iconColor="#D71616"
            caption="Muito ruim"
            route={"pesquisa/agradecimentoParticipacao"}
          />
          <Rating
            iconName="sentiment-dissatisfied"
            iconSize={100}
            iconColor="#FF360A"
            caption="Ruim"
            route={"pesquisa/agradecimentoParticipacao"}
          />
          <Rating
            iconName="sentiment-neutral"
            iconSize={100}
            iconColor="#FFC632"
            caption="Regular"
            route={"pesquisa/agradecimentoParticipacao"}
          />
          <Rating
            iconName="sentiment-satisfied-alt"
            iconSize={100}
            iconColor="#37BD6D"
            caption="Bom"
            route={"pesquisa/agradecimentoParticipacao"}
          />
          <Rating
            iconName="sentiment-very-satisfied"
            iconSize={100}
            iconColor="#25BC22"
            caption="Muito bom"
            route={"pesquisa/agradecimentoParticipacao"}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#372775",
  },

  title: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "AveriaLibre",
    marginBottom: 26,
    textAlign: "center",
  },
});
