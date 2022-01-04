import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");


const CARD_WIDTH = width * 0.5;
const IMAGE_CONTAINER_WIDTH = CARD_WIDTH;

const Card = ({Data}) => {
  const {navigate} = useNavigation();
  return (
    <View>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.blogs} onPress={()=>navigate("Post", {item: item})} >
            <View>
              <Image
                style={{ width: 130, height: 120, borderRadius: 20, backgroundColor: 'black', borderWidth: 5 }}
                source={item.image}
              />
            </View>
            <View style={styles.list}>
               <View style={styles.topCarsImage}>
              <Text>{item.title}</Text>
               </View>
              <Text>♥{item.likes}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>{item.date}</Text>
                <Text style={{ marginHorizontal: 20 }}>By {item.author}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  blogs: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  list: {
    justifyContent: "center",
    marginHorizontal: 10,
    justifyContent: "space-around",
    width: CARD_WIDTH,
  },
  topCarsImage: {
   width: IMAGE_CONTAINER_WIDTH,
   borderRadius: 12,
   borderBottomLeftRadius: 0,
   borderBottomRightRadius: 0,
 },
});
 