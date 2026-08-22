import { useEffect, useRef, useState } from 'react'
import { formatYearsOfExperience } from '@/utils/experience'
import './Hero.css'

const ROLES = [
  'Backend Developer',
  'API Architect',
  'NestJS Engineer',
  'System Designer',
  'Full Stack Dev',
]

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [bootText, setBootText] = useState<string[]>([])

  // Matrix rain
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]|/\\'
    const fontSize = 14
    const cols = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(cols).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px JetBrains Mono, monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Lead char brighter
        if (drops[i] * fontSize < canvas.height * 0.2) {
          ctx.fillStyle = '#ffffff'
        } else if (Math.random() > 0.95) {
          ctx.fillStyle = '#00ff41'
          ctx.shadowColor = '#00ff41'
          ctx.shadowBlur = 8
        } else {
          ctx.fillStyle = `rgba(0, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 40)}, ${Math.random() * 0.5 + 0.3})`
          ctx.shadowBlur = 0
        }

        ctx.fillText(char, x, y)
        ctx.shadowBlur = 0

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Boot sequence text
  useEffect(() => {
    const lines = [
      '> Initializing system...',
      '> Loading kernel modules... [OK]',
      '> Mounting filesystems... [OK]',
      '> Starting network services... [OK]',
      '> Authentication bypass... [SUCCESS]',
      '> Welcome, Prashant Joshi',
    ]
    let cancelled = false
    let timerId: ReturnType<typeof setTimeout>

    const addLine = (index: number) => {
      if (cancelled) return
      if (index < lines.length) {
        setBootText(lines.slice(0, index + 1))
        timerId = setTimeout(() => addLine(index + 1), 280 + Math.random() * 120)
      } else {
        setIsVisible(true)
      }
    }

    timerId = setTimeout(() => addLine(0), 150)
    return () => {
      cancelled = true
      clearTimeout(timerId)
    }
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % ROLES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedRole, isDeleting, roleIndex])

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="matrix-canvas" />

      <div className="hero-overlay" />

      <div className="hero-content container">
        <div className="hero-terminal">
          <div className="terminal-bar">
            <span className="terminal-dot dot-red" />
            <span className="terminal-dot dot-yellow" />
            <span className="terminal-dot dot-green" />
            <span className="terminal-title">bash — prashant@dev:~</span>
          </div>

          <div className="terminal-body">
            <div className="boot-log">
              {bootText.map((line, i) => (
                <div key={i} className={`boot-line ${line.includes('SUCCESS') ? 'success' : line.includes('OK') ? 'ok' : ''}`}>
                  {line}
                </div>
              ))}
            </div>

            {isVisible && (
              <div className="hero-main">
                <p className="hero-greeting">
                  <span className="prompt">prashant@dev:~$</span> whoami
                </p>
                <h1 className="hero-name glitch" data-text="Prashant Joshi">
                  Prashant Joshi
                </h1>

                <p className="hero-greeting" style={{ marginTop: '1rem' }}>
                  <span className="prompt">prashant@dev:~$</span> cat role.txt
                </p>
                <h2 className="hero-title">
                  <span className="role-text">{displayedRole}</span>
                  <span className="cursor-blink">▋</span>
                </h2>

                <p className="hero-greeting" style={{ marginTop: '1rem' }}>
                  <span className="prompt">prashant@dev:~$</span> cat bio.txt
                </p>
                <p className="hero-description">
                  Building scalable APIs &amp; robust backend systems with NestJS, Node.js, and PostgreSQL.
                  Specialized in travel technology platforms and microservices architecture.
                </p>

                <div className="hero-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={() => scrollToSection('projects')}
                  >
                    ./view_projects.sh
                  </button>
                  <button
                    className="btn btn-outline"
                    onClick={() => scrollToSection('contact')}
                  >
                    ./contact_me.sh
                  </button>
                </div>

                <div className="hero-social">
                  <a
                    href="https://linkedin.com/in/prashantjoshi2077"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>linkedin</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title="GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>github</span>
                  </a>
                  <a
                    href="mailto:prashantjoshi2077@gmail.com"
                    className="social-link"
                    title="Email"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>email</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-label">// uptime</span>
            <span className="stat-value">{formatYearsOfExperience()}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">// projects</span>
            <span className="stat-value">10+</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">// status</span>
            <span className="stat-value online">online</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">// location</span>
            <span className="stat-value">Ahmedabad, IN</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-text">scroll_down</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

export default Hero
