import Seal  from '../ui/Seal'
import { C } from '../../constants/config'

/** Cartão visual de certificado de registro — elemento de prova social do Hero. */
export default function CertCard() {
  return (
    <div
      className="cert lift"
      style={{
        background:   'linear-gradient(150deg,#fff,#F0F4FF)',
        borderRadius: 16,
        padding:      '28px 26px 24px',
        boxShadow:    '0 40px 80px -28px rgba(0,0,0,.62)',
        border:       '1px solid rgba(23,70,234,.25)',
        transform:    'rotate(2.5deg)',
        width:        '100%',
        maxWidth:     340,
        position:     'relative',
      }}
    >
      {/* Topo */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <Seal size={34} color={C.gold} />
        <span
          style={{
            fontFamily:    'monospace',
            fontSize:      '.56rem',
            letterSpacing: '.1em',
            color:         C.gold,
            textTransform: 'uppercase',
            textAlign:     'right',
            lineHeight:    1.6,
          }}
        >
          República<br />Federativa do Brasil
        </span>
      </div>

      {/* Dados */}
      <div style={{ fontSize: '1.06rem', color: C.ink, fontWeight: 700, marginBottom: 4 }}>
        Certificado de Registro de Marca
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '.7rem', color: C.muted, marginBottom: 18 }}>
        Nº 000.000.000 — Classe NCL(12) 35
      </div>

      {/* Barras decorativas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }} aria-hidden="true">
        {[92, 74, 84].map(w => (
          <span key={w} style={{ display: 'block', height: 7, borderRadius: 4, background: 'rgba(1,12,40,.10)', width: `${w}%` }} />
        ))}
      </div>

      {/* Rodapé */}
      <div
        style={{
          display:       'flex',
          justifyContent: 'space-between',
          borderTop:     '1px solid rgba(1,12,40,.09)',
          paddingTop:    14,
          fontFamily:    'monospace',
          fontSize:      '.63rem',
          color:         C.muted,
        }}
      >
        <span>Vigência: <strong>10 anos</strong></span>
        <span style={{ color: C.ok, fontWeight: 700 }}>● Concedido</span>
      </div>

      {/* Selo decorativo */}
      <div style={{ position: 'absolute', right: -20, bottom: -24, opacity: .85, transform: 'rotate(-14deg)' }} aria-hidden="true">
        <Seal size={104} color={C.goldL} />
      </div>
    </div>
  )
}
