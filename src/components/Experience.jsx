import { cv } from '../data/cv'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div className="terminal-window">
          <div className="terminal-titlebar">
            <span className="dot" style={{ background: '#ff5f57' }} />
            <span className="dot" style={{ background: '#febc2e' }} />
            <span className="dot" style={{ background: '#28c840' }} />
            <span style={{ color: '#8b949e', fontSize: 13, marginLeft: 8 }}>
              experience.log
            </span>
          </div>

          <div style={{ padding: '28px 32px' }}>
            <p style={{ color: '#8b949e', marginBottom: 24 }}>
              <span style={{ color: '#3fb950' }}>visitor@portfolio</span>
              <span style={{ color: '#c9d1d9' }}>:</span>
              <span style={{ color: '#58a6ff' }}>~</span>
              <span style={{ color: '#c9d1d9' }}>$</span>
              {' '}experience --all --verbose
            </p>

            {cv.experience.map((job, i) => (
              <div key={i} className="timeline-item">
                <div style={{ marginBottom: 6 }}>
                  <span style={{ color: '#f0f6fc', fontWeight: 700, fontSize: '1rem' }}>
                    {job.company}
                  </span>
                  <span style={{ color: '#8b949e', fontSize: 13, marginLeft: 12 }}>
                    [{job.period}]
                  </span>
                </div>

                <p style={{ color: '#58a6ff', fontSize: '0.9rem', marginBottom: 8 }}>
                  <span style={{ color: '#8b949e' }}>role: </span>
                  {job.role}
                </p>

                <ul style={{ color: '#c9d1d9', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 10, paddingLeft: 0, listStyle: 'none' }}>
                  {job.description.map((item, j) => (
                    <li key={j} style={{ marginBottom: 4 }}>
                      <span style={{ color: '#8b949e' }}>› </span>{item}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
                  {job.stack.map(tech => (
                    <span
                      key={tech}
                      style={{
                        fontSize: 12,
                        color: '#3fb950',
                        border: '1px solid #3fb950',
                        borderRadius: 4,
                        padding: '2px 8px',
                        margin: '2px',
                        opacity: 0.8,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <p style={{ color: '#3fb950', fontSize: 13, marginTop: 4 }}>
              ✓ {cv.experience.length} positions found
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
