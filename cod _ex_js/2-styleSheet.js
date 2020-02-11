import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from  'react-native';
//SafeAreaView -> iphone area do aplicaivo
export default ()=>{
    return (
        <View style={styles.page}>
            <Text style={{color:"#FFF"}}>Hello World</Text>
            <Text style={[styles.text, {fontSize:22}]}>Hello World</Text>
            
        </View>
    );
}
//style={{color:"#FFF"}} -> com colcheite permite passar objetos in-line
//Função com objetos
const styles = StyleSheet.create({
    page:{
        width:200,
        height:200,
        backgroundColor:'#ff0000'
    },
    text:{
        fontSize:17
    }
});