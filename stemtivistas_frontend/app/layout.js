import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Stemtivistas - Empowering STEM Education',
  description: 'A corporate website promoting STEM education, activities, and opportunities for students and educators.',
}

/**
 * Root Layout Component
 * Wraps all pages with global styles and the Navbar component
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
