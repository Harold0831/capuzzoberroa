import { ExternalLink } from 'lucide-react'

export default function SiteLink() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: '24px',
        padding: '40px',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'rgba(159, 135, 91, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ExternalLink size={36} color="#9F875B" />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#EBE7DE',
            margin: '0 0 8px 0',
          }}
        >
          Visitar sitio web
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#C5C0AD',
            margin: '0 0 24px 0',
            maxWidth: '300px',
            lineHeight: 1.5,
          }}
        >
          Abre la página principal del sitio en una nueva pestaña para ver cómo se ve en vivo.
        </p>
      </div>

      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 28px',
          background: '#9F875B',
          color: '#2B382E',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#b89b6d')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#9F875B')}
      >
        <ExternalLink size={16} />
        Abrir sitio web
      </a>
    </div>
  )
}
