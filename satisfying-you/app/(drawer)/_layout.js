import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { MaterialIcons } from "@expo/vector-icons";
import CustomDrawerContent from "../../src/components/customDrawer";

export default function Layout() {
  const [loaded, error] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
    "AveriaLibre-Light": require("../../assets/fonts/AveriaLibre-Light.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#372775", // Cor de fundo do Drawer
            width: 260, // Largura do Drawer
          },
          drawerLabelStyle: {
            fontFamily: "AveriaLibre",
            fontSize: 16,
            color: "#fff",
          },

          drawerInactiveTintColor: "#fff", // Cor dos itens não selecionados
          drawerActiveTintColor: "#000",

          drawerItemStyle: {
            borderRadius: 0, // Remove o borderRadius
            backgroundColor: "transparent", // Remove a cor de fundo
          },

          headerStyle: {
            backgroundColor: "#2B1D62",
            borderBottomColor: "#2B1D62",
          },

          headerTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Pesquisa",
            title: "",
            drawerIcon: ({ size }) => (
              <MaterialIcons name="description" size={size} color={"#fff"} />
            ),
          }}
        />
        <Drawer.Screen
          name="autenticacao/login"
          options={{
            drawerLabel: "Sair",
            title: "Sair",
            drawerIcon: ({ size }) => (
              <MaterialIcons name="logout" size={size} color={"#fff"} />
            ),
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
