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
        <h1 className={styles.title}>Nuestra Misión en Detalle</h1>
        
        <section className={`${styles.section} ${styles.section1}`}>
          <h2 className={styles.subtitle}>Empoderando a la Próxima Generación</h2>
          <p className={styles.text}>
            Somos un programa educativo que busca desarrollar habilidades del siglo XXI a través de la enseñanza de ciencia, tecnología, ingeniería y matemáticas en Latinoamérica. 
          </p>
        </section>

        <section className={`${styles.section} ${styles.section2}`}>
          <h2 className={styles.subtitle}>Nuestros Programas</h2>
          
          <div className={styles.imageTextGrid}>
            {/* Row 1 */}
            <div className={styles.gridRow}>
              <div className={styles.textContent}>
                <h3>Talleres K-12</h3>
                <p>Desarrollamos talleres prácticos y dinámicos para estudiantes desde kindergarten hasta secundaria, enfocados en robótica, programación, ciencia y matemáticas. Nuestros talleres están diseñados para despertar la curiosidad y fomentar el aprendizaje activo.</p>
              </div>
              <div className={styles.imageContent}>
                <img src="/k12.png" alt="Talleres K-12" />
              </div>
            </div>

            {/* Row 2 */}
            <div className={styles.gridRow}>
              <div className={styles.imageContent}>
                <img src="/comunidades.png" alt="Creación de Comunidades" />
              </div>
              <div className={styles.textContent}>
                <h3>Creación de Comunidades</h3>
                <p>Construimos redes de apoyo y colaboración entre estudiantes, educadores y profesionales STEM. Creamos espacios donde los jóvenes pueden compartir ideas, aprender unos de otros y desarrollar proyectos innovadores que impacten sus comunidades.</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className={styles.gridRow}>
              <div className={styles.textContent}>
                <h3>Capacitación Docente</h3>
                <p>Empoderamos a educadores con herramientas, metodologías y recursos para integrar STEM en sus aulas de manera efectiva. Nuestros programas de formación ayudan a los maestros a inspirar y guiar a la próxima generación de innovadores.</p>
              </div>
              <div className={styles.imageContent}>
                <img src="/capacitacion.png" alt="Capacitación Docente" />
              </div>
            </div>

            {/* Row 4 */}
            <div className={styles.gridRow}>
              <div className={styles.imageContent}>
                <img src="/charlas.png" alt="Charlas Inspiracionales" />
              </div>
              <div className={styles.textContent}>
                <h3>Charlas Inspiracionales</h3>
                <p>Conectamos a estudiantes con profesionales y líderes en campos STEM que comparten sus experiencias, desafíos y éxitos. Estas charlas motivan a los jóvenes a perseguir sus sueños y a visualizar las infinitas posibilidades que ofrece la ciencia y la tecnología.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.section3}`}>
          <h2 className={styles.subtitle}>Nuestros Valores Fundamentales</h2>
          <div className={styles.valuesList}>
            <div className={`${styles.valueItem} ${styles.valueItem1}`}>
              <h3>Innovación</h3>
              <p>Fomentamos el pensamiento creativo y la resolución de problemas a través de experiencias prácticas.</p>
            </div>
            <div className={`${styles.valueItem} ${styles.valueItem2}`}>
              <h3>Inclusividad</h3>
              <p>Aseguramos que la educación STEM sea accesible para todos los estudiantes, sin importar su origen.</p>
            </div>
            <div className={`${styles.valueItem} ${styles.valueItem3}`}>
              <h3>Excelencia</h3>
              <p>Mantenemos altos estándares en nuestros programas y mejoramos continuamente nuestro enfoque.</p>
            </div>
            <div className={`${styles.valueItem} ${styles.valueItem4}`}>
              <h3>Colaboración</h3>
              <p>Nos asociamos con escuelas, comunidades e industrias para maximizar nuestro impacto.</p>
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
