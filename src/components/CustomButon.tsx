import React from 'react'
import { Pressable, StyleProp, Text, View, ViewProps, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { number } from 'yup';

interface Props {
    name: string;
    color1: string;
    color2: string;
    onPress: () => void;
    styleText?: StyleProp<TextStyle>
    styleView?: StyleProp<ViewStyle>
}

const CustomButon = ({name, color1, color2, onPress, styleText, styleView  }: Props) => {
    return (
        <LinearGradient 
            colors={[ color1, color2 ]}
            style={{...styles.stylesButon, ...styleView as any  }}
        >
            <Pressable
            onPress={onPress}
            >
                <Text style={{  ...styleText as any }} >{ name }</Text>
            </Pressable>
        </LinearGradient>
    )
}

export default CustomButon;

const styles = StyleSheet.create({

    stylesButon: {
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        height: 50,
    },

})

