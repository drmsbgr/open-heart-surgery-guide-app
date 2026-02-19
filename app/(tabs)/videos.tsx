import { StyleSheet, FlatList, TouchableOpacity, Image, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { PlayCircle } from 'lucide-react-native';
import { useData } from '@/hooks/useData';
import { Loading } from '@/components/Loading';

export default function VideosScreen() {
    const colorScheme = useColorScheme();
    const tintColor = Colors[colorScheme ?? 'light'].tint;
    const borderColor = Colors[colorScheme ?? 'light'].icon;

    const { data: videos, loading, error } = useData((d) => d.videos);

    const openVideo = (url: string) => {
        Linking.openURL(url);
    };

    if (loading) return <Loading />;
    if (error) return <ThemedView style={styles.center}><ThemedText>{error}</ThemedText></ThemedView>;

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={[styles.item, { borderColor: borderColor + '40' }]}
            onPress={() => openVideo(item.url)}
        >
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <ThemedView style={styles.info}>
                <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
                <ThemedText style={styles.url} numberOfLines={1}>{item.url}</ThemedText>
            </ThemedView>
            <PlayCircle color={tintColor} size={32} style={styles.icon} />
        </TouchableOpacity>
    );

    return (
        <ThemedView style={styles.container}>
            <FlatList
                data={videos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={<ThemedText type="subtitle" style={styles.header}>Eğitim Videoları</ThemedText>}
                ListEmptyComponent={<ThemedText>Henüz video eklenmemiş.</ThemedText>}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContent: {
        padding: 16,
        paddingTop: 60
    },
    header: {
        marginBottom: 16
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 16,
        overflow: 'hidden',
        paddingRight: 16,
        gap: 12,
        backgroundColor: 'rgba(150, 150, 150, 0.1)'
    },
    thumbnail: {
        width: 100,
        height: 80,
        backgroundColor: '#ccc'
    },
    info: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingVertical: 8
    },
    url: {
        fontSize: 12,
        opacity: 0.6,
        marginTop: 4
    },
    icon: {
        opacity: 0.8
    }
});
