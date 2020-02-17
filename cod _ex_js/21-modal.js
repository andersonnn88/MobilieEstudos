//npm install @react-native-community/async-storage --save
import React, { useState, useEffect } from 'react'
import { Modal, AsyncStorage, View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native'


export default function TextoInicall() {
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao}
        onPress={() => { setVisible(true) }}
      >
        <Text>Mostrar modal</Text>
      </TouchableOpacity>
      <Modal

        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={()=>{ setVisible(false) }}
      >
        <View style={styles.boxModal}>
          <View style={styles.caixaText}>
            <TouchableOpacity style={styles.botao}
              onPress={() => { setVisible(false) }}
            >
              <Text>Fechar modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


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
  boxModal: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5 )',
    justifyContent: "center",
    alignItems: "center"

  },
  caixaText: {
    width: '90%',
    height: 200,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFF',
    alignItems:"center",
    justifyContent:"center"
  }

})