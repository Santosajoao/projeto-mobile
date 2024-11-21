import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Rating = ({ iconName, iconSize, iconColor, caption, route }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate(route)} style={styles.iconContainer}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
        {caption && <Text style={styles.iconCaption}>{caption}</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  iconCaption: {
    color: "#fff",
    fontFamily: "AveriaLibre",
    fontSize: 12,
    
  },
});

export default Rating;