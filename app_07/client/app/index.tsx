import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
    const [data, setData] = useState([])
    const url = 'http://localhost:3000/alunos';
    useEffect(() => {
        fetch(url)
        .then((response)=> response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
})

    return (
        <View style= {styles.container}>
            <Text style= {styles.title}>Lista de Alunos</Text>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id } 
                renderItem={({item}) => (
                    <View style= {styles.row}>
                    <Text>{item.nome}</Text>
                    <Text>{item.media}</Text>
                    </View>
                )} />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20},
    title: {fontSize: 20, fontWeight: 'bold', padding: 20},
    row: {flexDirection: 'row', paddingVertical: 10}
})