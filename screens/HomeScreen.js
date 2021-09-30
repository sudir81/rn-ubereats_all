import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import CategoriesBar from "../components/CategoriesBar";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <CategoriesBar />
        <RestaurantItems />
      </ScrollView>
    </SafeAreaView>
  );
}
