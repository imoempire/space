import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
const { width } = Dimensions.get("window");

const CARD_WIDTH = width * 0.3;
const IMAGE_CONTAINER_WIDTH = CARD_WIDTH;

const DiscoverCard = ({main}) => {
  const {navigate} = useNavigation();
  return (
    <View>
      <FlatList
        data={main}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.blogs} onPress={()=>navigate('Post', {item: item})}>
            <View>
              <Image
                style={{ width: 130, height: 100, borderRadius: 20 }}
                source={item.image}
              />
            </View>
            <View style={styles.list}>
               <View style={styles.topCarsImage}>
              <Text>{item.title}</Text>
               </View>
               <View style={{flexDirection: "row"}}>
              <Text>♥{item.likes}</Text>
              <Text>{item.author}</Text>
               </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DiscoverCard;

const styles = StyleSheet.create({
  blogs: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    flexDirection: "row",
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
