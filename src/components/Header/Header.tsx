import { useState, useEffect } from 'react'
import './Header.css'

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-brand">
          <span className="brand-text">Prashant Joshi</span>
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              onClick={(e) => handleNavClick(e, 'experience')}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, 'skills')}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
        <button 
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}

export default Header

