import { useState, useEffect } from 'react'
import { C }                   from '../../constants/config'

const NAV_LINKS = [
  ['#vantagens',   'Vantagens'],
  ['#processo',    'Processo'],
  ['#diferenciais','Diferenciais'],
  ['#autoridade',  'Autoridade'],
  ['#faq',         'Dúvidas'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        zIndex:         100,
        padding:        '15px 0',
        transition:     'all .3s ease',
        background:     scrolled ? 'rgba(14,23,38,.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)'          : 'none',
        boxShadow:      scrolled ? `0 1px 0 ${C.lineD}`  : 'none',
      }}
    >
      <div
        style={{
          maxWidth:       1160,
          margin:         '0 auto',
          padding:        '0 24px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          gap:            16,
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/imgs/icone.png" alt="" aria-hidden="true" style={{ height: 36, width: 'auto' }} />
          <div>
            <div className="fd" style={{ fontWeight: 700, fontSize: '1.12rem', color: '#fff', letterSpacing: '.01em' }}>
              patrimônia
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '.47rem', letterSpacing: '.14em', color: C.blue, textTransform: 'uppercase' }}>
              Proteção de Negócios
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {NAV_LINKS.map(([href, label]) => (
            <a key={href} href={href} className="nav-a">{label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contato" className="btn-g" style={{ padding: '10px 20px', fontSize: '.85rem' }}>
          Análise Gratuita
        </a>
      </div>
    </header>
  )
}
