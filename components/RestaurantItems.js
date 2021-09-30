import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { localRestaurants } from "../assets/data/mockData";

export default function RestaurantItems() {
  const restaurantSelected = () => {
    console.log("restaurantSelected");
  };

  const restaurantFavoriteSelected = () => {
    console.log("restaurantFavoriteSelected");
  };

  return (
    <>
      {localRestaurants.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          onPress={() => restaurantSelected()}
        >
          <View
            style={{ marginTop: 10, padding: 10, backgroundColor: "white" }}
          >
            <RestaurantImage
              restaurantFavoriteSelected={restaurantFavoriteSelected}
              restaurantImage={restaurant.image_url}
            />
            <RestaurantInfo restaurant={restaurant} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = ({ restaurantFavoriteSelected, restaurantImage }) => (
  <>
    <Image
      source={{
        uri: restaurantImage,
      }}
      style={{ width: "100%", height: 200 }}
    />
    <TouchableOpacity
      style={{ position: "absolute", right: 20, top: 20 }}
      onPress={() => restaurantFavoriteSelected()}
    >
      <MaterialCommunityIcon name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ restaurant }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {restaurant.name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 mins</Text>
    </View>
    <View
      style={{
        backgroundColor: "lightgray",
        height: 28,
        width: 28,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{restaurant.rating}</Text>
    </View>
  </View>
);
