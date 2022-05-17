import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Post = (props) => {
   const navigation = useNavigation();
  const { item } = props.route.params;
  const {likes} = item
   const [like, setLike]=useState(likes);

 const update=()=>{
   setLike(likes+1);
 };
 const Bookmark=()=>{
    alert('Post Added')
 }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={{background: 'red'}} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrow} onPress={Bookmark}>
          <Ionicons name="bookmarks" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.Post}>
        <View style={styles.Image}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            source={item.image}
          />
        </View>
        <View style={styles.info}>
           <View style={{ flexDirection: "row"}}>

          <Text
            style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}
            >
            {item.title}
          </Text>
          <View style={{justifyContent: "center"}}>
          <Text style={{justifyContent: "center"}}>♥{like}</Text>
          </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity style={styles.Like} onPress={update}>
               <View style={[{marginHorizontal: 10, flexDirection: "row"}, styles.Like]}>
              <MaterialIcons style={{color: 'white'}} name="thumb-up" size={24} color="white" />
              <Text style={{color: 'white', marginHorizontal: 5}}>Like</Text>
               </View>
            </TouchableOpacity>
            <Text>On {item.date}</Text>
            <Text>By {item.author}</Text>
          </View>
        </View>
        <View style={styles.Data}>
          <Text>{item.data}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 10,
  },
  arrow: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  Post: {
    flex: 1,
  },
  Image: {
    flex: 0.4,
    marginHorizontal: 10,
    height: "60%",
  },
  info: {
    flex: 0.2,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  Like: {
     alignItems: 'center',
     backgroundColor: 'black',
     borderRadius: 10,
     padding: 1,
   },
  Data: {
    flex: 1,
    marginHorizontal: 10,
  },
});
