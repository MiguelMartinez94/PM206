import React, { useState } from 'react';
import { View, TextInput, Button, Platform, Alert, StyleSheet, Keyboard } from 'react-native';

export default function TextInputAlertScreen({ cambiarPantalla }) {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [edad, setRaza] = useState('');
    const [correo, setEdad] = useState('');

    const procesarRegistro = () => {
        if (Platform.OS !== 'web') Keyboard.dismiss();

        if (!nombre || !Raza || !Edad) {
            alertasManager("Validación", "Todos los campos son obligatorios.");
            return;
        }

        alertasManager("Éxito", `Registro procesado para: ${nombre}`);
    };

    const alertasManager = (titulo, mensaje) => {
        if (Platform.OS === 'web') {
            alert(`${titulo}: ${mensaje}`);
        } else {
            Alert.alert(titulo, mensaje);
        }
    };

    return (
        <View style={styles.container}>

            <TextInput style={styles.input} placeholder="Nombre Completo" value={nombre} onChangeText={setNombre} />

            <TextInput style={styles.input} placeholder="Raza " value={nombre} onChangeText={setNombre} />

            <TextInput style={styles.input} placeholder="Edad" value={nombre} onChangeText={setNombre} />




            <View style={styles.espacio} />
            <Button title="Registre su mascota" onPress={procesarRegistro} />
        </View>
    );
}






const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f6fa' },
    topBar: { position: 'absolute', top: 50, left: 20 },
    input: { borderWidth: 1, borderColor: '#dcdde1', padding: 12, borderRadius: 8, marginBottom: 12, backgroundColor: '#fff' },
    espacio: { height: 20 }
});


