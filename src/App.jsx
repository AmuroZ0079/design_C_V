import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { cv } from './data/cv'

const navLinks = [
  { href: '#home', label: 'home' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(13,17,23,0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #21262d',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span style={{ color: '#3fb950', fontWeight: 700, fontSize: '0.95rem' }}>
        ~/{cv.name.toLowerCase().replace(/\s+/g, '-')}
      </span>

      <div style={{ display: 'flex', gap: 28 }}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: '#8b949e',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#58a6ff' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#8b949e' }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
