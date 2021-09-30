import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function HeaderButton(props) {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        backgroundColor: props.activeTab === props.title ? "black" : "white",
      }}
      onPress={() => props.onClick(props.title)}
    >
      <Text
        style={{
          color: props.activeTab === props.title ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: "black",
//     paddingVertical: 6,
//     paddingHorizontal: 16,
//     borderRadius: 30,
//     color: "white",
//   },
// });
