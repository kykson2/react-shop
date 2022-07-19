import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type useDarkModeProps = [string, Dispatch<SetStateAction<string>>];

const useDarkMode = (): useDarkModeProps => {
    const [theme, setTheme] = useState<string>(localStorage.theme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
};

export default useDarkMode;
