import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Data } from '../Components/Data'
import DiscoverCard from './DiscoverCard'

const Love = () => {
   return (
      <View style={styles.container}>
         <DiscoverCard main={Data}/>
      </View>
   )
}

export default Love

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
})
