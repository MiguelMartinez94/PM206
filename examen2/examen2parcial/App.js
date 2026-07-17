import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TarjetaMascota} from './components/TarjetaMascota';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text>Tarjeta Mascota</Text>

      <TarjetaMascota

      nombre='Miguel'
      especie='Humana'
      edad='24'

      />

    <Text>Tarjeta Mascota</Text>

      <TarjetaMascota

      nombre='Belén'
      especie='Humana'
      edad='20'

      />

      <Text>Tarjeta Mascota</Text>

      <TarjetaMascota

      nombre='Lupita'
      especie='Humana'
      edad='24'

      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
