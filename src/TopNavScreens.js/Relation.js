import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DiscoverCard from './DiscoverCard'
import { RelationData } from '../Components/Data'

const Relation = () => {
   return (
      <View style={styles.container}>
        <DiscoverCard Data={RelationData}/>
      </View>
   )
}

export default Relation

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'red',
   }
})
