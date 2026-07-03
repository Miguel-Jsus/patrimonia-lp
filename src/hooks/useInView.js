import { useRef, useState, useEffect } from 'react'

/**
 * Retorna [ref, inView].
 * Dispara uma única vez quando o elemento entra na viewport.
 */
export function useInView(threshold = 0.14) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}
