import React, { useState } from 'react'
import { Text, Button, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import { PageWrapper, Header } from '../components'

interface Props {
  navigation: NavigationStackProp
}

export default function DetailScreen (props: Props) {
  const [hidden, setHidden] = useState(false)

  return (
    <PageWrapper
      isFullScreenMode={false}
      isHiddenStatusBar={hidden}
      header={<Header style={{ backgroundColor: 'green' }} />}
      statusBarColor='blue'
      reactNativeStatusBarProps = {{
        barStyle: "light-content"
      }}
      safeAreaViewStyle={{
        backgroundColor: 'black'
      }}
    >
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'
      }}>
        <Text>NormalScreenMode</Text>
        <Button
          title="Hide status bar"
          onPress={() => setHidden(!hidden)}
        />
        <Button
          title="Go Back"
          onPress={() => props.navigation.goBack()}
        />
      </View>
    </PageWrapper>
  );
}
