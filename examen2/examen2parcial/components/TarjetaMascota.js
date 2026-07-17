import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text,Botton,TextInput, Button, Platform, Alert, StyleSheet, Keyboard} from "react-native-web";


export const TarjetaMascota = ({nombre, especie, edad})=>{
    return(
            <View>
                <Text >{nombre}</Text>
                <Text>{especie}</Text>
                <Text>{edad}</Text>
                

                
)
};
                  

    
    




