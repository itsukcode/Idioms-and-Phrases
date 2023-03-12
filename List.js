import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Avatar } from 'react-native-paper';

export default function List({ navigation }) {
  return (
    <ScrollView>

      <Text style={{position:"relative",top:40,fontSize:22,fontWeight:"bold",left:40}}>Library</Text>

      <LinearGradient colors={['#b2fefa', '#0ed2f7']} style={{ borderWidth: 2, marginLeft: 11, marginTop: 70, marginRight: 210, padding: 10, paddingLeft: 8 }}>
        <Image
          style={{ width: 152, height: 118, position: "relative", right: 7, borderRadius: 10, left: 0 }}
          source={require("../Images/A.png")}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ListA')}>
          <Text style={{ backgroundColor: "black", color: "white", padding: 7, paddingLeft: 40, borderRadius: 10, fontWeight: "bold", fontSize: 20, marginTop: 20, }}>Start
          </Text>
          <Avatar.Icon size={20} icon="play" style={{ backgroundColor: "#ff0062", position: "relative", left: 100, top: -30, marginBottom: -20 }} />

        </TouchableOpacity>
      </LinearGradient>


      {/* *********** B************************* */}

      <LinearGradient colors={['#ee9ca7', '#ffdde1']} style={{ borderWidth: 2, position: "relative", left: 200, top: -203, marginRight: 210, padding: 10, paddingLeft: 13 }}>
        <Image
          style={{ width: 152, height: 118, position: "relative", right: 7, borderRadius: 10, left: 0 }}
          source={require("../Images/B.png")}
        />
        <TouchableOpacity>
          <Text style={{ backgroundColor: "black", color: "white", padding: 7, paddingLeft: 40, borderRadius: 10, fontWeight: "bold", fontSize: 20, marginTop: 20, }}>Start
          </Text>
          <Avatar.Icon size={20} icon="play" style={{ backgroundColor: "#ff0062", position: "relative", left: 100, top: -30, marginBottom: -20 }} />

        </TouchableOpacity>
      </LinearGradient>

      {/* /***************C****************************/}

      <LinearGradient colors={['#f7797d', '#fbd786']} style={{ borderWidth: 2, position: "relative", left: 10, top: -190, marginRight: 220, padding: 10, paddingLeft: 8 }}>
        <Image
          style={{ width: 152, height: 118, position: "relative", right: 7, borderRadius: 10, left: 0 }}
          source={require("../Images/C.png")}
        />
        <TouchableOpacity>
          <Text style={{ backgroundColor: "black", color: "white", padding: 7, paddingLeft: 40, borderRadius: 10, fontWeight: "bold", fontSize: 20, marginTop: 20, }}>Start
          </Text>
          <Avatar.Icon size={20} icon="play" style={{ backgroundColor: "#ff0062", position: "relative", left: 100, top: -30, marginBottom: -20 }} />

        </TouchableOpacity>
      </LinearGradient>


      {/* ******************************D****************************** */}

      <LinearGradient colors={['#f5af19', '#f12711']} style={{ borderWidth: 2, position: "relative", left: 200, top: -394, marginRight: 210, padding: 10, paddingLeft: 13 }}>
        <Image
          style={{ width: 152, height: 118, position: "relative", right: 7, borderRadius: 10, left: 0 }}
          source={require("../Images/D.png")}
        />
        <TouchableOpacity>
          <Text style={{ backgroundColor: "black", color: "white", padding: 7, paddingLeft: 40, borderRadius: 10, fontWeight: "bold", fontSize: 20, marginTop: 20, }}>Start
          </Text>
          <Avatar.Icon size={20} icon="play" style={{ backgroundColor: "#ff0062", position: "relative", left: 100, top: -30, marginBottom: -20 }} />

        </TouchableOpacity>
      </LinearGradient>

      {/* *****************************E*********************************** */}

      <LinearGradient colors={['#6be585', '#dd3e54']} style={{ borderWidth: 2, position: "relative", left: 10, top: -380, marginRight: 220, padding: 10, paddingLeft: 8 }}>
        <Image
          style={{ width: 152, height: 118, position: "relative", right: 7, borderRadius: 10, left: 0 }}
          source={require("../Images/E.png")}
        />
        <TouchableOpacity>
          <Text style={{ backgroundColor: "black", color: "white", padding: 7, paddingLeft: 40, borderRadius: 10, fontWeight: "bold", fontSize: 20, marginTop: 20, }}>Start
          </Text>
          <Avatar.Icon size={20} icon="play" style={{ backgroundColor: "#ff0062", position: "relative", left: 100, top: -30, marginBottom: -20 }} />

        </TouchableOpacity>
      </LinearGradient>

      {/* *********************************F********************************************** */}
      
      <LinearGradient colors={['#eaafc8', '#654ea3']} style={{ borderWidth: 2, position: "relative", left: 200, top: -583, marginRight: 210, padding: 10, paddingLeft: 13 }}>
        <Image
          style={{ width: 152, height: 118, position: "relative", right: 7, borderRadius: 10, left: 0 }}
          source={require("../Images/F.png")}
        />
        <TouchableOpacity>
          <Text style={{ backgroundColor: "black", color: "white", padding: 7, paddingLeft: 40, borderRadius: 10, fontWeight: "bold", fontSize: 20, marginTop: 20, }}>Start
          </Text>
          <Avatar.Icon size={20} icon="play" style={{ backgroundColor: "#ff0062", position: "relative", left: 100, top: -30, marginBottom: -20 }} />

        </TouchableOpacity>
      </LinearGradient>

      {/* *****************************************G********************************************* */}


      <LinearGradient colors={['#ff4b2b', '#ff416c']} style={{ borderWidth: 2, position: "relative", left: 10, top: -570, marginRight: 220, padding: 10, paddingLeft: 8 }}>
        <Image
          style={{ width: 152, height: 118, position: "relative", right: 7, borderRadius: 10, left: 0 }}
          source={require("../Images/G.png")}
        />
        <TouchableOpacity>
          <Text style={{ backgroundColor: "black", color: "white", padding: 7, paddingLeft: 40, borderRadius: 10, fontWeight: "bold", fontSize: 20, marginTop: 20, }}>Start
          </Text>
          <Avatar.Icon size={20} icon="play" style={{ backgroundColor: "#ff0062", position: "relative", left: 100, top: -30, marginBottom: -20 }} />

        </TouchableOpacity>
      </LinearGradient>

{/* *****************************************************H************************************************ */}

      <LinearGradient colors={['#ff416c', '#654ea3']} style={{ borderWidth: 2, position: "relative", left: 200, top: -773, marginRight: 210, padding: 10, paddingLeft: 13 }}>
        <Image
          style={{ width: 152, height: 118, position: "relative", right: 7, borderRadius: 10, left: 0 }}
          source={require("../Images/H.png")}
        />
        <TouchableOpacity>
          <Text style={{ backgroundColor: "black", color: "white", padding: 7, paddingLeft: 40, borderRadius: 10, fontWeight: "bold", fontSize: 20, marginTop: 20, }}>Start
          </Text>
          <Avatar.Icon size={20} icon="play" style={{ backgroundColor: "#ff0062", position: "relative", left: 100, top: -30, marginBottom: -20 }} />

        </TouchableOpacity>
      </LinearGradient>

    </ScrollView >
  )
}

const styles = StyleSheet.create({})