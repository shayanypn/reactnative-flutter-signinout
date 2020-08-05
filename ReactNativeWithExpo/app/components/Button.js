import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import kcolors from "../config/kcolors";

function AppButton({ title, onPress, type = "primaryWhite", style }) {
  const btnStyle = styles[`${type}Btn`] || styles.primaryWhiteBtn;
  const textStyle = styles[`${type}Text`] || styles.primaryWhiteText;

  return (
    <TouchableOpacity style={[btnStyle, style]} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryBtn: {
    backgroundColor: kcolors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  primaryText: {
    color: kcolors.white,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  primaryWhiteBtn: {
    backgroundColor: kcolors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  primaryWhiteText: {
    color: kcolors.primary,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  transparentWhiteBtn: {
    backgroundColor: "transparent",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
    marginVertical: 5,
  },
  transparentWhiteText: {
    color: kcolors.white,
    fontSize: 16,
  },
  transparentBlueBtn: {
    backgroundColor: "transparent",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
    marginVertical: 5,
  },
  transparentBlueText: {
    color: kcolors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AppButton;
