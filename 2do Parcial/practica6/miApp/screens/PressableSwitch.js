import {StatusBar} from 'expo-status-bar';
import { Pressable, View, StyleSheet, Text, Switch } from 'react-native';
import { useState } from 'react';

export default function PressableSwitchScree(){
    const [buttontext, setButtonText] = useState('Dame Clic');
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <View 
            style = {[styles.container, {backgroundColor: isDarkMode ? "#0000000": "#ffffff"}]}
        >
            <StatusBar style={isDarkMode ? "light":"dark"} />

            <Pressable
            onPress={() => {
                console.log("Se presionó el botón");
                setButtonText("Botón presionado");
            }}

            onPressIn={() => {
                console.log("Se acaba de presionar el botón");
            }}

            onPressOut={() => {
                console.log("Se acaba de soltar el botón");
            }}

            onLongPress={()=>{
                console.log("Presión prolongada");
                setButtonText("Presión prolongada detectada");
            }}
            >
                <Text style = {StyleSheet.buttonText}>{buttonText}</Text>
            </Pressable>

            <Text
                style={[styles.text, {color: isDarkMode ? "#ffffff": "#000000"}]}
            >
                Dark Mode
            </Text>

            <Switch
            
                value={isDarkMode}
                onValueChange={(previousState) => setIsDarkMode((previousState)  => {
                    !previousState})}
                trackColor={{false: "#767577", true: "lightblue"}}
                thumbColor={"#f4f3f4"}
            
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 10,
        marginBottom: 50 
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%", 
        paddingHorizontal: 10
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
});