import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';


import {
  Pressable, StyleSheet, Text, TextInput, View, Image
} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
export var isAuthenticatedGlobal=false;
const App =()=> {
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedGlobal);

  const updateAuthStatus = (value) => {
    setIsAuthenticated(value);
    isAuthenticatedGlobal = value;
  };
  return (
    <RootNavigation isAuth={isAuthenticated} />
  );
}
export default App

