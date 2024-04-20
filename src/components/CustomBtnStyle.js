import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomBtnStyle = (props) => {
    const { customOnPress, customTitle, customPressedColor, customNonPressedColor, customPressedFont, customNonPressedFont, customWidth } = props;  
    const styles = StyleSheet.create({
        pressableContainer: {
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        ButtonStyle: {
            width: customWidth, // değişken ile alınıyor
            height: 50,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10
        },
    })
    return (
        <View style={styles.pressableContainer}>
            <Pressable
                onPress={
                    customOnPress
                }
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? customPressedColor : customNonPressedColor,
                    },
                    styles.ButtonStyle,
                ]} >
                {({ pressed }) => (
                    <Text style={[{ fontStyle: pressed ? customPressedFont : customNonPressedFont }]}>
                        {customTitle}
                    </Text>
                )}
            </Pressable>
        </View>
    )
}

export default CustomBtnStyle
