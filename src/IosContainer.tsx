import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  containerWithStatusBar: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  conntainerWithoutStatusBar: {
    flex: 1
  },
})

interface Props {
  isHiddenStatusBar: boolean;
  children: React.ReactNode;
  isPortrait: boolean;
}

export default function AndroidContainer(props: Props): JSX.Element {
  const { isPortrait } = props

  const style = props.isHiddenStatusBar || !isPortrait
    ? styles.conntainerWithoutStatusBar
    : styles.containerWithStatusBar

  return (
    <View style={style}>{props.children}</View>
  )
}
