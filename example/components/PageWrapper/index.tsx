import React from 'react'
import { Platform, StatusBarProps, ViewStyle } from 'react-native'

import { PageWrapperContext } from './context'
import AndroidContainer from './AndroidContainer'
import IosContainer from './IosContainer'

const isIos = Platform.OS === 'ios'

interface Props {
  children: React.ReactNode;
  isFullScreenPageMode: boolean; // 此模式页面内容将置于状态栏和头部之下渲染
  isFullScreen: boolean; // 是否隐藏状态栏和头部，仅在 isFullScreenPageMode 为 true 时有效
  header: React.ReactNode; // 页面头部
  isLandScapeAutoHiddenStatusBar?: boolean; // 横屏时自动隐藏状态栏，仅对 Android 有效
  statusBarColor?: string; // 状态栏颜色，仅对 IOS 全屏模式下有效
  reactNativeStatusBarProps?: StatusBarProps; // React Native 状态栏属性
  safeAreaViewStyle?: ViewStyle; // 仅 IOS 普通模式下有效
}

export default function PageWrapper({
  children,
  isFullScreen = false,
  isLandScapeAutoHiddenStatusBar = false,
  header = null,
  statusBarColor,
  isFullScreenPageMode = false,
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
    isFullScreen,
    isLandScapeAutoHiddenStatusBar,
    header,
    statusBarColor,
    isFullScreenPageMode,
    reactNativeStatusBarProps: getReactNativeStatusBarProps(reactNativeStatusBarProps),
    safeAreaViewStyle
  }

  return (
    <>
      <PageWrapperContext.Provider value={value}>
        { isIos ? <IosContainer /> : <AndroidContainer /> }
      </PageWrapperContext.Provider>
    </>
  )
}

PageWrapper.defaultProps = {
  isFullScreen: false,
  isLandScapeAutoHiddenStatusBar: false,
  header: null,
  isFullScreenPageMode: false,
}
