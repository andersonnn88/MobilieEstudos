import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native'
import list from './src/lista'

export default function TextoInicall() {
  //<Image source={require('')}/>
  // defaultSource(require)
  const [items, setItems] = useState(list);

  const AddNewItem = (txt) => {
    let newItems = [...items]
    newItems.push({
      id:23,
      task:txt,
      done:false
    })

    setItems(newItems)
  }


  function AddArea(props) {


    const [novo, setNovo] = useState('');
   
    const handleSubmit = () => {
      if (novo.trim() != '') {

          props.onAdd(novo.trim())
   
          setNovo('');
      }


    }



    return (
      <TextInput style={{
        padding: 10,
        fontSize: 15,
        height: 50,
        marginTop: 20,
        marginHorizontal: 10

      }}
        placeholder="Digite um novo item"
        value={novo}
        onChangeText={(e) => setNovo(e)}
        onSubmitEditing={handleSubmit}
        returnKeyType="send"


      />
    )
  }


  function listaItem(props) {
    return (
      <>

        <TouchableOpacity activeOpacity={0.8} style={{ padding: 10, backgroundColor: "#ccc" }} >
          <Text style={{ fontSize: 15 }} >{props.task}</Text>
        </TouchableOpacity>
      </>
    )
  }

  return (
    <View style={styles.container}>

      <AddArea onAdd={AddNewItem} />

      <FlatList
        data={items}
        renderItem={({ item }) => listaItem(item)}
        keyExtractor={(item) => item.id}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'center',
    //alignItems:"center"
    //backgroundColor: "yellow",

  }

})