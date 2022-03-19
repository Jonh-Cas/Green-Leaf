import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { useFormik } from 'formik';
import CustomInput from '../components/CustomInput';
import HeaderIcon from '../components/HeaderIcon';
import CustomButon from '../components/CustomButon';

interface initialValuesProps {
  email: string;
  pass: string;
}

const initialValues: initialValuesProps = {
  email: '',
  pass: '',
}

const LoginScreen = () => {

  const { values, setFieldValue, errors, handleBlur, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    onSubmit: () => console.log('Hola mundo'),

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
          color1='#2988bc'
          color2='#556dac'
          onPress={ () => console.log('Press..') }
          styleText={ styles.stylesTxtButon }
        />

        <CustomButon 
          name='Olvidaste tu contraseña'
          color1='transparent'
          color2='transparent'
          onPress={ () => console.log('Press..') }
          styleText={{ fontSize: 14, color: '#000' }}
        />

        <CustomButon 
          name='Crear cuenta nueva'
          color1='transparent'
          color2='transparent'
          onPress={ () => console.log('Press..') }
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