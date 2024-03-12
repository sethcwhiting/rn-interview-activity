import { EvilIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundImage, VerticalSpacer } from '@/components'
import { useProfile } from '@/profile'

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
    color: 'white'
  }
})

export default function Page() {
  const { profile, isLoaded } = useProfile()

  const thanksMessage = isLoaded ?
    <Text style={styles.text}>Thanks {profile?.name}!</Text> :
    null
  return (
    <BackgroundImage
      source={require('../../assets/background.png')}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.pageContainer}>
          <VerticalSpacer/>
          <EvilIcons
            name="check"
            size={192}
            color="white"
            style={styles.icon}
          />
          {thanksMessage}
          <Text style={styles.text}>
            Welcome to the community!
          </Text>
          <VerticalSpacer/>
        </View>
      </SafeAreaView>
    </BackgroundImage>
  )
}
