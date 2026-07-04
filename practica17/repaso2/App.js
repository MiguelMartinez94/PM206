import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, ImageBackground, ActivityIndicator, Alert } from 'react-native';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);
  const [cargando, setCargando] = useState(false);
  
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMostrarSplash(false);
    }, 2000);
  }, []);

  const agregarLibro = () => {
    if (titulo === '' || autor === '' || genero === '') {
      Alert.alert("Error", "Se deben de llenar todos los camppos");
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const nuevoLibro = {
        titulo: titulo,
        autor: autor,
        genero: genero
      };

      setLibros([...libros, nuevoLibro]);
      
      setTitulo('');
      setAutor('');
      setGenero('');
      
      setCargando(false);
      Alert.alert("Éxito", "Libro agregado");
      
    }, 4000);
  };

  if (mostrarSplash === true) {
    return (
      <View style={styles.pantallaSplash}>
        <Text style={styles.textoSplash}>Cargando...</Text>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <ImageBackground 
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2ixeDWRPq8YxpmNgiiUuJRfhskAlQczOUL4QNIY3q0GTTyu3wrpBWcZE&s=10' }} 
      style={styles.fondo}
    >
      <View style={styles.pantallaPrincipal}>
        <Text style={styles.tituloApp}>Registrar Libro</Text>

        <TextInput 

          style={styles.entradaTexto} 
          placeholder="Título del libro" 
          value={titulo} 
          onChangeText={setTitulo} 

        />

        <TextInput 

          style={styles.entradaTexto} 
          placeholder="Autor" 
          value={autor} 
          onChangeText={setAutor} 

        />
        <TextInput 

          style={styles.entradaTexto} 
          placeholder="Género" 
          value={genero} 
          onChangeText={setGenero} 

        />

        {cargando === true ? (

          <ActivityIndicator size="large" color="blue" style={{ marginBottom: 20 }} />

        ) : (

          <Pressable style={styles.boton} onPress={agregarLibro}>
            <Text style={styles.textoBoton}>Agregar libro</Text>
          </Pressable>

        )}

        <FlatList
          data={libros}
          renderItem={({ item }) => (
            <View style={styles.tarjetaLibro}>
              <Text style={styles.textoTitulo}>{item.titulo}</Text>
              <Text>{item.autor} - {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  pantallaSplash: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoSplash: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  pantallaPrincipal: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  tituloApp: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  entradaTexto: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  boton: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tarjetaLibro: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  textoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});