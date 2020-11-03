import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  _ScrollView,
  ScrollView,
  Image,
} from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.picContainer}>
        <Image
          style={styles.cloudPic}
          source={require("./assets/cloud.png")}
        ></Image>
        <Text style={{color:"grey",fontSize:20}}>Hello world</Text>
      </View>
      <View style={styles.containerOne}>
        <View>
          <Text style={styles.mainText}>Hello world from group 5 </Text>
          <Text style={styles.mainText}>
            Member:
            <Text style={{ color: "black", fontWeight: "bold" }}>
              Maris Heinols{" "}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View>
          <Text style={styles.mainText}>This is my Maris Heinols,</Text>
          <Text style={styles.mainText}>first react native application.</Text>
          <Text style={styles.mainText}>Nice to see you here!</Text>
        </View>
      </View>
      <View style={styles.userPicContainer}>
        <Image style={styles.userPic} source={require('./assets/user.jpg')}></Image>
        <Text style={{paddingTop:5,fontWeight:"bold",fontStyle:"italic",color:"grey"}}>Maris Heinols</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOne: {
    paddingTop: "30%",
    paddingLeft: "20%",
    flexDirection: "column",
    justifyContent: "center",
  },
  mainText: {
    color: "grey",
  },
  containerTwo: {
    paddingTop: "10%",
    paddingLeft: "20%",
    flexDirection: "column",
    justifyContent: "center",
  },
  picContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop:60,

  },
  cloudPic: {
    resizeMode:"stretch",
    height: 150,
    width:150,
    
  },
  userPicContainer:{
    paddingTop:'30%',
    justifyContent:"center",
    alignItems:"center"
  },
  userPic:{
    height:50,
    width:50,
  }
});
