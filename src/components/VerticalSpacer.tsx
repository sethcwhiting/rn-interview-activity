import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  spacer: {
    flexGrow: 1
  }
})

export const VerticalSpacer = () => {
  return <View style={styles.spacer}/>
}