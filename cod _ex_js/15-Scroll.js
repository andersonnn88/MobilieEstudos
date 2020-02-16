import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, ScrollView} from 'react-native'
import list from './src/lista'

export default function TextoInicall() {
  //<Image source={require('')}/>
  // defaultSource(require)

  return (
    <View style={styles.container}>
      <ScrollView>
      {list.map((item, index)=>{
        return(
          <View  style={{padding:10}} key={index}>
            <Text style={{fontSize:15}} >{item.task}</Text>
          </View>
        );
      })}
      </ScrollView>
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

////
export default [
    {task:'Fazer xyz', done:false},
    {task:'Fazer Abc', done:false},
    {task:'Fazer xyz', done:false},
    {task:'Fazer Abc', done:false},
    {task:'Fazer xyz', done:false},
    {task:'Fazer Abc', done:false},
    {task:'Fazer xyz', done:false},
    {task:'Fazer Abc', done:false},
    {task:'Fazer xyz', done:false},
    {task:'Fazer Abc', done:false},
    {task:'Fazer xyz', done:false},
    {task:'Fazer Abc', done:false},
    {task:'Fazer xyz', done:false},
    {task:'Fazer Abc', done:false},
    {task:'Fazer xyz', done:false},
    {task:'Fazer Abc', done:false},
    {task:'Fazer xyz', done:false},
    {task:'Fazer Abc', done:false},
    {task:'Fazer xyz', done:false},
    {task:'Fazer Abc', done:false},


]