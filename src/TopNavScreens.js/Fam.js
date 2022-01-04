import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Fam = () => {
   return (
      <View style={styles.container}>
         <Text>Fam</Text>
      </View>
   )
}

export default Fam

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
   }
})
