import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fam from './Fam';
import Love from './Love';
import Relation from './Relation';


const Tab = createMaterialTopTabNavigator();

const TopNav = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen name="Relation" component={Relation} />
         <Tab.Screen name="Love" component={Love} />
         <Tab.Screen name="Fam" component={Fam} />
      </Tab.Navigator>
   )
}

export default TopNav

