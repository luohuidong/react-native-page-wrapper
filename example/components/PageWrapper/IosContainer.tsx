import React, { useContext } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

import { PageWrapperContext } from './context'
import IosContainerFullScreenMode from './IosContainerFullScreenMode'
import IosContainerNormalMode from './IosContainerNormalMode'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})

export default function IOSContainer(): JSX.Element {
  const {
    isFullScreenPageMode, isFullScreen, reactNativeStatusBarProps
  } = useContext(PageWrapperContext)

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='dark-content'
        hidden={isFullScreen}
        {...reactNativeStatusBarProps}
      />
      { isFullScreenPageMode ? <IosContainerFullScreenMode /> : <IosContainerNormalMode /> }
    </View>
  )
}
