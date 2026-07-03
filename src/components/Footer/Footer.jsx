import { C } from '../../constants/config'

const COLUMNS = [
  {
    title: 'Serviços',
    links: [
      ['#processo',    'Como funciona'    ],
      ['#diferenciais','Diferenciais'     ],
      ['#autoridade',  'Autoridade'       ],
    ],
  },
  {
    title: 'Suporte',
    links: [
      ['#faq',     'Perguntas frequentes'  ],
      ['#contato', 'Falar com especialista'],
    ],
  },
  {
    title: 'Contato',
    links: [
      ['tel:+5516981244833',                    '(16) 98124-4833'              ],
      ['mailto:patrimoniaregistro@outlook.com', 'patrimoniaregistro@outlook.com'],
      ['#',                                     'Seg–Sex, 9h às 18h'           ],
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0A0F1A', padding: '52px 0 24px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        <div
          className="foot-grid"
          style={{
            display:             'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
            gap:                 32,
            paddingBottom:       36,
            borderBottom:        `1px solid ${C.lineD}`,
          }}
        >
          {/* Marca */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
              <img src="/imgs/icone.png" alt="" aria-hidden="true" style={{ height: 30, width: 'auto' }} />
              <div className="fd" style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>patrimônia</div>
            </div>
            <p style={{ fontSize: '.85rem', lineHeight: 1.62, color: C.muted2, maxWidth: 270 }}>
              Consultoria especializada em registro e proteção estratégica de marcas no INPI,
              do diagnóstico ao certificado.
            </p>
          </div>

          {/* Colunas de links */}
          {COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <div style={{ fontFamily: 'monospace', fontSize: '.66rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 14 }}>
                {title}
              </div>
              <ul style={{ listStyle: 'none' }}>
                {links.map(([href, label]) => (
                  <li key={label} style={{ marginBottom: 9 }}>
                    <a
                      href={href}
                      style={{ fontSize: '.85rem', color: C.muted2, transition: 'color .18s' }}
                      onMouseEnter={e => (e.target.style.color = C.goldL)}
                      onMouseLeave={e => (e.target.style.color = C.muted2)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, flexWrap: 'wrap', gap: 10 }}>
          <span style={{ fontSize: '.74rem', color: C.muted2 }}>
            © {year} Patrimônia Estratégia e Propriedade. Todos os direitos reservados.
          </span>
          <span style={{ fontSize: '.7rem', color: C.muted2, opacity: .7, maxWidth: 500, textAlign: 'right' }}>
            © {year} Patrimônia. Proteção de Negócios.
          </span>
        </div>
      </div>
    </footer>
  )
}
