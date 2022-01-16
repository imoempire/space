import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeTabs = ({ Data }) => {
  const {navigate} = useNavigation();
  return (
    <View>
      <FlatList
        horizontal={true}
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.blogs} onPress={()=>navigate('Discover')}>
            <View>
              <Image
                style={{ width: 60, height: 50 }}
                source={item.image}
              />
            </View>
            <View>
              <Text style={{color: 'white'}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({
   blogs: {
      flex: 1,
      backgroundColor: 'black',
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 5,
    },
});
