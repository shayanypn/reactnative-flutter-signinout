import { Platform } from "react-native";
import kcolors from "./kcolors";

export default {
  kcolors,
  text: {
    color: kcolors.dark,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  bgPrimary: {
    backgroundColor: kcolors.primary,
  },
};
