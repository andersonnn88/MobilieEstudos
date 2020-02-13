import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'



function Alterar() {
  const [input, setInput] = useState('anderson');
  const [mostrar, setMostrar] = useState(false)

  const handeClick = () => {
    setMostrar(!mostrar)
    
  }

  return (
    <>
      <TextInput
        value={input}
        style={styles.TextInput}
        //onChangeText={mudarTexto}
        onChangeText={t => setInput(t)}
      />

      <Button title={mostrar ? 'Ocultar' : 'Mostar'} onPress={handeClick} />
      {mostrar &&
        <View style={styles.quadrado}>
          <Text>Seu nome</Text>
          <Text>{input}</Text>
        </View>

      }

    </>
  )
}

export default () => {

  return (
    <View style={styles.container}>
      <Alterar />

    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  },
  TextInput: {
    width: 200,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 10
  },
  quadrado: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 10

  }
})