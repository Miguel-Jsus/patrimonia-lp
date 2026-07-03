import { C } from '../../constants/config'

/**
 * Rótulo de seção em caixa alta com traço decorativo lateral.
 * @param {boolean} dark — usa a variação dourada clara (para fundos escuros)
 */
export default function Eyebrow({ children, dark = false }) {
  const color = dark ? C.goldL : C.gold
  return (
    <div className="eyebrow" style={{ color }}>
      <span style={{ width: 18, height: 1, background: color, display: 'inline-block' }} />
      {children}
    </div>
  )
}
