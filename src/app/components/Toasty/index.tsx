import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { ToastyProps } from "@/app/interfaces";

export default function Toasty(toastyProps: ToastyProps) {
    return (
        <Snackbar
            onClose={toastyProps.onClose}
            open={toastyProps.open}
            autoHideDuration={1000}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
        >
            <Alert
                onClose={toastyProps.onClose}
                severity="success"
                sx={{ width: "100%" }}
            >
                {toastyProps.text}
            </Alert>
        </Snackbar>
    );
}
