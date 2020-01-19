import React from 'react'
import { Platform } from 'react-native'

import AndroidContainer from './AndroidContainer'
import IosContainer from './IosContainer'

const isIos = Platform.OS === 'ios'

interface Props {
  children: React.ReactNode;
  isHiddenStatusBar?: boolean;
  isLandScapeAutoHiddenStatusBar?: boolean;
}

export default function PageWrapper(props: Props): JSX.Element {
  return isIos
    ? <IosContainer>{props.children}</IosContainer>
    : <AndroidContainer
      isHiddenStatusBar={props.isHiddenStatusBar}
      isLandScapeAutoHiddenStatusBar={props.isLandScapeAutoHiddenStatusBar}
    >{props.children}</AndroidContainer>
}
