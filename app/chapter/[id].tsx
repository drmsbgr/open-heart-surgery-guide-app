import { StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useData } from '@/hooks/useData';
import { Loading } from '@/components/Loading';

export default function ChapterDetailScreen() {
    const { id } = useLocalSearchParams();
    const { data: topic, loading, error } = useData((d) => d.topics.find((t) => t.id === id));

    if (loading) return <Loading />;

    if (error || !topic) {
        return (
            <ThemedView style={styles.container}>
                <Stack.Screen options={{ title: 'Hata' }} />
                <ThemedText>Konu bulunamadı.</ThemedText>
            </ThemedView>
        );
    }

    return (
        <ThemedView style={styles.container}>
            <Stack.Screen options={{ title: topic.title }} />
            <ScrollView contentContainerStyle={styles.content}>
                <ThemedText type="title" style={styles.title}>{topic.title}</ThemedText>
                <ThemedText style={styles.body}>{topic.content}</ThemedText>

                {topic.subtopics && topic.subtopics.map((sub: any) => (
                    <ThemedView key={sub.id} style={styles.subtopic}>
                        <ThemedText type="subtitle" style={styles.subTitle}>{sub.title}</ThemedText>
                        <ThemedText style={styles.body}>{sub.content}</ThemedText>
                    </ThemedView>
                ))}
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 24,
    },
    title: {
        marginBottom: 16,
    },
    body: {
        marginBottom: 16,
        lineHeight: 24,
    },
    subtopic: {
        marginTop: 24,
        paddingTop: 24,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#ccc',
    },
    subTitle: {
        marginBottom: 12
    }
});
