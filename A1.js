import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import * as Speech from 'expo-speech';
import Icon from 'react-native-vector-icons/AntDesign';
import { Ionicons, FontAwesome,AntDesign } from '@expo/vector-icons';


export default function A1() {
  const speak = () => {
    const thingToSay = 'A bird in the hand is worth two in the bush';
    Speech.speak(thingToSay);
  };
  return (
    <ScrollView>
      <LinearGradient colors={['#2193b0', '#6dd5ed']} style={{ height: 240, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>

        <TouchableOpacity onPress={speak} style={{ position: "relative", left: 20, top: 25 }}>
          <Ionicons name="arrow-back-circle" size={40} color="#16013d" />
        </TouchableOpacity>

        <TouchableOpacity onPress={speak} style={{ position: "relative", left: 340, top: -20 }}>
          <FontAwesome name="share-alt-square" size={40} color="#16013d"/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={speak} style={{ position: "relative", left: 270, top: -60 }}>
        <AntDesign name="staro" size={40} color="black"/>        
        </TouchableOpacity>

       

        <Text style={{ fontSize: 30, fontWeight: "bold", color: "white", position: "relative", top: -45, left: 10 }}>A bird in the hand is worth two in the bush
        </Text>


        <TouchableOpacity onPress={speak} style={{ position: "relative", left: 150, top: -65 }}>
          <Icon name="sound" size={30} color="white" style={{ position: "relative", left: 180, top: 10, backgroundColor: "black", marginRight: 340, padding: 10, borderRadius: 10 }} />
        </TouchableOpacity>

        <Text style={{fontSize:15,fontWeight:"bold",marginLeft:15,marginTop:-75}}>Idioms and Phrases Kit</Text>
      </LinearGradient>

      <Text style={{ fontSize: 25, fontWeight: "bold", position: "relative", left: 10, top: 5 }}>Definition :</Text>

      <Text style={{ fontSize: 18, position: "relative", left: 10, marginRight: 13 }}>
        Having something that is certain is much better than taking a risk for more, because
        chances are you might lose everything.</Text>

      <Text style={{ fontSize: 25, fontWeight: "bold", position: "relative", left: 10, top: 10 }}>Example Sentences :</Text>
      <Text style={{ fontSize: 18, position: "relative", top: 10, left: 10, marginRight: 13, marginBottom:45 }}>
        1. You may not like your job, but don’t quit merely on the hope of finding a better one. A bird in the hand is worth two in the bush. {'\n'}{'\n'}
        2. I might have got a better offer if I had waited for some more time, but I decided to take the one I had. After all, a bird in the hand is worth two in the bush.
        {'\n'}{'\n'}3. He decided against selling off his small business for the prospects of starting a bigger one. He realized that a bird in the hand is worth two in the bush.
       </Text>


<LinearGradient colors={["#4a9bff","#f20c87"]} style={{height:100}}>

</LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})