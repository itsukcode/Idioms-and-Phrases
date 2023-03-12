import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import A1 from "./src/Content/A/A1"
import Tabnavigation from './src/Screen/Tabnavigation';
import List from './src/Screen/List';
import ListA from './src/Content/A/ListA';

const Stack = createNativeStackNavigator();




export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={Tabnavigation} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
        <Stack.Screen name="A1" component={A1} options={{ headerShown: false }}/>
        <Stack.Screen name="List" component={List} options={{ headerShown: false }}/>
        <Stack.Screen name="ListA" component={ListA} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}