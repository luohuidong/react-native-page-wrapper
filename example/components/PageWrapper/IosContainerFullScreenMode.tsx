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
    isHiddenStatusBar,
    statusBarColor
  } = useContext(PageWrapperContext)

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.childrenContainer}>{children}</View>
      </View>

      {
        // 当处于横屏状态，并且没有隐藏状态栏的时候，头部在
        !isPortraitState && !isHiddenStatusBar ? (
          <View style={{ position: 'absolute', width: '100%' }}>
            {header}
          </View>
        ) : null
      }

      {
        isPortraitState && !isHiddenStatusBar ? (
          <SafeAreaView style={[styles.saveAreaContainer, { backgroundColor: statusBarColor }]}>
            {header}
          </SafeAreaView>
        ) : null
      }
    </>
  )
}
