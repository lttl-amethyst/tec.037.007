import { useEffect, useState } from 'react';
import { ScrollView, View, Text} from 'react-native';

export default function App() {
    interface Pokemon{
        name: string;
        url: string;
    }
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    useEffect(() => {
        buscarPokemons()
    }, [])

    async function buscarPokemons() {
        const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
        const data = await resposta.json();
        console.log(data)
        setPokemons(data.results);
    }
    return (
        <ScrollView>
            {pokemons.map((pokemon) => (
                <View key={pokemon.name}>
                    <Text>{pokemon.name}</Text>
                </View>
            ))}
        </ScrollView>
    )
}