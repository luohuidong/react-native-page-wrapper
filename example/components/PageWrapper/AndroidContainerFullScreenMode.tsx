import React, { useContext } from 'react'
import { View, StatusBar } from 'react-native'

import { PageWrapperContext } from './context'
import { useGetPortraitState } from './useGetPortraitState'

export default function AndroidContainerFullScreenMode() {
  const {
    children, header, isFullScreenMode, isHiddenStatusBar, reactNativeStatusBarProps,
    statusBarColor, isLandScapeAutoHiddenStatusBar
  } = useContext(PageWrapperContext)

  const isPortrait = useGetPortraitState()

  function handleHiddenStatusBar(isHiddenStatusBar: boolean) {
    let isHidden = isHiddenStatusBar
    // 在横屏的时候，如果 isLandScapeAutoHiddenStatusBar 设置为 true，则自动隐藏 status bar
    if (!isPortrait && isLandScapeAutoHiddenStatusBar) {
      isHidden = true
    }
    return isHidden
  }
  const isHidden = handleHiddenStatusBar(isHiddenStatusBar)

  return (
    <>
      <View style={{ flex: 1 }}>
        {children}
      </View>

      <>
        <StatusBar
          translucent={true}
          hidden={isHidden}
          backgroundColor={statusBarColor}
          {...reactNativeStatusBarProps}
        />

        {
          !isHidden ? (
            <View
              style={{
                position: 'absolute',
                paddingTop: StatusBar.currentHeight,
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
