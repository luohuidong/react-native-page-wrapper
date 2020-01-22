import React, { useState } from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import { PageWrapper, Header } from '../components/'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'purple',
    alignItems: 'center'
  }
})

interface Props {
  navigation: NavigationStackProp
}

export default function HomeScreen(props: Props) {
  const [hidden, setHidden] = useState(false)

  return (
    <PageWrapper
      isHiddenStatusBar={hidden}
      statusBarColor='blue'
      isFullScreenMode={true}
      reactNativeStatusBarProps={{
        barStyle: "light-content",
      }}
      header={<Header />}
    >
      <View style={styles.container}>
        <Text>FullScreenMode</Text>
        <Button
          title="Hide status bar"
          onPress={() => setHidden(!hidden)}
        />
        <Button
          title="Go to normal mode page"
          onPress={() => props.navigation.navigate('Detail')}
        />
      </View>
    </PageWrapper>
  );
}
