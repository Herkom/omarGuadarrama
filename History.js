app.component('history', {
    template:`
        <div class="presentation" id="history">
            <section class="slide intro">
                <article>
                    <h1>Omar Guadarrama</h1>
                    <h2>Diseñador UX <strong>&</strong> Desarrollador Front-End</h2>
                    <p>Diseño experiencias digitales atractivas usando <br>Design Thinking y frameworks reactivos.</p>
                </article>
            </section>

            <section class="slide code">
                <article>
                    <code>
                        <h3>Trayectoría <strong>[</strong></h3>
                        <p>"2014 - presente"</p>
                        <strong>]</strong>
                    </code>
                </article>
            </section>

            <section class="slide text">
                <article>
                    <h2>Desde hace 7 años,<br><strong>he diseñado y desarrollado<br>sistemas institucionales<br>en el OSFE Tabasco.</strong></h2>
                    <p>El Órgano Superior de Fiscalización del Estado de Tabasco<br>es el encargado de revisar en qué y cómo fue gastado<br>el dinero del erario público.</p>
                </article>
            </section>

            <section class="slide text">
                <article>
                    <h2>Durante este tiempo<br><strong>me he involucrado en varios proyectos,</strong></h2>
                    <p class="md">desde diseño del sitio oficial y de sistemas institucionales con Vue y Svelte, identificadores visuales para sistemas, desarrollo de APIs, bases de datos, web scraping a medios locales, reconocimiento fácial en imagenes, desarrollo de App institucional, manejo de la imagen institucional en medios de difusión impresos, hasta animación y edición de video.</p>
                </article>
            </section>

            <section class="slide code">
                <article>
                    <code>
                        <h3>Previamente <strong>[</strong></h3>
                        <p>"2011 - 2014"</p>
                        <strong>]</strong>
                    </code>
                </article>
            </section>

            <section class="slide text">
                <article>
                    <h2>Antes de diseñar<br>para la web, yo creaba<br><strong>Ilustración y Animación<br>para el sector educativo.</strong></h2>
                    <p>También diseñe material gráfico de redes sociales para diversas marcas.<br>Y aún antes de eso tomé y edite fotografía y video de eventos empresariales y sociales.</p>
                </article>
            </section>

            <section class="slide code">
                <article>
                    <code>
                        <h3>Background <strong>[</strong></h3>
                        <p>“Música”, <br>“Maker”, <br>“Gastronomia”, ...</p>
                        <strong>]</strong>
                    </code>
                </article>
            </section>

            <section class="slide text">
                <article>
                    <p>Amo la animación, la música, gastronomía, ilustración, arquitectura, diseño industrial, motion graphics, IOT, Arduino/Raspberry, robots, sensores, drones, carpintería, energias limpias, agricultura vertical, realidad aumentada, inteligencia artificial, crypto cositas, big data....</p>
                    <h2>Me apasiona el diseño<br>aplicado a la tecnología.<br><strong>Crear cosas útiles y estéticas<br>para el mundo.</strong></h2>
                </article>
            </section>

            <section class="slide text">
                <article>
                    <h2>Hoy aprendo<br><strong>Accesibilidad en la Web, <br>Visualización de Datos y<br>mejoro mi Inglés.</strong></h2>
                    <p>Después quiero ahondar en Node.js y el diseño de productos del futuro.<br><strong>No importa dónde, lo que importa es nunca parar de aprender.</strong></p>
                </article>
            </section>

            <section class="slide code">
                <article>
                    <code>
                        //Hecho con
                    </code> 
                </article>
            </section>

            <section class="slide text">
                <article>
                    <p class="thanks"><strong>Gracias por visitar mi sitio!</strong></p>
                    <p>Esto sigue en construcción, vuelve pronto para ver más actualizaciones.</p>
                    <h2>Ve mi <strong>portafolio</strong> para más detalles.</h2>   
                </article>
            </section>
        </div>
    `,
    setup(){
        const animationController = new ScrollMagic.Controller();
        let revealElements = document.getElementsByClassName("slide");

        const setAllTheAnimations = () => {
            for (var i=0; i<revealElements.length; i++) { // create a scene for each element
                new ScrollMagic.Scene({
                    triggerElement: revealElements[i],
                    triggerHook: 0.8,
                    duration: "70%",
                    offset: 150
                })
                .setClassToggle(revealElements[i], "visible") // add class toggle
                .addTo(animationController);
            }
        }

        onMounted(setAllTheAnimations)

        return {
            animationController,
            setAllTheAnimations
        }
    }
})