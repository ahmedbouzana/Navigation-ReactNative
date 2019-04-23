/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is App component!</Text>
        <Button
          onPress={() => this.props.navigation.navigate("test")}
          title="Go to Test"
        />
      </View>
    );
  }
}

class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is Test component!</Text>
        <Button
          onPress={() => this.props.navigation.navigate("home")}
          title="Go to App"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const RootStack = createStackNavigator({
  home: App,
  test: Test
});

export default createAppContainer(RootStack);
