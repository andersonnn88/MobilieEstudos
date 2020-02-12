import React from 'react'
import { View, StyleSheet, SafeAreaView} from 'react-native';


export default () => {
    return (
        <SafeAreaView style={sytles.page}>
            <View style={[sytles.quadrado,{backgroundColor:'red'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'blue'}]}></View>
            <View style={[sytles.quadrado,{backgroundColor:'green'}]}></View>
        </SafeAreaView>
    )
}
const sytles = StyleSheet.create({

    page:{
        flex:1,
        flexDirection:'column',
          //justifyContent:"flex-center"
          justifyContent:"center",
          alignItems:"center"
        
    },
   quadrado:{
     height:50,
     width:50
   }
})
