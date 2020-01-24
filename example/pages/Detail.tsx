import React, { useState } from 'react'
import { Text, Button, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import { PageWrapper, Header } from '../components'

interface Props {
  navigation: NavigationStackProp
}

export default function DetailScreen (props: Props) {

  return (
    <PageWrapper
      header={<Header style={{ backgroundColor: 'green' }} />}
      statusBarColor='blue'
      isLandScapeAutoHiddenStatusBar={true}
      reactNativeStatusBarProps = {{
        barStyle: "light-content"
      }}
    >
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'
      }}>
        <Text>NormalScreenMode</Text>

        <Button
          title="Go Back"
          onPress={() => props.navigation.goBack()}
        />
      </View>
    </PageWrapper>
  );
}
