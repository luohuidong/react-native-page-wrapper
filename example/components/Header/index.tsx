import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

interface Props {
  style?: object;
}

export default function Header(props: Props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text>Header</Text>
    </View>
  )
}
