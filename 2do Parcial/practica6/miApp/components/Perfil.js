import { Button, Text, Image, View, StyleSheet } from "react-native";
import React,{useState} from "react";


export const Perfil = ({nombre, materia, carrera, cuatri, style}) => {
    const [mostrar, setMostrar] = useState(false); 
    return(

        //Perfil usando desestructuracion


    <View style={[estilos.tarjeta, style]}>
        <Text style={estilos.nombre}>{nombre}</Text>

        {mostrar &&
        <> 

        <Image source= {require('../assets/Foto de CV.jpeg')}
        style={{ width: 100, height: 100 }}></Image>
        <Text style={estilos.carrera}>{carrera}</Text>
        <Text style={estilos.otroTexto}>{materia}</Text>
        <Text style={estilos.otroTexto}>{cuatri}</Text>
        </>
        
        
        }
        
        <Button 
        title="Ver Pefil Completo"
        onPress={() => setMostrar(!mostrar)}
        >

        </Button>
    </View>
    )

    
}

const estilos = StyleSheet.create({

    nombre: {
        fontSize: 24,
        fontWeight: 700,
        textTransform: 'uppercase'
    },
    carrera:{
        fontSize:18,
        color: 'red',
        fontFamily: 'Roboto'
    },
    otroTexto:{
        fontSize:12,
        fontFamily:'Courier',
        fontStyle: 'italic'
    },
    tarjeta:{
        borderWidth: 3,
        margin: 20,
        padding: 25
    }
});