import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ChevronRight } from 'lucide-react-native';
import { useData } from '@/hooks/useData';
import { Loading } from '@/components/Loading';

export default function ChaptersScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const borderColor = Colors[colorScheme ?? 'light'].icon;

    const { data: topics, loading, error } = useData((d) => d.topics);

    if (loading) return <Loading />;
    if (error) return <ThemedView style={styles.center}><ThemedText>{error}</ThemedText></ThemedView>;

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={[styles.item, { borderColor: borderColor + '40' }]}
            onPress={() => router.push(`/chapter/${item.id}`)}
        >
            <ThemedView style={styles.itemContent}>
                <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
            </ThemedView>
            <ChevronRight color={borderColor} size={20} />
        </TouchableOpacity>
    );

    return (
        <ThemedView style={styles.container}>
            <FlatList
                data={topics}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={<ThemedText type="subtitle" style={styles.header}>Bölümler</ThemedText>}
                ListEmptyComponent={<ThemedText>Henüz bölüm eklenmemiş.</ThemedText>}
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
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 12,
    },
    itemContent: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});
