import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function SubText({SubText}){
  return (
    <View style={styles.textView} >
      <Text style={styles.text}>{SubText}</Text>
     
    </View>
  )
}

export default SubText

const styles = StyleSheet.create({
    textView:{
jpadding: 6,
marginHorizontal: 30,
marginVertical: 4,
borderBottomColor: '#e2b497',
borderBottomWidth: 2
    },
text:{
    color: '#e2b497',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
},

})