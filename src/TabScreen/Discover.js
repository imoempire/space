import React from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, View, ScrollView
} from "react-native";
import TopNav from "../TopNavScreens.js/TopNav";
import { FontAwesome } from "@expo/vector-icons";
import DiscoverCard from "../TopNavScreens.js/DiscoverCard";
import { RelationData } from "../Components/Data";

const Discover = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Title}>
        <Text style={{ fontFamily: "Aquire", fontSize: 20 }}>Discover</Text>
        <View style={styles.Search}>
          <FontAwesome
            style={{ marginHorizontal: 10 }}
            name="search"
            size={24}
            color="black"
          />
          <TextInput placeholder="search blogs" />
        </View>
      </View>

      <ScrollView>
      <View>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <Text style={{ fontFamily: "Aquire", fontSize: 20 }}>Fam</Text>
        </View>
        <DiscoverCard Data={RelationData} />
      </View>
      <View>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <Text style={{ fontFamily: "Aquire", fontSize: 20 }}>Love</Text>
        </View>
        <DiscoverCard Data={RelationData} />
      </View>
      <View>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <Text style={{ fontFamily: "Aquire", fontSize: 20 }}>Relation</Text>
        </View>
        <DiscoverCard Data={RelationData} />
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
