import WaIcon                 from '../ui/WaIcon'
import { buildWa, WA_MSG, trackEvent } from '../../constants/config'

/** Botão flutuante do WhatsApp com anel pulsante de atenção. */
export default function WaFloat() {
  return (
    <a
      href={buildWa(WA_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      className="ring"
      aria-label="Falar no WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { location: 'float' })}
      style={{
        position:     'fixed',
        bottom:       22,
        right:        22,
        zIndex:       200,
        width:        56,
        height:       56,
        borderRadius: '50%',
        background:   '#25D366',
        color:        '#fff',
        display:      'flex',
        alignItems:   'center',
        justifyContent: 'center',
        boxShadow:    '0 12px 28px -8px rgba(37,211,102,.6)',
      }}
    >
      <WaIcon size={27} />
    </a>
  )
}
