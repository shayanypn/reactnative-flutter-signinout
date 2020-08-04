import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import kcolors from "../config/kcolors";
import kstyles from "../config/kstyles";
import AppButton from "../components/Button";
import Screen from "../components/Screen";

function SigninScreen(props) {
  return (
    <Screen>
      <Screen.Header>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </Screen.Header>
      <Screen.Body>
        <View />
      </Screen.Body>
      <Screen.Footer>
        <AppButton title="SIGN UP" type="primary" style={styles.btnSignup} />
        <Text style={styles.textHasAccount}>Don't you have an account?</Text>
        <AppButton title="Sign Up from here" type="transparentBlue" />
      </Screen.Footer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "40%",
    height: "40%",
  },
  headTitle: {
    color: kcolors.light,
    fontSize: 29,
    marginBottom: 20,
  },
  headSubtitle: {
    color: kcolors.gray,
    textAlign: "center",
  },
  textHasAccount: {
    color: kcolors.gray,
  },
  btnSignup: {
    marginBottom: 15,
  },
});

export default SigninScreen;
