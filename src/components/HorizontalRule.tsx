import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  rule: {
    width: '100%',
    height: 1,
    borderTopWidth: 1,
    borderColor: '#ffffff38'
  }
})

export const HorizontalRule = () => {
  return <View style={styles.rule}/>
}