import { ShieldCheck, TrendingUp, Award, Globe, Banknote, Infinity } from 'lucide-react'
import Eyebrow  from '../ui/Eyebrow'
import TiltCard from '../ui/TiltCard'
import { C }    from '../../constants/config'

const ITEMS = [
  { Icon: ShieldCheck, title: 'Exclusividade nacional',      text: 'Uso exclusivo da sua marca em todo o território brasileiro dentro do seu ramo de atividade, respaldado por lei.' },
  { Icon: TrendingUp,  title: 'Valorização do negócio',      text: 'Marca registrada é ativo intangível mensurável — aumenta o valuation e fortalece negociações com investidores.' },
  { Icon: Award,       title: 'Credibilidade institucional', text: 'Empresas com marca registrada transmitem mais confiança para clientes, parceiros e fornecedores.' },
  { Icon: Globe,       title: 'Base para expansão',          text: 'Com o registro nacional consolidado, a expansão para franquias e mercados internacionais fica estruturada.' },
  { Icon: Banknote,    title: 'Licenciamento e royalties',   text: 'Só marcas registradas podem ser licenciadas e gerar receita passiva por meio de royalties.' },
  { Icon: Infinity,    title: 'Proteção perpétua',           text: 'Renovável a cada 10 anos por tempo indeterminado — um patrimônio que acompanha a empresa para sempre.' },
]

export default function Vantagens() {
  return (
    <section id="vantagens" style={{ background: C.ink2, padding: '84px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        <div className="rev" style={{ marginBottom: 48 }}>
          <Eyebrow dark>Vantagens do registro</Eyebrow>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.1vw,2.3rem)', color: '#fff', lineHeight: 1.2, maxWidth: 560 }}>
            O que muda quando sua marca deixa de ser só um nome e vira um patrimônio.
          </h2>
          <p style={{ marginTop: 14, fontSize: '1rem', lineHeight: 1.62, color: C.muted2, maxWidth: 520 }}>
            Registrar no INPI não é burocracia — é a decisão que separa empresas vulneráveis de empresas protegidas.
          </p>
        </div>

        <div
          className="rev"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap:                 18,
          }}
        >
          {ITEMS.map(({ Icon, title, text }) => (
            <TiltCard
              key={title}
              style={{
                background:   C.ink3,
                border:       `1px solid ${C.lineD}`,
                borderRadius: 14,
                padding:      '26px 22px',
              }}
            >
              <div style={{
                width: 44, height: 44,
                background: 'rgba(23,70,234,.15)',
                borderRadius: 11,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 18,
              }}>
                <Icon size={20} color={C.blue} />
              </div>
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: 9, lineHeight: 1.35 }}>{title}</h4>
              <p style={{ fontSize: '.86rem', lineHeight: 1.55, color: C.muted2 }}>{text}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
