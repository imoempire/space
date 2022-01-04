import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Me from '../screen/Me'

const Join = () => {
   return (
      <View style={styles.container}>
         <Me/>
      </View>
   )
}

export default Join

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

   }
})
