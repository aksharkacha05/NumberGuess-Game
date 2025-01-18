import React from 'react'
import { Text,StyleSheet } from 'react-native'
import Colors from '../constants/colors'

function Instrucation({children,style}) {
  return (
    <Text style={[styles.istrucationText,style]}>{children}</Text>
  )
}

export default Instrucation

const styles = StyleSheet.create({
    istrucationText:{
        fontFamily:'open-sans',
        color:Colors.accent500,
        fontSize:24
      },
})