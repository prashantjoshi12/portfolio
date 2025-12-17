export interface MarkdownContent {
  content: string
}

export interface SectionProps {
  id: string
  title: string
}

export interface Project {
  title: string
  technologies: string[]
  description: string
  features: string[]
  links?: {
    github?: string
    demo?: string
  }
}

export interface Experience {
  title: string
  company: string
  period: string
  achievements: string[]
  technologies: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export interface ContactInfo {
  email: string
  linkedin?: string
  github?: string
  twitter?: string
  website?: string
}

