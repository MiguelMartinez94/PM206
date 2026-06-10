import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';


export default function App() {
  return (
    <View style={styles.container}>
      
      
      <Image source={require('./assets/wave.png')} style={styles.img} />

      <Text>Componente 1</Text>
      <Saludo></Saludo>


      <Text>Componente 2</Text>
      <Saludo2></Saludo2>

      <Text>Hola Mundo!</Text>
      <StatusBar style="auto" />

      <Text>\nComponente de Perfil</Text>
      <Perfil></Perfil>
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
