import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { CustomStyles } from '.';
const CustomTextInput = (props) => {
    const { customTitle, customPlaceholder, customOnChangeText, customValue, customSecureTextEntry } = props;
  
    return (
      
      <View style={CustomStyles.CustomInputContainer}>
        <Text style={CustomStyles.CustomInputTextStyle}>{customTitle}</Text>
        <TextInput
          placeholder={customPlaceholder}
          style={CustomStyles.CustomInputTextInputStyle}
          onChangeText={customOnChangeText}
          value={customValue}
          secureTextEntry={customSecureTextEntry}
        />
      </View>
    );
  }
  

export default CustomTextInput
