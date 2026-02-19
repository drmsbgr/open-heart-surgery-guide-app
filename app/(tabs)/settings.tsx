import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/context/ThemeContext';
import { Colors, ThemeName } from '@/constants/Colors';
import { Check } from 'lucide-react-native';

export default function SettingsScreen() {
    const { themeName, setThemeName, colors } = useTheme();

    const themes: { name: ThemeName; label: string; color: string }[] = [
        { name: 'blue', label: 'Mavi (Varsayılan)', color: Colors.blue.primary },
        { name: 'purple', label: 'Mor', color: Colors.purple.primary },
        { name: 'orange', label: 'Turuncu', color: Colors.orange.primary },
    ];

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.section}>
                <ThemedText type="subtitle" style={styles.sectionTitle}>Tema Seçimi</ThemedText>
                <ThemedView style={styles.optionsContainer}>
                    {themes.map((t) => (
                        <TouchableOpacity
                            key={t.name}
                            style={[styles.option, { borderColor: colors.card, backgroundColor: t.name === themeName ? colors.card : 'transparent' }]}
                            onPress={() => setThemeName(t.name)}
                        >
                            <ThemedView style={styles.colorPreviewContainer}>
                                <ThemedView style={[styles.colorPreview, { backgroundColor: t.color }]} />
                                <ThemedText>{t.label}</ThemedText>
                            </ThemedView>
                            {themeName === t.name && <Check size={20} color={colors.primary} />}
                        </TouchableOpacity>
                    ))}
                </ThemedView>
            </ThemedView>

            <ThemedView style={styles.section}>
                <ThemedText type="subtitle" style={styles.sectionTitle}>Hakkında</ThemedText>
                <ThemedText>Açık Kalp Ameliyatı Hasta Eğitim Rehberi</ThemedText>
                <ThemedText style={styles.version}>Versiyon 1.1.0</ThemedText>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 60
    },
    section: {
        marginBottom: 32,
    },
    sectionTitle: {
        marginBottom: 16
    },
    optionsContainer: {
        gap: 12
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
    },
    colorPreviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: 'transparent'
    },
    colorPreview: {
        width: 24,
        height: 24,
        borderRadius: 12
    },
    version: {
        marginTop: 8,
        opacity: 0.6
    }
});
