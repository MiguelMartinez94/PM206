import { Button, Text, Image, View } from "react-native";
import React,{useState} from "react";

export const Perfil = ({nombre, materia, carrera, cuatri}) => {
    const [mostrar, setMostrar] = useState(false); 
    return(

        //Perfil usando desestructuracion


    <View>
        <Text>{nombre}</Text>

        {mostrar &&
        <> 

        <Image source= {require('../assets/Foto de CV.jpeg')}
        style={{ width: 100, height: 100 }}></Image>
        <Text>{carrera}</Text>
        <Text>{materia}</Text>
        <Text>{cuatri}</Text>
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

//Perfil usando props
{ <View>
        <Text>{props.nombre}</Text>
        <Image source= {require('../assets/Foto de CV.jpeg')}
        style={{ width: 100, height: 100 }}></Image>
        <Text>{props.carrera}</Text>
        <Text>{props.materia}</Text>
        <Text>{props.cuatri}</Text>
        <Button title="Ver Pefil Completo"></Button>
    </View> }