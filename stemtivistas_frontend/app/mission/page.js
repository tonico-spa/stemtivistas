'use client'

import Link from 'next/link'
import styles from './mission.module.css'

/**
 * Mission Dedicated Page
 * Detailed information about the organization's mission
 * Includes a "Back to Home" button for navigation
 */
export default function MissionPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Mission in Detail</h1>
        
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Empowering the Next Generation</h2>
          <p className={styles.text}>
            Somos un programa educativo que busca desarrollar habilidades del siglo XXI a través de la enseñanza de ciencia, tecnología, ingeniería y matemáticas en Latinoamérica. 
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Our Core Values</h2>
          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <h3>Innovation</h3>
              <p>We encourage creative thinking and problem-solving through hands-on experiences.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Inclusivity</h3>
              <p>We ensure STEM education is accessible to all students, regardless of background.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Excellence</h3>
              <p>We maintain high standards in our programs and continuously improve our approach.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Collaboration</h3>
              <p>We partner with schools, communities, and industry to maximize our impact.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Our Impact</h2>
          <p className={styles.text}>
            Since our founding, we have reached thousands of students across multiple communities. 
            Our programs have sparked interest in STEM careers, improved academic performance, 
            and created a generation of problem-solvers ready to tackle the challenges of tomorrow.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5,000+</span>
              <span className={styles.statLabel}>Students Reached</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>150+</span>
              <span className={styles.statLabel}>Workshops Conducted</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>School Partnerships</span>
            </div>
          </div>
        </section>

        <Link href="/" className={styles.backButton}>
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
