import { Button, Box, InputLabel } from "@mui/material";
import Image from "next/image";
import Toasty from "../Toasty";
import styles from '../../PasswordGenerator.module.css';
import Secure from "./components/secure";
import Password from "./components/password";
import usePassword from "@/app/hooks/usePassword";

export default function PasswordGenerator() {

    const {
        passwordStrength,
        passwordCopiedState,
        generatedNewPassword,
        passwordLength,
        includeLowerCase,
        includeNumbers,
        includeSymbols,
        includeUpperCase,
        getBarStatus,
        onSlideUpdate,
        onClose,
        onCopy,
        generatePassword,
        setIncludeUpperCase,
        setIncludeSymbols,
        setIncludeNumbers,
        setIncludeLowerCase
    } = usePassword();

    return (
        <Box
            className="flex flex-col items-center justify-between w-full">
            <Toasty
                open={passwordCopiedState}
                onClose={onClose}
                text={"Copied text"}
            />
            <InputLabel className={styles.passwordheader}>
                Password generator
            </InputLabel>
            <Box className="w-full flex flex-col gap-8">
                <Password
                    generatedNewPassword={generatedNewPassword}
                    onCopy={onCopy}
                />
                <Secure
                    passwordStrength={passwordStrength}
                    passwordLength={passwordLength}
                    includeLowerCase={includeLowerCase}
                    includeNumbers={includeNumbers}
                    includeSymbols={includeSymbols}
                    includeUpperCase={includeUpperCase}
                    getBarStatus={getBarStatus}
                    onSlideUpdate={onSlideUpdate}
                    setIncludeUpperCase={setIncludeUpperCase}
                    setIncludeSymbols={setIncludeSymbols}
                    setIncludeNumbers={setIncludeNumbers}
                    setIncludeLowerCase={setIncludeLowerCase}
                />
                <Button
                    variant="contained"
                    onClick={generatePassword}
                    aria-controls="hidden-text password"
                    className="bg-[--neon-green] text-[--very-dark-grey] !py-4 font-bold flex justify-center items-center gap-4 text-base md:text-lg"
                >
                    Generate
                    <Image
                        src="/images/arrow.png"
                        alt=""
                        width={12}
                        height={12}
                    />
                </Button>
            </Box>
        </Box>
    );
}
