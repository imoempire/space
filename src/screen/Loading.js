import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { auth } from '../../config/Key';

export default function Loading({ navigation }) {


   useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
         if (user){
            navigation.replace("HomeScreen")
         }else{
            navigation.replace("SignUp")
         }
      })
   })

   // useEffect( ()=>
   //    setTimeout(() => {
   //            navigation.navigate('SignUp')
   //          }, 1000)
   // )

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size='large' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   }
})