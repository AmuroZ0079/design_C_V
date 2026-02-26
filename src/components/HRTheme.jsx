import { cv } from '../data/cv'

const navy = '#1e3a5f'
const navyLight = '#2563eb'
const textDark = '#1a1a2e'
const textMid = '#374151'
const textLight = '#6b7280'
const divider = '#e5e7eb'

const skillLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps & CI/CD',
  automate: 'Automation',
  testing: 'Testing & Monitoring',
}

export default function HRTheme() {
  return (
    <div
      style={{
        background: '#fff',
        color: textDark,
        fontFamily: "system-ui, 'Segoe UI', Arial, sans-serif",
        minHeight: '100vh',
        paddingTop: 64,
      }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 32px' }}>

        {/* ── HEADER ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 16,
            paddingBottom: 20,
            borderBottom: `3px solid ${navy}`,
            marginBottom: 24,
          }}
        >
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: navy, letterSpacing: '-0.02em', margin: 0 }}>
              {cv.name.toUpperCase()}
            </h1>
            <p style={{ fontSize: '1.1rem', color: navyLight, fontWeight: 500, margin: '4px 0 0' }}>
              {cv.title}
            </p>
            <p style={{ color: textLight, fontSize: '0.85rem', margin: '4px 0 0' }}>
              📍 {cv.location}
            </p>
          </div>

          <div style={{ textAlign: 'right', fontSize: '0.88rem', color: textMid, lineHeight: 1.9 }}>
            <div>📞 {cv.contact.phone}</div>
            <div>
              📧{' '}
              <a href={`mailto:${cv.contact.email}`} style={{ color: navyLight, textDecoration: 'none' }}>
                {cv.contact.email}
              </a>
            </div>
            <div>
              ⌨{' '}
              <a href={`https://${cv.contact.github}`} target="_blank" rel="noreferrer" style={{ color: navyLight, textDecoration: 'none' }}>
                {cv.contact.github}
              </a>
            </div>
          </div>
        </div>

        {/* ── PROFILE ── */}
        <Section title="PROFILE">
          <p style={{ color: textMid, lineHeight: 1.8, fontSize: '0.95rem' }}>
            {cv.about}
          </p>
        </Section>

        {/* ── BODY: 2 columns ── */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', marginTop: 28 }}>

          {/* LEFT — Experience (65%) */}
          <div style={{ flex: '0 0 62%' }}>
            <SectionTitle>PROFESSIONAL EXPERIENCE</SectionTitle>

            {cv.experience.map((job, i) => (
              <div key={i} style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: textDark }}>{job.company}</span>
                  <span style={{ fontSize: '0.82rem', color: textLight, fontStyle: 'italic' }}>{job.period}</span>
                </div>
                <p style={{ color: navyLight, fontSize: '0.88rem', fontStyle: 'italic', margin: '2px 0 8px' }}>
                  {job.role}
                </p>
                <ul style={{ margin: 0, paddingLeft: 20, color: textMid, fontSize: '0.88rem', lineHeight: 1.75 }}>
                  {job.description.map((item, j) => (
                    <li key={j} style={{ marginBottom: 3 }}>{item}</li>
                  ))}
                </ul>
                {i < cv.experience.length - 1 && (
                  <div style={{ borderBottom: `1px solid ${divider}`, marginTop: 20 }} />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT — Skills + Education (35%) */}
          <div style={{ flex: '1 1 0' }}>

            <SectionTitle>KEY SKILLS</SectionTitle>
            <div style={{ marginBottom: 28 }}>
              {Object.entries(cv.skills).map(([key, items]) => (
                <div key={key} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    color: navy,
                    fontWeight: 600,
                    minWidth: 80,
                    paddingTop: 3,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}>
                    {skillLabels[key] || key}
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {items.map(skill => (
                      <span key={skill} style={{
                        background: '#eff6ff',
                        color: navyLight,
                        border: `1px solid #bfdbfe`,
                        borderRadius: 4,
                        padding: '2px 8px',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <SectionTitle>EDUCATION</SectionTitle>
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontWeight: 700, color: textDark, margin: 0 }}>{cv.education.institution}</p>
              <p style={{ color: textMid, fontSize: '0.88rem', margin: '2px 0' }}>{cv.education.degree}</p>
              <p style={{ color: textLight, fontSize: '0.82rem', margin: 0 }}>{cv.education.period}</p>
            </div>

            <SectionTitle>LANGUAGES</SectionTitle>
            <div>
              {cv.languages.map(l => (
                <div key={l.lang} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: 4 }}>
                  <span style={{ color: textMid }}>{l.lang}</span>
                  <span style={{ color: textLight, fontStyle: 'italic' }}>{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: `1px solid ${divider}`, marginTop: 40, paddingTop: 16, textAlign: 'center' }}>
          <p style={{ color: textLight, fontSize: '0.78rem' }}>
            Built with React + Vite · Deployed on Vercel
          </p>
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: '0.78rem',
      fontWeight: 700,
      color: navy,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      borderBottom: `2px solid ${navy}`,
      paddingBottom: 5,
      marginBottom: 14,
      marginTop: 0,
    }}>
      {children}
    </h2>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  )
}
