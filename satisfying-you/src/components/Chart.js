import { View } from "react-native";
import PieChart from "react-native-pie-chart";
import React from "react";

export default function Chart() {

    const series = [10, 20, 30, 40];
    const sliceColor = ["#F44336", "#2196F3", "#FFEB3B", "#4CAF50"];

  return (
    <View style={{ marginRight: 20, marginBottom: 50 }}>    
      <PieChart
        widthAndHeight={220}
        series={[
          { value: 19, color: "#53D8D8" }, //ciano
          { value: 30, color: "#F1CE7E" }, //amarelo
          { value: 30, color: "#6994FE" }, //azul
          { value: 40, color: "#5FCDA4" }, //verde
          { value: 21, color: "#EA7288" }, //rosa
        ]}
        doughnut={true} // Set to true for a doughnut chart
        coverRadius={10} // Adjust for the hole size
      />
    </View>
  );
}
