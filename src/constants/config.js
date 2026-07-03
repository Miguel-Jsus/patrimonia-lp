// ── Brand color tokens ─────────────────────────────────────────────────────
export const C = {
  ink:    '#010C28',
  ink2:   '#040E30',
  ink3:   '#071540',
  blue:   '#1746EA',
  blueL:  '#4169ED',
  gold:   '#1746EA',
  goldL:  '#4169ED',
  paper:  '#FFFFFF',
  paper2: '#F0F4FF',
  muted:  '#5B6472',
  muted2: '#8B93A1',
  ok:     '#1746EA',
  lineD:  'rgba(255,255,255,.10)',
  lineL:  'rgba(1,12,40,.10)',
}

export const WA_NUM = '5516981244833'
export const WA_MSG = 'Olá! Gostaria de solicitar a análise gratuita da minha marca.'
export const buildWa = (msg = WA_MSG) =>
  `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`

// ── Analytics helper ───────────────────────────────────────────────────────
export function trackEvent(eventName, params = {}) {
  try {
    if (window.dataLayer) window.dataLayer.push({ event: eventName, ...params })
    if (typeof window.gtag === 'function') window.gtag('event', eventName, params)
  } catch (_) {}
}
