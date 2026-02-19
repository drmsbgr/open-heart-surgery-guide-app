import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useData } from '@/hooks/useData';
import { Loading } from '@/components/Loading';
import * as Speech from 'expo-speech';
import { Volume2, Square } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect } from 'react';

export default function ChapterDetailScreen() {
    const { id } = useLocalSearchParams();
    const { data: topic, loading, error } = useData((d) => d.topics.find((t) => t.id === id));
    const { colors } = useTheme();
    const [isSpeaking, setIsSpeaking] = useState(false);

    useEffect(() => {
        return () => {
            Speech.stop();
        };
    }, []);

    const toggleSpeech = () => {
        if (isSpeaking) {
            Speech.stop();
            setIsSpeaking(false);
        } else {
            if (!topic) return;
            const textToSay = `${topic.title}. ${topic.content} ${topic.subtopics?.map((s: any) => s.title + ". " + s.content).join(" ")}`;
            Speech.speak(textToSay, {
                language: 'tr-TR',
                onDone: () => setIsSpeaking(false),
                onStopped: () => setIsSpeaking(false),
                onError: () => setIsSpeaking(false)
            });
            setIsSpeaking(true);
        }
    };


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
            <Stack.Screen options={{
                title: topic.title,
                headerRight: () => (
                    <TouchableOpacity onPress={toggleSpeech} style={{ marginRight: 16 }}>
                        {isSpeaking ? <Square color={colors.primary} size={24} /> : <Volume2 color={colors.primary} size={24} />}
                    </TouchableOpacity>
                )
            }} />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.headerRow}>
                    <ThemedText type="title" style={styles.title}>{topic.title}</ThemedText>
                </View>

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
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    title: {
        flex: 1
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
