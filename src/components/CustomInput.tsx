import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import menuInput from '../functions/customInputFuction';
import { Props } from '../interfaces/customInputInterfaces';



const CustomInput = ({ placeHolder, field, saveValue, handleBlur, error, touched, value }: Props) => {

    const [isShown, setIsShown] = useState((field === 'pass' || field === 'repeatPass') ? true : false);

    return (
        <>
        <View style={styles.container} >
           

                <TextInput
                    placeholder={placeHolder}
                    keyboardType={menuInput(field).keyboardType}
                    maxLength={menuInput(field).maxLeght}
                    secureTextEntry={isShown}
                    placeholderTextColor='#999999'
                    style={styles.textInputStyle}
                    onChangeText={(txt) => saveValue(field, txt)}
                    onBlur={handleBlur(field)}
                    value={value}

                />

                {
                    (error && touched)
                        ?
                        <Icon
                            name='close-circle'
                            size={25}
                            color='red'
                            style={{ alignSelf: 'center', justifyContent: 'center' }}
                        />
                        : ((error === undefined) && touched === true)
                            ?
                            <Icon
                                name='checkmark-circle'
                                size={25}
                                color='green'
                                style={{ alignSelf: 'center', justifyContent: 'center' }}

                            />
                            : null
                }
                {
                    (field === 'pass' || field === 'repeatPass') ?
                        <View style={styles.iconPass} >
                            <TouchableOpacity
                                onPress={() => setIsShown(!isShown)}
                            >
                                <Icon
                                    name={(isShown) ? 'eye-outline' : 'eye-off-outline'}
                                    color='gray'
                                    size={30}
                                />
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.iconPass} >
                            <Icon
                                name={menuInput(field).icon}
                                color='gray'
                                size={30}
                            />
                        </View>

                }


        </View>
        {

            (error && touched) && <Text style={{ color: 'red' }} > { error } </Text>
        }

        </>

    )
}

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: '#fff',
        borderRadius: 15,
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
    },

    textInputStyle: {
        flex: 1,
        marginLeft: 5,
        color: '#000'
    },

    iconPass: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    }

})