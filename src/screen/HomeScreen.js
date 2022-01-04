import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BottomTab from '../BottomTab'

const HomeScreen = () => {
   return (
      <View style={styles.container}>
         <BottomTab/>
      </View>
   )
}

export default HomeScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
})
