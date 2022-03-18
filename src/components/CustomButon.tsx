import React from 'react'
import { Pressable, StyleProp, Text, View, ViewProps, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    name: string;
    color1: string;
    color2: string;
    colorText: string;
    onPress: () => void;
}

const CustomButon = ({name, color1, color2, onPress, colorText  }: Props) => {
    return (
        <LinearGradient 
            colors={[ color1, color2 ]}
            style={styles.stylesButon}
        >
            <Pressable
            onPress={onPress}
            >
                <Text style={{ color: colorText }} >{ name }</Text>
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

