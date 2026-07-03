import { Check, X } from 'lucide-react'
import Eyebrow       from '../ui/Eyebrow'
import { C }         from '../../constants/config'

const ROWS = [
  ['Busca de anterioridade qualificada', 'Básica ou inexistente',        'Análise detalhada e criteriosa'  ],
  ['Estratégia de classes INPI',         'Genérica',                     'Personalizada ao negócio'        ],
  ['Acompanhamento jurídico',            'Termina no protocolo',         'Do início ao certificado'        ],
  ['Monitoramento pós-registro',         'Não oferece',                  'Contínuo, contra colidências'    ],
  ['Comunicação clara e acessível',      'Termos técnicos sem contexto', 'Consultoria humanizada'          ],
]

export default function Differentials() {
  return (
    <section id="diferenciais" style={{ background: C.paper, padding: '84px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        <div className="rev" style={{ marginBottom: 48 }}>
          <Eyebrow>Por que não somos um despachante</Eyebrow>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.1vw,2.3rem)', lineHeight: 1.2, maxWidth: 580 }}>
            Protocolar um pedido é fácil. Garantir que ele seja aprovado é o nosso trabalho.
          </h2>
          <p style={{ marginTop: 14, fontSize: '1rem', lineHeight: 1.62, color: C.muted, maxWidth: 540 }}>
            A diferença entre preencher um formulário no INPI e construir uma estratégia de proteção
            de marca — é essa diferença que define o resultado.
          </p>
        </div>

        <div className="rev" style={{ border: `1px solid ${C.lineL}`, borderRadius: 14, overflow: 'hidden', background: '#fff' }}>
          {/* Cabeçalho */}
          <div className="compare-row" style={{ background: C.ink }}>
            {['O que está incluído', 'Despachante comum', 'Patrimônia'].map((h, i) => (
              <div
                key={h}
                style={{
                  fontFamily:    'monospace',
                  fontSize:      '.68rem',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color:         i === 2 ? C.goldL : 'rgba(255,255,255,.6)',
                  fontWeight:    700,
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {/* Linhas */}
          {ROWS.map(([feature, common, us]) => (
            <div key={feature} className="compare-row" style={{ borderTop: `1px solid ${C.lineL}` }}>
              <div style={{ fontWeight: 600, fontSize: '.88rem', color: C.ink }}>{feature}</div>
              <div style={{ fontSize: '.88rem', color: C.muted, display: 'flex', alignItems: 'center', gap: 7 }}>
                <X size={13} color="#B5485A" style={{ flexShrink: 0 }} />{common}
              </div>
              <div className="cmp-us" style={{ fontSize: '.88rem', fontWeight: 600, color: C.gold, display: 'flex', alignItems: 'center', gap: 7 }}>
                <Check size={13} color={C.ok} style={{ flexShrink: 0 }} />{us}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
