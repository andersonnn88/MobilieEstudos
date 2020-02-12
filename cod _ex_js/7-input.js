iimport React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'



function Alterar() {
  const [input, setInput] = useState('anderson');


  const mudarTexto = (texto) => {
    setInput(texto)
  }

  return (
    <>
      <TextInput
        value={input}
        style={styles.TextInput}
        //onChangeText={mudarTexto}
        onChangeText={t=>setInput(t)}
      />
      <Text>{input}</Text>
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
  }
})