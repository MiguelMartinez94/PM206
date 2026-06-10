import { Button, Text, Image, View } from "react-native";

export const Perfil = () => {
    return(
    <View>
        <Text>Miguel Adrian Martinez Salinas</Text>
        <Image source= {require('../assets/Foto de CV.jpeg')}
        style={{ width: 100, height: 100 }}></Image>
        <Text>Ingeniero en Sistemas Computacionales</Text>
        <Button title="Ver Pefil Completo"></Button>
    </View>
    )

    
}