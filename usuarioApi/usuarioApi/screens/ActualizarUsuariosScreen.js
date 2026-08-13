import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { API_URL } from '../config';

export default function ActualizarUsuarioScreen() {
    const params = useLocalSearchParams();
    const usuario = typeof params.usuario === 'string' ? JSON.parse(params.usuario) : params.usuario;
    const router = useRouter();

    const [nombre, setNombre] = useState(usuario.nombre);
    const [edad, setEdad] = useState(usuario.edad.toString());
    const [guardando, setGuardando] = useState(false);

    const actualizarDatos = async () => {
        if (nombre.trim() === '' || edad.trim() === '') {
        Alert.alert("Campos vacíos", "Llena todos los campos");
        return;
        }

        try {
        setGuardando(true);
        const respuesta = await fetch(`${API_URL}/v1/usuarios/${usuario.id}`, {
            method: "PUT",
            headers: { 
              "Content-Type": "application/json",
              "Authorization": "Basic YWRtaW46MTIzNA=="
            },
            body: JSON.stringify({ nombre: nombre, edad: Number(edad) })
        });

        if (respuesta.ok) {
            Alert.alert("Éxito", "Los datos se han actualizado");
            router.push('/consulta'); 
        } else {
            Alert.alert("Error", "No se ha podido actualizar");
        }
        } catch (error) {
        console.log(`Error: ${error}`);
        Alert.alert("Error", "Problema de conexión");
        } finally {
        setGuardando(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Actualizar Usuario</Text>

        <View style={styles.card}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
            />

            <Text style={styles.label}>Edad</Text>
            <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={edad}
            onChangeText={setEdad}
            />

            <Pressable 
            onPress={actualizarDatos}
            disabled={guardando}
            style={styles.boton}
            >
            <Text style={styles.textoBoton}>
                {guardando ? "Guardando..." : "Guardar cambios"}
            </Text>
            </Pressable>
        </View>
        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1F2937',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    elevation: 4,
  },

  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
    fontWeight: 'bold',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },

  boton: {
    backgroundColor: '#FACC15',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#1F2937',
    fontSize: 17,
    fontWeight: 'bold',
  },

});
