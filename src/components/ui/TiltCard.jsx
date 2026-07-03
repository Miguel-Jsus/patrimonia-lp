import { useRef } from 'react'

export default function TiltCard({ children, style = {} }) {
  const ref = useRef(null)

  function handleMove(e) {
    const card = ref.current
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = (e.clientX - left) / width  - 0.5
    const y = (e.clientY - top)  / height - 0.5
    card.style.transform = `perspective(600px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`
    card.style.boxShadow = `${-x * 16}px ${y * 16}px 40px rgba(23,70,234,.25)`
  }

  function handleLeave() {
    const card = ref.current
    card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)'
    card.style.boxShadow = 'none'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transition: 'transform .08s ease, box-shadow .08s ease',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
