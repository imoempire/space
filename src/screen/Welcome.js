import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React, { useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';

const Welcome = () => {
   const navigation = useNavigation();
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true
    }).start();
  };

  const fadeIn = () => {
   // Will change fadeAnim value to 1 in 5 seconds
   Animated.timing(fadeAnim, {
     toValue: 1,
     duration: 2000,
     useNativeDriver: true
   }).start();
 };

  useEffect(()=>{
     fadeIn();
     setTimeout(() => {
      navigation.navigate('Loading')
    }, 3000)
  })

  const [loaded] = useFonts({
   Aquire: require('../../assets/font/Aquire.otf')
});
if (!loaded) {
   return null;
}

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={[styles.fadingText, {fontFamily: 'Aquire'}]}>Space</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        {/* <Button title="Fade Out View" onPress={fadeOut} /> */}
      </View>
      <View>
         <Text>by IMOEMP</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
  },
  fadingText: {
    fontSize: 80,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default Welcome;