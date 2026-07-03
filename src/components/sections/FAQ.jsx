import { useState }  from 'react'
import { X }         from 'lucide-react'
import Eyebrow       from '../ui/Eyebrow'
import { C }         from '../../constants/config'

const ITEMS = [
  {
    q: 'Quanto tempo demora o registro no INPI?',
    a: 'O protocolo pode ser feito em poucos dias, mas a análise e concessão pelo INPI costuma levar entre 12 e 24 meses. Sua marca já fica com prioridade de uso desde a data do protocolo.',
  },
  {
    q: 'Quanto custa registrar uma marca?',
    a: 'O valor varia conforme número de classes e complexidade da análise. Trabalhamos com valores fixos e transparentes, sem surpresas. Fale com um especialista para uma proposta personalizada.',
  },
  {
    q: 'Como saber se minha marca será aprovada?',
    a: 'Realizamos busca de anterioridade detalhada antes do protocolo para identificar riscos de colidência e aumentar significativamente as chances de deferimento.',
  },
  {
    q: 'O que é o INPI e por que ele importa?',
    a: 'O INPI é o órgão federal que concede registros de marcas e patentes no Brasil. Somente um registro concedido por ele garante exclusividade nacional de uso.',
  },
  {
    q: 'Preciso ter CNPJ para registrar minha marca?',
    a: 'Não. O registro pode ser feito por pessoa física que comprove o exercício de atividade relacionada à marca.',
  },
  {
    q: 'Minha marca precisa de renovação?',
    a: 'Sim. O certificado tem vigência de 10 anos e pode ser renovado indefinidamente — perder esse prazo pode significar perder o direito sobre a marca.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (index) => setOpen(prev => (prev === index ? null : index))

  return (
    <section id="faq" style={{ background: C.paper, padding: '84px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        <div className="rev" style={{ textAlign: 'center', marginBottom: 48 }}>
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.1vw,2.3rem)', lineHeight: 1.2 }}>
            O que você precisa saber antes de registrar
          </h2>
        </div>

        <div className="rev" style={{ maxWidth: 760, margin: '0 auto' }}>
          {ITEMS.map(({ q, a }, index) => (
            <div
              key={index}
              className={open === index ? 'faq-open' : ''}
              style={{ borderBottom: `1px solid ${C.lineL}` }}
            >
              <button
                onClick={() => toggle(index)}
                aria-expanded={open === index}
                style={{
                  width:       '100%',
                  display:     'flex',
                  alignItems:  'center',
                  justifyContent: 'space-between',
                  gap:         18,
                  padding:     '21px 4px',
                  background:  'none',
                  border:      'none',
                  cursor:      'pointer',
                  textAlign:   'left',
                  fontFamily:  "'Open Sans',sans-serif",
                  fontWeight:  600,
                  fontSize:    '1rem',
                  color:       C.ink,
                }}
              >
                {q}
                <X className="faq-icon" size={18} color={C.gold} />
              </button>

              <div
                className="faq-panel"
                style={{ maxHeight: open === index ? 260 : 0 }}
              >
                <div style={{ padding: '0 4px 20px', fontSize: '.92rem', lineHeight: 1.65, color: C.muted }}>
                  {a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
