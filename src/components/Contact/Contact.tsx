import { useState, useEffect } from 'react'
import MarkdownRenderer from '../MarkdownRenderer'
import { loadMarkdown } from '@/utils/markdownLoader'
import './Contact.css'

const Contact: React.FC = () => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    loadMarkdown('/content/contact.md')
      .then(setContent)
      .catch(() => {
        setContent(`# Get In Touch

I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.

## Contact Information

- **Email:** your.email@example.com
- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com)
- **GitHub:** [github.com/yourusername](https://github.com)
- **Twitter:** [@yourhandle](https://twitter.com)

## Let's Work Together

Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out!

I typically respond within 24-48 hours.`)
      })
  }, [])

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss your next project or just have a chat
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

