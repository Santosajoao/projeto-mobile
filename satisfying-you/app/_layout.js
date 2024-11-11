import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
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

  return (
    <Stack
     screenOptions={{
        headerStyle: {
          backgroundColor: '#2B1D62',
          borderBottomColor: '#2B1D62',
        },

        headerTintColor: '#573FBA',
        
        headerTitleStyle: {
          fontFamily: 'AveriaLibre',
          color: '#fff',
        }
        
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="autenticacao/criarConta" options={{ title: 'Nova Conta' }} />
    </Stack>
    
  );
}
