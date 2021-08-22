app.component("Resume", {
    template: `
    <section class="Resume" id="resume">
        <header>
            <div class="logo">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2">
                    <polygon class="cls-1" points="0.27 0.46 0.51 0.46 0.51 0.2 0 0.2 0 1.8 0.51 1.8 0.51 1.54 0.27 1.54 0.27 0.46"/>
                    <polygon class="cls-1" points="1.38 0.87 1.38 1.12 1.73 1.12 1.73 1.54 1.2 1.54 1.2 0.46 1.4 0.46 1.4 0.2 0.7 0.2 0.7 0.46 0.93 0.46 0.93 1.54 0.7 1.54 0.7 1.8 2 1.8 2 0.87 1.38 0.87"/>
                    <rect class="eye" x="0.49" y="0.95" width="0.27" height="0.42"/>
                </svg>
            </div>
            <div class="nombreCompleto">
                <h1>Omar Guadarrama</h1>
                <div class="nombre">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 2">
                        <path class="cls-1" d="M.68,0V.32H.33V1.68H.68V2H0V0Z"/>
                        <path class="cls-1" d="M.83,2V1.68h.34V.32H.83V0h.68V2Z"/>
                        <path class="cls-1" d="M3,.4a.38.38,0,0,1,.38.43v.68H3V.91c0-.1,0-.19-.16-.19a.22.22,0,0,0-.25.22v.57H2.35V.91c0-.11,0-.19-.16-.19A.22.22,0,0,0,2,.94v.57H1.67V.43H2V.61A.56.56,0,0,1,2.31.4a.4.4,0,0,1,.33.25A.45.45,0,0,1,3,.4Z"/>
                        <path class="cls-1" d="M4.38.43V.61A.51.51,0,0,0,4,.41.5.5,0,0,0,3.54,1,.5.5,0,0,0,4,1.53a.56.56,0,0,0,.36-.19v.17h.28V.43Zm-.09.74C4,1.43,3.69,1,3.92.77S4.52.94,4.29,1.17Z"/>
                        <path class="cls-1" d="M5.51.4h.06V.75a.6.6,0,0,0-.26,0,.32.32,0,0,0-.17.3v.42H4.86V.43h.28V.65A.45.45,0,0,1,5.51.4Z"/>
                    </svg>
                </div>
                <div class="apellido">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 2">
                        <polygon class="cls-1" points="1.25 0.83 1.25 1.15 1.69 1.15 1.69 1.68 1.02 1.68 1.02 0.32 1.27 0.32 1.27 0 0.69 0 0.69 2 2.02 2 2.02 0.83 1.25 0.83"/>
                        <path class="cls-1" d="M2.93.43h.28V1.51H2.93V1.33a.53.53,0,0,1-.36.2c-.25,0-.38-.16-.38-.42V.43h.33V1c0,.09,0,.19.17.19A.22.22,0,0,0,2.93,1Z"/>
                        <path class="cls-1" d="M5.56,0V.61a.55.55,0,0,0-.37-.2A.5.5,0,0,0,4.71,1a.5.5,0,0,0,.49.56.58.58,0,0,0,.36-.19v.17h.28V0Zm-.1,1.17c-.26.26-.6-.16-.37-.4S5.69.94,5.46,1.17Z"/>
                        <path class="cls-1" d="M4.24.43V.61a.55.55,0,0,0-.37-.2A.5.5,0,0,0,3.39,1a.51.51,0,0,0,.49.57.55.55,0,0,0,.35-.2v.17h.28V.43Zm-.1.74c-.26.26-.6-.16-.37-.4S4.37.94,4.14,1.17Z"/>
                        <path class="cls-1" d="M6.86.43V.61A.53.53,0,0,0,6.5.41.5.5,0,0,0,6,1a.51.51,0,0,0,.49.57.59.59,0,0,0,.36-.2v.17h.28V.43Zm-.1.74c-.26.26-.6-.16-.37-.4S7,.94,6.76,1.17Z"/>
                        <path class="cls-1" d="M9.85.43V.61a.51.51,0,0,0-.36-.2A.5.5,0,0,0,9,1a.51.51,0,0,0,.48.57.57.57,0,0,0,.36-.2v.17h.28V.43Zm-.1.74c-.25.26-.6-.16-.36-.4S10,.94,9.75,1.17Z"/>
                        <path class="cls-1" d="M13,.43V.61a.55.55,0,0,0-.37-.2.5.5,0,0,0-.48.56.51.51,0,0,0,.49.57.55.55,0,0,0,.35-.2v.17h.28V.43Zm-.1.74c-.26.26-.6-.16-.37-.4S13.17.94,12.94,1.17Z"/>
                        <path class="cls-1" d="M8,.41H8V.75a.55.55,0,0,0-.25,0,.31.31,0,0,0-.18.3v.42H7.33V.43h.28V.65A.47.47,0,0,1,8,.41Z"/>
                        <path class="cls-1" d="M8.83.41h.06V.75a.6.6,0,0,0-.26,0,.32.32,0,0,0-.17.3v.42H8.18V.43h.28V.65A.44.44,0,0,1,8.83.41Z"/>
                        <path class="cls-1" d="M11.64.41A.37.37,0,0,1,12,.83v.68h-.33V.91c0-.1,0-.19-.16-.19a.22.22,0,0,0-.24.22v.57H11V.91c0-.11,0-.19-.16-.19s-.25.07-.25.22v.57h-.28V.43h.28V.61A.55.55,0,0,1,11,.41a.39.39,0,0,1,.33.24A.44.44,0,0,1,11.64.41Z"/>
                    </svg>
                </div>
            </div>
            <h2>Diseñador UX <strong>&</strong> Desarrollador Front-End</h2>
        </header>
        
        <div class="content">
            <article class="about">
                <h3>Acerca de mí</h3>
                <p>Hola, tengo cinco años de experiencia en el desarollo Front-End y diseño de experiencias digitales atractivas mediante metodologías ágiles y frameworks reactivos dentro el sector gubernamental. Busco mejorar para ser un excelente Front-End Developer y Product Designer desarrollando proyectos de alto impacto y así convertirme en un gran líder de equipo de Diseño.</p>
            </article>
        
            <article class="contact">
                <h3>Contacto</h3>
                <ul>
                    <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2">
                            <path class="cls-1" d="M1.91.09,1.51,0a.13.13,0,0,0-.14.07L1.19.5a.11.11,0,0,0,0,.14l.21.17a1.47,1.47,0,0,1-.63.63L.64,1.23a.11.11,0,0,0-.14,0l-.43.18A.13.13,0,0,0,0,1.51l.09.4A.14.14,0,0,0,.21,2,1.79,1.79,0,0,0,2,.21.14.14,0,0,0,1.91.09ZM.22,1.88.13,1.49l.41-.18.24.28A1.53,1.53,0,0,0,1.59.78L1.31.55,1.49.13l.38.09A1.67,1.67,0,0,1,.22,1.88Z"/>
                        </svg>
                        <p>omar.guadarrama@rocketmail.com</p>
                    </li>
                    <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2">
                            <path class="cls-1" d="M1.81.25H.19A.18.18,0,0,0,0,.44V1.56a.18.18,0,0,0,.19.19H1.81A.18.18,0,0,0,2,1.56V.44A.18.18,0,0,0,1.81.25ZM.19.38H1.81s.07,0,.07.06V.6l-.59.47c-.07.06-.2.18-.29.18S.78,1.13.71,1.07L.12.6V.44S.15.38.19.38ZM1.81,1.63H.19a.07.07,0,0,1-.07-.07V.76l.52.41c.08.06.22.21.36.21s.28-.14.36-.21L1.88.76v.8A.07.07,0,0,1,1.81,1.63Z"/>
                        </svg>
                        <p>5554558406</p>
                    </li>
                    <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2">
                            <path class="cls-1" d="M.67,1.6h0s0,0,0,0,0,0,0,0A0,0,0,0,1,.67,1.6Zm-.13,0s0,0,0,0h0a0,0,0,0,0,0,0s0,0,0,0Zm.18,0a0,0,0,0,0,0,0s0,0,0,0a0,0,0,0,0,0,0ZM1,0A1,1,0,0,0,0,1,1,1,0,0,0,.68,2c.06,0,.07,0,.07-.05V1.68s-.28.06-.34-.12c0,0,0-.12-.11-.15s-.09-.06,0-.06a.22.22,0,0,1,.16.1.21.21,0,0,0,.29.09A.23.23,0,0,1,.82,1.4C.59,1.37.37,1.34.37,1A.3.3,0,0,1,.46.72a.44.44,0,0,1,0-.28C.56.42.75.55.75.55A1.07,1.07,0,0,1,1,.52a1.09,1.09,0,0,1,.26,0s.19-.13.27-.11a.4.4,0,0,1,0,.28.31.31,0,0,1,.1.23c0,.39-.24.42-.46.45a.26.26,0,0,1,.06.19v.33s0,.06.07.05A1,1,0,0,0,2,1,1,1,0,0,0,1,0Zm-.6,1.4v0s0,0,0,0a0,0,0,0,0,0,0S.4,1.41.39,1.42Zm0,0s0,0,0,0h0a0,0,0,0,0,0,0Zm.13.15s0,0,0,0h0s0,0,0,0S.48,1.52.48,1.53Zm0-.06v0h0v0s0,0,0,0Z"/>
                            </svg>
                        <p>____github____</p>
                    </li>
                    <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2">
                            <path class="cls-1" d="M1.12,0H.88A.63.63,0,0,0,.25.63v.75A.63.63,0,0,0,.88,2h.24a.63.63,0,0,0,.63-.62V.63A.63.63,0,0,0,1.12,0ZM.38.63a.5.5,0,0,1,.5-.5H.94V.75H.38Zm1.25.75a.52.52,0,0,1-.51.5H.88a.51.51,0,0,1-.5-.5V.88H1.63Zm0-.63H1.06V.13h.06a.51.51,0,0,1,.51.5Z"/>
                        </svg>
                        <p>____página____</p>
                    </li>
                    <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2">
                            <path class="cls-1" d="M1,0A.76.76,0,0,0,.25.75c0,.28.09.36.59,1.16a.19.19,0,0,0,.32,0c.5-.8.59-.88.59-1.16A.76.76,0,0,0,1,0ZM1,1.81C.5,1,.44,1,.44.75a.56.56,0,0,1,1.12,0C1.56,1,1.5,1,1,1.81ZM.69.75A.31.31,0,1,1,1,1.06.31.31,0,0,1,.69.75Z"/>
                        </svg>
                        <p>Villahermosa, Tabasco</p>
                    </li>
                </ul>
            </article>
        
            <article class="skills">
                <h3>Habilidades</h3>
                <ul class="softSkills">
                    <li>
                        <p>Comunicación asertiva</p>
                    </li>
                    <li>
                        <p>Dar y recibir buen feedback</p>
                    </li>
                    <li>
                        <p>Estratégia</p>
                    </li>
                    <li>
                        <p>Trabajo en equipo</p>
                    </li>
                </ul>
                <div>
                    <h4>Front-End</h4>
                    <ul>
                        <li>
                            <p>CSS Grid - Flexbox</p>
                        </li>
                        <li>
                            <p>Componentes</p>
                        </li>
                        <li>
                            <p>Semántica</p>
                        </li>
                        <li>
                            <p>Maquetación de emails</p>
                        </li>
                        <li>
                            <p>SPA</p>
                        </li>
                        <li>
                            <p>Web Scraping</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>User Experience</h4>
                    <ul>
                        <li>
                            <p>Design Thinking</p>
                        </li>
                        <li>
                            <p>Sketching - Wireframes - prototipos</p>
                        </li>
                        <li>
                            <p>Mockups</p>
                        </li>
                        <li>
                            <p>Usabilidad</p>
                        </li>
                        <li>
                            <p>Guias de estilo</p>
                        </li>
                        <li>
                            <p>A/B Testing</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Herramientas</h4>
                    <ul>
                        <li>
                            <p>Figma - Adobe XD</p>
                        </li>
                        <li>
                            <p>HTML5 - CSS3 - Javascript</p>
                        </li>
                        <li>
                            <p>Vue - Svelte - Flutter</p>
                        </li>
                        <li>
                            <p>Bootstrap</p>
                        </li>
                        <li>
                            <p>VS Code - Sublime</p>
                        </li>
                        <li>
                            <p>Git y Github con Cmder</p>
                        </li>
                        <li>
                            <p>Paquetería de Adobe</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Back-End</h4>
                    <ul>
                        <li>
                            <p>Python - PHP - Dart</p>
                        </li>
                        <li>
                            <p>Scrapy</p>
                        </li>
                        <li>
                            <p>API REST</p>
                        </li>
                        <li>
                            <p>Firebase - Azure</p>
                        </li>
                        <li>
                            <p>MySQL</p>
                        </li>
                        <li>
                            <p>Face Recognition</p>
                        </li>
                    </ul>
                </div>
            </article>
        
            
            <article class="experience">
                <h3>Experiencia</h3>
                <div class="job">
                    <h4 class="name">Diseñador Gráfico y<br>desarrollador Front-End</h4>
                    <p class="place">Órgano Superior de Fiscalización del Estado / Villahermosa, Tabasco</p>
                    <ul>
                        <li class="task">
                            <p>UX y maquetación de sistemas institucionales con frameworks reactivos. Subida y bajada de archivos con formularios.</p>
                        </li>
                        <li class="task">
                            <p>Desarrollo de API REST. Modelado, manejo y consultas a bases de datos. Web Scraping. Reconocimiento facial a fotografías.</p>
                        </li>
                        <li class="task">
                            <p>Branding de imagen institucional en publicaciones impresas. Animación y edición de video.</p>
                        </li>
                    </ul>
                </div>
                <div class="job">
                    <h4 class="name">Animador</h4>
                    <p class="place">Dirección General de Televisión Educativa / Ciudad de México</p>
                    <ul>
                        <li class="task">
                            <p>Diseño y animación de spots con material educativo o promocional para el Gobierno Federal y Telesecundarias.</p>
                        </li>
                    </ul>
                    <div class="job">
                        <h4 class="name">Junior Graphic Designer</h4>
                        <p class="place">Lead2Action / Ciudad de México</p>
                        <ul>
                            <li class="task">
                                <p>Diseño de material gráfico para redes sociales y plataformas web de diversas marcas.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        
            <article class="education">
                <h3>Educación</h3>
                <div class="Platzi">
                    <div class="firstLine">
                        <h4>Nunca paro de aprender en</h4>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3">
                            <defs><style>.platzi-text{fill:#364159;}.platzi-symbol{fill:#a8ca6c;}</style></defs>
                            <circle class="platzi-text" cx="10.6" cy="0.78" r="0.17"/>
                            <path class="platzi-text" d="M4.6.62h.74A.64.64,0,0,1,6,1.24a.59.59,0,0,1-.62.62H4.89v.53H4.6Zm.29,1c.2,0,.79,0,.79-.36S5.23.88,4.89.88Z"/>
                            <path class="platzi-text" d="M8,1.29V2c0,.1,0,.15.14.16v.17A.27.27,0,0,1,8,2.4a.24.24,0,0,1-.23-.22.48.48,0,0,1-.44.24c-.4,0-.53-.39-.53-.65a.61.61,0,0,1,.67-.62C7.77,1.15,7.92,1.25,8,1.29Zm-.27.13a.92.92,0,0,0-.26,0,.37.37,0,0,0-.39.4c0,.22.11.4.32.4s.33-.17.33-.4Z"/>
                            <polygon class="platzi-text" points="9.24 2.39 9.87 1.4 9.3 1.4 9.3 1.17 10.29 1.17 9.66 2.15 10.27 2.15 10.27 2.39 9.24 2.39"/>
                            <path class="platzi-text" d="M9.12,2.38a.77.77,0,0,1-.29.05A.43.43,0,0,1,8.4,2c0-.32,0-.56,0-.56H8.14V1.17h.25V.88h.27v.29h.43v.22H8.66a4.51,4.51,0,0,0,0,.62c0,.21.19.24.43.18A.55.55,0,0,1,9.12,2.38Z"/>
                            <path class="platzi-text" d="M6.42.63V2c0,.3.15.25.21.25s.07.12,0,.18a.26.26,0,0,1-.17.05c-.19,0-.38-.13-.38-.55s0-1.25,0-1.25Z"/>
                            <rect class="platzi-text" x="10.48" y="1.19" width="0.25" height="1.21"/>
                            <path class="platzi-symbol" d="M2.37.17l-1,1a.53.53,0,0,0,0,.74l1,1a.53.53,0,0,0,.74,0l.31-.31-.35-.35-.34.34-1-1,1-1,.68.67-.68.68.34.33.64-.64a.51.51,0,0,0,0-.74L3.11.17A.53.53,0,0,0,2.37.17Z"/>
                        </svg>
                    </div>
                    <h4 class="secondLine">y otras plataformas.</h4>
                    <p>Actualmente aprendiendo Accesibilidad Web, Product Design, Storytelling, mejorando mi nivel de Inglés.</p>
                    <div class="ENAP">
                        <h4>Licenciatura en Diseño y Comunicación Visual</h4>
                        <p>Universidad Nacional Autónoma de México</p>
                        <p>Escuela Nacional de Artes Plásticas, hoy Facultad de Artes y Diseño</p>
                    </div>
                </div>
            </article>
        
            <article class="languages">
                <h3>Lenguajes</h3>
                <div>
                    <h4>Inglés</h4>
                    <p>(Competencia profesional de trabajo)</p>
                </div>
            </article>
        </div>
    </section>
    `,
})