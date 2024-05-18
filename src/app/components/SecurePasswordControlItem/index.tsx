import React from "react";
import { Box, Checkbox, InputLabel } from "@mui/material";
import styles from '../../PasswordGenerator.module.css';
import { PasswordOptionsProps } from "@/app/interfaces";

export default function SecureItems( passwordOptionsProps : PasswordOptionsProps) {
    return (
        <Box className={styles.strenghtLabelsContainer}>
            <Box>
                <Checkbox
                    id={passwordOptionsProps.id}
                    checked={passwordOptionsProps.isChecked}
                    onChange={passwordOptionsProps.onChange}
                    sx={{
                        color: "hsla(127, 100%, 82%, 1)",
                        "&.Mui-checked": {
                            color: "hsla(127, 100%, 82%, 1)",
                        },
                    }}
                />
            </Box>
            <Box>
                <InputLabel className={styles.strenghtLabels}>{passwordOptionsProps.label}</InputLabel>
            </Box>
        </Box>
    );
}
