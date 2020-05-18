import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import { Header } from "react-native/Libraries/NewAppScreen";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      iconSize={23}
      {...props}
      IconComponent={Ionicons}
      color={Platform.OS === "android" ? "white" : Colors.primary}
    />
  );
};

export default CustomHeaderButton;

const styles = StyleSheet.create({});
