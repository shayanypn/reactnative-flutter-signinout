import 'package:flutter/material.dart';

import '../constants.dart';

class WelcomeScreen extends StatefulWidget {
  @override
  _WelcomeScreen createState() => _WelcomeScreen();
}

class _WelcomeScreen extends State<WelcomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: null,
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Container(
            margin: EdgeInsets.only(top: 30.0),
            child: Column(
              children: <Widget>[
                SizedBox(
                  height: 50,
                ),
                Text(
                  'Welcome to BTC Exchange',
                  style: kTitleWhiteStyle,
                  textAlign: TextAlign.center,
                ),
                Padding(
                  padding: const EdgeInsets.all(30.0),
                  child: Text(
                    'We are offering digital asset exchange with maximum security and advanced trading features',
                    style: kNormalWhiteStyle,
                    textAlign: TextAlign.center,
                  ),
                ),
              ],
            ),
          ),
          Container(
            padding: EdgeInsets.only(top: 30.0, bottom: 30.0),
            child: Column(
              children: <Widget>[
                Image.asset('assets/images/logo-center.png'),
              ],
            ),
          ),
          Container(
            child: Column(
              children: <Widget>[
                Container(
                  margin: EdgeInsets.all(10.0),
                  child: RaisedButton(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(24.0),
                        side: BorderSide(
                          color: Colors.white,
                        ),
                      ),
                      onPressed: () {},
                      color: Colors.white,
                      padding: EdgeInsets.all(12.0),
                      textColor: kPrimaryColor,
                      child: Container(
                        width: double.infinity,
                        child: Text(
                          'SIGN UP',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 16,
                          ),
                        ),
                      )),
                ),
                Text(
                  'Already a member?',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: kLightColor,
                    fontSize: 17.0,
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(10.0),
                  child: RaisedButton(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(24.0),
                        side: BorderSide(
                          color: kPrimaryColor,
                        ),
                      ),
                      onPressed: () {},
                      color: kPrimaryColor,
                      textColor: kWhiteColor,
                      padding: EdgeInsets.all(12.0),
                      child: Container(
                        width: double.infinity,
                        child: Text(
                          'Sign In',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 14,
                          ),
                        ),
                      )),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
