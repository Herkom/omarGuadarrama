import globantLogo from "@/assets/icons/globant-white-green.svg";
import autodeskLogo from "@/assets/icons/autodesk.svg";

const History = () => {
  return (
    <div id="history">
      <section className="slide code">
        <article>
          <code>
            <h3>
              Trayectoria = <strong>{"{"}</strong>
              <p>
                "2022 - presente" :{" "}
                <img src={globantLogo} className="logo" alt="globant logo" />,
              </p>
              <p>...</p>
              <strong>{"}"}</strong>
            </h3>
          </code>
        </article>
      </section>
      <section className="slide text">
        <article>
          <p>
            Desde 2022, formo parte de{" "}
            <img src={globantLogo} className="logo" alt="globant logo" />
            <br />
            como <i>Front End Developer</i> para{" "}
            <a href="https://www.autodesk.com">
              <img src={autodeskLogo} className="logo" alt="autodesk logo" />
            </a>{" "}
            el proyecto <i>Digital HIG</i>.
          </p>
          <p>
            Contruimos y personalizamos componentes utilizando la biblioteca
            Material UI, ampliamos sus APIs e implementamos modificaciones de
            estilo garantizando la coherencia con el sistema de diseño Digital
            HIG de Autodesk.
          </p>
        </article>
      </section>
      <section className="slide text">
        <article>
          <code>
            <h3>
              Trayectoria = <strong>{"{"}</strong>
              <p>
                "2014 - 2022" : <strong>OSFE</strong>
              </p>
              <strong>{"}"}</strong>
            </h3>
          </code>
          <p>
            Diseño y desarrollo de sistemas en el
            <br />
            <strong>
              Órgano Superior de Fiscalización del Estado de Tabasco.
            </strong>
          </p>
          <p>
            <strong>Realicé diversos proyectos,</strong>{" "}
            como diseño de sitios web, desarrollo de APIs y bases de datos, web
            scraping, reconocimiento facial, creación de apps institucionales,
            gestión de imagen institucional y edición de animaciones/videos.
          </p>
        </article>
      </section>
      <section className="slide text">
        <article>
          <code>
            <h3>
              Trayectoria = <strong>{"{"}</strong>
              <p>"2011 - 2014" : Previamente</p>
              <strong>{"}"}</strong>
            </h3>
          </code>
          <h2>
            <strong>
              Ilustración y animación
              <br />
              para el sector educativo,
            </strong>
          </h2>
          <p>
            además de material gráfico para redes sociales de marcas,
            toma/edición de fotografías y vídeos para eventos corporativos y
            sociales.
          </p>
        </article>
      </section>
      <section className="slide text">
        <article>
          <code>
            <h3 className="background">
              Background = <strong>{"{"}</strong>
              <p>
                animación, música, gastronomía, ilustración, arquitectura,
                diseño industrial, motion graphics, IOT, Arduino/Raspberry,
                robots, sensores, drones, carpintería, energias limpias,
                agricultura vertical, realidad aumentada, inteligencia
                artificial, big data, en fin...
              </p>
              <strong>{"}"}</strong>
            </h3>
          </code>
          <h2>
            Me apasiona diseñar tecnología para crear{" "}
            <strong>productos útiles y estéticos para el mundo. </strong>
          </h2>
        </article>
      </section>
      <section className="slide text">
        <article>
          <p>Hoy aprendo</p>
          <h2>
            <strong>
              Node.js avanzado, <br />
              MongoDB y <br />
              CSS avanzado.
            </strong>
          </h2>
          <p>
            Después, quiero ahondar en Patrones de diseño y y vizualizaciones con
            Three.js, D3.js o py5.
            <br />
            <strong>
              No importa dónde, lo que importa es nunca parar de aprender.
            </strong>
          </p>
        </article>
      </section>
      <section className="slide text">
        <article>
          <p className="thanks">
            <strong>Gracias por visitar mi sitio!</strong>
          </p>
          <p>
            Esto sigue en construcción, vuelve pronto para ver más
            actualizaciones.
          </p>
          <h2>
            Ve mi <strong>portafolio</strong> para más detalles.
          </h2>
        </article>
      </section>
    </div>
  );
};

export default History;
