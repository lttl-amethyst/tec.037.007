import {View, Text, StyleSheet, Button} from 'react-native';
import {Link, useRouter} from 'expo-router';
import {globalStyles} from '@/constants/globalStyles';

export default function Detalhes(){
    const router = useRouter();
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Página de Detalhes</Text>
            <Link href="/login" style={globalStyles.button}>Sair</Link>

            <Button title= 'realizar Logout' onPress={() => {
                router.dismissAll();
                router.replace('/login');
            }}/>
        </View>
    )
}
