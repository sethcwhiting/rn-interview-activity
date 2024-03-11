import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { EvilIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  buttonContainer: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1
  },
  buttonSelected: {
    backgroundColor: '#ffffff38',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
    lineHeight: 18
  },
  icon: {
    marginLeft: 10,
  }
})

export type Toggle = {
  name: string,
  state: boolean
}

export const ToggleButton =
  ({
     name,
     label,
     onToggle
   }: {
    name: string,
    label: string,
    onToggle: (({ name, state }: Toggle) => void) | undefined
  }) => {
    const [state, setState] = useState(false)
    const toggle = useCallback(() => {
      setState(!state)
      onToggle && onToggle({name, state: !state})
    }, [state, setState])

    return <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, state && styles.buttonSelected]}
        activeOpacity={0.6}
        onPress={toggle}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
        {state &&
            <EvilIcons
                name="close"
                color="white"
                size={20}
                style={styles.icon}
            />}
      </TouchableOpacity>
    </View>
  }
