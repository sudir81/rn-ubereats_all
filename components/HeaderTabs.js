import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HeaderButton from "./HeaderButton";

export default function HeaderTabs() {
  const [activeTab, setactiveTab] = useState("Delivery");

  const onHeaderBtnPressed = (btnTxt) => {
    setactiveTab(btnTxt);
  };
  return (
    <View style={styles.headerTabs}>
      <HeaderButton
        title="Delivery"
        bgColor="black"
        txtColor="white"
        activeTab={activeTab}
        onClick={onHeaderBtnPressed}
      />
      <HeaderButton
        title="Pickup"
        bgColor="white"
        txtColor="black"
        activeTab={activeTab}
        onClick={onHeaderBtnPressed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerTabs: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
