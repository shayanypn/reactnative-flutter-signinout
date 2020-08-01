import { Platform } from "react-native";
import colors from "./kcolors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
