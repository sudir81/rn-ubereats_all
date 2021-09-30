import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { categoryItems } from "../assets/data/mockData";

export default function CategoriesBar() {
  const itemSelected = (item) => {
    console.log(item.text);
  };

  return (
    <View>
      <FlatList
        horizontal
        data={categoryItems}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => itemSelected(item)}>
            <View style={{ alignItems: "center", marginRight: 30 }}>
              <Image
                source={item.image}
                style={{ width: 50, height: 40, resizeMode: "contain" }}
              />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        style={{ marginTop: 10 }}
      />
    </View>
  );
}
