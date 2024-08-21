import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackgroundImage, VerticalSpacer, PrimaryButton, ToggleButton } from '@/components';
import React from 'react';
import { Toggle } from '@/components/ToggleButton';
import { curateToggleButtonGroup } from '@/utils/curateToggleButtonGroup';
import { useInterests } from '@/interests';
import { useUsername } from '@/username';

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
});

export default function Page() {
    const { interests, isLoaded: interestsLoaded } = useInterests();
    const { username, refresh } = useUsername();
    const [selected, setSelected] = useState<string[]>([]);

    const handleInterestPress = ({ name, state }: Toggle) => setSelected((prev) => curateToggleButtonGroup({ name, state, prev, cap: 3 }));

    const handleNextPress = async () => {
        /*
         * This is where I would save the username to the user record in the database.
         * I would also save the user's interests to the interest1, interest2, and interest3 columns in alphabetical order.
         * I explain why in another comment in src/api/mockApiClient.ts
         */
        // await updateUserRecord(username, interests);
        router.navigate({ pathname: '/thanks', params: { username } });
    };

    useEffect(() => {
        refresh(selected);
    }, [selected]);

    const selectedCapReached = selected.length === 3;

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
                        {interestsLoaded
                            ? interests.map((interest) => (
                                  <ToggleButton
                                      key={interest}
                                      name={interest}
                                      label={interest}
                                      onToggle={handleInterestPress}
                                      disabled={selectedCapReached && !selected.includes(interest)}
                                  />
                              ))
                            : null}
                    </View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.text}>Recommended username:</Text>
                        <VerticalSpacer />
                        <Pressable
                            onPress={() => refresh(selected)}
                            accessibilityRole="button"
                            disabled={!selectedCapReached}
                            accessibilityState={{ disabled: !selectedCapReached }}
                            style={{ opacity: username ? 1 : 0.5 }}>
                            <Text style={styles.text}>Regenerate</Text>
                        </Pressable>
                    </View>
                    <View style={{ paddingVertical: 40, height: 125 }} testID="username">
                        <Text style={styles.headingText} numberOfLines={1}>
                            {username}
                        </Text>
                    </View>
                    <PrimaryButton label="Next" onPress={handleNextPress} disabled={!selectedCapReached} />
                    <VerticalSpacer />
                </View>
            </SafeAreaView>
        </BackgroundImage>
    );
}
