export interface ClipBoardProps {
    onCopyText: () => void;
    text: string;
}
export interface ToastyProps {
    onClose: () => void;
    open: boolean;
    text: string;
}
export interface SliderContainerProps {
    onChange: (event: any) => void;
    length: number;
}
export interface PasswordOptionsProps {
    onChange: () => void;
    id: string;
    isChecked: boolean;
    label: string;
}
export interface SecureProps {
    passwordStrength: string;
    passwordLength: number;
    includeLowerCase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
    includeUpperCase: boolean;
    getBarStatus: (event: string) => void;
    onSlideUpdate:(event: any) => void;
    setIncludeUpperCase: (event: boolean) => void;
    setIncludeSymbols: (event: boolean) => void;
    setIncludeNumbers: (event: boolean) => void;
    setIncludeLowerCase: (event: boolean) => void;
}

export interface PasswordProps {
    generatedNewPassword: string;
    onCopy: () => void;
}


