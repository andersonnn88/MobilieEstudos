import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity} from 'react-native'
import list from './src/lista'

export default function TextoInicall() {
  //<Image source={require('')}/>
  // defaultSource(require)

  return (
    <View style={styles.container}>
      <ScrollView>
      {list.map((item, index)=>{
        return(
          <TouchableOpacity  activeOpacity={0.8} style={{padding:10, backgroundColor:"#ccc"}} key={index}>
            <Text style={{fontSize:15}} >{item.task}</Text>
          </TouchableOpacity>
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