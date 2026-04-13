import {View, Text, StyleSheet,} from 'react-native';
import {Link, useRouter} from 'expo-router';
import {globalStyles} from '@/constants/globalStyles';

export default function Index(){
    const router = useRouter();
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Página Inicial</Text>
            <Link href="/detalhes" style={globalStyles.button}>Detalhes</Link>
        </View>
    )
}