import { useInView }          from '../../hooks/useInView'
import { useAnimatedCount }   from '../../hooks/useAnimatedCount'
import { C }                  from '../../constants/config'

/**
 * Célula de estatística com contador animado por scroll.
 */
export default function StatCell({ value, suffix, label }) {
  const [ref, inView] = useInView(0.4)
  const count         = useAnimatedCount(value, inView)

  return (
    <div
      ref={ref}
      style={{
        background:  C.ink2,
        padding:     '30px 16px',
        textAlign:   'center',
        border:      `1px solid ${C.lineD}`,
      }}
    >
      <div
        style={{ fontSize: 'clamp(1.8rem,3vw,2.35rem)', fontWeight: 700, color: C.goldL }}
      >
        {count}{suffix}
      </div>
      <div
        style={{
          fontFamily:    'monospace',
          fontSize:      '.66rem',
          letterSpacing: '.08em',
          textTransform: 'uppercase',
          color:         C.muted2,
          marginTop:     6,
        }}
      >
        {label}
      </div>
    </div>
  )
}
