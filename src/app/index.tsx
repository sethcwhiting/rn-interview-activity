import { router } from 'expo-router'
import { EvilIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundImage, PrimaryButton, VerticalSpacer } from '@/components'
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
    margin: 24,
  },
  text: {
    lineHeight: 24,
    color: 'white'
  }
})

export default function Page() {
  const { profile, isLoaded } = useProfile()

  const welcomeMessage = isLoaded ?
    <Text style={styles.text}>Hey there, {profile?.name}</Text> :
    null

  return (
    <BackgroundImage
      source={require('../../assets/background.png')}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.pageContainer}>
          <VerticalSpacer/>
          <EvilIcons
            name="user"
            size={192}
            color="white"
            style={styles.icon}
          />
          {welcomeMessage}
          <Text style={styles.text}>
            It's time to set your username!
          </Text>
          <VerticalSpacer/>
          <PrimaryButton
            label="Next"
            onPress={() => router.navigate('/thanks')}
          />
        </View>
      </SafeAreaView>
    </BackgroundImage>
  )
}
