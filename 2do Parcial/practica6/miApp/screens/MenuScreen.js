import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import TextInputScreen from './TextInputAlertScreen';
import PressableSwitch from './PressableSwitch'; 
import ListasScreen from './ListasScreen'; 
import ImageSplashScreen from './ImageSplashScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalBottomSheetScreen from './ModalBottomSheetScreen';

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'safeArea':
            return <SafeAreaScreen />;
        case 'textInput':
            return <TextInputScreen />;
        case 'pressable':
            return <PressableSwitch />; 
        case 'listas':
            return <ListasScreen />;
        case 'splash':
            return <ImageSplashScreen />;
        case 'indicador':
            return <ActivityIndicatorScreen />;
        case 'modal':
            return <ModalBottomSheetScreen />;    
        case 'menu':
        default:    
            return (
                <View style={styles.container}>
                
                    <Text style={{ fontSize: 18, marginBottom: 15, color: '#fff' }}>Menú de prácticas</Text>

                    <Button title='Práctica de Tarjetas' onPress={() => setScreen('tarjetas')}/>
                    <Button title='SafeAreaView' onPress={() => setScreen('safeArea')}/>
                    <Button title='TextInput & Alert' onPress={() => setScreen('textInput')}/>
                    <Button title='Pressable & Switch' onPress={() => setScreen('pressable')}/>
                    <Button title='FlatList & Section List' onPress={() => setScreen('listas')}/>
                    
                    <Button title='ImageBackground & SplashScreen' onPress={() => setScreen('splash')}/>
                    <Button title='ActivityIndicator, Keyboard' onPress={() => setScreen('indicador')}/>
                    <Button title='Modal & BottomSheet' onPress={() => setScreen('modal')}/>

                    <StatusBar style='auto'/>

                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#856e6e',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
});