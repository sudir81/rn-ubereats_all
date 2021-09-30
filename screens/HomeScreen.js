import React from "react";
import { SafeAreaView, View } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
      </View>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
