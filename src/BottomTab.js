import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screen/Home";
import Discover from "./TabScreen/Discover";
import Join from "./TabScreen/Join";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import Me from "./screen/Me";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            (color = "black"),
            (size = 12),
            (
              <View>
                  <View>
                    <Text
                      style={{
                        color: focused ? "black" : color,
                        fontSize: size,
                      }}
                    >
                      Home
                    </Text>
                  </View>
              </View>
            )
          ),
          tabBarIcon: ({ color, focused, tintColor }) => (
            <View>
              
                <View>
                  <Ionicons
                    name="ios-home"
                    size={30}
                    color={focused ? "black" : color}
                    style={{ backgroundColor: tintColor }}
                  />
                </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
         tabBarLabel: ({ focused, color, size }) => (
            (color = "black"),
            (size = 12),
            (
              <View>
                  <View>
                    <Text
                      style={{
                        color: focused ? "black" : color,
                        fontSize: size,
                      }}
                    >
                      Discover
                    </Text>
                  </View>
              </View>
            )
          ),
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name="compass"
              size={30}
              color={focused ? "black" : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Join}
        options={{
         tabBarLabel: ({ focused, color, size }) => (
            (color = "black"),
            (size = 12),
            (
              <View>
                  <View>
                    <Text
                      style={{
                        color: focused ? "black" : color,
                        fontSize: size,
                      }}
                    >
                      Me
                    </Text>
                  </View> 
              </View>
            )
          ),
          tabBarIcon: ({ color, focused, tintColor }) => (
            <View>
                <AntDesign
                  name="adduser"
                  size={30}
                  style={{ backgroundColor: tintColor }}
                  color={focused ? "black" : color}
                />              
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
