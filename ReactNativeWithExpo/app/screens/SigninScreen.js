import React from "react";
import { StyleSheet, View, Text } from "react-native";

import kcolors from "../config/kcolors";
import AppButton from "../components/Button";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/Form";
import kstyles from "../config/kstyles";

function SigninScreen({ navigation }) {
  return (
    <Screen
      colorStyle={kstyles.bgWhite}
      onBack={() => navigation.navigate("Home")}
    >
      <Screen.Body>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          <View style={styles.formContent}>
            <View style={styles.formContentInput}>
              <Text style={styles.formContentTitle}>Sing In Now</Text>
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="account"
                keyboardType="email-address"
                name="email"
                placeholder="Email address or username"
                textContentType="emailAddress"
              />
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock-outline"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <View style={styles.formContentFoot}>
                <Text style={styles.formContentFootText}>Remember me</Text>
                <Text style={styles.formContentFootText}>Forget Password?</Text>
              </View>
            </View>
            <SubmitButton title="Login" type="primary" />
          </View>
        </Form>
      </Screen.Body>
      <Screen.Footer>
        <Text style={styles.textHasAccount}>Don't you have an account?</Text>
        <AppButton
          title="Sign Up from here"
          type="transparentBlue"
          onBack={() => navigation.navigate("Signup")}
        />
      </Screen.Footer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  formContent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 60,
    width: "100%",
    flex: 1,
  },
  formContentTitle: {
    color: kcolors.primary,
    fontSize: 29,
    marginTop: 20,
    textAlign: "center",
  },
  formContentInput: {
    flex: 6,
    justifyContent: "center",
  },
  formContentFoot: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
  },
  formContentFootText: {
    color: kcolors.gray,
  },
  textHasAccount: {
    color: kcolors.gray,
  },
  btnSignup: {
    marginBottom: 15,
  },
});

export default SigninScreen;
