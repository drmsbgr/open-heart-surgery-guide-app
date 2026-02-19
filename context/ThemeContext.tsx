import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, ThemeName } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
    themeName: ThemeName;
    setThemeName: (name: ThemeName) => void;
    colors: typeof Colors.blue;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [themeName, setThemeName] = useState<ThemeName>('blue');
    const systemScheme = useColorScheme();

    useEffect(() => {
        loadTheme();
    }, []);

    const loadTheme = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme && (['blue', 'purple', 'orange'] as ThemeName[]).includes(savedTheme as ThemeName)) {
                setThemeName(savedTheme as ThemeName);
            }
        } catch (e) {
            console.error('Failed to load theme', e);
        }
    };

    const saveTheme = async (name: ThemeName) => {
        try {
            setThemeName(name);
            await AsyncStorage.setItem('theme', name);
        } catch (e) {
            console.error('Failed to save theme', e);
        }
    };

    const colors = Colors[themeName];

    return (
        <ThemeContext.Provider value={{ themeName, setThemeName: saveTheme, colors }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
