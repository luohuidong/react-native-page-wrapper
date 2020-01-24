import React, { useContext } from 'react'
import { View, StatusBar } from 'react-native'

import { PageWrapperContext } from './context'
import { useGetPortraitState } from './useGetPortraitState'

export default function AndroidContainerFullScreenMode() {
  const {
    children, header, isFullScreen, reactNativeStatusBarProps,
    statusBarColor, isLandScapeAutoHiddenStatusBar
  } = useContext(PageWrapperContext)

  const isPortrait = useGetPortraitState()

  function handleHiddenStatusBar(isFullScreen: boolean) {
    let isHiddenStatusBar = isFullScreen
    // 在横屏的时候，如果 isLandScapeAutoHiddenStatusBar 设置为 true，则自动隐藏 status bar
    if (!isPortrait && isLandScapeAutoHiddenStatusBar) {
      isHiddenStatusBar = true
    }
    return isHiddenStatusBar
  }
  const isHiddenStatusBar = handleHiddenStatusBar(isFullScreen)

  return (
    <>
      <View style={{ flex: 1 }}>
        {children}
      </View>

      <>
        <StatusBar
          translucent={true}
          hidden={isHiddenStatusBar}
          backgroundColor={statusBarColor}
          {...reactNativeStatusBarProps}
        />

        {
          !isFullScreen ? (
            <View
              style={{
                position: 'absolute',
                paddingTop: isHiddenStatusBar ? 0 : StatusBar.currentHeight,
                width: '100%',
                backgroundColor: statusBarColor
              }}
            >{header}</View>
          ) : null
        }
      </>
    </>
  )
}
