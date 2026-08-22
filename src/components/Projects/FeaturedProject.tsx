import './Projects.css'

const FEATURED_PROJECT = {
  name: 'KratoLib',
  tagline: 'Music Distribution Platform',
  url: 'https://kratolib.com',
  description:
    'A music distribution SaaS for independent Indian artists to release music on 150+ streaming platforms — Spotify, Apple Music, YouTube Music, JioSaavn, Gaana, and more — while keeping 100% of their earnings.',
  highlights: ['150+ Platforms', '100% Earnings', 'From ₹999/year', 'AI-Powered Tools'],
  features: [
    'Real-time royalty tracking with transparent reporting',
    'AI Cover Art Generator & AI Music Mastering',
    'Telecom CRBT distribution for extra revenue',
    'Artist analytics with geographic & platform insights',
  ],
}

const FeaturedProject: React.FC = () => {
  const { name, tagline, url, description, highlights, features } = FEATURED_PROJECT

  return (
    <article className="featured-project">
      <div className="featured-project-glow" aria-hidden="true" />

      <div className="featured-project-header">
        <span className="featured-badge">★ My Product</span>
        <h3 className="featured-project-title">
          {name}
          <span className="featured-project-tagline">{tagline}</span>
        </h3>
      </div>

      <p className="featured-project-description">{description}</p>

      <div className="featured-highlights">
        {highlights.map((item) => (
          <span key={item} className="featured-highlight">
            {item}
          </span>
        ))}
      </div>

      <ul className="featured-features">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="featured-cta"
      >
        Visit KratoLib →
      </a>
    </article>
  )
}

export default FeaturedProject
