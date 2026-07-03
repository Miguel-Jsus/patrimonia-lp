import Eyebrow from '../ui/Eyebrow'
import { C }   from '../../constants/config'

const STEPS = [
  { num: '01', title: 'Análise da marca',        text: 'Entendemos seu negócio, segmento e a marca que precisa ser protegida.'                       },
  { num: '02', title: 'Busca de anterioridade',  text: 'Verificamos a viabilidade frente a marcas já existentes na base do INPI.'                   },
  { num: '03', title: 'Definição das classes',   text: 'Estratégia de classes e especificações para proteção realmente abrangente.'                  },
  { num: '04', title: 'Protocolo no INPI',       text: 'Formalizamos o pedido com toda a documentação técnica correta.'                             },
  { num: '05', title: 'Acompanhamento completo', text: 'Monitoramos prazos, publicações e exigências até a concessão do certificado.'               },
]

export default function Process() {
  return (
    <section id="processo" style={{ background: C.paper2, padding: '84px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        <div className="rev" style={{ marginBottom: 48 }}>
          <Eyebrow>Como funciona</Eyebrow>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.1vw,2.3rem)', lineHeight: 1.2, maxWidth: 520 }}>
            Da análise ao certificado, sem você precisar entender o INPI.
          </h2>
          <p style={{ marginTop: 14, fontSize: '1rem', lineHeight: 1.62, color: C.muted, maxWidth: 490 }}>
            Processo consultivo, conduzido por especialistas, em cinco etapas claras e acompanhadas.
          </p>
        </div>

        <div
          className="proc-list rev"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0 }}
        >
          {STEPS.map(({ num, title, text }) => (
            <div key={num} style={{ position: 'relative', zIndex: 1, padding: '0 14px' }}>
              <div
                style={{
                  width:          52,
                  height:         52,
                  borderRadius:   '50%',
                  background:     C.ink,
                  border:         `1px solid ${C.gold}`,
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontFamily:     'monospace',
                  fontWeight:     600,
                  fontSize:       '1rem',
                  color:          C.goldL,
                  marginBottom:   18,
                  position:       'relative',
                  zIndex:         1,
                }}
              >
                {num}
              </div>
              <h4 style={{ fontSize: '.95rem', marginBottom: 8, lineHeight: 1.35 }}>{title}</h4>
              <p style={{ fontSize: '.84rem', lineHeight: 1.55, color: C.muted }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
