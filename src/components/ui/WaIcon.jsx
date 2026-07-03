/** Ícone do WhatsApp em SVG (lucide-react não inclui). */
export default function WaIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <path
        d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 8.4c.2-.6.5-.6.9-.6h.6c.2 0 .4.1.5.4l.6 1.6c.1.3 0 .5-.1.6l-.6.6c-.1.1-.1.3 0 .5.5 1 1.5 2 2.6 2.5.2.1.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.6c0 .4 0 .7-.6.9-1.3.4-3-.1-4.6-1.6-1.5-1.5-2-3-1.6-4.4z"
        fill="currentColor"
      />
    </svg>
  )
}
