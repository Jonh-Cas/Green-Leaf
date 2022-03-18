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
        <Text style={styles.titleText} >Iniciar Sesión</Text>
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
          color2='#556dac'
          color1='#2988bc'
          colorText='#fff'
          onPress={ () => console.log('Press..') }
        />

        <CustomButon 
          name='Olvidaste tu contraseña'
          color2='#fff'
          color1='#fff'
          colorText='#000'
          onPress={ () => console.log('Press..') }
        />

        <CustomButon 
          name='Crear nueva cuenta'
          color2='#fff'
          color1='#fff'
          colorText='#000'
          onPress={ () => console.log('Press..') }
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
  
  stylesButon: {
    borderRadius: 14,
  }

}) 