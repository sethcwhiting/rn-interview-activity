import { router } from 'expo-router';
import { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackgroundImage, VerticalSpacer, PrimaryButton } from '@/components';
import React from 'react';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },
    pageContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        margin: 20,
    },
    text: {
        lineHeight: 24,
        color: 'white',
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    interestContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 10,
    },
    chip: {
        margin: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
    },
    headingText: {
        fontSize: 30,
        color: 'white',
    },
    result: {
        fontSize: 40,
        color: 'white',
    },
});

const interestList = [
    'Basketball',
    'Pop',
    'Painting',
    'Jazz',
    'Surfing',
    'Rock',
    'Photography',
    'EDM',
    'Gaming',
    'Biking',
    'Dancing',
    'Environmentalism',
    'Camping',
    'Romance',
    'Sci-fi',
];

export default function Page() {
    const [result, setResult] = useState('Placeholder');
    const [selected, setSelected] = useState([]);

    const handleInterestPress = (interest: string) => {
        console.log(interest);
    };

    const generateUsername = () => {
        console.log('generate');
    };

    return (
        <BackgroundImage source={require('../../assets/background.png')}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.pageContainer}>
                    <VerticalSpacer />
                    <View style={styles.headingContainer}>
                        <EvilIcons name="user" size={60} color="white" style={styles.icon} />
                        <Text style={styles.headingText}>Select your username</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Choose three interests from the list below to create a personalized username</Text>
                    </View>
                    <View style={styles.interestContainer}>
                        {interestList.map((interest) => (
                            <Pressable key={interest} onPress={() => handleInterestPress(interest)} style={styles.chip}>
                                <Text style={styles.text}>{interest}</Text>
                            </Pressable>
                        ))}
                    </View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.text}>Recommended username</Text>
                        <VerticalSpacer />
                        <Pressable onPress={generateUsername}>
                            <Text style={styles.text}>Regenerate</Text>
                        </Pressable>
                    </View>
                    <View style={{ padding: 40 }}>
                        <Text style={styles.result}>{result}</Text>
                    </View>
                    <PrimaryButton label="Next" onPress={() => router.navigate('/thanks')} />
                    <VerticalSpacer />
                </View>
            </SafeAreaView>
        </BackgroundImage>
    );
}
