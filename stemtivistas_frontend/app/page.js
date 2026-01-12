'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Home.module.css'

/**
 * Home Page Component
 * One-page landing experience with 4 vertical sections
 * Each section has a "Ver Más" button that routes to a dedicated page
 */
export default function Home() {
    const [apiData, setApiData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    /**
     * Fetch data from Flask backend API
     * Called when Contact section is rendered
     */
    useEffect(() => {
        const fetchContactData = async () => {
            setLoading(true)
            try {
                const response = await fetch('http://localhost:5000/api/hello')
                if (!response.ok) {
                    throw new Error('Failed to fetch from backend')
                }
                const data = await response.json()
                setApiData(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchContactData()
    }, [])

    return (
        <main className={styles.main}>
            {/* Cover Section */}
            <section id="cover" className={`${styles.section} ${styles.sectionCover}`}>
                <div className={styles.content}>
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className={`${styles.section} ${styles.sectionMission}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Nuestra Misión</h1>
                    <p className={styles.text}>
                        Somos un programa educativo que busca desarrollar habilidades del siglo XXI a través de la enseñanza de ciencia, tecnología, ingeniería y matemáticas en Latinoamérica.
                    </p>

                    {/* Services Grid */}
                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceBox}>
                            <div className={styles.serviceImage}>
                                <img src="/service1.png" alt="Workshops" />
                            </div>
                            <h3 className={styles.serviceTitle}>Talleres K-12</h3>
                        </div>

                        <div className={styles.serviceBox}>
                            <div className={styles.serviceImage}>
                                <img src="/service2.png" alt="Competitions" />
                            </div>
                            <h3 className={styles.serviceTitle}>Creación de Comunidades</h3>
                        </div>

                        <div className={styles.serviceBox}>
                            <div className={styles.serviceImage}>
                                <img src="/service3.png" alt="Mentorship" />
                            </div>
                            <h3 className={styles.serviceTitle}>Capacitación docente</h3>
                        </div>

                        <div className={styles.serviceBox}>
                            <div className={styles.serviceImage}>
                                <img src="/service4.png" alt="Resources" />
                            </div>
                            <h3 className={styles.serviceTitle}>Charlas Inspiracionales</h3>
                        </div>
                    </div>

                    <Link href="/mission" className={styles.button}>
                        Ver Más
                    </Link>
                </div>
            </section>
            {/* Participate Section */}
            <section id="participate" className={`${styles.section} ${styles.sectionParticipate}`}>
        <div className={styles.participateImage}>
          <img src="/change.png" alt="Be part of the change" />
        </div>
        <div className={styles.participateContent}>
          <h1 className={styles.title}>Se parte del cambio</h1>
          <p className={styles.text}>
            Nuestro equipo esta formado por profesionales comprometidos junto a un grupo de voluntarias y voluntarios, comparte una misma pasión: la educación.
            Nos dedicamos a inspirar y empoderar a niñas y niños en el ámbito STEM, creando un ambiente de aprendizaje colaborativo y estimulante.
            Únete a nosotros en o aporta con una donación
          </p>
          <Link href="/participate" className={styles.button}>
            Ver Más
          </Link>
        </div>
      </section>
            <section id="activities" className={`${styles.section} ${styles.sectionActivities}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Actividades pasadas</h1>
                    <p className={styles.text}>
                        Desde talleres prácticos hasta competencias interactivas, hemos llevado a cabo diversas
                        actividades diseñadas para despertar la curiosidad y fomentar la creatividad. Únete a nosotros
                        en la exploración de robótica, programación, experimentos científicos, impresión 3D y mucho más
                        a través de nuestros programas inmersivos.
                    </p>


                    <div className={styles["grid-layout"]}>
                        <div className={styles["grid-item"] + " " + styles["span-2"] + " " + styles["grid-item-10"]}>
                            <img src="/activity1.png" alt="Robotics" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Taller de prototipado social en Pre-ingeniería UC</h3>
                            </div>
                        </div>
                        <div className={styles["grid-item"] + " " + styles["grid-item-12"]}>
                            <img src="/activity2.png" alt="Programming" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Formando Agentes de Cambio</h3>
                            </div>
                        </div>
                        <div className={styles["grid-item"] + " " + styles["span-2"] + " " + styles["grid-item-13"]}>
                            <img src="/activity3.png" alt="Science Experiments" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Lanzamiento Libro Inspiradoras</h3>
                            </div>
                        </div>
                        <div className={styles["grid-item"] + " " + styles["grid-item-14"]}>
                            <img src="/activity4.png" alt="3D Printing" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Red Más Mujeres en STEM en UOH</h3>
                            </div>
                        </div>
                        <div className={styles["grid-item"] + " " + styles["grid-item-15"]}>
                            <img src="/activity5.png" alt="Mathematics" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Taller de RA en Independencia</h3>
                            </div>
                        </div>
                        <div className={styles["grid-item"] + " " + styles["grid-item-16"]}>
                            <img src="/activity6.png" alt="Engineering" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Taller de ciberseguridad en Santa Cruz</h3>
                            </div>
                        </div>
                    </div>

                    <Link href="/activities" className={styles.button}>
                        Ver Más
                    </Link>
                </div>
            </section>



            {/* Contact Section - with API Integration */}
            <section id="contact" className={`${styles.section} ${styles.sectionContact}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.text}>
                        We'd love to hear from you! Whether you have questions, want to collaborate,
                        or are interested in our programs, feel free to reach out. Together, we can
                        make a lasting difference in STEM education and create opportunities for all.
                    </p>

                    {/* API Data Display */}
                    <div className={styles.apiData}>
                        {loading && <p className={styles.apiStatus}>Loading backend data...</p>}
                        {error && <p className={styles.apiError}>Error: {error}</p>}
                        {apiData && (
                            <div className={styles.apiSuccess}>
                                <p><strong>Backend Status:</strong> {apiData.status}</p>
                                <p><strong>Message:</strong> {apiData.message}</p>
                                {apiData.data && (
                                    <p><strong>Organization:</strong> {apiData.data.organization}</p>
                                )}
                            </div>
                        )}
                    </div>

                    <Link href="/contact" className={styles.button}>
                        Ver Más
                    </Link>
                </div>
            </section>
             <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Stemtivistas</h3>
                    <p className={styles.footerText}>
                        Empoderando la próxima generación a través de la educación STEM
                    </p>
                </div>
                
                <div className={styles.footerSection}>
                    <h4 className={styles.footerSubtitle}>Enlaces Rápidos</h4>
                    <ul className={styles.footerLinks}>
                        <li><a href="/#mission">Misión</a></li>
                        <li><a href="/#activities">Actividades</a></li>
                        <li><a href="/#participate">Participar</a></li>
                        <li><a href="/#contact">Contacto</a></li>
                    </ul>
                </div>
                
                <div className={styles.footerSection}>
                    <h4 className={styles.footerSubtitle}>Contacto</h4>
                    <ul className={styles.footerLinks}>
                        <li>hola@tonico.cl</li>
                  
                    </ul>
                </div>
            </div>
            
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Stemtivistas. Todos los derechos reservados.</p>
            </div>
        </footer>
        </main>
    )
}
