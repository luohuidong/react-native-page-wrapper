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
  const [isFullScreen, setFullScreen] = useState(false)

  return (
    <PageWrapper
      isFullScreen={isFullScreen}
      statusBarColor='blue'
      isFullScreenPageMode={true}
      reactNativeStatusBarProps={{
        barStyle: "light-content",
      }}
      header={<Header />}
      isLandScapeAutoHiddenStatusBar={true}
    >
      <View style={styles.container}>
        <Text>FullScreenMode</Text>
        <Button
          title="Toggle full screen"
          onPress={() => setFullScreen(!isFullScreen)}
        />
        <Button
          title="Go to normal mode page"
          onPress={() => props.navigation.navigate('Detail')}
        />
      </View>
    </PageWrapper>
  );
}
