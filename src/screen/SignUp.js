import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../config/Key";



const SignUp = ({navigation}) => {
   
   
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.replace("HomeScreen")
        }
      })
      return unsubscribe
    }, [])


    const handleSignUp = () => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
        })
        .catch(error => alert(error.message))
    }

   const { navigate } = useNavigation();
   const [loaded] = useFonts({
     Aquire: require("../../assets/font/Aquire.otf"),
   });
   if (!loaded) {
     return null;
   }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Login}>
        <Text style={{ fontFamily: "Aquire", fontSize: 20 }}>Sign-Up</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.TextInput}
          placeholder="email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.TextInput}
          placeholder="password"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <View>
          <TouchableOpacity
            style={styles.SignUp}
            onPress={handleSignUp}
          >
            <Text style={{ color: "white" }}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.button}>
             <Text>Already have an account?</Text>
          <TouchableOpacity onPress={()=>navigate("SignIn")} style={styles.signBtn}>
            <Text style={{ marginHorizontal: 20, color: "white" }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
      <View style={styles.btn}>
        <View style={styles.btns}>
          <TouchableOpacity>
            <Text style={{ marginHorizontal: 20, color: "white" }}>
              with Google
            </Text>
          </TouchableOpacity>
        </View>

        

      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Login: {
    flex: 0.5,
    alignItems: "center",
    marginVertical: 50,
  },
  form: {
    flex: 1,
    marginHorizontal: 20,
  },
  SignUp: {
    alignItems: "center",
    backgroundColor: "blue",
    marginVertical: 20,
    marginHorizontal: 100,
    padding: 10,
    borderRadius: 7,
  },
  TextInput: {
    // width: '100%',
    height: 50,
    borderBottomWidth: 1,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   },
   btns: {
     marginVertical: 10,
    backgroundColor: "red",
    borderRadius: 7,
    padding: 10,
  },
  button: {
   flexDirection: "row",
   marginVertical: 10,
   padding: 10,
},
signBtn:{
    backgroundColor: 'green', 
    marginHorizontal: 10,
    padding: 3,
    borderRadius: 7,
  }
});
