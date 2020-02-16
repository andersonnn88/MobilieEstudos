import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'


export default function TextoInicall() {
  //<Image source={require('')}/>
  // defaultSource(require)
  const [ status, setStatus ] = useState('');

  return (
    <View style={styles.container}>
     <Image
      source={{uri:'https://www.google.com.br/google.jpg'}}
      style={{width:200, height:200, backgroundColor: 'red'}}
      onLoadStart={()=>setStatus('Carregando...')}
      onLoadEnd={()=>setStatus('Carregou!')}
      onError={(e)=>alert(e.nativeEvent.error)}
      onProgress={(e)=>e.nativeEvent.total}
     />
     <Text>{status}</Text>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:"center"
    //backgroundColor: "yellow",
   
  }

})