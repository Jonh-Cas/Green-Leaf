import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import CustomButton from '../components/CustomButton';
import { StackScreenProps } from '@react-navigation/stack';
import { StackAppParams } from '../interfaces/StackAppNavigationInterfaces';

interface Props extends StackScreenProps<StackAppParams, 'NewCountScreen'> {}

const initialValues = {
    name: '',
    lastName1: '',
    lastName2: '',
    email: '',
    pass: '',
    repeatPass: '',
}

const NewCountScreen = ({ navigation }: Props) => {

    const { values, touched, errors, handleBlur, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        onSubmit: values => console.log('Values: ', values)
    })

    return (
        <LinearGradient
            colors={['#258039', '#fff', '#258039']}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, }} >
            <View
                style={{ ...styles.target, ...styles.shadowContainer }}
            >
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }} >Llene el formulario</Text>
                <CustomInput
                    placeHolder='Nombre'
                    field='name'
                    value={values.name}
                    error={errors.name}
                    touched={touched.name}
                    saveValue={setFieldValue}
                    handleBlur={handleBlur}
                />
                <CustomInput
                    placeHolder='Apellido Parterno'
                    field='lastName1'
                    value={values.lastName1}
                    error={errors.lastName1}
                    touched={touched.lastName1}
                    saveValue={setFieldValue}
                    handleBlur={handleBlur}
                />
                <CustomInput
                    placeHolder='Apellido Materno'
                    field='lastName2'
                    value={values.lastName2}
                    error={errors.lastName2}
                    touched={touched.lastName2}
                    saveValue={setFieldValue}
                    handleBlur={handleBlur}
                />
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
                    onPress={() => console.log('Press..')}
                    styleText={styles.styleTextButton1 }
                    styleView={{ margin: 10 }}

                />
                <CustomButton
                    name='Atras'
                    colors={['#CF3721', '#ee693f']}
                    onPress={() => navigation.goBack()}
                    styleText={styles.stylesTextButton2 }
                    styleView={{ margin: 15 }}

                />

            </View>
        </LinearGradient>
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