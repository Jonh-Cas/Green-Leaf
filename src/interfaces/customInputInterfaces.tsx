

export interface Props {
    placeHolder: string;
    field: fieldProps;
    value: string | undefined;
    touched: boolean | undefined;
    error: string | undefined;
    saveValue: (field: string, text: string) => void;
    handleBlur: any;
    
}

type fieldProps =  'email' |  'pass' 