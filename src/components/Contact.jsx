import { cv } from '../data/cv'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div className="terminal-window">
          <div className="terminal-titlebar">
            <span className="dot" style={{ background: '#ff5f57' }} />
            <span className="dot" style={{ background: '#febc2e' }} />
            <span className="dot" style={{ background: '#28c840' }} />
            <span style={{ color: '#8b949e', fontSize: 13, marginLeft: 8 }}>
              contact.sh
            </span>
          </div>

          <div style={{ padding: '28px 32px' }}>
            <p style={{ color: '#8b949e', marginBottom: 20 }}>
              <span style={{ color: '#3fb950' }}>visitor@portfolio</span>
              <span style={{ color: '#c9d1d9' }}>:</span>
              <span style={{ color: '#58a6ff' }}>~</span>
              <span style={{ color: '#c9d1d9' }}>$</span>
              {' '}contact --info
            </p>

            <div style={{ paddingLeft: 16, marginBottom: 24 }}>
              <ContactRow label="email" value={cv.contact.email} href={`mailto:${cv.contact.email}`} />
              <ContactRow label="github" value={cv.contact.github} href={`https://${cv.contact.github}`} />
              <ContactRow label="linkedin" value={cv.contact.linkedin} href={`https://${cv.contact.linkedin}`} />
            </div>

            <p style={{ color: '#3fb950', fontSize: 13 }}>
              ✓ Open to opportunities — feel free to reach out!
            </p>
          </div>
        </div>

        <p style={{ textAlign: 'center', color: '#30363d', fontSize: 12, marginTop: 40 }}>
          Built with React + Vite · Deployed on Vercel
        </p>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href }) {
  return (
    <div style={{ marginBottom: 12, display: 'flex', alignItems: 'baseline', gap: 8 }}>
      <span style={{ color: '#58a6ff', minWidth: 80 }}>{label}:</span>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        style={{ color: '#c9d1d9', textDecoration: 'none', transition: 'color 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.color = '#58a6ff' }}
        onMouseLeave={e => { e.currentTarget.style.color = '#c9d1d9' }}
      >
        {value}
      </a>
    </div>
  )
}
