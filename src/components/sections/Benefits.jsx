import { ShieldCheck, FileText, TrendingUp, Award, Briefcase, Target } from 'lucide-react'
import Eyebrow from '../ui/Eyebrow'
import { C }   from '../../constants/config'

const ITEMS = [
  { Icon: ShieldCheck, title: 'Exclusividade de uso',    text: 'Direito exclusivo de uso da marca em todo o território nacional dentro do seu ramo de atividade.' },
  { Icon: FileText,    title: 'Segurança jurídica',      text: 'Base legal sólida para agir contra cópias, uso indevido e tentativas de registro por terceiros.'   },
  { Icon: TrendingUp,  title: 'Valorização da empresa',  text: 'Marca registrada é ativo intangível — negociável, licenciável e mensurável em valuation.'         },
  { Icon: Award,       title: 'Proteção patrimonial',    text: 'Vigência de 10 anos, renovável indefinidamente — um patrimônio que se protege a longo prazo.'      },
  { Icon: Briefcase,   title: 'Diferencial competitivo', text: 'Solidez institucional para clientes e investidores. Só marcas registradas podem franquear.'        },
  { Icon: Target,      title: 'Tranquilidade para crescer', text: 'Expanda, abra filiais e franqueie sabendo que sua marca está protegida desde a base.'           },
]

export default function Benefits() {
  return (
    <section style={{ background: C.paper, padding: '84px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        <div className="rev" style={{ marginBottom: 48 }}>
          <Eyebrow>O que o registro garante</Eyebrow>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.1vw,2.3rem)', lineHeight: 1.2, maxWidth: 520 }}>
            Registrar é transformar uma ideia em propriedade.
          </h2>
          <p style={{ marginTop: 14, fontSize: '1rem', lineHeight: 1.62, color: C.muted, maxWidth: 500 }}>
            O registro no INPI muda o status jurídico da sua marca: de um nome que você usa, para um ativo
            que você possui — com todos os direitos que isso envolve.
          </p>
        </div>

        <div className="benefits-grid rev" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {ITEMS.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="lift"
              style={{ background: '#fff', border: `1px solid ${C.lineL}`, borderRadius: 14, padding: '28px 24px' }}
            >
              <div style={{ width: 44, height: 44, background: C.paper2, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Icon size={20} color={C.gold} />
              </div>
              <h4 style={{ fontSize: '1rem', marginBottom: 9, lineHeight: 1.35 }}>{title}</h4>
              <p style={{ fontSize: '.87rem', lineHeight: 1.55, color: C.muted }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
