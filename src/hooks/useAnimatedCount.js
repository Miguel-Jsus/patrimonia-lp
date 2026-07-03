import { useState, useEffect } from 'react'

/**
 * Anima um número de 0 até `target` com easing cúbico.
 * Só inicia quando `enabled` for verdadeiro.
 */
export function useAnimatedCount(target, enabled) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return
    let startTime = null
    const DURATION = 1100

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / DURATION, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [target, enabled])

  return value
}
