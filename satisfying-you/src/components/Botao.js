import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; 

const Botao = ({ onPress, title, color, size, textColor, fontFamily, link, marginBottom, marginTop, width, borderRadius }) => {
  const router = useRouter(); 

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
    if (link) {
      router.push(link);
    }
  };

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color, marginBottom: marginBottom || 10, marginTop: marginTop, width: width, borderRadius: borderRadius || 5}]} onPress={handlePress}>
      <Text style={[{ color: textColor, fontSize: size, fontFamily: fontFamily }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
  },
});

export default Botao;
