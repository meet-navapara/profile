import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" className="navbar__menu-icon" fill="none" viewBox="0 0 24 24">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      )}
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link className="navbar__logo" to="/" onClick={closeMenu}>
          <Logo variant="dark" />
        </Link>

        <button
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="navbar__toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
        >
          <NavLink end className="navbar__link" to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink className="navbar__link" to="/portfolio" onClick={closeMenu}>
            Portfolio
          </NavLink>
        </nav>

        {menuOpen && (
          <button
            aria-label="Close menu overlay"
            className="navbar__overlay"
            type="button"
            onClick={closeMenu}
          />
        )}
      </div>
    </header>
  )
}
