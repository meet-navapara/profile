import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

function LightboxImage({ alt, src }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [src])

  return (
    <>
      {!loaded && <div aria-hidden="true" className="lightbox__loader" />}
      <img
        ref={imgRef}
        alt={alt}
        className={`lightbox__image ${loaded ? 'lightbox__image--loaded' : ''}`}
        decoding="async"
        src={src}
        onError={() => setLoaded(true)}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}

export default function ImageLightbox({ images, activeIndex, onClose, onNavigate }) {
  const current = images[activeIndex]

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + images.length) % images.length)
  }, [activeIndex, images.length, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % images.length)
  }, [activeIndex, images.length, onNavigate])

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [goNext, goPrev, onClose])

  if (!current) return null

  const lightbox = (
    <div
      aria-modal="true"
      className="lightbox"
      role="dialog"
      onClick={onClose}
    >
      <div className="lightbox__backdrop" />

      <div className="lightbox__panel" onClick={(event) => event.stopPropagation()}>
        <button
          aria-label="Close preview"
          className="lightbox__close"
          type="button"
          onClick={onClose}
        >
          ×
        </button>

        {images.length > 1 && (
          <>
            <button
              aria-label="Previous screen"
              className="lightbox__nav lightbox__nav--prev"
              type="button"
              onClick={goPrev}
            >
              ‹
            </button>
            <button
              aria-label="Next screen"
              className="lightbox__nav lightbox__nav--next"
              type="button"
              onClick={goNext}
            >
              ›
            </button>
          </>
        )}

        <div className="lightbox__stage">
          <LightboxImage key={current.image} alt={current.label} src={current.image} />
        </div>

        <div className="lightbox__footer">
          <p className="lightbox__caption">{current.label}</p>
          {images.length > 1 && (
            <p className="lightbox__counter">
              {activeIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  )

  return createPortal(lightbox, document.body)
}
