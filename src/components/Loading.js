import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = (props) => {
  return (
    <View style={styles.container}> 
    <Pressable onPress={()=>props.changeIsloading()} style={[styles.closeBtnContainer,styles.closeBtnStyle]} >
    <Text style={styles.closeBtnStyle}>X</Text>  
    </Pressable>
    <ActivityIndicator size="large" color="#00ff00" />
     <Text style={styles.TextStyle}>Loading...</Text>
    
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      position:'absolute',
      margin:1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor:'black',
      width:'100%',
      height:'100%', 

    },
    closeBtnContainer:{
        borderRadius:50,
        backgroundColor:'white',
        width:50,
        height:50,
        top :30,
        right:30,
        position:'absolute',

    },
    closeBtnStyle:{
        fontSize:35,
        fontWeight:'bold',
        color:'#00ff00',
        alignItems:'center',
        justifyContent:'center'
       
    },
    TextStyle:{
        fontSize:18,
        fontWeight:'bold',
        color:'lime',
        marginTop:20
    }

   
  });
              

