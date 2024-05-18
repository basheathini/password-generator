import React from "react";
import { Slider } from "@mui/material";
import { SliderContainerProps } from "@/app/interfaces";

export default function SliderContainer(sliderContainerProps: SliderContainerProps) {
    return (
        <Slider
            value={sliderContainerProps.length}
            onChange={sliderContainerProps.onChange}
            min={2}
            max={24}
            className="col-span-6"
            size="medium"
            sx={{
                color: "hsla(127, 100%, 82%, 1)",
                height: 8,
                cursor: "pointer",
                "& .MuiSlider-track": {
                    border: "none",
                },
                "& .MuiSlider-thumb": {
                    height: 24,
                    width: 24,
                    backgroundColor: "#fff",
                    "&:before": {
                        display: "none",
                    },
                },
            }}
        />

    );
}
