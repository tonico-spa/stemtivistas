'use client'

import Link from 'next/link'
import styles from './activities.module.css'

/**
 * Activities Dedicated Page
 * Showcases past activities and events
 * Includes a "Back to Home" button for navigation
 */
export default function ActivitiesPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Nuestras Actividades</h1>

                <section className={`${styles.section} ${styles.section1}`}>
                    <h2 className={styles.subtitle}>Eventos y Talleres Pasados</h2>
                    <p className={styles.text}>
                        Desde talleres prácticos hasta competencias interactivas, hemos llevado a cabo diversas
                        actividades diseñadas para despertar la curiosidad y fomentar la creatividad. Únete a nosotros
                        en la exploración de robótica, programación, experimentos científicos, impresión 3D y mucho más
                        a través de nuestros programas inmersivos.
                    </p>
                </section>

                <section className={`${styles.section} ${styles.section2}`}>
                    <h2 className={styles.subtitle}>Galería de Eventos</h2>

                    <div className={styles.activitiesGrid}>
                        <div className={styles.activityCard}>
                            <div className={styles.cardImage}>
                                <img src="/steam.png" alt="Taller de Prototipado Social" />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Taller de Prototipado Social en Pre-ingeniería UC</h3>
                                Junto a las y los estudiantes de pre-ingeniería, reflexionamos sobre nuestra identidad y el significado de nuestras comunidades en nuestras vidas. Trabajamos en el desarrollo de la empatía y exploramos cómo la tecnología puede apoyar y fomentar este valor en nuestras comunidades. Los estudiantes crearon sus propios prototipos sociales, los cuales presentaron a la comunidad en una feria final, demostrando cómo la tecnología y la empatía pueden unirse para generar un impacto positivo.              </div>
                        </div>

                        <div className={styles.activityCard}>
                            <div className={styles.cardImage}>
                                <img src="/cambio.JPG" alt="Formando Agentes de Cambio" />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Formando Agentes de Cambio</h3>
                                Estuvimos junto a la Universidad de O'Higgins en Rancagua, compartiendo con las estudiantes de carreras STEM de la universidad. Nuestro objetivo fue empoderar y capacitar técnicamente a estas futuras agentes de cambio, brindándoles las herramientas necesarias para llevar el conocimiento STEM a sus comunidades. De esta manera, esperamos inspirar a más mujeres a estudiar y apasionarse por estas disciplinas fundamentales para el desarrollo y la innovación.              </div>
                        </div>

                        <div className={styles.activityCard}>
                            <div className={styles.cardImage}>
                                <img src="/libro.png" alt="Lanzamiento Libro Inspiradoras" />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Lanzamiento Libro Inspiradoras</h3>
                                Estuvimos en el lanzamiento del libro "Inspiradoras", que reúne las historias de mujeres destacadas en las áreas STEM y cómo inspiran a otras a seguir su camino. Nos llena de orgullo compartir que nuestra fundadora, Katherine Vergara, está presente en el capítulo dedicado a la tecnología. Agradecemos al Ministerio de Ciencias y a Mujeres Bacanas por la realización de este hermoso trabajo, que celebra y promueve el empoderamiento femenino en el ámbito científico y tecnológico.              </div>
                        </div>

                        <div className={styles.activityCard}>
                            <div className={styles.cardImage}>
                                <img src="/cap_mujeres.jpg" alt="Red Más Mujeres en STEM" />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Red Más Mujeres en STEM en UOH</h3>
                                Participamos en la creación de la comunidad "Red Más Mujeres en STEM", donde, a través de coaching y empoderamiento, buscamos disminuir la deserción de mujeres en carreras universitarias en la educación terciaria. Nuestro objetivo es apoyar y motivar a las estudiantes, brindándoles las herramientas y el respaldo necesarios para que puedan perseverar y destacarse en sus disciplinas, contribuyendo así a un entorno académico y profesional más inclusivo y equitativo.              </div>
                        </div>

                        <div className={styles.activityCard}>
                            <div className={styles.cardImage}>
                                <img src="/ra.png" alt="Taller de Realidad Aumentada" />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Taller de Realidad Aumentada en Independencia</h3>
                                Junto a PAR Explora, visitamos la comuna de Independencia y compartimos una jornada increíble con los estudiantes de sexto básico. Durante nuestra visita, los alumnos tuvieron la oportunidad de sumergirse en el fascinante mundo de la realidad aumentada, experimentando de primera mano con esta tecnología innovadora. No solo exploraron sus posibilidades, sino que también crearon sus propios prototipos de realidad aumentada. Además, aprovechamos este espacio para reflexionar sobre temas cruciales como el ciberacoso y la seguridad en internet, fomentando una conciencia crítica y responsable en el uso de las tecnologías digitales.
                            </div>
                        </div>

                        <div className={styles.activityCard}>
                            <div className={styles.cardImage}>
                                <img src="/encriptado.png" alt="Taller de Ciberseguridad" />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Taller de Ciberseguridad en Santa Cruz</h3>
                                Invitadas por Red UFRO, tuvimos la oportunidad de trabajar sobre la ciberseguridad en nuestro día a día y el proceso de encriptación junto a los estudiantes del programa de post-clases del Ministerio de Educación en Santa Cruz. Durante esta actividad, exploramos prácticas esenciales para proteger nuestra información personal y comprendimos la importancia de la encriptación en la seguridad digital, capacitando a los estudiantes en habilidades cruciales para el mundo moderno.              </div>
                        </div>
                        <div className={styles.activityCard}>
                            <div className={styles.cardImage}>
                                <img src="/tic.png" alt="Día de las Niñas en las TIC" />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Día de las Niñas en las TIC</h3>
                                Nuestra fundadora estuvo compartiendo con las niñas de Lo Espejo para celebrar el Día de las Niñas en las TIC, gracias a la invitación del Ministerio de Ciencias. Durante el evento, les contó su historia de vida y cómo logró alzar su voz en el mundo de la tecnología. Inspiró a las jóvenes a levantar su voz y perseguir sus sueños en el ámbito tecnológico, motivándolas a ser las futuras líderes e innovadoras en este campo.                                </div>
                        </div>

                        <div className={styles.activityCard}>
                            <div className={styles.cardImage}>
                                <img src="/poderosas.png" alt="Charla Habilidades Poderosas en STEM" />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Charla Habilidades Poderosas en STEM</h3>
                                Nuestra fundadora estuvo conversando con las estudiantes de ingeniería en la Universidad Adolfo Ibáñez sobre el poder de la diversidad en la innovación. Durante la charla, exploraron cómo desarrollar habilidades poderosas para romper con la programación colectiva y fomentar un pensamiento independiente y creativo. Fue una oportunidad inspiradora para reflexionar sobre cómo la diversidad de perspectivas puede impulsar el avance tecnológico y social.                                </div>
                        </div>

                        <div className={styles.activityCard}>
                            <div className={styles.cardImage}>
                                <img src="/comp_creativa.png" alt="Taller de Computación Creativa en Penta UC" />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Taller de Computación Creativa en Penta UC</h3>
                                Junto a los estudiantes de Penta UC, exploramos diversas formas de arte y cómo distintas tecnologías influyen en el proceso creativo. Nos sumergimos en la escritura creativa, la animación, el dibujo, y la creación audiovisual. Además, experimentamos con el proceso creativo asistido por inteligencia artificial, descubriendo nuevas maneras en que la tecnología puede potenciar la expresión artística y la innovación.                            </div>
                        </div>
                    </div>
                </section>

            

                <Link href="/" className={styles.backButton}>
                    ← Volver al Inicio
                </Link>
            </div>

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
