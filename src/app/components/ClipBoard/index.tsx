import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import { Button } from "@mui/material";
import { ClipBoardProps } from "@/app/interfaces";

export default function Clipboard(clipBoardProps: ClipBoardProps) {
    return (
        <CopyToClipboard
            text={clipBoardProps.text}
            onCopy={clipBoardProps.onCopyText}
            className="h-full flex justify-center items-center !absolute top-0 right-0"
        >
            <Button disabled={clipBoardProps.text.length === 0}>
                <Image
                    src="/images/copy.png"
                    height={22}
                    width={22}
                    alt=""
                    className={`${clipBoardProps.text.length === 0 ? "opacity-5" : "opacity-100"}`}
                />
            </Button>
        </CopyToClipboard>
    );
}
