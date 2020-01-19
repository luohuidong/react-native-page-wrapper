import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import PageWrapper from '../components/PageWrapper'

interface Props {
  navigation: NavigationStackProp
}

export default function HomeScreen (props: Props) {
  const [hidden, setHidden] = useState(false)

  return (
    <PageWrapper isHiddenStatusBar={hidden}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Hide status bar"
        onPress={() => setHidden(!hidden)}
      />
      <Button
        title="Go to detail page"
        onPress={() => props.navigation.navigate('Detail')}
      />
    </PageWrapper>
  );
}
