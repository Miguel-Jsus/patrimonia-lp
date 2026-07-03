import { ShieldCheck, Award, Lock, Scale } from 'lucide-react'
import Eyebrow  from '../ui/Eyebrow'
import StatCell from '../ui/StatCell'
import TiltCard from '../ui/TiltCard'
import { C }    from '../../constants/config'

const STATS = [
  { value: 500, suffix: '+', label: 'Marcas protegidas'  },
  { value: 12,  suffix: '+', label: 'Anos de atuação'    },
  { value: 98,  suffix: '%', label: 'Taxa de êxito'      },
  { value: 24,  suffix: 'h', label: 'Para iniciar o processo' },
]

const TESTIMONIALS = [
  {
    initials: 'MR',
    name:     'Mariana R.',
    role:     'E-commerce de moda',
    quote:    'Achávamos que registrar marca era burocrático e demorado. A equipe explicou cada etapa e hoje temos o certificado em mãos.',
  },
  {
    initials: 'CA',
    name:     'Carlos A.',
    role:     'Startup de tecnologia',
    quote:    'Durante a busca de anterioridade descobrimos que o nome que íamos usar já tinha pedido em andamento. Evitou um problema enorme.',
  },
  {
    initials: 'PL',
    name:     'Patrícia L.',
    role:     'Clínica odontológica',
    quote:    'Atendimento humanizado de verdade, sem aquela sensação de estar falando com um robô de departamento jurídico.',
  },
]

const BADGES = [
  { Icon: ShieldCheck, label: 'Dados protegidos (LGPD)'     },
  { Icon: Award,       label: 'Equipe especializada em PI'  },
  { Icon: Lock,        label: 'Processo 100% acompanhado'   },
  { Icon: Scale,       label: 'Conformidade Lei 9.279/96'   },
]

export default function Authority() {
  return (
    <section id="autoridade" style={{ background: C.ink, padding: '84px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        {/* Cabeçalho */}
        <div className="rev" style={{ textAlign: 'center', marginBottom: 48 }}>
          <Eyebrow dark>Autoridade em propriedade intelectual</Eyebrow>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.1vw,2.3rem)', color: '#fff', lineHeight: 1.2 }}>
            Especialistas que vivem de proteger marcas — não de protocolar papéis.
          </h2>
        </div>

        {/* Contadores */}
        <div
          className="stat-grid rev"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap:                 1,
            background:          C.lineD,
            border:              `1px solid ${C.lineD}`,
            borderRadius:        14,
            overflow:            'hidden',
            marginBottom:        44,
          }}
        >
          {STATS.map(s => <StatCell key={s.label} value={s.value} suffix={s.suffix} label={s.label} />)}
        </div>

        {/* Depoimentos */}
        <div className="testi-grid rev" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginBottom: 44 }}>
          {TESTIMONIALS.map(({ initials, name, role, quote }) => (
            <TiltCard key={name} style={{ background: C.ink2, border: `1px solid ${C.lineD}`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: C.goldL, fontSize: '.84rem', marginBottom: 14, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: '.88rem', lineHeight: 1.65, color: '#E8ECFF', marginBottom: 18 }}>"{quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div
                  style={{
                    width:          34,
                    height:         34,
                    borderRadius:   '50%',
                    background:     C.gold,
                    color:          C.ink,
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    fontFamily:     "'Open Sans',sans-serif",
                    fontWeight:     700,
                    fontSize:       '.8rem',
                    flexShrink:     0,
                  }}
                >
                  {initials}
                </div>
                <div>
                  <div style={{ fontSize: '.84rem', color: '#fff', fontWeight: 600 }}>{name}</div>
                  <div style={{ fontSize: '.73rem', color: C.muted2 }}>{role}</div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Selos */}
        <div
          className="rev"
          style={{ display: 'flex', gap: 28, justifyContent: 'center', flexWrap: 'wrap', paddingTop: 32, borderTop: `1px solid ${C.lineD}` }}
        >
          {BADGES.map(({ Icon, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'monospace', fontSize: '.68rem', letterSpacing: '.05em', textTransform: 'uppercase', color: C.muted2 }}>
              <Icon size={17} color={C.goldL} />{label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
