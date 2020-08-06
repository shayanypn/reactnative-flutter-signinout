import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ImageBackground } from "react-native";
import kcolors from "../config/kcolors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Screen({ children, style, onBack, colorStyle }) {
  const header = React.Children.map(children, (child) =>
    child.type.displayName === "Header" ? child : null
  );
  const body = React.Children.map(children, (child) =>
    child.type.displayName === "Body" ? child : null
  );
  const footer = React.Children.map(children, (child) =>
    child.type.displayName === "Footer" ? child : null
  );

  return (
    <SafeAreaView style={[styles.screen, style]}>
      {header && header.length ? (
        <View style={styles.head}>{header}</View>
      ) : (
        <ImageBackground
          source={require("../assets/logo-header.png")}
          style={styles.headWithLogo}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={32}
            color={kcolors.white}
            style={styles.headWithLogoBack}
            onPress={() => (onBack ? onBack() : () => null)}
          />
        </ImageBackground>
      )}
      <View style={[styles.body, colorStyle]}>{body}</View>
      <View style={[styles.foot, colorStyle]}>{footer}</View>
    </SafeAreaView>
  );
}

const Header = ({ children }) => children;
Header.displayName = "Header";
Screen.Header = Header;

const Body = ({ children }) => children;
Body.displayName = "Body";
Screen.Body = Body;

const Footer = ({ children }) => children;
Footer.displayName = "Footer";
Screen.Footer = Footer;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: kcolors.primary,
  },
  head: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  headWithLogo: {
    flex: 3,
    alignItems: "flex-start",
    resizeMode: "contain",
    paddingLeft: 5,
    backgroundColor: kcolors.white,
  },
  headWithLogoBack: {
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  body: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  foot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
});

export default Screen;
