import { useState, useEffect } from 'react';
import data from '@/assets/data.json';

export function useData<T>(selector: (d: typeof data) => T) {
    const [result, setResult] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Simulate network delay
                await new Promise((resolve) => setTimeout(resolve, 1000));

                const selectedData = selector(data);
                if (selectedData) {
                    setResult(selectedData);
                } else {
                    setError('Veri bulunamadı');
                }
            } catch (e) {
                setError('Bir hata oluştu');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data: result, loading, error };
}
