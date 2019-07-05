/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  state = {
    time: "Day",
    show: false
  };
  render() {
    if (this.state.time === "Day") {
      return (
        <View style={styles.lightContainer}>
          <Image
            source={require("./img/Night.jpg")}
            style={styles.img}
            style={{ width: 150, height: 150, marginBottom: 90 }}
          />

          <TouchableOpacity
            style={styles.darkBtn}
            onPress={() => {
              this.setState({ time: "Night" });
            }}
          >
            <Text style={styles.lightText}>Night</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.Container}>
          <Image
            source={require("./img/sun.jpg")}
            style={styles.img}
            style={{ width: 150, height: 150, marginBottom: 150 }}
          />
          <View>
            {this.state.show ? (
              <View>
                <Image
                  source={require("./img/download.jpg")}
                  style={styles.img}
                  style={{ width: 150, height: 150, marginBottom: 90 }}
                />
                <TouchableOpacity
                  style={styles.bottomBtn}
                  onPress={() => this.setState({ show: false })}
                >
                  <Text
                    style={{
                      color: "#FFF",
                      backgroundColor: "#000"
                    }}
                  >
                    Hide
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <TouchableOpacity
            style={styles.containerBtn}
            onPress={() => {
              this.setState({ time: "Day" });
            }}
          >
            <Text style={styles.darkText}>Day</Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.bottomBtn}
              onPress={() => {
                this.setState({ show: true });
              }}
            >
              <Text style={styles.bottomText}>Show</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  Container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    marginTop: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  containerBtn: {
    backgroundColor: "#000",
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 10
  },

  darkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  bottomBtn: {
    backgroundColor: "black",
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 10
  },
  darkBtn: {
    backgroundColor: "#FFF",
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 10
  },
  bottomText: {
    color: "#FFF"
  },
  lightText: {
    color: "#000"
  },
  darkText: {
    color: "#FFF"
  }
});
