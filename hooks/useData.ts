import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import localData from '@/assets/data.json';

// Define types for better type safety
interface Topic {
    id: string;
    title: string;
    icon?: string;
    content?: string;
    subtopics?: any[];
    order?: number;
}

interface Video {
    id: string;
    title: string;
    url: string;
    thumbnail: string;
    order?: number;
}

interface AppData {
    topics: Topic[];
    videos: Video[];
}

export function useData<T>(selector: (data: AppData) => T) {
    const [result, setResult] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);

            // Check for Supabase configuration
            const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
            const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

            if (!supabaseUrl || !supabaseKey) {
                console.log('Supabase keys missing, using local data fallback');
                // Simulate async delay for local data
                await new Promise(resolve => setTimeout(resolve, 500));
                setResult(selector(localData as unknown as AppData));
                return;
            }

            // 1. Fetch Topics
            const { data: topicsData, error: topicsError } = await supabase
                .from('topics')
                .select('*')
                .order('order', { ascending: true });

            if (topicsError) throw topicsError;

            // 2. Fetch Subtopics
            const { data: subtopicsData, error: subtopicsError } = await supabase
                .from('subtopics')
                .select('*')
                .order('order', { ascending: true });

            if (subtopicsError) throw subtopicsError;

            // 3. Fetch Videos
            const { data: videosData, error: videosError } = await supabase
                .from('videos')
                .select('*')
                .order('order', { ascending: true });

            if (videosError) throw videosError;

            // 4. Merge Data
            const combinedTopics = topicsData.map((topic: any) => ({
                ...topic,
                subtopics: subtopicsData.filter((sub: any) => sub.topic_id === topic.id)
            }));

            const fullData: AppData = {
                topics: combinedTopics,
                videos: videosData
            };

            setResult(selector(fullData));

        } catch (err: any) {
            console.error('Data fetch error:', err);
            setError('Veri yüklenirken bir hata oluştu: ' + (err.message || 'Bilinmeyen hata'));
            // Fallback to local data on error
            setResult(selector(localData as unknown as AppData));
        } finally {
            setLoading(false);
        }
    };

    return { data: result, loading, error };
}
