import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Love = () => {
   return (
      <View style={styles.container}>
         <Text>Love</Text>
      </View>
   )
}

export default Love

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
   }
})
