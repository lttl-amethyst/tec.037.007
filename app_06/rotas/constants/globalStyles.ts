import { StyleSheet } from "react-native";

export const globalStyles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold'
    },
    button: { 
        marginTop: 20, 
        color:'blue', 
        fontSize:18
    }
});