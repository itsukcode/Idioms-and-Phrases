import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import Setting from './Setting'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import List from './List';



const Tab = createMaterialBottomTabNavigator();

export default function Tabnavigation() {
    return (
        <Tab.Navigator initialRouteName="Home"
            activeColor="white"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: 'white' }}>
                
            <Tab.Screen name="Home" component={Home} 

                options={{
                    activeColor:"white",
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Setting" component={List}
                options={{
                    tabBarLabel: 'Library',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="car" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})