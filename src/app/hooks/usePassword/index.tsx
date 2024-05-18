"use client";
import { useState } from "react";
import generator from "generate-password-ts";
import { BarLevel } from "@/app/enum";


function usePassword() {

    const passwordInitialState = {
        isPasswordWeak: false,
        isPasswordWeakMeduim: false,
        isPasswordMedium: false,
        isPasswordStrong: false,
    };
    
    const [passwordLength, setPasswordLength] = useState(3);
    const [includeLowerCase, setIncludeLowerCase] = useState(true);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [passwordCopiedState, setPasswordCopiedState] = useState(false);
    const [generatedNewPassword, setGeneratedPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("Weak");
    const [state, setState] = useState({ ...passwordInitialState, isPasswordWeak: true });


    const generatePassword = () => {
        const generatedPassword = generator.generate({
            uppercase: includeUpperCase,
            lowercase: includeLowerCase,
            length: passwordLength,
            numbers: includeNumbers,
            symbols: includeSymbols,
        });
        setGeneratedPassword(generatedPassword);
    };


    const onCopy = () => {
        if (generatedNewPassword.length === 0) {
            setPasswordCopiedState(false);
        } else {
            setPasswordCopiedState(true);
        }
    };

    const onClose = () => {
        setPasswordCopiedState(false);
    };

    const onSlideUpdate = (value: any) => {
        setPasswordLength(value.target.value);

        if (value.target.value < 6) {
            setPasswordStrength("Weak");
            setState({ ...passwordInitialState, isPasswordWeak: true });
        } else if (value.target.value < 12) {
            setPasswordStrength("Weak-medium");
            setState({ ...passwordInitialState, isPasswordWeakMeduim: true });
        } else if (value.target.value < 18) {
            setPasswordStrength("Medium");
            setState({ ...passwordInitialState, isPasswordMedium: true });
        } else {
            setPasswordStrength("Strong");
            setState({ ...passwordInitialState, isPasswordStrong: true });
        }
    };

    const getBarStatus = (bar: string) => {
    
        switch(bar) {
            case BarLevel.LevelOne: 
            if (state.isPasswordWeak) {
                return "bg-[--red] border-[--red]";
            } else if (state.isPasswordWeak) {
                return "bg-[--orange] border-[--orange]";
            } else if (state.isPasswordWeakMeduim) {
                return "bg-[--yellow] border-[--yellow]";
            } else {
                return "bg-[--neon-green] border-[--neon-green]";
            }

            case BarLevel.LevelTwo: 
            if (state.isPasswordWeak) {
                return "bg-[transparent] border-white";
            } else if (state.isPasswordWeak) {
                return "bg-[--orange] border-[--orange]";
            } else if (state.isPasswordWeakMeduim) {
                return "bg-[--yellow] border-[--yellow]";
            } else {
                return "bg-[--neon-green] border-[--neon-green]";
            }
                
            case BarLevel.LevelThree: 
            return state.isPasswordWeak || state.isPasswordWeak
            ? "bg-[transparent] border-white"
            : state.isPasswordMedium
            ? "bg-[--yellow] border-[--yellow]"
            : "bg-[--neon-green] border-[--neon-green]";

            case BarLevel.LevelFour:
                return state.isPasswordWeak || state.isPasswordWeak || state.isPasswordMedium
                ? "bg-[transparent] border-white"
                : "bg-[--neon-green] border-[--neon-green]";
        }
    };


    return {
        passwordCopiedState,
        generatedNewPassword,
        passwordStrength,
        passwordLength,
        includeSymbols,
        includeNumbers,
        includeLowerCase,
        includeUpperCase,
        onSlideUpdate,
        onClose,
        onCopy,
        generatePassword,
        setIncludeLowerCase,
        setIncludeUpperCase,
        setIncludeNumbers,
        setIncludeSymbols,
        getBarStatus,
    };
}

export default usePassword;