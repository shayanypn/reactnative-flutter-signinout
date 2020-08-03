import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

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
      <View style={styles.head}>{header}</View>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  body: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  foot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default Screen;
