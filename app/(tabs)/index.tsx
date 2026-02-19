import { Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Heart, PlayCircle, BookOpen, Clock } from 'lucide-react-native';

export default function HomeScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const tintColor = Colors[colorScheme ?? 'light'].tint;

    const navigateTo = (path: string) => {
        router.push(path as any);
    };

    return (
        <ThemedView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <ThemedView style={styles.header}>
                    <Image
                        source={require('@/assets/icon.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <ThemedText type="title" style={styles.title}>Kalbinize İyi Bakın</ThemedText>
                    <ThemedText style={styles.subtitle}>Açık Kalp Ameliyatı Hasta Eğitim Rehberi</ThemedText>
                </ThemedView>

                <ThemedView style={styles.section}>
                    <ThemedText type="subtitle" style={styles.sectionTitle}>Hızlı Erişim</ThemedText>
                    <View style={styles.grid}>
                        <TouchableOpacity style={[styles.card, { borderColor: tintColor }]} onPress={() => router.push('/(tabs)/chapters')}>
                            <BookOpen color={tintColor} size={32} />
                            <ThemedText style={styles.cardText}>Bölümler</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.card, { borderColor: tintColor }]} onPress={() => router.push('/(tabs)/videos')}>
                            <PlayCircle color={tintColor} size={32} />
                            <ThemedText style={styles.cardText}>Videolar</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.card, { borderColor: tintColor }]} onPress={() => router.push('/chapter/1')}>
                            <Heart color={tintColor} size={32} />
                            <ThemedText style={styles.cardText}>Genel Bilgiler</ThemedText>
                        </TouchableOpacity>
                    </View>
                </ThemedView>
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20
    },
    header: {
        alignItems: 'center',
        padding: 32,
        paddingTop: 60,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 16
    },
    title: {
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        textAlign: 'center',
        opacity: 0.7,
    },
    section: {
        padding: 16
    },
    sectionTitle: {
        marginBottom: 16
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center'
    },
    card: {
        width: '45%',
        aspectRatio: 1,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        gap: 8
    },
    cardText: {
        fontWeight: '600'
    }
});
