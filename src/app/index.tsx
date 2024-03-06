import { router } from 'expo-router'
import { EvilIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundImage, Button, VerticalSpacer } from '@/components'

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
            name="user"
            size={192}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.text}>
            It's time to set your username!
          </Text>
          <VerticalSpacer/>
          <Button
            label="Next"
            onPress={() => router.navigate('/thanks')}
          />
        </View>
      </SafeAreaView>
    </BackgroundImage>
  )
}
