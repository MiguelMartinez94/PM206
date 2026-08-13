import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import AppErrorBoundary from "../components/AppErrorBoundary";

// Mantener visible la pantalla de bienvenida hasta que React Native esté listo.
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  useEffect(() => {
    const ocultar = async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.log(e);
      }
    };
    ocultar();
  }, []);

  return (
    <AppErrorBoundary>
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName="(tabs)"
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="detalles" />
        <Stack.Screen name="actualizar" />
      </Stack>
    </AppErrorBoundary>
  );
}
