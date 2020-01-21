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
    isFullScreenMode, isHiddenStatusBar, reactNativeStatusBarProps
  } = useContext(PageWrapperContext)

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='dark-content'
        hidden={isHiddenStatusBar}
        {...reactNativeStatusBarProps}
      />
      { isFullScreenMode ? <IosContainerFullScreenMode /> : <IosContainerNormalMode /> }
    </View>
  )
}
