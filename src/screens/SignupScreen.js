import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet,  View, Image } from 'react-native';
import {LoadingIndicator,CustomTextInput,CustomBtnStyle} from '../components';
const SignupScreen = ({navigation}) => {
  const [userMail, setUserMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const handleLoginButtonPress = () => {
    setIsLoading(false); 
    navigation.navigate('Login'); 
  };
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
      customTitle="SignUp"
      customWidth='70%'
      />
      <CustomBtnStyle
      customPressedColor='lightblue'
      customNonPressedColor="lightgray"
      customPressedFont="normal"
      customNonPressedFont="italic"
      customTitle="Login"
      customWidth='30%'
      customOnPress= {handleLoginButtonPress}
      />
      {isLoading ? <LoadingIndicator changeIsloading={() => setIsLoading(false)} /> : null}
    </View>
  );
}
export default SignupScreen
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
