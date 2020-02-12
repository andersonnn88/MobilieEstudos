import React from 'react'
import { View, StyleSheet, SafeAreaView} from 'react-native';



export default () => {
    return (
        <SafeAreaView style={sytles.page}>
          <View style={sytles.header}>
            <View style={[sytles.quadrado,{backgroundColor:'red'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'blue'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'green'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'red'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'blue'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'green'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'red'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'blue'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'green'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'red'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'blue'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'green'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'red'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'blue'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'green'}]}></View>
            </View>
        </SafeAreaView>
    )
}
const sytles = StyleSheet.create({

    page:{
        flex:1,
        
        
    },
   quadrado:{
     height:50,
     width:50,
     
   },
   header:{
    backgroundColor:'#EEE',
    flexDirection:'row',
    justifyContent:"center",
    height:200,
    flexWrap:'wrap'

    //quebra de linha wrap
   
        
    
   }
})
