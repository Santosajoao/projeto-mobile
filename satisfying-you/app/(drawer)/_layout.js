import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

export default function Layout() {
  const [loaded, error] = useFonts({
    'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
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
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2B1D62',
            borderBottomColor: '#2B1D62',
          },
  
          headerTintColor: '#fff',
          
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: '',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
