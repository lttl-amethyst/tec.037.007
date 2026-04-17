import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {Input} from '@/components/input';
import {Link, useRouter} from 'expo-router';

export default function Index(){
    const router = useRouter();
    return (
        <View style={style.container}>
            <Image source={require("@/assets/senai.png")}/>
            <Text style={style.titulo}>Bem-Vindo ao Senai</Text>
             <Button title= 'Sobre' onPress={() => {
                router.push('/sobre');}}/>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32
    },
    titulo: {
        fontSize: 20,
        fontWeight: 700
    },
})