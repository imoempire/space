import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Love from "./Love";
import Relation from "./Relation";

const Tab = createMaterialTopTabNavigator();

const TopNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: 
        {
          backgroundColor: "white",
          borderRadius: 10,
        },
        tabBarLabelStyle: 
        { 
         fontSize: 20, 
         color: "black",
        },
      }}
    >
      <Tab.Screen name="All" component={Relation} />
      <Tab.Screen name="New" component={Love} />
    </Tab.Navigator>
  );
};

export default TopNav;
