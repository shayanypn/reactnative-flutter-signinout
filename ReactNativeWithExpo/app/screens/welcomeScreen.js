import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

import kcolors from "../config/kcolors";
import kstyles from "../config/kstyles";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={[kstyles.text, styles.headTitle]}>
          Welcome to BTC Exchange
        </Text>
        <Text style={[kstyles.text, styles.headSubtitle]}>
          We are offering digital asset exchange with maximum security and
          advanced trading features.
        </Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.foot}>
        <TouchableOpacity style={styles.btnWhite}>
          <Text style={[kstyles.text, styles.btnWhiteText]}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.textHasAccount}>Already a member?</Text>
        <TouchableOpacity style={styles.btnTransparent}>
          <Text style={[kstyles.text, styles.btnTransparentText]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: kcolors.primary,
    height: "100%",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  head: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
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
  logo: {
    width: 200,
    height: 200,
  },
  headTitle: {
    color: kcolors.white,
    fontSize: 29,
    marginBottom: 20,
  },
  headSubtitle: {
    color: kcolors.secondary,
    textAlign: "center",
  },
  textHasAccount: {
    color: kcolors.light,
  },
  btnWhite: {
    backgroundColor: kcolors.secondary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  btnWhiteText: {
    color: kcolors.primary,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  btnTransparent: {
    backgroundColor: "transparent",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  btnTransparentText: {
    color: kcolors.white,
    fontSize: 16,
  },
});

export default WelcomeScreen;
