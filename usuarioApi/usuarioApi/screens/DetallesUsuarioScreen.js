import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, Modal, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetallesUsuarioScreen() {
    const params = useLocalSearchParams();
    const usuario = typeof params.usuario === 'string' ? JSON.parse(params.usuario) : params.usuario;
    const router = useRouter();

    const [modalVisible, setModalVisible] = useState(false);
    const [eliminando, setEliminando] = useState(false);

    const eliminarUsuario = async () => {
        try {
        setEliminando(true);
        const respuesta = await fetch(`http://192.168.100.13:5000/v1/usuarios/${usuario.id}`, {
            method: 'DELETE',
            headers: {
              "Authorization": "Basic YWRtaW46MTIzNA=="
            }
        });

        if (respuesta.ok) {
            setModalVisible(false);
            Alert.alert("Éxito", "Usuario eliminado correctamente");
            router.back(); 
        } else {
            Alert.alert("Error", "No se pudo eliminar al usuario");
        }
        } catch (error) {
        console.log(error);
        Alert.alert("Error", "Problema de conexión");
        } finally {
        setEliminando(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.tituloPrincipal}>Detalles del Usuario</Text>

        <View style={styles.card}>
            <Text style={styles.label}>Nombre</Text>
            <Text style={styles.valor}>{usuario.nombre}</Text>

            <View style={styles.linea}></View>

            <Text style={styles.label}>Edad</Text>
            <Text style={styles.valor}>{usuario.edad} años</Text>

            <View style={styles.botonesContainer}>
            <Pressable 
                style={[styles.boton, styles.btnActualizar]}
                onPress={() => router.push({ pathname: '/actualizar', params: { usuario: JSON.stringify(usuario) } })}
            >
                <Text style={styles.textoBotonDark}>Actualizar</Text>
            </Pressable>

            <Pressable 
                style={[styles.boton, styles.btnEliminar]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textoBotonLight}>Eliminar</Text>
            </Pressable>
            </View>
        </View>

        <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles.modalFondo}>
            <View style={styles.modalVista}>
                <Text style={styles.modalTitulo}>Confirmar eliminación</Text>
                <Text style={styles.modalTexto}>
                ¿Eliminar al usuario {usuario.nombre}?
                </Text>
                
                <View style={styles.modalBotones}>
                <Pressable style={styles.btnCancelar} onPress={() => setModalVisible(false)}>
                    <Text style={styles.textoBtnCancelar}>Cancelar</Text>
                </Pressable>
                
                <Pressable style={styles.btnConfirmarEliminar} onPress={eliminarUsuario} disabled={eliminando}>
                    <Text style={styles.textoBotonLight}>{eliminando ? "..." : "Sí, eliminar"}</Text>
                </Pressable>
                </View>
            </View>
            </View>
        </Modal>

        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1F2937',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    elevation: 4,
  },

  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 5,
  },

  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 15,
  },

  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },

  botonesContainer: {
    marginTop: 30,
    gap: 15,
    alignItems: 'center',
  },

  boton: {
    width: '60%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  btnActualizar: {
    backgroundColor: '#FACC15',
  },

  btnEliminar: {
    backgroundColor: '#DC2626',
  },

  textoBotonDark: {
    color: '#1F2937',
    fontWeight: 'bold',
    fontSize: 16,
  },

  textoBotonLight: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  modalFondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalVista: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },

  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 15,
  },

  modalTexto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    color: '#4B5563',
  },

  modalBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  btnCancelar: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },

  textoBtnCancelar: {
    color: '#1F2937',
    fontWeight: 'bold',
  },

  btnConfirmarEliminar: {
    flex: 1,
    backgroundColor: '#DC2626',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
  },

});