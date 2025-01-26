import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { setPesquisaInfo } from "../../redux/pesquisaReducer";
import { useNavigation } from "@react-navigation/native";

const Card = ({ caption, route, iconSize, pesquisa }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const dispatchInfo = () => {
    dispatch(setPesquisaInfo(pesquisa));
    navigation.navigate(route)
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={dispatchInfo}
    >
      {pesquisa.iconName && <Icon name={pesquisa.iconName} size={iconSize} color={pesquisa.iconColor} />}
      {pesquisa.imagem && <Image source={{ uri: pesquisa.imagem }} style={{ width: 100, height: 100 }} />}
      <Text style={styles.cardText}>{pesquisa.nome.toUpperCase()}</Text>
      {caption && <Text style={styles.cardCaption}>{pesquisa.data}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
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

export default Card;
