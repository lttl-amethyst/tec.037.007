import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Input} from '@/components/input';

export default function Index(){
    return(
            <View style={style.container}>
                <Image source={require("@/assets/bubu.webp")}/>
            <Text style={style.titulo}>Log In</Text>
            <Input placeholder='E-mail'keyboardType='email-address'/>
            <Input placeholder='Senha' secureTextEntry/>
            <TouchableOpacity style={style.botao}>
                Entrar
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32
    },
    titulo: {
        fontSize: 32,
        fontWeight: 900
    },
    botao: {
        width: '100%',
        height: 48,
        backgroundColor: '#DCDC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        color: 'white'
    }
})