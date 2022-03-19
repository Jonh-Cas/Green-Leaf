

export interface Props {
    placeHolder: string;
    field: fieldProps;
    value: string | undefined;
    touched: boolean | undefined;
    error: string | undefined;
    saveValue: (field: string, text: string) => void;
    handleBlur: any;
    
}

export type fieldProps =  'email' |  'pass' | 'repeatPass' | 'name' | 'lastName1' | 'lastName2'  