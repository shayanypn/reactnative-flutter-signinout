import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ImageBackground } from "react-native";
import kcolors from "../config/kcolors";

function Screen({ children, style }) {
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
        <View style={styles.head}>header</View>
      ) : (
        <ImageBackground
          source={require("../assets/logo-header.png")}
          style={styles.headWithLogo}
        />
      )}
      <View style={styles.body}>{body}</View>
      <View style={styles.foot}>{footer}</View>
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
  },
  head: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  headWithLogo: {
    flex: 3,
    alignItems: "center",
    resizeMode: "contain",
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
