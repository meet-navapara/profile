import { useEffect, useState } from 'react'
import { getFigmaVariant } from './figmaVariants'
import { FigmaFrameScreen } from './FigmaFrameScreens'

export default function FigmaCanvasShowcase({
  compact = false,
  autoPlay = true,
  variant = 'flowkit',
}) {
  const config = getFigmaVariant(variant)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeFrame = config.frameIds[activeIndex]
  const activeLabel = config.labels[activeFrame]

  useEffect(() => {
    if (!autoPlay || compact) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % config.frameIds.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [autoPlay, compact, config.frameIds.length])

  return (
    <div className={`figma-canvas figma-canvas--${variant} ${compact ? 'figma-canvas--compact' : ''}`}>
      <div className="figma-canvas__toolbar">
        <div className="figma-canvas__dots">
          <span /><span /><span />
        </div>
        <span className="figma-canvas__title">{config.fileName}</span>
      </div>

      <div className="figma-canvas__body">
        {!compact && (
          <aside className="figma-canvas__layers">
            <p className="figma-canvas__panel-label">Layers</p>
            <ul>
              {config.frameIds.map((frameId, index) => (
                <li key={frameId}>
                  <button
                    className={`figma-canvas__layer ${
                      activeIndex === index ? 'figma-canvas__layer--active' : ''
                    }`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="figma-canvas__layer-icon" />
                    {config.labels[frameId]}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <div className="figma-canvas__stage">
          <div className="figma-canvas__frame-label">{activeLabel}</div>
          <div className="figma-canvas__frame" key={`${variant}-${activeFrame}`}>
            <FigmaFrameScreen compact={compact} frameId={activeFrame} variant={variant} />
          </div>
        </div>

        {!compact && (
          <aside className="figma-canvas__props">
            <p className="figma-canvas__panel-label">Design</p>
            <dl>
              <div>
                <dt>Frame</dt>
                <dd>{activeLabel}</dd>
              </div>
              <div>
                <dt>Layout</dt>
                <dd>Auto layout</dd>
              </div>
              <div>
                <dt>Radius</dt>
                <dd>12px</dd>
              </div>
              <div>
                <dt>Grid</dt>
                <dd>8pt system</dd>
              </div>
            </dl>
          </aside>
        )}
      </div>

      {compact && (
        <div className="figma-canvas__tabs">
          {config.frameIds.map((frameId, index) => (
            <button
              key={frameId}
              aria-label={config.labels[frameId]}
              className={`figma-canvas__tab ${activeIndex === index ? 'figma-canvas__tab--active' : ''}`}
              type="button"
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                setActiveIndex(index)
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
