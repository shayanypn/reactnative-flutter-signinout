import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import kcolors from "../../config/kcolors";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={kcolors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={kcolors.medium}
        style={kcolors.dark}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: kcolors.white,
    borderWidth: 1,
    borderColor: kcolors.medium,
    borderRadius: 25,
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
  },
});

export default AppTextInput;
