import 'package:flutter/material.dart';
import 'package:flutterapp/screens/welcomeScreen.dart';
import 'package:flutterapp/constants.dart';

void main() => runApp(AppAuthenticate());

class AppAuthenticate extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        primaryColor: kPrimaryColor,
        scaffoldBackgroundColor: kPrimaryColor,
      ),
      home: WelcomeScreen(),
    );
  }
}
