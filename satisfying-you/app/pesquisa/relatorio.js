import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Relatorio() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/pie-chart 1.png")}
          style={styles.image}
        />
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: "#F1CE7E" }]} />
            <Text style={styles.legendText}>Excelente</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: "#6994FE" }]} />
            <Text style={styles.legendText}>Bom</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: "#5FCDA4" }]} />
            <Text style={styles.legendText}>Neutro</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: "#EA7288" }]} />
            <Text style={styles.legendText}>Ruim</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: "#53D8D8" }]} />
            <Text style={styles.legendText}>Péssimo</Text>
          </View>
        </View>
      </View>
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
    width: 300,
    height:300,
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
