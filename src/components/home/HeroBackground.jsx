import { useEffect, useRef } from 'react'

const ORBS = [
  { id: 1, tone: 'blue', style: { top: '8%', left: '6%', width: 280, height: 280 }, parallax: [42, 32], delay: '0s' },
  { id: 2, tone: 'blue', style: { top: '18%', right: '10%', width: 220, height: 220 }, parallax: [-34, 26], delay: '-4s' },
  { id: 3, tone: 'peach', style: { bottom: '10%', left: '14%', width: 260, height: 260 }, parallax: [28, -30], delay: '-7s' },
  { id: 4, tone: 'peach', style: { bottom: '16%', right: '8%', width: 200, height: 200 }, parallax: [-40, -24], delay: '-10s' },
]

export default function HeroBackground() {
  const bgRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const hero = bgRef.current?.closest('.hero')
    if (!hero) return

    const handleMove = (event) => {
      if (frameRef.current) return

      frameRef.current = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5

        hero.style.setProperty('--pointer-x', x.toFixed(4))
        hero.style.setProperty('--pointer-y', y.toFixed(4))
        frameRef.current = null
      })
    }

    const handleLeave = () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }

      hero.style.setProperty('--pointer-x', '0')
      hero.style.setProperty('--pointer-y', '0')
    }

    hero.addEventListener('mousemove', handleMove)
    hero.addEventListener('mouseleave', handleLeave)

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }

      hero.removeEventListener('mousemove', handleMove)
      hero.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div ref={bgRef} aria-hidden="true" className="hero-bg">
      <div className="hero-bg__gradient" />
      <div className="hero-bg__grid" />

      {ORBS.map((orb) => (
        <div
          key={orb.id}
          className="hero-bg__orb-wrap"
          style={{
            ...orb.style,
            '--orb-shift-x': `${orb.parallax[0]}px`,
            '--orb-shift-y': `${orb.parallax[1]}px`,
            '--orb-delay': orb.delay,
          }}
        >
          <div className={`hero-bg__orb hero-bg__orb--${orb.tone}`} />
        </div>
      ))}

      <div className="hero-bg__shine" />
    </div>
  )
}
