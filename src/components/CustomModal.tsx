import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    title: string,
    description: string,
    onPress: () => void,
    isActivity: boolean,
    changeVisible?: () => void,
}

const CustomModal = ({ title, description, onPress, isActivity, }: Props) => {


    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={ isActivity }
            style={{ flex: 1 }}
        >
            <View style={styles.container} >
                <View style={styles.target} >
                    <Text style={ styles.styleTitle } >{title}</Text>
                    <Text>{description}</Text>
                    <LinearGradient
                        colors={['#2988bc', '#556dac']}
                        style={ styles.styleButton }
                    >
                        <Pressable
                           onPress={ onPress }
                        >
                            <Text style={{ color: '#fff' }} > Aceptar </Text>
                        </Pressable>
                    </LinearGradient>

                </View>
            </View>
        </Modal>
    )
}

export default CustomModal;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    target: {
        backgroundColor: '#fff',
        width: '90%',
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        padding: 10,
    },

    styleButton: {
       height: 50, 
       minWidth: 80,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 14,
       marginTop: 20,
    },

    styleTitle: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    }

})