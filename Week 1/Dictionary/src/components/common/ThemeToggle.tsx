import React, { useState, useEffect } from "react";
import { PiMoonLight } from "react-icons/pi";



const ThemeToggle: React.FC = () => {
    const initialTheme = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [isDark, setIsDark] = useState<boolean>(initialTheme);


    useEffect(() => {
        if (isDark){
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [isDark]);

    return (
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsDark(!isDark)}>
            <button className={`flex items-center ${isDark ? 'justify-start' : 'justify-end'} w-12 h-6 md:w-14 md:h-7 bg-gray dark:bg-purple border-2 border-gray dark:border-purple rounded-full outline-none`}>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-light rounded-full transform transition-transform duration-300"></div>
            </button>
            <PiMoonLight className="text-2xl text-gray dark:text-purple"/>
        </div>
    );
};

export default ThemeToggle;
