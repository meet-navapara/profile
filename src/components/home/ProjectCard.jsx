import { useState } from 'react'
import { Link } from 'react-router-dom'
import FigmaCanvasShowcase from '../project/figma/FigmaCanvasShowcase'
import ImageLightbox from '../project/ImageLightbox'
import ProjectScreenImage from '../project/ProjectScreenImage'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.7725 29.5059L29.9718 16.3066M29.9718 16.3066H16.7725M29.9718 16.3066V29.5059"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export default function ProjectCard({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const previewImage =
    project.thumbnail ??
    project.uiScreens?.[0]?.image ??
    project.screens?.[0]?.image

  const galleryImages = (() => {
    const screens = project.uiScreens ?? project.screens ?? []
    if (screens.length) return screens
    if (previewImage) return [{ label: project.title, image: previewImage }]
    return []
  })()

  return (
    <article className={`project-card ${project.interactive ? 'project-card--interactive' : ''} ${project.dynamicUi ? 'project-card--dynamic' : ''}`}>
      <div
        className="project-card__media"
        style={{ backgroundColor: project.color }}
      >
        {project.dynamicUi ? (
          <Link aria-label={`View ${project.title} design`} className="project-card__dynamic-link" to={`/work/${project.id}`}>
            {project.cardLabel && (
              <span className="project-card__dynamic-badge">{project.cardLabel}</span>
            )}
            <FigmaCanvasShowcase
              key={project.figmaVariant ?? 'flowkit'}
              autoPlay
              compact
              variant={project.figmaVariant ?? 'flowkit'}
            />
          </Link>
        ) : previewImage ? (
          <button
            aria-label={`Preview ${project.title} screens`}
            className="project-card__preview-btn"
            type="button"
            onClick={() => setLightboxIndex(0)}
          >
            <ProjectScreenImage image={previewImage} label={project.title} />
            <span className="project-card__preview-overlay">
              <span className="project-card__preview-label">View screens</span>
            </span>
          </button>
        ) : (
          <div className="web-preview">
            <div className="web-preview__bar">
              <span /><span /><span />
            </div>
            <div className="web-preview__body">
              <strong>{project.title}</strong>
              <p>{project.tags[0]}</p>
            </div>
          </div>
        )}
      </div>

      <Link className="project-card__link" to={`/work/${project.id}`}>
        <div className="project-card__body">
          {project.year && <p className="project-card__year">{project.year}</p>}

          <ul className="project-card__tags">
            {project.tags.map((tag) => (
              <li className="project-card__tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>

          <div className="project-card__footer">
            <div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__result">{project.result}</p>
            </div>
            <span className="project-card__arrow">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </Link>

      {lightboxIndex !== null && (
        <ImageLightbox
          activeIndex={lightboxIndex}
          images={galleryImages}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </article>
  )
}
