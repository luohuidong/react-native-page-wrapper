import React from 'react'
import { StatusBarProps, ViewStyle} from 'react-native'

interface Value {
  isFullScreen: boolean;
  isLandScapeAutoHiddenStatusBar?: boolean;
  header: React.ReactNode;
  statusBarColor?: string;
  isFullScreenPageMode: boolean;
  children: React.ReactNode;
  reactNativeStatusBarProps: StatusBarProps; // 状态栏
  safeAreaViewStyle: ViewStyle; // 仅 IOS 普通模式下有效
}

export const PageWrapperContext = React.createContext<Value>({
  isFullScreen: false,
  isLandScapeAutoHiddenStatusBar: false,
  header: <></>,
  statusBarColor: '#fff',
  isFullScreenPageMode: false,
  children: <></>,
  reactNativeStatusBarProps: {},
  safeAreaViewStyle: {},
})
