// npm install uuid criar id em arquivos
//import uuid from 'uuid/v4'

import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import list from './src/lista'

export default function TextoInicall() {
  //<Image source={require('')}/>
  // defaultSource(require)
function listaItem(props) {
  return(
    <>
       <TouchableOpacity  activeOpacity={0.8} style={{padding:10, backgroundColor:"#ccc"}} >
            <Text style={{fontSize:15}} >{props.task}</Text>
          </TouchableOpacity>
    </>
  )
}
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item})=>listaItem(item)}
        keyExtractor={(item)=>item.id}
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

import uuid from 'uuid/v4'
export default [
    {id: uuid(),task:'Fazer xyz', done:false},
    {id: uuid(),task:'Fazer Abc', done:false},
    {id: uuid(),task:'Fazer xyz', done:false},
    {id: uuid(),task:'Fazer Abc', done:false},
    {id: uuid(),task:'Fazer xyz', done:false},
    {id: uuid(),task:'Fazer Abc', done:false},
    {id: uuid(),task:'Fazer xyz', done:false},
    {id: uuid(),task:'Fazer Abc', done:false},
    {id: uuid(),task:'Fazer xyz', done:false},
    {id: uuid(),task:'Fazer Abc', done:false},
    {id: uuid(),task:'Fazer xyz', done:false},
    {id: uuid(),task:'Fazer Abc', done:false},
    {id: uuid(),task:'Fazer xyz', done:false},
    {id: uuid(),task:'Fazer Abc', done:false},
    {id: uuid(),task:'Fazer xyz', done:false},
    {id: uuid(),task:'Fazer Abc', done:false},
    {id: uuid(),task:'Fazer xyz', done:false},
    {id: uuid(),task:'Fazer Abc', done:false},
    {id: uuid(),task:'Fazer xyz', done:false},
    {id: uuid(),task:'Fazer Abc', done:false},


]