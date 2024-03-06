import { StatusBar } from 'expo-status-bar'
import { EvilIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundImage, VerticalSpacer } from '@/components'

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    margin: 20,
  },
  text: {
    color: 'white'
  }
})

export default function Page() {
  return (
    <BackgroundImage
      source={require('../../assets/background.png')}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.pageContainer}>
          <StatusBar style="auto"/>
          <VerticalSpacer/>
          <EvilIcons
            name="check"
            size={192}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.text}>
            Thanks!
          </Text>
          <VerticalSpacer/>
        </View>
      </SafeAreaView>
    </BackgroundImage>
  )
}
