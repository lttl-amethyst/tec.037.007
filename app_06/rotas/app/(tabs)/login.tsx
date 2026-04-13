import {View, Text, StyleSheet} from 'react-native';
import { globalStyles } from '@/constants/globalStyles';

export default function Login(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Página de Login</Text>
        </View>
    )
}
