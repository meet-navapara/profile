import { useState } from 'react'
import ImageLightbox from './ImageLightbox'
import ProjectScreenImage from './ProjectScreenImage'

export default function ScreenGallery({ screens, variant = 'default' }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  return (
    <>
      <div className={`ui-showcase__grid ${variant === 'web' ? 'ui-showcase__grid--web' : ''}`}>
        {screens.map((screen, index) => (
          <figure
            key={screen.label}
            className={`ui-showcase__screen ${variant === 'web' ? 'ui-showcase__screen--web' : ''} ui-showcase__screen--clickable`}
          >
            <button
              aria-label={`Open ${screen.label} preview`}
              className="ui-showcase__screen-btn"
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              <ProjectScreenImage expanded image={screen.image} label={screen.label} />
              <span className="ui-showcase__screen-overlay">
                <span className="ui-showcase__screen-zoom">View full screen</span>
              </span>
            </button>
            <figcaption>{screen.label}</figcaption>
          </figure>
        ))}
      </div>

      {isOpen && (
        <ImageLightbox
          activeIndex={activeIndex}
          images={screens}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  )
}
