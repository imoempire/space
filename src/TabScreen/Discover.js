import React from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DiscoverCard from "../TopNavScreens.js/DiscoverCard";
import { Data, HomeTab } from "../Components/Data";
import HomeTabs from "../Components/HomeTabs";
import TopNav from "../TopNavScreens.js/TopNav";

const Discover = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Title}>
        <Text style={{ fontFamily: "Aquire", fontSize: 20 }}>Discover</Text>
      </View>
        <TopNav/>
{/* 
      <ScrollView style={{flex: 1}}>
      <View>
        <View style={{ alignItems: "center", marginVertical: 10,  backgroundColor: 'black', padding: 5, }}>
          <Text style={{ fontFamily: "Aquire", fontSize: 20, color: 'white' }}>Family</Text>
        </View>
        <DiscoverCard  main={Data} />
      </View>
      <View>
        <View style={{ alignItems: "center", marginVertical: 10,  backgroundColor: 'black', padding: 5, }}>
          <Text style={{ fontFamily: "Aquire", fontSize: 20, color: 'white' }}>Love</Text>
        </View>
        <DiscoverCard  main={Data} />
      </View>
      <View>
        <View style={{ alignItems: "center", marginVertical: 10, backgroundColor: 'black', padding: 5, }}>
          <Text style={{ fontFamily: "Aquire", fontSize: 20, color: 'white' }}>Drama</Text>
        </View>
        <DiscoverCard main={Data} />
      </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    flex: .05,
    marginVertical: 15,
    alignItems: "center",
  },
});
