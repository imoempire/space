import React from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DiscoverCard from "../TopNavScreens.js/DiscoverCard";
import { Data } from "../Components/Data";

const Discover = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Title}>
        <Text style={{ fontFamily: "Aquire", fontSize: 20 }}>Discover Stories</Text>
        
      </View>

      <ScrollView>
      <View>
        <View style={{ alignItems: "center", marginVertical: 10,  backgroundColor: 'black', padding: 5, }}>
          <Text style={{ fontFamily: "Aquire", fontSize: 20, color: 'white' }}>Family</Text>
        </View>
        <DiscoverCard  main={Data} />
      </View>
      <View>
        <View style={{ alignItems: "center", marginVertical: 10,  backgroundColor: 'black', padding: 5, }}>
          <Text style={{ fontFamily: "Aquire", fontSize: 20, color: 'white' }}>Drama</Text>
        </View>
        <DiscoverCard  main={Data} />
      </View>
      <View>
        <View style={{ alignItems: "center", marginVertical: 10, backgroundColor: 'black', padding: 5, }}>
          <Text style={{ fontFamily: "Aquire", fontSize: 20, color: 'white' }}>Comedy</Text>
        </View>
        <DiscoverCard main={Data} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    marginVertical: 10,
    alignItems: "center",
  },
  Search: {
    flexDirection: "row",
    borderWidth: 1,
    width: "90%",
    borderRadius: 20,
    padding: 5,
    marginVertical: 20,
    backgroundColor: "white",
  },
});
