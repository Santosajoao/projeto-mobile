import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaded, error] = useFonts({
    'AveriaLibre': require('../assets/fonts/AveriaLibre-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const handleLogin = () => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Satisfying.you</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#372775",
  },
  title: {
    color: "#fff",
    fontSize: 50,
    fontFamily: "AveriaLibre",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    color: "#fff",  
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
