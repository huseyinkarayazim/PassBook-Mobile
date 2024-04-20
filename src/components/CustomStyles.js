import { StyleSheet, Text, View ,SafeAreaView,
    ScrollView,
    StatusBar,
  } from 'react-native'
import React from 'react'

const CustomStyles = () => {}
const styles = StyleSheet.create({

    CustomViewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    CustomInputContainer: { // main     
      width:'80%',
      justifyContent:'center',
      alignItems:'center'
    
    },
    CustomInputTextStyle: { // text
      fontSize: 20,
    },
    CustomInputTextInputStyle: { //textbox
      height: 50,
      width: '95%',
      marginVertical: 10,
      textAlign: 'center',
      borderBottomLeftRadius:80,
      borderTopRightRadius:80,
      borderWidth:0.5,
    },
})
export default styles