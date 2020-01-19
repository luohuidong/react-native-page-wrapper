import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import PageWrapper from '../components/PageWrapper'

interface Props {
  navigation: NavigationStackProp
}

export default function DetailScreen (props: Props) {
  return (
    <PageWrapper>
      <Text>Detail page</Text>
      <Button
        title="Go Back"
        onPress={() => props.navigation.goBack()}
      />
    </PageWrapper>
  );
}
