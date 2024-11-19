// Card.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Card = ({ iconName, iconSize, iconColor, title, caption, route }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(route)}
    >
      {iconName && <Icon name={iconName} size={iconSize} color={iconColor} />}
      <Text style={styles.cardText}>{title}</Text>
      {caption && <Text style={styles.cardCaption}>{caption}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 180,
    backgroundColor: "#312464",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginBottom: 20,
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    color: "#fff",
    fontFamily: "AveriaLibre-Light",
  },
  cardCaption: {
    color: "#8B8B8B",
    fontFamily: "AveriaLibre",
    fontSize: 12,
  },
});

export default Card;
