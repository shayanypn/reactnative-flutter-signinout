import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import kcolors from "../config/kcolors";
import kstyles from "../config/kstyles";
import AppButton from "../components/Button";
import Screen from "../components/Screen";

function WelcomeScreen(props) {
  return (
    <Screen style={kstyles.bgPrimary}>
      <Screen.Header>
        <Text style={[kstyles.text, styles.headTitle]}>
          Welcome to BTC Exchange
        </Text>
        <Text style={[kstyles.text, styles.headSubtitle]}>
          We are offering digital asset exchange with maximum security and
          advanced trading features.
        </Text>
      </Screen.Header>
      <Screen.Body>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </Screen.Body>
      <Screen.Footer>
        <AppButton
          title="SIGN UP"
          type="primaryWhite"
          style={styles.btnSignup}
        />
        <Text style={styles.textHasAccount}>Already a member?</Text>
        <AppButton title="Sign In" type="transparentWhite" />
      </Screen.Footer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "60%",
    height: "60%",
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
  btnSignup: {
    marginBottom: 15,
  },
});

export default WelcomeScreen;
