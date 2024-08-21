import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    buttonLabel: {
        color: '#1c0140',
        fontSize: 16,
    },
});

export const PrimaryButton = ({
    label,
    onPress,
    disabled,
}: {
    label: string;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    disabled?: boolean;
}) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                accessibilityRole="button"
                style={styles.button}
                onPress={onPress}
                disabled={disabled}
                accessibilityState={{ disabled }}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};
