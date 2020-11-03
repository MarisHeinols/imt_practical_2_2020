import { StatusBar } from "expo-status-bar";
import React from "react";
import { version } from "react-dom";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerHello}>
        <View>
          <Image
            source={require("./assets/cloud.png")}
            style={styles.LogoTop}
          ></Image>
        </View>
        <View>
          <Text style={styles.mainText}>Hello world </Text>
        </View>
      </View>
      <View>
        <Text style={styles.mainText}>Hello world from the G5!</Text>
        <Text style={styles.mainText}>
          Member:{" "}
          <Text style={{ fontWeight: "bold", color: "#581f76" }}>
            Egija Graudiņa
          </Text>
        </Text>
      </View>
      <View style={styles.bodyTextTwo}>
        <Text style={styles.mainText}>This is my Egija Graudina</Text>
        <Text style={styles.mainText}>first react native app!</Text>
        <Text style={styles.mainText}>Nice to see You here.</Text>
      </View>
      <View style={styles.footer}>
        <Image
          source={require("./assets/avatar.png")}
          style={styles.avatarLogo}
        ></Image>
        <Text style={styles.avatarName}>Egija Graudina</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },

  headerHello: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  LogoTop: {
    resizeMode: "stretch",
    height: 80,
    width: 80,
  },
  mainText: {
    color: "grey",
    fontSize: 18,
  },
  bodyTextTwo: {
    justifyContent: "center",
    paddingLeft: 30,
    paddingTop: 10,
  },
  bodyText: {
    justifyContent: "center",
    paddingLeft: 30,
    paddingTop: 40,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  avatarLogo: {
    resizeMode: "stretch",
    height: 50,
    width: 60,
  },
  avatarName: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
  },
});
