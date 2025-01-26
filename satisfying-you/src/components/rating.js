import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { updateDoc, doc, increment} from "firebase/firestore";
import { db } from "../../src/firebase/config";
import { useSelector } from "react-redux";


const Rating = ({ iconName, iconSize, iconColor, caption, route, avaliacao }) => {
  const navigation = useNavigation();
  const pesquisa = useSelector((state) => state.pesquisa);
  console.log(pesquisa);
  

  const handlePress = () => {
   updateDoc(doc(db, "pesquisas", pesquisa.pesquisaInfo.id), {
      [avaliacao]: increment(1)
    });
    navigation.navigate(route);
  }
    

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
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