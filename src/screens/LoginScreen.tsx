import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { useFormik } from 'formik';
import CustomInput from '../components/CustomInput';
import HeaderIcon from '../components/HeaderIcon';
import CustomButon from '../components/CustomButton';
import { initialValues } from '../functions/LoginFunc';
import { StackScreenProps } from '@react-navigation/stack';
import { StackAppParams } from '../interfaces/StackAppNavigationInterfaces';


interface Props extends StackScreenProps<StackAppParams, 'LoginScreen'>{}

const LoginScreen = ({ navigation }: Props) => {

  const { values, setFieldValue, errors, handleBlur, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    onSubmit: values => console.log('Values', values),

    // validationSchema: ,

  });

  return (
    <View style={styles.container} >
        <HeaderIcon />

      <View style={{ ...styles.target, ...styles.shadowContainer }} >

        <Text style={styles.titleText} >Ingresa tu cuenta</Text>

        <CustomInput  
          placeHolder='Usuario'
          field='email'
          saveValue={setFieldValue}
          handleBlur={handleBlur}
          touched={ touched.email }
          error={ errors.email }
          value={ values.email }
        />

        <CustomInput
          placeHolder='Contraseña'
          field='pass'
          saveValue={setFieldValue}
          handleBlur={handleBlur}
          touched={ touched.pass }
          error={ errors.pass }
          value={ values.pass }
        />

        <CustomButon 
          name='Iniciar Sesión'
          colors={['#2988bc', '#556dac' ]}
          onPress={ handleSubmit }
          styleText={ styles.stylesTxtButon }
        />

        <CustomButon 
          name='Olvidaste tu contraseña'
          colors={['transparent', 'transparent']}
          onPress={ () => console.log('Press..') }
          styleText={{ fontSize: 14, color: '#000' }}
        />

        <CustomButon 
          name='Crear cuenta nueva'
          colors={['transparent', 'transparent']}
          onPress={ () => navigation.navigate('NewCountScreen') }
          styleText={{ fontSize: 14, color: '#000' }}
        />



      </View>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  target: {
    width: '90%',
    maxHeight: 1200,
    backgroundColor: '#fff',
    borderRadius: 14,
    marginTop: 20,
    padding: 10,
  },

  titleText: {
    height: 30,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
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
  },
  
  stylesTxtButon: {
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  }

}) 