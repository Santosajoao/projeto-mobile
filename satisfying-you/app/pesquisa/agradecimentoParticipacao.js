import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AgradecimentoParticipacao() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("pesquisa/coletarDados");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Obrigado por participar da pesquisa!</Text>
        <Text style={styles.title}>Aguardamos você no próximo ano!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#372775",
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "AveriaLibre",
    fontSize: 40,
    marginBottom: 26,
    textAlign: "center",
  },
});
