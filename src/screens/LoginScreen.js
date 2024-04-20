import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomTextInput, CustomBtnStyle, Loading } from '../components';
import axios from 'axios';
const LoginScreen = ({ navigation }) => {
  const [userMail, setUserMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isloading, setIsloading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState("");

  const handleSignUpButtonPress = () => {
    setIsloading(false);
    navigation.navigate('SignUp');
  };
  const handleLoginButtonPress = (credentials) => {
    setIsloading(false);
    const url =  "http://192.168.1.39:5000/v1/login";
    axios.post(url, credentials)
    .then(function (response){
  
        const result = response.data;
      
        const { message, status, user } = result;
          if(status!=='OK'){
            console.log("login faild")
            handleMessage(message,status);

          }
          else{
          console.log("login sucess  : ")         
          navigation.navigate('View');
          }
      })
      .catch(error => {
        console.log(error);
      })

  };
  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message),
    setMessageType(type)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.ImageStyle}
        source={require('../../assets/login.jpg')}
      />
      <CustomTextInput
        customTitle='Mail'
        customPlaceholder='Enter Your Mail'
        customOnChangeText={setUserMail}
        customValue={userMail}
        customSecureTextEntry={false}
      />
      <CustomTextInput
        customTitle='Password'
        customPlaceholder='Enter Your Password'
        customOnChangeText={setPassword}
        customValue={password}
        customSecureTextEntry={true}
      />
      

      <CustomBtnStyle
        customPressedColor='lightgray'
        customNonPressedColor="lightblue"
        customPressedFont="italic"
        customNonPressedFont="normal"
        customTitle="Login"
        customOnPress={() => {
          handleLoginButtonPress({
            "email": userMail,
            "password": password
          })}}
        customWidth='70%'
      />
      <CustomBtnStyle
        customPressedColor='lightblue'
        customNonPressedColor="lightgray"
        customPressedFont="normal"
        customNonPressedFont="italic"
        customTitle="SignUp"
        customOnPress={handleSignUpButtonPress}
        customWidth='30%'
      />
      {isloading ? <Loading changeIsloading={() => setIsloading(false)} /> : null}
    </View>
  );
}
export default LoginScreen

const styles = StyleSheet.create({
  container: { // main
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    width: 250,
    height: 250,
    margin: 10,
  },

});
