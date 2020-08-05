import React from "react";
import { StyleSheet, View, Text } from "react-native";

import kcolors from "../config/kcolors";
import AppButton from "../components/Button";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/Form";

function SignupScreen(props) {
  return (
    <Screen>
      <Screen.Body>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          <View style={styles.formContent}>
            <View style={styles.formContentInput}>
              <Text style={styles.formContentTitle}>Create Account</Text>
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="account"
                name="name"
                placeholder="name"
                textContentType="text"
              />
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                name="email"
                placeholder="Email address"
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
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock-outline"
                name="repeat-password"
                placeholder="Repeat Password"
                secureTextEntry
                textContentType="password"
              />
              <View style={styles.formContentFoot}>
                <Text style={styles.formContentFootText}>Agree to the </Text>
                <Text style={styles.formContentFootTextBlue}>
                  Terms and Conditions
                </Text>
              </View>
            </View>
            <SubmitButton title="Sign up" type="primary" />
          </View>
        </Form>
      </Screen.Body>
      <Screen.Footer>
        <Text style={styles.textHasAccount}>Already have an account?</Text>
        <AppButton title="Sign In from here" type="transparentBlue" />
      </Screen.Footer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  formContent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
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
    justifyContent: "flex-start",
    paddingLeft: 5,
    paddingRight: 5,
  },
  formContentFootText: {
    color: kcolors.gray,
  },
  formContentFootTextBlue: {
    color: kcolors.primary,
    fontWeight: "bold",
  },
  textHasAccount: {
    color: kcolors.gray,
  },
  btnSignup: {
    marginBottom: 15,
  },
});

export default SignupScreen;
