import { useFonts } from 'expo-font'
import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Card from '../Components/Card';
import { Data } from '../Components/Data';
import HomeTabs from '../Components/HomeTabs';
import { HomeTab } from '../Components/Data'

const Home = () => {

   const [loaded] = useFonts({
      Aquire: require('../../assets/font/Aquire.otf')
   });
   if (!loaded) {
      return null;
   }

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.Logo}>
            <Text style={{justifyContent: "center", alignItems: "center", fontSize: 30, fontFamily: 'Aquire'}}>SPACE</Text>
         </View>
         <View style={styles.Title}>
            <Text style={{fontFamily: 'Aquire', fontSize: 20}}>Featured Blogs</Text>
            <View style={styles.Search}>
               <HomeTabs Data={HomeTab} />
            </View>
         </View>
         <View style={styles.Blog}>
            <Card Data={Data}/>
         </View>
      </SafeAreaView>
   )
}

export default Home

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   Logo: {
      flex: .2,
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 10,
   },
   Title: {
      flex: .4,
      marginVertical: 10,
      marginHorizontal: 30,
   },
   Search: {
      borderRadius: 20,
      marginVertical: 20,
   },
   Blog: {
      flex: 1,
      marginHorizontal: 20
      
   }
})
