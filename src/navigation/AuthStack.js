import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LoginScreen,SignupScreen,SaveScreen,ViewScreen } from '../screens/Index'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRootName='Login'  >        
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='SignUp' component={SignupScreen}/>
      <Stack.Screen name='Save' component={SaveScreen} />
      <Stack.Screen name='View' component={ViewScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
