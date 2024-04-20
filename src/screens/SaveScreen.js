import { StatusBar } from 'expo-status-bar';
import react from 'react';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Loading, CustomTextInput, CustomBtnStyle, CustomStyles } from '../components/';
import axios from 'axios';



const SaveScreen = ({ navigation }) => {
    const [savedUserMail, setsavedUserMail] = React.useState("");
    const [savedUsername, setsavedUsername] = React.useState("");
    const [savedPassword, setsavedPassword] = React.useState("");
    const [savedAppName, setsavedAppName] = React.useState("");
    const [savedAppLink, setsavedAppLink] = React.useState("");
    const [savedInfo, setSavedInfo] = React.useState("");
    const [isloading, setIsloading] = React.useState(false);
    
  
    const handleSaveButtonPress = () => {
        const URL = "http://192.168.1.39:5000/v1/data";
        axios.post(URL, {        
                "owner":null,
                "username":savedUserMail,
                "email":savedUserMail,
                "password":savedPassword,
                "applicationName":savedAppName,
                "applicationLink":savedAppLink,
                "Note":savedInfo        
          })
          .then(function (response) {
           
          })
          .catch(function (error) {
            console.log(error);
          });

    };
    const handleViewButtonPress = () => {
        navigation.navigate('View');
    };
    return (
     
            <ScrollView>   
           <View style={styles.container}>
           <CustomBtnStyle
                        customPressedColor='lightblue'
                        customNonPressedColor="lightgray"
                        customPressedFont="normal"
                        customNonPressedFont="italic"
                        customTitle="View"
                        customOnPress={handleViewButtonPress}
                        customWidth='30%'
                    />
           </View>
                <View style={CustomStyles.CustomViewContainer}>
                  

                    <CustomTextInput
                        customTitle='Mail'
                        customPlaceholder='Enter Your Mail'
                        customOnChangeText={setsavedUserMail}
                        customValue={savedUserMail}
                        customSecureTextEntry={false}
                    />

                    <CustomTextInput
                        customTitle='UserName'
                        customPlaceholder='Enter Your UserName'
                        customOnChangeText={setsavedUsername}
                        customValue={savedUsername}
                        customSecureTextEntry={false}
                    />
                    <CustomTextInput
                        customTitle='Password'
                        customPlaceholder='Enter Your Password'
                        customOnChangeText={setsavedPassword}
                        customValue={savedPassword}
                        customSecureTextEntry={true}
                    />
                    <CustomTextInput
                        customTitle='Application Name'
                        customPlaceholder='Enter Your Application Name'
                        customOnChangeText={setsavedAppName}
                        customValue={savedAppName}
                        customSecureTextEntry={false}
                    />
                    <CustomTextInput
                        customTitle='Application Link'
                        customPlaceholder='Enter Your Application Link'
                        customOnChangeText={setsavedAppLink}
                        customValue={savedAppLink}
                        customSecureTextEntry={false}
                    />
                    <CustomTextInput
                        customTitle='Note'
                        customPlaceholder='You Can Save Note For This Application'
                        customOnChangeText={setSavedInfo}
                        customValue={savedInfo}
                        customSecureTextEntry={false}
                    />
                    <CustomBtnStyle
                        customPressedColor='lightblue'
                        customNonPressedColor="lightgray"
                        customPressedFont="normal"
                        customNonPressedFont="italic"
                        customTitle="Save"
                        customOnPress={handleSaveButtonPress}
                        customWidth='30%'
                    />
                    {isloading ? <Loading changeIsloading={() => setIsloading(false)} /> : null}
                </View>
            
            </ScrollView>
    





    );
}
export default SaveScreen
const styles = StyleSheet.create({
    container: {
        flex: 1, 
    }


})