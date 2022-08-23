import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type themeType = 'dark' | 'light';

type useDarkModeProps = [themeType, Dispatch<SetStateAction<themeType>>];

const useDarkMode = (): useDarkModeProps => {
    const [theme, setTheme] = useState<themeType>(localStorage.theme);
    const reverseTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(reverseTheme);
        root.classList.add(theme);

        localStorage.setItem('theme', theme);
    }, [theme, reverseTheme]);

    return [reverseTheme, setTheme];
};

export default useDarkMode;
