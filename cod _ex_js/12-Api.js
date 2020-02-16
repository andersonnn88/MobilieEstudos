import React, { useEffect } from 'react'
import { View, StyleSheet, Dimensions, Alert } from 'react-native'


export default function TextoInicall() {
  
  useEffect(()=>{
    let  {width, height} = Dimensions.get('window');
    
    //alert(width+' '+height);

    Alert.alert(
      'Aviso',
      'Novo',[
        {text:'Concordo'},
        {text:'Não concordo'}
      ]
    )
  }, []);
  return (
    <View style={styles.container}>
    
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "yellow",
   
  }

})