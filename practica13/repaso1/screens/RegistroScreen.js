import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Text, Switch, TextInput, Alert,  View, StyleSheet, Platform, Keyboard} from "react-native";

export default function RegistroScreen() {

    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [cuatri, setCuatri] = useState('');

    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    const procesarRegistro = () => {
            if (Platform.OS !== 'web') Keyboard.dismiss();
    
            if (!nombre || !carrera || !cuatri) {
                alertasManager("Campos incompletos", "Debes llenar todos los campos");
                return;
            }else if (isNaN(cuatri)) {
                alertasManager("Error", "El cuatrimestre debe ser un número.")
            }
    
            alertasManager("Registro enviado", 
                `
                Nombre: ${nombre}\n
                Carrera: ${carrera}\n
                Semestre: ${cuatri}\n\n
                Taller: ${taller ? "Sí":"No"}\n
                Constancia: ${constancia ? "Sí":"No"}\n
                Deportes: ${deportes ? "Sí":"No"}\n
                `);
        };
    
        const alertasManager = (titulo, mensaje) => {
            if (Platform.OS === 'web') {
                alert(`${titulo}: ${mensaje}`);
            } else {
                Alert.alert(titulo, mensaje);
            }
        };

    return(

        <View style={styles.container}>
            <Text style={styles.titulo}>Registro de Evento Universitario</Text>

            <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre}/>
            <TextInput style={styles.input} placeholder="Carrera" value={carrera} onChangeText={setCarrera}/>
            <TextInput style={styles.input} placeholder="Cuatrimestre Actual" value={cuatri} onChangeText={setCuatri}/>

            <Text style={styles.subtitulo}>Opciones</Text>

            <View style={styles.filaSwitch}>
                <Text>¿Asistirá al talller?</Text>
                <Switch
                    value={taller}
                    onValueChange={() => {setTaller(!taller)}}
                    trackColor={{false: "#767577", true: "lightblue"}}
                    thumbColor={"#f4f3f4"}
                />
            </View>

            <View style={styles.filaSwitch}>
                <Text>¿Requiere constancia?</Text>
                <Switch
                    value={constancia}
                    onValueChange={()=>{setConstancia(!constancia)}}
                    trackColor={{false: "#767577", true: "lightblue"}}
                    thumbColor={"#f4f3f4"}
                />
            </View>

            <View style={styles.filaSwitch}>
                <Text>¿Participará deportes?</Text>
                <Switch
                    value={deportes}
                    onValueChange={() => setDeportes(!deportes)}
                    trackColor={{false: "#767577", true: "lightblue"}}
                    thumbColor={"#f4f3f4"}
                />
            </View>

            <View style={styles.espaciadoBoton}>
                <Button title="Enviar Registro" onPress={procesarRegistro}></Button>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5
    },
    filaSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    espaciadoBoton: {
        marginTop: 30
    }
});