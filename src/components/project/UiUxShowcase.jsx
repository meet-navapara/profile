import ScreenGallery from './ScreenGallery'

export default function UiUxShowcase({ project }) {
  const screens = project.uiScreens ?? []

  return (
    <section className="ui-showcase">
      <div className="container">
        <h2 className="ui-showcase__heading">UI/UX Screens</h2>
        <p className="ui-showcase__subheading">
          Click any screen to view in full premium preview
        </p>

        <ScreenGallery screens={screens} />

        {project.highlights && (
          <ul className="ui-showcase__highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {project.url && (
          <a
            className="btn btn--primary ui-showcase__live-link"
            href={project.url}
            rel="noreferrer"
            target="_blank"
          >
            View live project
          </a>
        )}
      </div>
    </section>
  )
}
