import Eyebrow  from '../ui/Eyebrow'
import CertCard from './CertCard'
import { C }    from '../../constants/config'

const STATS = [
  { value: '500+', label: 'Marcas protegidas'  },
  { value: '98%',  label: 'Taxa de êxito'       },
  { value: '12+',  label: 'Anos de atuação'     },
]

export default function Hero() {
  return (
    <section
      style={{
        background: `
          radial-gradient(900px 480px at 80% -10%, rgba(23,70,234,.22), transparent 60%),
          radial-gradient(600px 480px at -8%  100%, rgba(23,70,234,.14), transparent 55%),
          ${C.ink}
        `,
        paddingTop:  156,
        paddingBottom: 88,
        overflow:    'hidden',
        position:    'relative',
        color:       '#fff',
      }}
    >
      {/* Dot pattern overlay */}
      <div
        className="dots"
        style={{
          position:            'absolute',
          inset:               0,
          maskImage:           'linear-gradient(180deg,rgba(0,0,0,.8),transparent 80%)',
          WebkitMaskImage:     'linear-gradient(180deg,rgba(0,0,0,.8),transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 52, alignItems: 'center' }}>

          {/* Copy */}
          <div>
            <Eyebrow dark>Proteção Patrimonial · Propriedade Intelectual</Eyebrow>

            <h1
              style={{ fontSize: 'clamp(2rem,4.1vw,3.2rem)', lineHeight: 1.1, fontWeight: 700, marginBottom: 20 }}
            >
              Sua marca é um patrimônio.{' '}
              <em style={{ fontStyle: 'italic', color: C.goldL }}>Registre antes</em>{' '}
              que outra empresa o faça por você.
            </h1>

            <p style={{ fontSize: '1.06rem', lineHeight: 1.65, color: C.muted2, maxWidth: 490, marginBottom: 32 }}>
              Cuidamos de toda a estratégia de proteção da sua marca no INPI — da busca de anterioridade ao
              certificado de registro — com acompanhamento consultivo especializado, do início ao fim.
            </p>

            <div className="hero-ctas" style={{ display: 'flex', gap: 13, flexWrap: 'wrap', marginBottom: 46 }}>
              <a href="#contato" className="btn-g">
                Solicitar Análise Gratuita
              </a>
            </div>

            {/* Mini stats */}
            <div style={{ display: 'flex', gap: 28, paddingTop: 26, borderTop: `1px solid ${C.lineD}`, flexWrap: 'wrap' }}>
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{value}</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '.62rem', letterSpacing: '.06em', textTransform: 'uppercase', color: C.muted2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate card */}
          <div className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              aria-hidden="true"
              style={{
                position:   'absolute',
                width:      360,
                height:     360,
                left:       '50%',
                top:        '50%',
                transform:  'translate(-50%,-50%)',
                background: 'radial-gradient(circle,rgba(23,70,234,.22),transparent 70%)',
                filter:     'blur(8px)',
                zIndex:     0,
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <CertCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
