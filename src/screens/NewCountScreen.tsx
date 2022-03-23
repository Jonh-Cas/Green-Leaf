import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import CustomButton from '../components/CustomButton';
import { StackScreenProps } from '@react-navigation/stack';
import { StackAppParams } from '../interfaces/StackAppNavigationInterfaces';
import { initialValues, schemaYup } from '../functions/newCountFunc';
import firebaseApp from '../firebase/firebase';
import CustomModal from '../components/CustomModal';

interface Props extends StackScreenProps<StackAppParams, 'NewCountScreen'> { }

const NewCountScreen = ({ navigation }: Props) => {

    const [isVisible, setIsVisible] = useState(false);
    const { values, touched, errors, handleBlur, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        onSubmit: async values => {
            const resp = await firebaseApp.createNewUser(values.email, values.pass);
            if( resp === 'sendEmail' ){
                setIsVisible(true)
            }else{

            }
        },
        validationSchema: schemaYup,
    });

    const descriptionModal = () =>  {

        return {
            
        }
    }



    return (
        <>  
            <CustomModal 
                title='Este es un modal'
                description='Aqui esta la descripción del modal'
                onPress={ () => setIsVisible(false) }
                isActivity={ isVisible }
                
            />

            <LinearGradient
                colors={['#258039', '#fff', '#258039']}
                style={{ flex: 1, justifyContent: 'center' }} >

                <View
                    style={{ ...styles.target, ...styles.shadowContainer }}
                >
                    <Text style={ styles.titleTarget } >Llene el formulario</Text>

                    <CustomInput
                        placeHolder='Correo'
                        field='email'
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        saveValue={setFieldValue}
                        handleBlur={handleBlur}
                    />
                    <CustomInput
                        placeHolder='Contraseña'
                        field='pass'
                        value={values.pass}
                        error={errors.pass}
                        touched={touched.pass}
                        saveValue={setFieldValue}
                        handleBlur={handleBlur}
                    />

                    <CustomInput
                        placeHolder='Repetir contraseña'
                        field='repeatPass'
                        value={values.repeatPass}
                        error={errors.repeatPass}
                        touched={touched.repeatPass}
                        saveValue={setFieldValue}
                        handleBlur={handleBlur}
                    />

                    <CustomButton
                        name='Registar'
                        colors={['#2988bc', '#556dac']}
                        onPress={handleSubmit}
                        styleText={styles.styleTextButton1}
                        styleView={{ margin: 10 }}

                    />
                    <CustomButton
                        name='Atras'
                        colors={['#CF3721', '#ee693f']}
                        onPress={() => navigation.goBack()}
                        styleText={styles.stylesTextButton2}
                        styleView={{ margin: 15 }}

                    />

                </View>
            </LinearGradient>
        </>
    )
}

export default NewCountScreen;

const styles = StyleSheet.create({
    target: {
        width: '90%',
        maxHeight: 1200,
        backgroundColor: '#fff',
        borderRadius: 14,
        marginTop: 20,
        padding: 10,
        alignSelf: 'center',
        marginBottom: 40,

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
    },

    titleTarget: {
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#000'
    },

    styleTextButton1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    stylesTextButton2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})