import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default class AppErrorBoundary extends React.Component {
  state = { hasError: false, mensaje: '' };

  static getDerivedStateFromError(error) {
    return { hasError: true, mensaje: error?.message || String(error) };
  }

  componentDidCatch(error, info) {
    console.log('Error en la app:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Ocurrió un error</Text>
          <Text style={styles.mensaje}>{this.state.mensaje}</Text>
          <Pressable
            style={styles.boton}
            onPress={() => this.setState({ hasError: false, mensaje: '' })}
          >
            <Text style={styles.textoBoton}>Reintentar</Text>
          </Pressable>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 15,
  },
  mensaje: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 25,
  },
  boton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
