import { View, Text } from "react-native";
import PieChart from "react-native-pie-chart";
import React from "react";

export default function Chart({ pesquisa }) {
  const allZero =
    pesquisa.avPessimo === 0 &&
    pesquisa.avExcelente === 0 &&
    pesquisa.avBom === 0 &&
    pesquisa.avNeutro === 0 &&
    pesquisa.avRuim === 0;
  return (
    <View style={{ marginRight: 20, marginBottom: 50 }}>
      {allZero ? (
        <Text>Relatório ainda sem avaliações</Text>
      ) : (
        <PieChart
          widthAndHeight={220}
          series={[
            { value: pesquisa.avPessimo, color: "#53D8D8" }, //ciano
            { value: pesquisa.avExcelente, color: "#F1CE7E" }, //amarelo
            { value: pesquisa.avBom, color: "#6994FE" }, //azul
            { value: pesquisa.avNeutro, color: "#5FCDA4" }, //verde
            { value: pesquisa.avRuim, color: "#EA7288" }, //rosa
          ]}
          doughnut={true} 
          coverRadius={10}
        />
      )}
    </View>
  );
}
