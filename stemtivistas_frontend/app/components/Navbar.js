'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Navbar.module.css'

/**
 * Navbar Component
 * Sticky navigation bar with smooth scroll behavior on Home page
 * and standard navigation on other pages
 * Transparent with white text in cover section, white with dark text when scrolled
 */
export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past cover section (approximately one viewport height)
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Call once to set initial state
    handleScroll()

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * Handle navigation clicks
   * If on Home page: smooth scroll to section
   * If on other pages: navigate to Home with hash
   */
  const handleNavClick = (e, sectionId) => {
    if (isHome) {
      e.preventDefault()
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    // If not on home, Link component will handle navigation to /#sectionId
  }

  const navItems = [
    { id: 'mission', label: 'Mision' },
    { id: 'activities', label: 'Actividades' },
    { id: 'participate', label: 'Participa' },
    { id: 'contact', label: 'Contacto' }
  ]

  return (
    <nav className={`${styles.navbar} ${isHome && !isScrolled ? styles.navbarTransparent : styles.navbarSolid}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Stemtivistas
        </Link>
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link 
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={styles.navLink}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
