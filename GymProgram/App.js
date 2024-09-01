import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import WelcomeScreen from 'C:/Users/Yusuf/Desktop/GymProgram/App/Login Page/Welcome'
import LoginScreen from 'C:/Users/Yusuf/Desktop/GymProgram/App/Login Page/Login'
import SignupScreen from 'C:/Users/Yusuf/Desktop/GymProgram/App/Login Page/Signup'
import HomeScreen from 'C:/Users/Yusuf/Desktop/GymProgram/App/Navigation/home'
import ProfileScreen from 'C:/Users/Yusuf/Desktop/GymProgram/App/Navigation/profile'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen  name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
