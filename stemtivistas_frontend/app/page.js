'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [formStatus, setFormStatus] = useState('')

    /**
     * Fetch data from Flask backend API
     * Called when Contact section is rendered
     */
    useEffect(() => {
        const fetchContactData = async () => {
            setLoading(true)
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
                const response = await axios.get(`${apiUrl}/api/hello`)
                setApiData(response.data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchContactData()
    }, [])

    /**
     * Handle form input changes
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    /**
     * Handle form submission
     */
    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('Enviando...')
        
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
            const response = await axios.post(`${apiUrl}/api/send_form`, {
                name: formData.name,
                email: formData.email,
                message: formData.message
            })

            setFormStatus('¡Mensaje enviado con éxito!')
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setFormStatus(''), 5000)
        } catch (err) {
            const errorMessage = err.response?.data?.error || err.message || 'Error al enviar el mensaje'
            setFormStatus(`Error: ${errorMessage}`)
            setTimeout(() => setFormStatus(''), 5000)
        }
    }

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
                        <div className={`${styles.serviceBox} ${styles.serviceBox1}`}>
                            <div className={styles.serviceImage}>
                                <img src="/k12.png" alt="Workshops" />
                            </div>
                            <h3 className={styles.serviceTitle}>Talleres K-12</h3>
                        </div>

                        <div className={`${styles.serviceBox} ${styles.serviceBox2}`}>
                            <div className={styles.serviceImage}>
                                <img src="/comunidades.png" alt="Competitions" />
                            </div>
                            <h3 className={styles.serviceTitle}>Creación de Comunidades</h3>
                        </div>

                        <div className={`${styles.serviceBox} ${styles.serviceBox3}`}>
                            <div className={styles.serviceImage}>
                                <img src="/capacitacion.png" alt="Mentorship" />
                            </div>
                            <h3 className={styles.serviceTitle}>Capacitación docente</h3>
                        </div>

                        <div className={`${styles.serviceBox} ${styles.serviceBox4}`}>
                            <div className={styles.serviceImage}>
                                <img src="/charlas.png" alt="Resources" />
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
                            <img src="/steam.png" alt="Robotics" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Taller de prototipado social en Pre-ingeniería UC</h3>
                            </div>
                        </div>
                        <div className={styles["grid-item"] + " " + styles["grid-item-12"]}>
                            <img src="/cambio.JPG" alt="Programming" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Formando Agentes de Cambio</h3>
                            </div>
                        </div>
                        <div className={styles["grid-item"] + " " + styles["span-2"] + " " + styles["grid-item-13"]}>
                            <img src="/libro.png" alt="Science Experiments" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Lanzamiento Libro Inspiradoras</h3>
                            </div>
                        </div>
                        <div className={styles["grid-item"] + " " + styles["grid-item-14"]}>
                            <img src="/cap_mujeres.jpg" alt="3D Printing" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Red Más Mujeres en STEM en UOH</h3>
                            </div>
                        </div>
                        <div className={styles["grid-item"] + " " + styles["grid-item-15"]}>
                            <img src="/ra.png" alt="Mathematics" className={styles.mosaicImage} />
                            <div className={styles.mosaicOverlay}>
                                <h3 className={styles.mosaicTitle}>Taller de RA en Independencia</h3>
                            </div>
                        </div>
                        <div className={styles["grid-item"] + " " + styles["grid-item-16"]}>
                            <img src="/encriptado.png" alt="Engineering" className={styles.mosaicImage} />
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



            {/* Contact Section - with Contact Form */}
            <section id="contact" className={`${styles.section} ${styles.sectionContact}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Contactanos</h1>
                    <p className={styles.text}>
                        ¡Nos encantaría saber de ti! Ya sea que tengas preguntas, quieras colaborar o estés interesado en nuestros programas, no dudes en ponerte en contacto con nosotros. Juntos, podemos marcar una diferencia duradera en la educación STEM y crear oportunidades para todos.
                    </p>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.formLabel}>Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={styles.formInput}
                                required
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={styles.formInput}
                                required
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.formLabel}>Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={styles.formTextarea}
                                required
                                placeholder="Escribe tu mensaje aquí..."
                                rows="5"
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Enviar Mensaje
                        </button>

                        {formStatus && (
                            <p className={styles.formStatus}>{formStatus}</p>
                        )}
                    </form>

                   
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
