import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

import { useGetPortraitState } from './useGetPortraitState'

const styles = StyleSheet.create({
  containerWithStatusBar: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  conntainerWithoutStatusBar: {
    flex: 1
  },
})

interface Props {
  isHiddenStatusBar: boolean;
  isLandScapeAutoHiddenStatusBar: boolean;
  children: React.ReactNode;
}

export default function AndroidContainer(props: Props): JSX.Element {
  const isPortrait = useGetPortraitState()

  let isHiddenStatusBar = props.isHiddenStatusBar

  // 在横屏的时候，如果 isLandScapeAutoHiddenStatusBar 设置为 true，则自动隐藏 status bar
  if (!isPortrait && props.isLandScapeAutoHiddenStatusBar) {
    isHiddenStatusBar = true
  }

  const style = isHiddenStatusBar ? styles.conntainerWithoutStatusBar : styles.containerWithStatusBar

  return (
    <>
      <StatusBar translucent={true} hidden={isHiddenStatusBar} barStyle='dark-content' />
      <View style={style}>{props.children}</View>
    </>

  )
}

AndroidContainer.defaultProps = {
  isHiddenStatusBar: false,
  isLandScapeAutoHiddenStatusBar: false
}
