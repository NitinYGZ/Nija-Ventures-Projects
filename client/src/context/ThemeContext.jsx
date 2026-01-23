import React, { createContext, useState, useEffect, useContext } from 'react';
import { baseColors, darkTheme } from '../theme/colors';
import { typography } from '../theme/typography';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = isDarkMode ? darkTheme : baseColors;

    useEffect(() => {
        const root = document.documentElement;

        // Apply Colors
        Object.keys(theme).forEach((key) => {
            // rough conversion camelCase to kebab-case for execution: primaryColor -> --primary-color
            // simplified: we'll just map keys directly if we construct them compatibly or just use the key.
            // Let's use specific mapping to ensure standard css var names
            const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
            root.style.setProperty(cssVarName, theme[key]);
        });

        // Apply Typography
        root.style.setProperty('--font-family', typography.fontFamily);
        root.style.setProperty('--heading-weight', typography.headingWeight);
        root.style.setProperty('--body-weight', typography.bodyWeight);
        root.style.setProperty('--line-height', typography.lineHeight);

    }, [isDarkMode, theme]);

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
