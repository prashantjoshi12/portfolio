import { useState, useEffect } from 'react'
import MarkdownRenderer from '../MarkdownRenderer'
import { loadMarkdown } from '@/utils/markdownLoader'
import './Projects.css'

const Projects: React.FC = () => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    loadMarkdown('/content/projects.md')
      .then(setContent)
      .catch(() => {
        setContent(`## Project 1: E-Commerce Platform

**Technologies:** React, Node.js, MongoDB, Stripe

A full-stack e-commerce solution with user authentication, product management, and payment processing.

**Features:**
- User registration and authentication
- Product catalog with search and filters
- Shopping cart and checkout
- Payment integration
- Admin dashboard

[View on GitHub](https://github.com) | [Live Demo](https://example.com)

---

## Project 2: Task Management App

**Technologies:** React, TypeScript, Firebase

A collaborative task management application with real-time updates and team collaboration features.

**Features:**
- Real-time synchronization
- Drag-and-drop interface
- Team collaboration
- Notifications and reminders
- Mobile responsive design

[View on GitHub](https://github.com) | [Live Demo](https://example.com)

---

## Project 3: Weather Dashboard

**Technologies:** React, OpenWeatherMap API, Chart.js

An interactive weather dashboard that displays current conditions and forecasts with beautiful visualizations.

**Features:**
- Current weather conditions
- 7-day forecast
- Interactive charts
- Location-based search
- Dark mode support

[View on GitHub](https://github.com) | [Live Demo](https://example.com)`)
      })
  }, [])

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and projects I've contributed to
        </p>
        <div className="projects-content">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </section>
  )
}

export default Projects

