import { Link, useParams } from 'react-router-dom'
import DynamicUiShowcase from '../components/project/DynamicUiShowcase'
import ScreenGallery from '../components/project/ScreenGallery'
import UiUxShowcase from '../components/project/UiUxShowcase'
import ProjectNotFound from './ProjectNotFound'
import { getProjectById } from '../data/projects'

function WebGallery({ project }) {
  const screens = project.screens ?? []

  if (!screens.length) return null

  return (
    <section className="ui-showcase ui-showcase--web">
      <div className="container">
        <h2 className="ui-showcase__heading">Project Screens</h2>
        <p className="ui-showcase__subheading">
          Click any screen to view in full premium preview
        </p>
        <ScreenGallery screens={screens} variant="web" />
      </div>
    </section>
  )
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return <ProjectNotFound />
  }

  return (
    <article className="project-page">
      <div className="container project-page__header">
        <Link className="project-page__back" to="/portfolio">
          ← Back to portfolio
        </Link>
        <ul className="project-page__tags">
          {project.tags.map((tag) => (
            <li className="project-card__tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <h1>{project.title}</h1>
        <p className="project-page__result">{project.result}</p>
        {project.url && !project.dynamicUi && (
          <a
            className="project-page__live-link"
            href={project.url}
            rel="noreferrer"
            target="_blank"
          >
            Visit live site →
          </a>
        )}
      </div>

      {project.dynamicUi ? (
        <DynamicUiShowcase project={project} />
      ) : project.interactive ? (
        <UiUxShowcase project={project} />
      ) : (
        <WebGallery project={project} />
      )}

      <div className="container project-page__content">
        <h2>Overview</h2>
        <p>{project.description}</p>

        <div className="project-page__meta">
          <div>
            <span className="project-page__meta-label">Services</span>
            <p>{project.tags.join(' · ')}</p>
          </div>
          <div>
            <span className="project-page__meta-label">Outcome</span>
            <p>{project.result}</p>
          </div>
        </div>

        {project.highlights && !project.interactive && (
          <ul className="ui-showcase__highlights project-page__highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
