import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CardAcoesPesquisa from "../../src/components/CardAcoesPesquisa";

export default function acoesPesquisa() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <CardAcoesPesquisa
          iconName="file-document-edit-outline"
          iconSize={100}
          iconColor="#fff"
          title="Modificar"
          route={"pesquisa/modificarPesquisa"}
        />
        <CardAcoesPesquisa
          iconName="checkbox-multiple-outline"
          iconSize={100}
          iconColor="#fff"
          title="Coletar dados"
          route={"pesquisa/coletarDados"}
        />
        <CardAcoesPesquisa
          iconName="chart-donut"
          iconSize={100}
          iconColor="#fff"
          title="Relatório"
          route={"pesquisa/relatorio"}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#372775",
  },
  cardContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
});
