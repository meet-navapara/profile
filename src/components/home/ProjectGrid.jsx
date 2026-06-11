import { useMemo, useState } from 'react'
import { portfolioCategories, projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({ limit }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const showFilters = typeof limit !== 'number'

  const filteredProjects = useMemo(() => {
    const list =
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter)

    return typeof limit === 'number' ? list.slice(0, limit) : list
  }, [activeFilter, limit])

  return (
    <section className={`portfolio-section ${showFilters ? 'portfolio-section--centered' : ''}`}>
      <div className="container">
        {showFilters && (
          <div className="portfolio-section__header">
            <h2>Our Portfolio</h2>
            <p>
              Explore our collection of successful IT projects that showcase our
              expertise in software development, cloud solutions, enterprise
              systems, and IT infrastructure.
            </p>
          </div>
        )}

        {showFilters && (
          <div className="filter-bar" role="tablist" aria-label="Filter projects">
            {portfolioCategories.map((filter) => (
              <button
                key={filter}
                aria-selected={activeFilter === filter}
                className={`filter-bar__btn ${
                  activeFilter === filter ? 'filter-bar__btn--active' : ''
                }`}
                role="tab"
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
