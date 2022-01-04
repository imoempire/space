import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const HomeTabs = ({ Data }) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.blogs}>
            <View>
              <Image
                style={{ width: 60, height: 50 }}
                source={item.image}
              />
            </View>
            <View>
              <Text style={{color: 'white'}}>{item.title}</Text>
            </View>
          </View>
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
      marginHorizontal: 10,
    },
});
