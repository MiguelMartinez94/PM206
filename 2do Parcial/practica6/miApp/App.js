import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';


export default function App() {
  return (
    <View style={styles.container}>
      

      <Text>Componente de Perfil</Text>
      <Perfil 
      nombre="Miguel Adrian Martinez Salinas" 
      carrera = "Sistemas" 
      materia = "PM" 
      cuatri = "Noveno"
      style={styles.tarjetaRoja}></Perfil>

      <Text>---------------------------------------------------------------------</Text>
      <Text>---------------------------------------------------------------------</Text>

      <Text>Componente de Perfil</Text>
      <Perfil 
      nombre="Miguel Martinez" 
      carrera = "Sistemas" 
      materia = "PM" 
      cuatri = "Noveno"
      style={styles.tarjetaVerde}></Perfil>

      <Text>---------------------------------------------------------------------</Text>
      <Text>---------------------------------------------------------------------</Text>

      <Text>Componente de Perfil</Text>
      <Perfil 
      nombre="Miguel Martinez" 
      carrera = "Sistemas" 
      materia = "PM" 
      cuatri = "Noveno"
      style={styles.tarjeta}></Perfil>

      <Text>---------------------------------------------------------------------</Text>
      <Text>---------------------------------------------------------------------</Text>

      <Text>Componente de Perfil</Text>
      <Perfil 
      nombre="Miguel Adrian Martinez Salinas" 
      carrera = "Sistemas" 
      materia = "PM" 
      cuatri = "Noveno"
      style={styles.tarjetaRoja}></Perfil>

      <Text>---------------------------------------------------------------------</Text>
      <Text>---------------------------------------------------------------------</Text>

      <Text>Componente de Perfil</Text>
      <Perfil 
      nombre="Miguel Martinez" 
      carrera = "Sistemas" 
      materia = "PM" 
      cuatri = "Noveno"
      style={styles.tarjetaVerde}></Perfil>

      <Text>---------------------------------------------------------------------</Text>
      <Text>---------------------------------------------------------------------</Text>

      <Text>Componente de Perfil</Text>
      <Perfil 
      nombre="Miguel Martinez" 
      carrera = "Sistemas" 
      materia = "PM" 
      cuatri = "Noveno"
      style={styles.tarjeta}></Perfil>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  tarjetaRoja:{
    backgroundColor: 'red'
  },
  tarjetaVerde:{
    backgroundColor:'green'
  }
});
