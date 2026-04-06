import { Link } from 'expo-router';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function Index() {
    return (
        <View style={estilo.conteiner}>
            <Image source={require("@/assets/header_logo.svg")} />
            <Text style={estilo.titulo}>React Native</Text>
            <Text style={estilo.subtitulo}>Aprenda uma vez, escreva em qualquer lugar.</Text>

            <View style={estilo.btn_group}>
                <Link style={estilo.botao} href="/">Começando</Link>
                <Link style={estilo.botao} href="/">Documentos</Link>
            </View>
        </View>
    )
}
const estilo = StyleSheet.create({
  conteiner: {
    flex: 1, // prioridade
    backgroundColor: 'rgb(27, 27, 29)', // cor de fundo
    justifyContent: "center", // alinhar no centro horiz
    alignItems: "center", // alinhar no centro vertical
  } ,
  titulo: {
    fontSize: 40,
    fontWeight: 700,
    color: 'white'
  },
  subtitulo: {
    fontSize: 25,
    fontWeight: 500,
    color: 'rgb(193,193,196)',
    textAlign: 'center'
  },
  botao: {
    fontSize: 17,
    backgroundColor: 'rgb(88, 196, 220)',
    color: 'rgb(27,27,29)',
    padding: 17,
    borderRadius: 30
  },
  btn_group: {flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20
  }
})