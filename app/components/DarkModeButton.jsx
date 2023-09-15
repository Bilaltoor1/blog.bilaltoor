'use client'
import React from 'react';
import useDarkMode from "@/app/components/DarkMode";
import SunIcon from '@/app/components/Icons/sun'
import LightIcon from '@/app/components/Icons/light'

function ColorMode() {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <div>
            {colorTheme === "light" ? (
                <SunIcon onClick={() => setTheme("light")}/>
            ) : (
                <LightIcon onClick={() => setTheme("dark")}/>
            )}
        </div>
    );
}

export default ColorMode;