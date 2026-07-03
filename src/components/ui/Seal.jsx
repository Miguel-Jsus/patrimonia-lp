/**
 * Seal SVG — selo institucional da Patrimônia.
 * Usado no logo, no cartão de certificado e no rodapé.
 */
export default function Seal({ size = 36, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      style={{ color, display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
      <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M100 56L132 70V100C132 126 118 140 100 148C82 140 68 126 68 100V70Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M85 100l10 12 20-27"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
