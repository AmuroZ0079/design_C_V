import { cv } from '../data/cv'

function SkillGroup({ label, items }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <p style={{ color: '#8b949e', fontSize: 13, marginBottom: 10 }}>
        <span style={{ color: '#58a6ff' }}># </span>{label}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
        {items.map(skill => (
          <span key={skill} className="tag">{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div className="terminal-window">
          <div className="terminal-titlebar">
            <span className="dot" style={{ background: '#ff5f57' }} />
            <span className="dot" style={{ background: '#febc2e' }} />
            <span className="dot" style={{ background: '#28c840' }} />
            <span style={{ color: '#8b949e', fontSize: 13, marginLeft: 8 }}>
              skills.sh
            </span>
          </div>

          <div style={{ padding: '28px 32px' }}>
            <p style={{ color: '#8b949e', marginBottom: 20 }}>
              <span style={{ color: '#3fb950' }}>visitor@portfolio</span>
              <span style={{ color: '#c9d1d9' }}>:</span>
              <span style={{ color: '#58a6ff' }}>~</span>
              <span style={{ color: '#c9d1d9' }}>$</span>
              {' '}skills --list --all
            </p>

            <SkillGroup label="Frontend" items={cv.skills.frontend} />
            <SkillGroup label="Backend" items={cv.skills.backend} />
            <SkillGroup label="Database" items={cv.skills.database} />
            <SkillGroup label="DevOps & CI/CD" items={cv.skills.devops} />
            <SkillGroup label="Tools & Monitoring" items={cv.skills.tools} />

            <p style={{ color: '#3fb950', fontSize: 13, marginTop: 8 }}>
              ✓ Done — {
                Object.values(cv.skills).reduce((sum, arr) => sum + arr.length, 0)
              } skills loaded
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
