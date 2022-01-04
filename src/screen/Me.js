import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../../config/Key';

export default function Me() {

   const  navigation = useNavigation();

const handleSignOut = () => {
   auth
     .signOut()
     .then(() => {
       navigation.replace("SignIn")
     })
     .catch(error => alert(error.message))
 }

const [loaded] = useFonts({
   Aquire: require("../../assets/font/Aquire.otf"),
 });
 if (!loaded) {
   return null;
 }

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.Head}>
      <Text style={[{ fontFamily: "Aquire", fontSize: 40 }, styles.titleText]}>
         Space
      </Text>
       </View>

       <View style={styles.Info}>
      <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} 
      style={styles.button} >
        <Text style={styles.buttonText}>
           Log Out
         </Text>
      </TouchableOpacity>
       </View>

       <View style={styles.Join}>
          <TouchableOpacity style={styles.JoinButton}>
          <Text style={{color: 'white'}}>Join Our Writing Team</Text>
          </TouchableOpacity>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
   height: '100%',
   width: '100%',
   alignItems: 'center',
   justifyContent: 'center',
   },
   Head: {
      flex: .5,
   },
   titleText: {
      marginVertical: 10,
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    Info: {
       flex: 1
    },
  button: {
    width: 150,
    padding: 5,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
   text: {
     textAlign: 'center',
     fontSize: 20,
     marginTop: '2%',
     marginBottom: '10%',
     fontWeight: 'bold',
     color: 'black',
   },
   Join: {
      flex: .3,
   },
   JoinButton: {
      backgroundColor: 'blue',
      borderRadius: 10,
      padding: 10
   }
});