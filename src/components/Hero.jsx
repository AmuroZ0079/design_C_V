import { cv } from '../data/cv'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 40px',
      }}
    >
      <div style={{ maxWidth: 720, width: '100%' }}>
        {/* Profile Photo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <div style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid #3fb950',
            boxShadow: '0 0 20px rgba(63,185,80,0.3)',
          }}>
            <img
              src="/profile.jpg"
              alt={cv.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-titlebar">
            <span className="dot" style={{ background: '#ff5f57' }} />
            <span className="dot" style={{ background: '#febc2e' }} />
            <span className="dot" style={{ background: '#28c840' }} />
            <span style={{ color: '#8b949e', fontSize: 13, marginLeft: 8 }}>
              ~/portfolio — zsh
            </span>
          </div>

          <div style={{ padding: '28px 32px' }}>
            <p style={{ color: '#8b949e', marginBottom: 8 }}>
              <span style={{ color: '#3fb950' }}>visitor@portfolio</span>
              <span style={{ color: '#c9d1d9' }}>:</span>
              <span style={{ color: '#58a6ff' }}>~</span>
              <span style={{ color: '#c9d1d9' }}>$</span>
              {' '}whoami
            </p>

            <div style={{ marginBottom: 28, paddingLeft: 16 }}>
              <h1
                style={{
                  fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                  color: '#f0f6fc',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: 4,
                }}
              >
                {cv.name}
              </h1>
              <p style={{ color: '#58a6ff', fontSize: '1.1rem', marginBottom: 8 }}>
                {cv.title}
              </p>
              <p style={{ color: '#8b949e', fontSize: '0.95rem' }}>
                📍 {cv.location}
              </p>
            </div>

            <p style={{ color: '#8b949e', marginBottom: 8 }}>
              <span style={{ color: '#3fb950' }}>visitor@portfolio</span>
              <span style={{ color: '#c9d1d9' }}>:</span>
              <span style={{ color: '#58a6ff' }}>~</span>
              <span style={{ color: '#c9d1d9' }}>$</span>
              {' '}cat about.txt
            </p>

            <div style={{ paddingLeft: 16, marginBottom: 28 }}>
              <p style={{ color: '#c9d1d9', lineHeight: 1.8, maxWidth: 600 }}>
                {cv.about}
              </p>
            </div>

            <p style={{ color: '#8b949e' }}>
              <span style={{ color: '#3fb950' }}>visitor@portfolio</span>
              <span style={{ color: '#c9d1d9' }}>:</span>
              <span style={{ color: '#58a6ff' }}>~</span>
              <span style={{ color: '#c9d1d9' }}>$</span>
              {' '}
              <span className="blink" style={{ color: '#c9d1d9' }}>█</span>
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 24,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={`mailto:${cv.contact.email}`}
            style={{
              color: '#3fb950',
              textDecoration: 'none',
              fontSize: 14,
              border: '1px solid #30363d',
              padding: '8px 18px',
              borderRadius: 6,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#3fb950'
              e.currentTarget.style.background = 'rgba(63,185,80,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#30363d'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            📧 {cv.contact.email}
          </a>
          <a
            href={`https://${cv.contact.github}`}
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#58a6ff',
              textDecoration: 'none',
              fontSize: 14,
              border: '1px solid #30363d',
              padding: '8px 18px',
              borderRadius: 6,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#58a6ff'
              e.currentTarget.style.background = 'rgba(88,166,255,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#30363d'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            ⌨ {cv.contact.github}
          </a>
        </div>
      </div>
    </section>
  )
}
