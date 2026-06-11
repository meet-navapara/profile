import FigmaCanvasShowcase from './figma/FigmaCanvasShowcase'

export default function DynamicUiShowcase({ project }) {
  return (
    <section className="ui-showcase ui-showcase--dynamic">
      <div className="container">
        <h2 className="ui-showcase__heading">Figma Design Exploration</h2>
        <p className="ui-showcase__subheading">
          Interactive frames from the {project.title} design system — click layers to
          switch screens or watch them cycle automatically
        </p>

        <FigmaCanvasShowcase key={project.figmaVariant ?? 'flowkit'} variant={project.figmaVariant ?? 'flowkit'} />

        {project.highlights && (
          <ul className="ui-showcase__highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
