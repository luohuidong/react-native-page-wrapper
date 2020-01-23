import React, { useContext } from 'react'

import { PageWrapperContext } from './context'
import AndroidContainerFullScreenMode from './AndroidContainerFullScreenMode'
import AndroidContainerNormalMode from  './AndroidContainerNormalMode'

export default function AndroidContainer(): JSX.Element {
  const { isFullScreenMode } = useContext(PageWrapperContext)

  return (
    <>
      {
        isFullScreenMode
          ? <AndroidContainerFullScreenMode />
          : <AndroidContainerNormalMode />
      }
    </>
  )
}

