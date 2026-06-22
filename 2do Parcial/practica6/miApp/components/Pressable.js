import { Pressable, View, StyleSheet, Text, Switch } from "react-native";
import React,{use, useState} from "react";

export const ejemploPressable = () => {

    cosnt [buttonText, setBottonText] = useState("Dame clic");
    const [isDarkMode, setDarkMode] = useState(false);

    return(
        <View style={styles.container}>
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
                onLongPress={() => {
                console.log("Presión prolongada");
                setButtonText("Presión prologada detectada");
                }}
            >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>

            <Text style={styles.text}>Dark Mode</Text>
            <Switch
                value={isDarkMode}
                onValueChange={(previousState) => setIsDarkMode(!previousState)}
                trackColor={{ false: "#767577", true: "lightblue" }}
                thumbColor="#f4f3f4"
            />
        </View>
    )}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 10,
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 50,
    },
    text: {
        fontSize: 18,
    }
    });