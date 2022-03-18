import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderIcon = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }} >

            <View
                style={{ ...styles.containerIcon, ...styles.shadowContainer }} >
                <Icon
                    name='leaf'
                    color='white'
                    size={80}
                />
            </View>

            <Text style={styles.nameText} >Green Leaf</Text>

        </View>
    )
}

export default HeaderIcon;

const styles = StyleSheet.create({

    containerIcon: {
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 8,
        height: 120,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },


    nameText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
    },

    shadowContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }

})