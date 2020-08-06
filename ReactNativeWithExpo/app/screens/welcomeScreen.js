import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import kcolors from "../config/kcolors";
import kstyles from "../config/kstyles";
import AppButton from "../components/Button";
import Screen from "../components/Screen";

function WelcomeScreen({ navigation }) {
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
        <View style={styles.middle}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-center.png")}
          />
          <AppButton
            title="SIGN UP"
            type="primaryWhite"
            style={styles.btnSignup}
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      </Screen.Body>
      <Screen.Footer>
        <Text style={styles.textHasAccount}>Already a member?</Text>
        <AppButton
          title="Sign In"
          type="transparentWhite"
          onPress={() => navigation.navigate("Signin")}
        />
      </Screen.Footer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "80%",
    marginTop: 40,
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
  middle: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textHasAccount: {
    color: kcolors.light,
  },
  btnSignup: {
    marginBottom: 15,
  },
});

export default WelcomeScreen;
