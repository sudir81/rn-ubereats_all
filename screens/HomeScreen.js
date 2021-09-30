import React from "react";
import { SafeAreaView, View } from "react-native";
import CategoriesBar from "../components/CategoriesBar";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
        <CategoriesBar />
      </View>
    </SafeAreaView>
  );
}
