import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StatusBar } from 'expo-status-bar';

/* import {Saludo} from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from '../components/Perfil'; */

import TarjetasScreen from './TarjetasScreen'
import SafeAreaScreen from './SafeAreaScreen'

import { useState } from 'react';


export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen />
        case 'safeArea':
            return <SafeAreaScreen />
        case 'menu':
            default:    
    
            return (
                <View style={styles.container}>
                
                <Text>Menú de prácticas</Text>

                <Button title='Práctica de Tarjetas' onPress={() => setScreen('tarjetas')}/>
                <Button title='SafeAreaView' onPress={() => setScreen('safeArea')}/>
                <Button title='Pressable & Switch' onPress={() => setScreen('tarjetas')}/>
                <Button title='TextInput & Alert' onPress={() => setScreen('safeArea')}/>
                <Button title='FlatList & Section List' onPress={() => setScreen('tarjetas')}/>
                <Button title='SafeAreaView' onPress={() => setScreen('safeArea')}/>
                <Button title='mageBackgroung & SlapshScreen' onPress={() => setScreen('tarjetas')}/>
                <Button title='ActivityIndicator, KeyboardAvoidingView' onPress={() => setScreen('safeArea')}/>
                <Button title='Modal & BottomSheet' onPress={() => setScreen('safeArea')}/>

                <StatusBar style='auto'/>

                </View>
            );
            }}

    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#856e6e',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
    },
});