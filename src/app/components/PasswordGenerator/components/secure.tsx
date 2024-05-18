import { Box, InputLabel } from "@mui/material";
import SliderContainer from "../../Slider";
import SecureItems from "../../SecurePasswordControlItem";
import { BarLevel } from "@/app/enum";
import { SecureProps } from "@/app/interfaces";

export default function Secure(
    secureProps: SecureProps
) {

    return (
        <Box className="w-full bg-[--dark-grey] flex flex-col gap-8 p-4">
            <Box className="grid grid-cols-6 gap-8">
                <InputLabel
                    htmlFor="length"
                    className="col-span-5 text-base md:text-lg text-[--almost-white]">
                    Character length
                </InputLabel>
                <InputLabel
                    className="justify-self-end text-base md:text-lg text-[#a3ffae]">
                    {secureProps.passwordLength}
                </InputLabel>
                <SliderContainer
                    length={secureProps.passwordLength}
                    onChange={secureProps.onSlideUpdate}
                />
            </Box>
            <Box className="flex flex-col gap-2 relative">
                <SecureItems
                    id="uppercase"
                    isChecked={secureProps.includeUpperCase}
                    onChange={() => secureProps.setIncludeUpperCase(!secureProps.includeUpperCase)}
                    label="Include Uppercase Letters"
                />
                <SecureItems
                    id="lowercase"
                    isChecked={secureProps.includeLowerCase}
                    onChange={() => secureProps.setIncludeLowerCase(!secureProps.includeLowerCase)}
                    label="Include Lowercase Letters"
                />
                <SecureItems
                    id="numbers"
                    isChecked={secureProps.includeNumbers}
                    onChange={() => secureProps.setIncludeNumbers(!secureProps.includeNumbers)}
                    label="Include Numbers"
                />
                <SecureItems
                    id="symbols"
                    isChecked={secureProps.includeSymbols}
                    onChange={() => secureProps.setIncludeSymbols(!secureProps.includeSymbols)}
                    label="Include Symbols"
                />
            </Box>
            <Box className="flex justify-between bg-[--very-dark-grey] p-4 mt-4">
                <InputLabel className="text-base md:text-lg text-[--almost-white]">
                    Strength
                </InputLabel>
                <Box className="flex gap-4">
                    <InputLabel
                        className="text-base md:text-lg text-[--almost-white]"
                    >
                        {secureProps.passwordStrength}
                    </InputLabel>
                    <Box className="flex gap-2">
                        <Box
                            className={`w-2.5 h-7 border-2 ${secureProps.getBarStatus(BarLevel.LevelOne)} `}
                        ></Box>
                        <Box
                            className={`w-2.5 h-7 border-2 ${secureProps.getBarStatus(BarLevel.LevelTwo)}`}
                        ></Box>
                        <Box
                            className={`w-2.5 h-7 border-2  ${secureProps.getBarStatus(BarLevel.LevelThree)}`}
                        ></Box>
                        <Box
                            aria-live="polite"
                            className={`w-2.5 h-7 border-2  ${secureProps.getBarStatus(BarLevel.LevelFour)}`}
                        ></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
