import { useEffect, useState } from 'react'
import { Dimensions, ScaledSize } from 'react-native'

interface Params {
  window: ScaledSize;
  screen: ScaledSize;
}

export function useGetPortraitState(): boolean {
  /**
   * 通过宽高来判断当前是否为横屏
   * @param height 屏幕高度
   * @param width 屏幕宽度
   */
  function isPortrait(height: number, width: number): boolean {
    let portraitState = true
    if (height < width) {
      portraitState = false
    }
    return portraitState
  }

  const [portraitState, setPortraitState] = useState(() => {
    const { height, width } = Dimensions.get('window')
    return isPortrait(height, width)
  })

  useEffect(() => {
    function handleDimensionsChange({ window }: Params): void {
      const { width, height } = window
      setPortraitState(isPortrait(height, width))
    }

    Dimensions.addEventListener('change', handleDimensionsChange)

    return (): void => {
      Dimensions.removeEventListener('change', handleDimensionsChange)
    }
  })

  return portraitState
}
