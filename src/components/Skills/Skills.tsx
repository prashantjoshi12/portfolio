import { useState, useEffect } from 'react'
import MarkdownRenderer from '../MarkdownRenderer'
import { loadMarkdown } from '@/utils/markdownLoader'
import './Skills.css'

const Skills: React.FC = () => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    loadMarkdown('/content/skills.md')
      .then(setContent)
      .catch(() => {
        setContent(`# Skills

## Frontend Development

- **React** - Building component-based user interfaces
- **JavaScript/TypeScript** - Modern ES6+ and type-safe development
- **HTML/CSS** - Semantic markup and responsive design
- **Vue.js** - Progressive framework for building UIs
- **Next.js** - React framework for production

## Backend Development

- **Node.js** - Server-side JavaScript runtime
- **Express** - Web application framework
- **Python** - General-purpose programming
- **RESTful APIs** - Designing and implementing APIs
- **GraphQL** - Query language for APIs

## Tools & Technologies

- **Git** - Version control
- **Docker** - Containerization
- **AWS** - Cloud services
- **MongoDB** - NoSQL database
- **PostgreSQL** - Relational database
- **Webpack/Vite** - Build tools

## Design & UX

- **Figma** - UI/UX design
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliance`)
      })
  }, [])

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>
        <div className="skills-content">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </section>
  )
}

export default Skills

