import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SaveScreen,ViewScreen } from '../screens/Index'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();
const UserStack = () => {
  return (
    <Stack.Navigator initialRootName='View'>
       <Stack.Screen name='View' component={ViewScreen} />
       <Stack.Screen name='Save' component={SaveScreen} />
     
    </Stack.Navigator>
  )
}
export default UserStack
