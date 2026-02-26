import { useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import HRTheme from './components/HRTheme'
import { cv } from './data/cv'

const devNavLinks = [
  { href: '#home', label: 'home' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

function Navbar({ theme, onToggle }) {
  const isDev = theme === 'dev'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: isDev ? 'rgba(13,17,23,0.9)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: isDev ? '1px solid #21262d' : '1px solid #e5e7eb',
        padding: '12px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <span style={{
        color: isDev ? '#3fb950' : '#1e3a5f',
        fontWeight: 700,
        fontSize: '0.95rem',
        fontFamily: isDev ? 'monospace' : "system-ui, 'Segoe UI', sans-serif",
      }}>
        {isDev ? `~/${cv.name.toLowerCase().replace(/\s+/g, '-')}` : cv.name}
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {isDev && devNavLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{ color: '#8b949e', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#58a6ff' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#8b949e' }}
          >
            {link.label}
          </a>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={onToggle}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: isDev ? '#21262d' : '#eff6ff',
            border: isDev ? '1px solid #30363d' : '1px solid #bfdbfe',
            color: isDev ? '#c9d1d9' : '#1e3a5f',
            borderRadius: 20,
            padding: '5px 14px',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = isDev ? '#30363d' : '#dbeafe'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = isDev ? '#21262d' : '#eff6ff'
          }}
          title={isDev ? 'Switch to HR-friendly view' : 'Switch to Developer view'}
        >
          {isDev ? '📄 HR View' : '⌨ Dev View'}
        </button>
      </div>
    </nav>
  )
}

function DevLayout() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

export default function App() {
  const [theme, setTheme] = useState('dev')

  return (
    <>
      <Navbar theme={theme} onToggle={() => setTheme(t => t === 'dev' ? 'hr' : 'dev')} />
      {theme === 'dev' ? <DevLayout /> : <HRTheme />}
    </>
  )
}
