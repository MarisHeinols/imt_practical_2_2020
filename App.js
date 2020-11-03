import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { version } from 'react-dom';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
<View>
      <View style={styles.headerHello}>
        <View>
          <Image
            source={require("./assets/TestLogo.png")}
            style={styles.LogoTop}
          ></Image>
        </View>
        <View style={{padding:10,}}>
          <Text style ={styles.mainText}>Hello world</Text>
        </View>
      </View>
      <View style = {styles.bodyText}>
        <Text style = {styles.mainText}>Hello world from G5</Text>
        <Text style= {styles.mainText}>Member:<Text style={{fontWeight: "bold"}}> Aleksandrs Barbins</Text></Text>
      </View>
      <View style={styles.bodyText2}>
        <Text style= {styles.mainText}>This is my, Aleksandrs Barbins</Text>
        <Text style= {styles.mainText}>first react native application!</Text>
        <Text style= {styles.mainText}>Nice to see you here!</Text>
      </View>
      <View style={styles.footer}>
        <Image 
        source={require("./assets/TestLogo.png")}
        style={styles.avatarLogog}
        ></Image>

        <Text style={styles.avatarName}> Aleksandrs Barbins</Text>
        
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  headerHello: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    

  },
  LogoTop: {
    resizeMode: "stretch",
    height: 80,
    width: 80,
    padding: 20,
  },
  mainText:{
    color: "grey",
    fontSize: 18,
  },
  bodyText: {
    justifyContent: "center",
    paddingLeft: 30,
    paddingTop: 30,


  },
  bodyText2:{
    justifyContent: "center",
    paddingLeft: 30,
    paddingTop: 10,
  },
  footer:{
    justifyContent: "center",
    alignItems: "center",

  },
  avatarLogog:{
    resizeMode: "stretch",
    height: 30,
    width: 30,
  },
  avatarName:{
    fontWeight:"bold",
    fontStyle:"italic",
    fontSize: 15,
  }
});