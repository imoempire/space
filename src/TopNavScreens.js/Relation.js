import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DiscoverCard from './DiscoverCard'
import { RelationData, Data } from '../Components/Data'

const Relation = () => {
   return (
      <View style={styles.container}>
        <DiscoverCard main={Data}/>
      </View>
   )
}

export default Relation

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
})
