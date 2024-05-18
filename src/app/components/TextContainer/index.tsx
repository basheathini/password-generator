import React from "react";
import { Box, InputLabel } from "@mui/material";
import styles from '../../PasswordGenerator.module.css';

export default function TextContainer({ text }) {
    return (
        <Box className={styles.passwordHolderContainer}>
            <InputLabel className={styles.password}>{text}</InputLabel>
        </Box>
    );
}
