import { useTheme } from '@/context/ThemeContext';

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: string
) {
    const { colors } = useTheme();

    // For now, simpler implementation relying on the selected theme palette
    // modifying this to just return the color from the current theme logic
    // if specific override is provided in props, use it.

    if (props.light) return props.light; // Fallback for legacy calls if any

    // Map generic names to specific theme colors if needed, 
    // or return the color directly if it exists in the palette.
    // The current palette has: primary, background, card, text.

    // Mapping 'tint' to 'primary' and others standard.
    if (colorName === 'tint') return colors.primary;
    if (colorName === 'text') return colors.text;
    if (colorName === 'background') return colors.background;
    if (colorName === 'icon') return colors.text; // Use text color for icons by default in this simple theme

    return (colors as any)[colorName] || colors.primary;
}
