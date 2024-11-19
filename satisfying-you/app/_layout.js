import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    AveriaLibre: require("../assets/fonts/AveriaLibre-Regular.ttf"),
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
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2B1D62",
          borderBottomColor: "#2B1D62",
        },

        headerTintColor: "#573FBA",

        headerTitleStyle: {
          fontFamily: "AveriaLibre",
          color: "#fff",
          fontSize: 30,
        },
      }}
    >
      <Stack.Screen
        name="autenticacao/login"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="autenticacao/criarConta"
        options={{ title: "Nova Conta" }}
      />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="autenticacao/esqueciSenha"
        options={{ title: "Recuperação de senha" }}
      />
      <Stack.Screen
        name="pesquisa/novaPesquisa"
        options={{ title: "Nova pesquisa" }}
      />
      <Stack.Screen
        name="pesquisa/modificarPesquisa"
        options={{ title: "Modificar pesquisa" }}
      />
      <Stack.Screen
        name="pesquisa/acoesPesquisa"
        options={{ title: "Carnaval" }}
      />

      <Stack.Screen
        name="pesquisa/coletarDados"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="pesquisa/agradecimentoParticipacao"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="pesquisa/relatorio"
        options={{ title: "Relatório" }}
      />
    </Stack>
  );
}
