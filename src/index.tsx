import React from 'react'
import { StatusBar, Platform } from 'react-native'
import { useGetPortraitState } from './useGetPortraitState'

import AndroidContainer from './AndroidContainer'
import IosContainer from './IosContainer'

const isIos = Platform.OS === 'ios'

interface Props {
  children: React.ReactNode;
  isHiddenStatusBar: boolean;
}

export default function PageWrapper(props: Props): JSX.Element {
  const isPortrait = useGetPortraitState()
  const isHidden = isPortrait ? props.isHiddenStatusBar : true

  return (
    <>
      <StatusBar backgroundColor='green' translucent={true} hidden={isHidden} />
      {
        isIos
          ? <IosContainer>{props.children}</IosContainer>
          : <AndroidContainer
            isHiddenStatusBar={props.isHiddenStatusBar}
            isPortrait={isPortrait}
          >{props.children}</AndroidContainer>
      }
    </>
  )
}

PageWrapper.defaultProps = {
  isHiddenStatusBar: false
}
