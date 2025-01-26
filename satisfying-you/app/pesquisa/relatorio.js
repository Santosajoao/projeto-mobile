import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Chart from "../../src/components/Chart";
import { useSelector } from "react-redux";

export default function Relatorio() {
  const pesquisa = useSelector((state) => state.pesquisa);
  const allZero =
    pesquisa.pesquisaInfo.avPessimo == 0 &&
    pesquisa.pesquisaInfo.avExcelente == 0 &&
    pesquisa.pesquisaInfo.avBom == 0 &&
    pesquisa.pesquisaInfo.avNeutro == 0 &&
    pesquisa.pesquisaInfo.avRuim == 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {allZero ? (
        <Text style={styles.legendText}>Relatório ainda sem avaliações</Text>
      ) : (
        <View style={styles.content}>
          <View>
            <Chart style={styles.image} pesquisa={pesquisa.pesquisaInfo} />
          </View>
          
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: "#F1CE7E" }]}
              />
              <Text style={styles.legendText}>Excelente</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: "#6994FE" }]}
              />
              <Text style={styles.legendText}>Bom</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: "#5FCDA4" }]}
              />
              <Text style={styles.legendText}>Neutro</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: "#EA7288" }]}
              />
              <Text style={styles.legendText}>Ruim</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: "#53D8D8" }]}
              />
              <Text style={styles.legendText}>Péssimo</Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#372775",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginRight: 20,
    marginBottom: 50,
  },
  legendContainer: {
    flexDirection: "column",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  legendText: {
    color: "#fff",
    fontFamily: "AveriaLibre",
    fontSize: 16,
  },
});
