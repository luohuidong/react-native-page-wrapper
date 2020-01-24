import React, { useContext } from 'react'
import { View, StatusBar, StyleSheet, ViewStyle } from 'react-native'

import { PageWrapperContext } from './context'
import { useGetPortraitState } from './useGetPortraitState'

const statusBarHeight = StatusBar.currentHeight

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childrenContainer: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default function AndroidContainerNormalMode() {
  const {
    children, header, statusBarColor, reactNativeStatusBarProps, isLandScapeAutoHiddenStatusBar
  } = useContext(PageWrapperContext)
  const isPortrait = useGetPortraitState()

  /**
   * 在普通模式下，状态栏只有在用户设定了在横屏的时候自动隐藏状态栏时，状态栏才会在横屏的时候被隐藏
   * 其它情况下将一直显示状态栏
   */
  const isHiddenStatusBar = isLandScapeAutoHiddenStatusBar && !isPortrait

  const containerStyle: ViewStyle[] = [
    styles.container,
    {
      backgroundColor: statusBarColor,
      paddingTop: isHiddenStatusBar ? 0 : statusBarHeight
    }
  ]

  return (
    <View style={containerStyle}>
      <StatusBar
        translucent={false}
        hidden={isHiddenStatusBar || false}
        backgroundColor={statusBarColor}
        {...reactNativeStatusBarProps}
      />
      {header}
      <View style={styles.childrenContainer}>
        {children}
      </View>
    </View>
  )
}
