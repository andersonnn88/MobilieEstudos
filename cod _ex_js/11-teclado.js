import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'


export default function TextoInicall() {
  const [ nome, setNome] = useState('Anderson')
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.key}>

      <View style={styles.logo}>
        
      </View>
      <View style={styles.container1}>
        <TextInput  style={styles.TextInput} placeholder="Digite seu nome"/>
        <TextInput  utoCapitalize="none" 
              secureTextEntry style={styles.TextInput} placeholder="Digite sua senha"/>
              <TouchableOpacity  style={styles.botao}>
                  <Text style={{fontSize:20}}>Logar</Text>

              </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "yellow",
   
  },
  key:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
    //backgroundColor:'blue'

  },
  container1:{
    //backgroundColor:"blue",
    width:'100%' ,
    height:200,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    //borderWidth: 0.5,
    //borderColor: '#000',

  },
  TextInput: {
    //backgroundColor: 'red',
    borderWidth: 0.5,
    borderColor: '#000',
    height:50,
    width:200,
    marginTop:10,
    borderRadius:10,
    paddingHorizontal:10

  }, 
   logo:{
     width:100,
     height:100,
     borderWidth: 0.5,
     borderColor: '#000',
     marginBottom:20,
     borderRadius:10


   },
   botao:{
     width:250,
     height:40,
     borderWidth: 0.5,
     borderColor: '#000',
     borderRadius:10,
     marginTop:20,
     alignItems:"center",
     justifyContent:"center",
     fontSize:30

   }

})