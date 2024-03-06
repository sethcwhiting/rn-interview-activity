import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BackgroundImage, Button, VerticalSpacer } from './src/components'

export default function App() {
  return (
    <BackgroundImage
      source={require('./assets/background.png')}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.pageContainer}>
          <StatusBar style="auto"/>
          <Text style={styles.text}>
            Open up App.tsx to start working on your app!
          </Text>
          <VerticalSpacer/>
          <Button label="Next"/>
        </View>
      </SafeAreaView>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});
