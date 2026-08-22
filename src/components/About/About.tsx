import { useState, useEffect } from 'react'
import MarkdownRenderer from '../MarkdownRenderer'
import { loadMarkdown } from '@/utils/markdownLoader'
import './About.css'

const About: React.FC = () => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    loadMarkdown('/content/about.md')
      .then(setContent)
      .catch(() => {
        // Fallback content if markdown file doesn't exist
        setContent(`Welcome to my portfolio! I'm a passionate developer who loves creating amazing web experiences.

## My Journey

I've been working in the tech industry for several years, focusing on building scalable and user-friendly applications.

## What I Do

- **Web Development**: Creating responsive and modern web applications
- **Problem Solving**: Tackling complex challenges with creative solutions
- **Continuous Learning**: Always exploring new technologies and best practices

## Let's Connect

Feel free to reach out if you'd like to collaborate or just have a chat!`)
      })
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about my background and expertise
        </p>
        <div className="about-content">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </section>
  )
}

export default About

