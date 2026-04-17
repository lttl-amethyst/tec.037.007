import {View, Text, StyleSheet, Button} from 'react-native';
import {useRouter} from 'expo-router';

export default function Detalhes(){
    const router = useRouter();
    return (
        <View>
            <Text style={style.titulo}>Sobre</Text>
            <Text>O SENAI (Serviço Nacional de Aprendizagem Industrial) é a maior rede privada de educação profissional da América Latina, focada em formar profissionais para a indústria. Oferece cursos técnicos, superiores e de qualificação, com alta taxa de empregabilidade (até 90% em cursos técnicos), impulsionando a competitividade industrial com tecnologia e inovação</Text>
        </View>
    )
}

const style = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: 700
    }
})