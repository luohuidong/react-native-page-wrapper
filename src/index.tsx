import React from 'react'
import { Platform, StatusBarProps, ViewStyle } from 'react-native'

import { PageWrapperContext } from './context'
import AndroidContainer from './AndroidContainer'
import IosContainer from './IosContainer'

const isIos = Platform.OS === 'ios'

interface Props {
  children: React.ReactNode;
  isHiddenStatusBar: boolean; // 是否隐藏
  isLandScapeAutoHiddenStatusBar?: boolean; // 仅对 Android 有效
  header: React.ReactNode; // 页面头部
  statusBarColor?: string; // 状态栏颜色，仅对 IOS 全屏模式下有效
  isFullScreenMode: boolean; // 此模式页面内容将置于状态栏和头部之下渲染
  reactNativeStatusBarProps?: StatusBarProps; // React Native 状态栏属性
  safeAreaViewStyle?: ViewStyle; // 仅 IOS 普通模式下有效
}

export default function PageWrapper({
  children,
  isHiddenStatusBar = false,
  isLandScapeAutoHiddenStatusBar = false,
  header = null,
  statusBarColor,
  isFullScreenMode = false,
  reactNativeStatusBarProps = {},
  safeAreaViewStyle = {}
}: Props): JSX.Element {

  function getReactNativeStatusBarProps(reactNativeStatusBarProps: StatusBarProps) {
    const newProps = Object.assign({}, reactNativeStatusBarProps)
    if (newProps.hidden) {
      delete newProps.hidden
    }
    return newProps
  }

  const value = {
    children,
    isHiddenStatusBar,
    isLandScapeAutoHiddenStatusBar,
    header,
    statusBarColor,
    isFullScreenMode,
    reactNativeStatusBarProps: getReactNativeStatusBarProps(reactNativeStatusBarProps),
    safeAreaViewStyle
  }

  return (
    <>
      <PageWrapperContext.Provider value={value}>
        {
          isIos
            ? <IosContainer />
            : <AndroidContainer
              isHiddenStatusBar={isHiddenStatusBar}
              isLandScapeAutoHiddenStatusBar={isLandScapeAutoHiddenStatusBar}
            >{children}</AndroidContainer>
        }
      </PageWrapperContext.Provider>
    </>
  )
}

PageWrapper.defaultProps = {
  isHiddenStatusBar: false,
  isLandScapeAutoHiddenStatusBar: false,
  header: null,
  isFullScreenMode: false,
}
