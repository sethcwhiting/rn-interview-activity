import React from 'react'
import { StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: '#1c0140',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

export const BackgroundImage =
  ({
     source,
     children
  }: React.PropsWithChildren<{
    source: ImageSourcePropType
  }>) => {
    return <ImageBackground
      source={source}
      style={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  }
