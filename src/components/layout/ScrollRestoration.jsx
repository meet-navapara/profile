import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollRestoration() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
