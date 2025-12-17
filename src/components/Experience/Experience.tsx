import { useState, useEffect } from 'react'
import MarkdownRenderer from '../MarkdownRenderer'
import { loadMarkdown } from '@/utils/markdownLoader'
import './Experience.css'

const Experience: React.FC = () => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    loadMarkdown('/content/experience.md')
      .then(setContent)
      .catch(() => {
        setContent(`# Experience

## Senior Developer | Company Name | 2021 - Present

- Led development of multiple web applications using React and Node.js
- Collaborated with cross-functional teams to deliver high-quality products
- Mentored junior developers and conducted code reviews

## Software Engineer | Previous Company | 2019 - 2021

- Developed and maintained frontend applications
- Implemented responsive designs and optimized performance
- Worked with RESTful APIs and GraphQL

## Junior Developer | First Company | 2017 - 2019

- Built user interfaces using HTML, CSS, and JavaScript
- Learned modern frameworks and best practices
- Contributed to team projects and codebase improvements`)
      })
  }, [])

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey and the companies I've worked with
        </p>
        <div className="experience-content">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </section>
  )
}

export default Experience

