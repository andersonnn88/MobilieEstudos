//npm install @react-native-community/async-storage --save
//npm install @react-native-community/async-storage --save
//npm install @react-native-community/async-storage --save
import React, { useState, useEffect  } from 'react'
import { AsyncStorage, View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native'


export default function TextoInicall() {
  const [nome, setNome] = useState('')
  const [novoNome, setNovoNome] = useState('')

  const handleSave = async () => {
    if(novoNome != ''){
      setNovoNome('')
      await AsyncStorage.setItem('@nome', novoNome);
      setNome(novoNome);
      
    }
  }

  const getNome = async  () =>{
    const n = await AsyncStorage.getItem('@nome')
    setNome(n);
  }
useEffect(()=>{
  getNome();
}, [])
  return (
    <View style={styles.container}>

      <TextInput
        style={styles.TextInput}
        placeholder="Qual seu nome"
        value={novoNome} 
        onChangeText={e=>setNovoNome(e)}


      />
      <TouchableOpacity 
      style={styles.botao}
      onPress={handleSave}
      >
        <Text>Salvar</Text>
      </TouchableOpacity>
      <View style={styles.caixaText}>
        <Text style={{ fontSize: 15 }}>{nome}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'center',
    alignItems: "center",
    //backgroundColor: "yellow",
    paddingTop: 30

  },
  TextInput: {
    fontSize: 15,
    height: 50,
    width: '90%',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10
  },
  botao: {
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 10,
    height: 30,
    width: '60%',
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  caixaText: {
    width: '80%',
    height: '60%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 40,
    padding: 10
  }

})