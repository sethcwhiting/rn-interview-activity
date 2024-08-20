import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Routes = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTransparent: true }} />
            <Stack.Screen name="selectUsername" options={{ headerTransparent: true }} />
            <Stack.Screen name="thanks" options={{ headerShown: false }} />
        </Stack>
    );
};

const RootLayout = () => {
    return (
        <SafeAreaProvider>
            <Routes />
        </SafeAreaProvider>
    );
};

export default RootLayout;
