import { useState }                        from 'react'
import Eyebrow                             from '../ui/Eyebrow'
import { C, buildWa, WA_MSG, trackEvent }  from '../../constants/config'

const SELECT_OPTIONS = [
  'Registrar uma marca pela primeira vez',
  'Verificar se minha marca pode ser registrada',
  'Renovar um registro existente',
  'Tirar dúvidas sobre o processo',
]

export default function Contact() {
  const [name,     setName]     = useState('')
  const [interest, setInterest] = useState(SELECT_OPTIONS[0])

  function handleSubmit(e) {
    e.preventDefault()
    const msg = `Olá! Meu nome é ${name}. Tenho interesse em ${interest}.`
    trackEvent('generate_lead', { form: 'contact_form', interest })
    window.open(buildWa(msg), '_blank', 'noopener')
  }

  return (
    <section
      id="contato"
      style={{
        background: C.ink,
        padding:    '92px 0',
        position:   'relative',
        overflow:   'hidden',
        textAlign:  'center',
      }}
    >
      {/* Logo watermark decorativo */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', right: -80, top: '50%', transform: 'translateY(-50%)', opacity: .08, pointerEvents: 'none' }}
      >
        <img src="/imgs/logo-watermark.png" alt="" style={{ width: 480 }} />
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Eyebrow dark>Solicitar Análise Gratuita</Eyebrow>

        <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.55rem)', color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
          Não espere descobrir, tarde demais, que sua marca já pertence a outra empresa.
        </h2>
        <p style={{ fontSize: '1rem', color: C.muted2, lineHeight: 1.62, maxWidth: 510, margin: '0 auto 36px' }}>
          A análise inicial é gratuita e sem compromisso. Preencha seus dados e fale agora com um especialista.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            background:   'rgba(255,255,255,.05)',
            border:       `1px solid ${C.lineD}`,
            borderRadius: 14,
            padding:      '26px 28px',
            textAlign:    'left',
            maxWidth:     420,
            margin:       '0 auto',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <label className="lp-label" htmlFor="contact-name">Nome completo</label>
            <input
              id="contact-name"
              className="lp-input"
              type="text"
              placeholder="Como podemos te chamar?"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label className="lp-label" htmlFor="contact-interest">O que você precisa</label>
            <select
              id="contact-interest"
              className="lp-input"
              style={{ appearance: 'none' }}
              value={interest}
              onChange={e => setInterest(e.target.value)}
            >
              {SELECT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          <button type="submit" className="btn-g" style={{ width: '100%', justifyContent: 'center', padding: '14px 22px' }}>
            Solicitar Análise Gratuita
          </button>

          <p style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '.65rem', color: C.muted2, marginTop: 11, lineHeight: 1.5 }}>
            🔒 Seus dados estão protegidos. Sem spam, sem compromisso.
          </p>
        </form>
      </div>
    </section>
  )
}
