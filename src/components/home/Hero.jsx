import { Link } from 'react-router-dom'
import { companyInfo } from '../../data/projects'
import HeroBackground from './HeroBackground'

export default function Hero({ compact = false }) {
  const badge = compact ? 'Portfolio' : companyInfo.hero.badge
  const title = compact
    ? `Enterprises that transform with ${companyInfo.name}`
    : companyInfo.hero.title
  const subtitle = compact ? companyInfo.description : companyInfo.hero.description
  const stats = compact ? companyInfo.stats : companyInfo.hero.stats

  return (
    <section className={`hero ${compact ? 'hero--compact' : 'hero--home'}`}>
      <HeroBackground />

      <div className="container hero__inner">
        <p className="hero__eyebrow">{badge}</p>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>

        {!compact && (
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/portfolio">
              View all projects
            </Link>
          </div>
        )}

        <div className="hero__stats">
          {stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
