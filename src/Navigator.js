import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Post from './Components/Post';
import HomeScreen from './screen/HomeScreen';
import Loading from './screen/Loading';
import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp'

const Stack = createStackNavigator();

const Navigator = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Post" component={Post} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default Navigator

const styles = StyleSheet.create({})
