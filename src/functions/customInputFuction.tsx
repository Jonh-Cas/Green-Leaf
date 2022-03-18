import { KeyboardTypeOptions } from "react-native";
import { Props } from "../interfaces/customInputInterfaces";

interface textInputProps {
    placeholder: string | undefined,
    keyboardType:  KeyboardTypeOptions | undefined,
    maxLeght:  number | undefined,
    icon: string;
}

type valuesInput = | 'email' | 'pass'

 const menuInput = ( field: valuesInput  )  => {
     
    let textInputValue: textInputProps = {
        placeholder: undefined,
        keyboardType: undefined,
        maxLeght: undefined,
        icon: '',
    }

    switch (field) {
        case 'email':
            textInputValue = {
                placeholder: ' Correo',
                keyboardType: 'email-address',
                maxLeght: 50,
                icon: 'mail-outline'
            };
            break;
        
            case 'pass':
            textInputValue = {
                icon: 'key-outline',
                placeholder: ' Contraseña',
                keyboardType: 'default',
                maxLeght: 30,
            };
            break;
    
        default:
            break;
    }

    return textInputValue;

}

export default menuInput;