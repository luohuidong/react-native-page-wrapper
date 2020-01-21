import React, { useState } from 'react'
import { Text, Button, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import { PageWrapper, Header } from '../components/'

interface Props {
  navigation: NavigationStackProp
}

export default function HomeScreen (props: Props) {
  const [hidden, setHidden] = useState(false)

  return (
    <PageWrapper
      isHiddenStatusBar={hidden}
      header={<Header />}
      statusBarColor='blue'
      isFullScreenMode={true}
      reactNativeStatusBarProps={{
        barStyle: "light-content"
      }}
    >
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'purple' }}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button
          title="Hide status bar"
          onPress={() => setHidden(!hidden)}
        />
        <Button
          title="Go to detail page"
          onPress={() => props.navigation.navigate('Detail')}
        />
      </View>
    </PageWrapper>
  );
}
