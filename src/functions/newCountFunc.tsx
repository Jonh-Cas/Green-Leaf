import * as yup from 'yup';

export const initialValues = {
    name: '',
    lastName1: '',
    lastName2: '',
    phone: '',
    email: '',
    pass: '',
    repeatPass: '',
}

export const schemaYup = yup.object().shape({
    // name: yup
    //     .string()
    //     .matches(/^[A-Za-zÑñ ]*$/, 'No ingrese caracteres especiales ni con tildes')
    //     .min(2, 'Debes poner minimo 2 caracteres')
    //     .required('El nombre es requerido'),

    // lastName1: yup
    //     .string()
    //     .when('lastName2', {
    //         is: (lastName2: string) => !lastName2 || lastName2.length === 0,
    //         then: yup
    //             .string()
    //             .matches(/^[A-Za-zÑñ ]*$/, 'No ingrese caracteres especiales ni con tildes')
    //             .min(2, 'Se requiere al menos 2 caracteres')
    //             .required('Debe de poner un apellido'),
    //         otherwise: yup
    //             .string()
    //             .matches(/^[A-Za-zÑñ ]*$/, 'No ingrese caracteres especiales ni con tildes')
    //             .min(2, 'Debes poner minimo 2 caracteres')
    //     }),

    // lastName2: yup
    //     .string()
    //     .when('lastName1', {
    //         is: (lastName1: string) => !lastName1 || lastName1.length === 0,
    //         then: yup
    //             .string()
    //             .matches(/^[A-Za-zÑñ ]*$/, 'No ingrese caracteres especiales ni con tildes')
    //             .min(2, 'Se requiere al menos 2 caracteres')
    //             .required('Debe de poner un apellido'),
    //         otherwise: yup
    //             .string()
    //             .matches(/^[A-Za-zÑñ ]*$/, 'No ingrese caracteres especiales ni con tildes')
    //             .min(2, 'Debes poner minimo 2 caracteres')
    //     }),
        
    // phone: yup
    //     .string()
    //     .min(10, 'Su número telefónico debe tener 10 números')
    //     .max(10, 'Su número telefónico debe tener 10 números')
    //     .matches(/(\d){10}\b/, 'El teléfono celular es incorrecto')
    //     .typeError('Ingresa únicamente números')
    //     .required('El teléfono celular es obligatorio'),

    email: yup
        .string()
        .email('El correo electrónico es incorrecto')
        .max(80, 'Excede el máximo de caracteres')
        .required('El correo es obligatorio'),

    pass: yup
        .string()
        .min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/,
         'La contraseña debe tener al menos un numero, una letra en mayuscula y una letra minuscula')
        .required('La contraseña es obligatoria'),

    repeatPass: yup
        .string()
        .oneOf([yup.ref('pass'), null], 'Las contraseñas deben ser iguales')
        .required('La confirmación de la contraseña es obligatoria'),
},
    // [['lastName1', 'lastName2']]
)
