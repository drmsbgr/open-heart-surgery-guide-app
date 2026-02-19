import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { useTheme } from '@/context/ThemeContext';
import { Home, BookOpen, Video, Settings } from 'lucide-react-native';

export default function TabLayout() {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Ana Sayfa',
                    tabBarIcon: ({ color }) => <Home color={color} />,
                }}
            />
            <Tabs.Screen
                name="chapters"
                options={{
                    title: 'Bölümler',
                    tabBarIcon: ({ color }) => <BookOpen color={color} />,
                }}
            />
            <Tabs.Screen
                name="videos"
                options={{
                    title: 'Videolar',
                    tabBarIcon: ({ color }) => <Video color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Ayarlar',
                    tabBarIcon: ({ color }) => <Settings color={color} />,
                }}
            />
        </Tabs>
    );
}
