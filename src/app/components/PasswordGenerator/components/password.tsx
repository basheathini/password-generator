
import React from "react";
import { Box } from "@mui/material";
import TextContainer from "@/app/components/TextContainer";
import Clipboard from "@/app/components/ClipBoard"
import { PasswordProps } from "@/app/interfaces";

export default function Password(passwordProps: PasswordProps) {

    return (
        <Box className="w-full relative">
            <TextContainer text={passwordProps.generatedNewPassword} />
            <Clipboard text={passwordProps.generatedNewPassword} onCopyText={passwordProps.onCopy} />
        </Box>
    );
}