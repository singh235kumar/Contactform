import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactForm from './task/ContactForm'

const App = () => {
  return (
    <View style={styles.container}>
      <ContactForm/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    backgroundColor:"white"
  }
})

