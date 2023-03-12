import { ImageBackground, StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

// import { BannerView } from 'react-native-fbads';


import { ImageSlider } from "react-native-image-slider-banner";


import * as Speech from 'expo-speech';


export default function Home({ navigation }) {
  // const speak = () => {
  //   const thingToSay = 'mic testing';
  //   Speech.speak(thingToSay);
  // };
  return (
    <ScrollView>
      <ImageBackground style={{ backgroundColor: "#ff0062", borderBottomRightRadius: 30, borderBottomLeftRadius: 30, height: 150 }}>
        <Text style={{ fontSize: 33, position: "relative", left: 15, fontWeight: "bold", marginTop: 20, color: "#ffe0ec" }}>Idioms and Phrases Kit</Text>

        <Text style={{ marginTop: 20, marginLeft: 30, fontSize: 22, fontWeight: "bold", color: "#102b38" }}>Home</Text>
        <Avatar.Icon size={24} icon="cat" style={{ position: "relative", left: 320, top: -30 }} />
      </ImageBackground>

      <Text style={{ fontSize: 20, fontWeight: "bold", position: "relative", left: 10, top: 13, backgroundColor: "black", marginRight: 60, color: "white", padding: 5, paddingLeft: 20, borderRadius: 10 }}>Idioms and Phrases Of The Day </Text>
      <ImageSlider
        data={[
          { img: 'https://img.freepik.com/free-vector/workout-tracker-app-interface_23-2148653679.jpg?size=626&ext=jpg' },
          { img: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?size=626&ext=jpg' },
          { img: 'https://img.freepik.com/free-psd/smartphone-screen-mockup-psd-promotional-ad_53876-123315.jpg?size=626&ext=jpg' }
        ]}
        autoPlay={true}
        closeIconColor="#fff"
      />
      <Text style={{ fontSize: 20, color: "white", backgroundColor: "black", marginRight: 225, position: "relative", left: 10, padding: 5, paddingLeft: 20, borderRadius: 10, fontWeight: "bold" }}>Latest</Text>
      {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:"relative",left:260,}} /> */}




      {/* List */}

      <LinearGradient colors={['#2193b0', '#6dd5ed']} style={{ margin: 10, padding: 10, borderRadius: 5, paddingBottom: -20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('A1')}>

          <Text style={{ fontSize: 23, color: "white", fontWeight: "bold", position: "relative", top: 5 }}>
            A bird in the hand is worth two in the bush-          </Text>

          <View style={{ borderRadius: 10, backgroundColor: "black", marginLeft: 250, padding: 5, position: "relative", top: 5, paddingLeft: 10 }}>
            <Text style={{ fontSize: 15, color: "white", paddingLeft: 10 }}>Read    </Text>
            <Avatar.Icon size={20} icon="book" style={{ backgroundColor: "#ff0062", position: "relative", left: 60, top: -21, marginBottom: -20 }} />
          </View>

          <Text style={{ fontSize: 13, color: "black", position: "relative", top: -15, fontWeight: "bold" }}>
            Idioms and Phrases Kit</Text>
        </TouchableOpacity>
      </LinearGradient>


      <LinearGradient colors={['#24fe41', '#fdfc47']} style={{ margin: 10, padding: 10, borderRadius: 5, paddingBottom: -20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('A1')}>

          <Text style={{ fontSize: 23, color: "blue", fontWeight: "bold", position: "relative", top: 5 }}>
            A bird in the hand is worth two in the bush-          </Text>

          <View style={{ borderRadius: 10, backgroundColor: "black", marginLeft: 250, padding: 5, position: "relative", top: 5, paddingLeft: 10 }}>
            <Text style={{ fontSize: 15, color: "white", paddingLeft: 10 }}>Read    </Text>
            <Avatar.Icon size={20} icon="book" style={{ backgroundColor: "#ff0062", position: "relative", left: 60, top: -21, marginBottom: -20 }} />
          </View>

          <Text style={{ fontSize: 13, color: "black", position: "relative", top: -15, fontWeight: "bold" }}>
            Idioms and Phrases Kit</Text>
        </TouchableOpacity>
      </LinearGradient>



      <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={{ margin: 10, padding: 10, borderRadius: 5 }}>
        <TouchableOpacity onPress={() => navigation.navigate('List')}>

          <Text style={{ fontSize: 23, color: "white", fontWeight: "bold", }}>
            Check Out Library </Text>
        </TouchableOpacity>
      </LinearGradient>




    </ScrollView>
  )
}

const styles = StyleSheet.create({})