import React, { useContext } from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import { useGetPortraitState } from './useGetPortraitState'
import { PageWrapperContext } from './context'

const styles = StyleSheet.create({
  saveAreaContainer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
  },
  childrenContainer: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default function IosFullScreenModeContainer() {
  const isPortraitState = useGetPortraitState()
  const {
    children, header,
    isFullScreen,
    statusBarColor
  } = useContext(PageWrapperContext)

  return (
    <>
      <View style={styles.childrenContainer}>
        {children}
      </View>

      {
        // 当处于横屏状态，并且没有隐藏状态栏的时候，显示的头部
        !isPortraitState && !isFullScreen ? (
          <View style={{ position: 'absolute', width: '100%' }}>
            {header}
          </View>
        ) : null
      }

      {
        // 当处于横屏状态，并且没有隐藏状态栏的时候，显示的头部
        isPortraitState && !isFullScreen ? (
          <SafeAreaView style={[styles.saveAreaContainer, { backgroundColor: statusBarColor }]}>
            {header}
          </SafeAreaView>
        ) : null
      }
    </>
  )
}
