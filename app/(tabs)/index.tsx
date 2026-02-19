import { Image, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/context/ThemeContext';
import { Heart, PlayCircle, BookOpen } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from 'react-native';

export default function HomeScreen() {
    const router = useRouter();
    const { colors, themeName } = useTheme();
    const colorScheme = useColorScheme();

    const getCardBackground = () => {
        if (colorScheme === 'dark') return '#1E1E1E';
        switch (themeName) {
            case 'blue': return '#F0F8FF';
            case 'purple': return '#FAF5FF';
            case 'orange': return '#FFF8F0';
            default: return '#fff';
        }
    }

    const cardBg = getCardBackground();
    const iconBg = colorScheme === 'dark' ? '#333' : colors.card;

    return (
        <ThemedView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <LinearGradient
                    colors={[colors.gradientStart, colors.gradientEnd]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.headerGradient}
                >
                    <View style={styles.headerContent}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={require('@/assets/icon.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>
                        <ThemedText type="title" style={styles.title} lightColor="#fff" darkColor="#fff">Kalbinize İyi Bakın</ThemedText>
                        <ThemedText style={styles.subtitle} lightColor="#rgba(255,255,255,0.8)" darkColor="#rgba(255,255,255,0.8)">Açık Kalp Ameliyatı Hasta Eğitim Rehberi</ThemedText>
                    </View>
                </LinearGradient>

                <ThemedView style={styles.section}>
                    <ThemedText type="subtitle" style={styles.sectionTitle}>Hızlı Erişim</ThemedText>
                    <View style={styles.grid}>
                        <TouchableOpacity
                            style={[styles.card, { borderColor: colors.card, backgroundColor: cardBg }]}
                            onPress={() => router.push('/(tabs)/chapters')}
                        >
                            <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
                                <BookOpen color={colors.primary} size={24} />
                            </View>
                            <ThemedText style={styles.cardText}>Bölümler</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.card, { borderColor: colors.card, backgroundColor: cardBg }]}
                            onPress={() => router.push('/(tabs)/videos')}
                        >
                            <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
                                <PlayCircle color={colors.primary} size={24} />
                            </View>
                            <ThemedText style={styles.cardText}>Videolar</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.card, { borderColor: colors.card, backgroundColor: cardBg }]}
                            onPress={() => router.push('/chapter/1')}
                        >
                            <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
                                <Heart color={colors.primary} size={24} />
                            </View>
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
    headerGradient: {
        paddingTop: 60,
        paddingBottom: 32,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    headerContent: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    logo: {
        width: 60,
        height: 60,
    },
    title: {
        textAlign: 'center',
        marginBottom: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500'
    },
    section: {
        padding: 16
    },
    sectionTitle: {
        marginBottom: 16,
        marginLeft: 4
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center'
    },
    card: {
        width: '45%',
        aspectRatio: 1.1,
        borderRadius: 16,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        gap: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    iconContainer: {
        padding: 12,
        borderRadius: 12,
    },
    cardText: {
        fontWeight: '600',
        fontSize: 15
    }
});
