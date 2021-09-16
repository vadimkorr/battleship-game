import { useLayoutEffect, useState, useCallback } from 'react'

export function useResize(ref) {
  // const [width, setWidth] = useState(0)
  // const [height, setHeight] = useState(0)
  const [squareSize, setSquareSize] = useState(0)

  const handleResize = useCallback(() => {
    setSquareSize(
      Math.min(
        ref.current.offsetWidth,
        ref.current.offsetHeight || ref.current.offsetWidth
      )
    )
  }, [ref])

  useLayoutEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize, true)
    return function () {
      window.removeEventListener('resize', handleResize, true)
    }
  }, [handleResize])

  return {
    squareSize,
  }
}
