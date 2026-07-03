import { AlertTriangle, FileText, RefreshCcw, AlertCircle, Users } from 'lucide-react'
import Eyebrow from '../ui/Eyebrow'
import { C }   from '../../constants/config'

const ITEMS = [
  { Icon: AlertTriangle, title: 'Perda da identidade',      text: 'Outra empresa registra o nome que você construiu e você é obrigado a abandoná-lo — site, redes, embalagens, tudo do zero.'  },
  { Icon: FileText,      title: 'Notificações judiciais',    text: 'Processos por uso indevido podem chegar mesmo que você tenha criado o nome primeiro — quem registra tem o direito legal.'     },
  { Icon: RefreshCcw,    title: 'Obrigação de trocar o nome',text: 'Um pedido posterior de terceiros pode forçar a troca completa de marca, domínio e materiais já investidos.'                 },
  { Icon: AlertCircle,   title: 'Prejuízo financeiro',       text: 'Anos de branding, tráfego pago e reconhecimento de marca podem ser perdidos da noite para o dia sem nenhuma compensação.'    },
  { Icon: Users,         title: 'Perda de credibilidade',    text: 'Instabilidade jurídica pesa em qualquer negociação com clientes, sócios e investidores — mesmo que o problema seja novo.'    },
]

export default function Risks() {
  return (
    <section id="riscos" style={{ background: C.ink2, padding: '84px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        <div className="rev" style={{ marginBottom: 48 }}>
          <Eyebrow dark>O risco de não registrar</Eyebrow>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.1vw,2.3rem)', color: '#fff', lineHeight: 1.2, maxWidth: 620 }}>
            Toda marca não registrada está, juridicamente, disponível para qualquer concorrente.
          </h2>
          <p style={{ marginTop: 14, fontSize: '1rem', lineHeight: 1.62, color: C.muted2, maxWidth: 580 }}>
            Enquanto não há certificado de registro, sua marca não é, de fato, sua — é apenas um nome
            que qualquer empresa pode reivindicar antes de você.
          </p>
        </div>

        <div
          className="rev"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
            gap:                 1,
            background:          C.lineD,
            border:              `1px solid ${C.lineD}`,
            borderRadius:        14,
            overflow:            'hidden',
          }}
        >
          {ITEMS.map(({ Icon, title, text }) => (
            <div
              key={title}
              style={{ background: C.ink2, padding: '26px 22px', transition: 'background .2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = C.ink3)}
              onMouseLeave={e => (e.currentTarget.style.background = C.ink2)}
            >
              <div style={{ width: 40, height: 40, background: 'rgba(110,36,48,.18)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={20} color="#E78B96" />
              </div>
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: 9, lineHeight: 1.35 }}>{title}</h4>
              <p style={{ fontSize: '.86rem', lineHeight: 1.55, color: C.muted2 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
