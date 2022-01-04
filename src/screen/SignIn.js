import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../../config/Key';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const SignIn = () => {
   const navigation= useNavigation();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [secure, setSecure] = useState(true);
   const [name, setName] = useState('eye');

   const handleLogin = () => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }

    const seePassword = ()=>{
         if(secure === false){
            setName('eye'),
            setSecure(true);
         }else(
            setName('eye-off'),
            setSecure(false)
         )
    }

   const [loaded] = useFonts({
      Aquire: require('../../assets/font/Aquire.otf')
   });
   if (!loaded) {
      return null;
   }

   return (
      <SafeAreaView style={styles.container}>
      <View style={styles.Login}>
      <Text style={{fontFamily: 'Aquire', fontSize: 20}}>Login</Text>
      </View>
      <View style={styles.form}>
         <TextInput style={styles.TextInput} 
         keyboardType="email-address"
          value={email} placeholder="email"
          onChangeText={text => setEmail(text)}
          />
          <View style={{flexDirection: "row", width: "100%", borderBottomWidth: 1}}>
         <TextInput 
         secureTextEntry= {secure} 
         style={[ {width: "90%", height: 50}]} 
         placeholder="password"
         value={password} 
         onChangeText={text => setPassword(text)}
         />

         <View style={{justifyContent: 'center', right: 0}}>

         {


         }

         <TouchableOpacity onPress={seePassword} 
          style={{backgroundColor: 'green', padding: 5, borderRadius: 10}}>
         <Ionicons name={name} size={24} color="black" />
         </TouchableOpacity>

         </View>

         </View>
         <View>
            <TouchableOpacity style={styles.SignUp} onPress={handleLogin}>
               <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
               <Text>Forget Password?</Text>
         </View>
      </View>
   </SafeAreaView>
   )
}

export default SignIn

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   Login: {
      flex: .5,
      alignItems: 'center',
      marginVertical: 50,
   },
   form: {
      flex: 1,
      marginHorizontal: 20,
   },
   SignUp: {
      alignItems: 'center',
      backgroundColor: 'green',
      marginVertical: 20,
      marginHorizontal: 100,
      padding: 10,
      borderRadius: 20,
   },
   TextInput: {
      height: 50,
      borderBottomWidth: 1
   },
})
