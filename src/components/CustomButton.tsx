import React from 'react'
import { Pressable, StyleProp, Text, View, ViewProps, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { number } from 'yup';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    name: string;
    colors: string[];
    onPress: () => void;
    styleText?: StyleProp<TextStyle>
    styleView?: StyleProp<ViewStyle>
}

const CustomButton = ({name, colors, onPress, styleText, styleView  }: Props) => {
    return (
        <LinearGradient 
            colors={colors}
            style={{...styles.stylesButon, ...styleView as any  }}
        >
            <TouchableOpacity
            onPress={onPress}
            >
                <Text style={{  ...styleText as any }} >{ name }</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default CustomButton;

const styles = StyleSheet.create({

    stylesButon: {
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        height: 50,
    },

})

