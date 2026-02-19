/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
    light: {
        text: '#11181C',
        background: '#f8f9fa', // Slightly off-white for depth
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#ECEDEE',
        background: '#151718',
        tint: tintColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
    },
    blue: {
        primary: '#0a7ea4',
        background: '#E3F2FD',
        card: '#BBDEFB',
        text: '#0D47A1',
        gradientStart: '#2196F3',
        gradientEnd: '#0D47A1',
        accent: '#00B0FF'
    },
    purple: {
        primary: '#6200EA',
        background: '#F3E5F5',
        card: '#E1BEE7',
        text: '#4A148C',
        gradientStart: '#9C27B0',
        gradientEnd: '#4A148C',
        accent: '#E040FB'
    },
    orange: {
        primary: '#FF6D00',
        background: '#FFF3E0',
        card: '#FFE0B2',
        text: '#E65100',
        gradientStart: '#FF9800',
        gradientEnd: '#E65100',
        accent: '#FFAB40'
    }
};

export type ThemeName = 'blue' | 'purple' | 'orange';
