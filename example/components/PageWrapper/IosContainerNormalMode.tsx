import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { PageWrapperContext } from './context'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default function IosContainerNormalMode() {
  const {
    children, header, safeAreaViewStyle
  } = useContext(PageWrapperContext)

  return (
    <SafeAreaView style={[styles.container, safeAreaViewStyle]}>
      {header}
      {children}
    </SafeAreaView>
  )
}
