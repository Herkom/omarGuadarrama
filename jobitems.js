const jobItems = [
    {
        name: 'Extracto',
        description: 'Las noticias más relevantes de los medios locales del Estado de Tabasco, México.',
        role: 'Full Stack Developer',
        status: 'Actualmente en uso, Julio 2021',
        explanation:[
            `Dentro del OSFE Tabasco, una de las actividades diarias es recopilar 2 veces al día las noticias más recientes para mantener informado al Fiscal Superior del acontecer diario. Estás noticias son de temas como la vida política del Estado, obras públicas, dinero público, menciones a la institución, etc.
            Para reunirlas visitamos los sitios web de los distintos medios y sus páginas de Twitter o Facebook.
            Después se entregan en un documento PDF. Es un proceso de 'extracción' que consume mucho tiempo.`,
            `Este proyecto surgió por iniciativa propia. Por curiosidad en el tema de Web Scraping tomé dos cursos, uno de fundamentos de Web Scraping con Python y otro de Scrapy.
            Ahora que sabía cómo extraer información de forma automática de las páginas web me pareció que el proceso de creación de la síntesis de noticias podría ser acelerado.`,
            `Se buscó un diseño sencillo donde la información fuera la prioridad.
            Sabía que el principal lector sería el Fiscal Superior, que usa anteojos, por lo cual el tamaño de letra debía ser mayor de lo usual.
            También sabía que el principal medio de lectura sería por teléfono móvil, por eso el desarrollo fue Mobile First. El mayor obstáculo fue usar la API de Zyte. Al momento de estar desarrollando el proyecto, ScrapingHub estaba pasando a ser Zite, por esa razón la documentación no era lo bastante clara o había ciertos huecos en como mandar a iniciar el trabajo de la araña para hacer el scraping. Tarde un poco en resolver eso pero al final cada trabajo era llamado de forma correcta.`,
            `Por cada extracción se manda a llamar la araña de Scrapy, por eso era necesario calendarizan los trabajos para hacerlos de forma automática.
            La licencia gratuita de Zyte no permite calendarizar los trabajos. Por esto es que opte por Azure Functions que usa CRON, este servicio es gratuito hasta cierta cantidad de funciones y de uso computacional.
            Se uso Firebase para almacenar el número de identificación de cada trabajo para ser llamado en la API de Zyte. Use Vue por ser un framework fácil de usar y con un buen desempeño.`,
            `Cada noticia es rankeada de acuerdo a un sistema de puntos. Entre más palabras contenga la noticia mayor puntuación obtiene. Esto es para medir su relevancia. Existen ciertas palabras que destacan demasiado por ser directamente relacionadas con el OSFE y existe la posibilidad de agregar o quitar palabras si así lo deseamos.`,
        ],
        technologies: ['Python', 'Scrapy', 'API de Zyte, anteriormente Scrapinghub', 'Azure', 'Firebase', 'Vue', 'HTML', 'CSS', 'JavaScript', 'Figma'],
        images: [
            'extracto0.jpg',
            'extracto1.jpg',
            'extracto2.jpg',
            'extracto3.jpg',
            'extracto4.jpg',
            'extracto5.jpg',
        ],
        conclusion:[
            'Este fue un proyecto bastante divertido de desarrollar. Tuve momentos felices y tristes pero al final el resultado me parece bueno para ser mi primer proyecto de iniciativa completamene propia.',
            'Para la siguiente iteración me gustaría probar otras formas de hacer el ranking de noticias, debe existir una forma más eficiente de hacerlo. Posiblemente con inteligencia artificial.',
            'Tiempo más tarde descubrí un problema, los medios locales no siempre actualizan de forma inmediata sus páginas principales o aparecen noticias de fechas pasadas.',
            'Dónde sí que publican los links de sus noticias más recientes es en Twitter, por eso conseguí mi cuenta de desarrollador. Extraeré los twits relevantes y apareceran en el feed.',
            'También sería buena idea poner un tipo de alerta cuando una noticia hable directamente de la institución, ya qué en teoría son las que más importan.',
            'El crear este proyecto por mi cuenta me permitió entender dos cosas: el poder y responsabilidad de quién toma las decisiones en el proyecto y la importancia de tener un equipo de desarrollo.',
        ],
    },


    {
        name: 'OSFEdemy / SICAP',
        description: 'Sistema de Registro y Control de Capacitaciones',
        role: 'Full Stack Developer',
        status: 'Actualmente en uso, Julio 2021',
        explanation:[
            'A causa de la pandemia de COVID-19 se solicitó desarrollar una plataforma de enseñanza en línea para los cursos que ofreciera el OSFE Tabasco.',
            'Un compañero se encargaría del Back-End mientras yo del Front-End. La propuesta era tener las clases de los cursos grabadas en formato de video para así servirlos on demand.',
            'Se dio luz verde a lo planeado, pero al enumerar los servicios e infraestructura necesarios para la cantidad de usuarios que la institución pretendía instruir, la parte administrativa de la institución se dio cuenta que el presupuesto era más alto del que se pretendía destinar al proyecto.',
            'Se nos pidió simplificar el proyecto y que unicamente fuera la plataforma de registro para los cursos.',
            'El diseño y prototipo original fueron creados en Adobe XD. Se hizo un diseño Desktop first, buscamos un diseño amigable para el usuario y agradable a la vista.',
            'Por curiosidad había tomado un curso de Svelte y en conjunto con mi compañero decidimos usarlo por lo novedoso que era.',
            'En medio del proyecto, a mi compañero lo asignan a otro proyecto, se hacen cambios en el diseño de la interfaz y yo me quedo a cargo de todo.',
            'Modelé las bases de datos de alumnos, profesores y cursos en SQL. ',
            'La API para la consulta de datos, los scripts para el registro de alumnos, subida de archivos para material de curso, logueo de usuarios y creación cursos nuevos fueron creados con PHP.',
            'Use jsPDF para la generación de constancias y/o reconocimientos, js-base64 para sus imagenes de fondo. SheetJS para listas de registro y de asistencia. IziToast para notificaciones.',
            'También maqueté un correo electrónico a modo de respuesta ante el registro exitoso a un curso.',
            'Un obstaculo al que me enfrenté y que me llevó a varios momentos de frustración fue que Svelte tiene ciertos problemas con el manejo de varios archivos con formularios. Al final se pudo dar la vuelta al problema, pero llevo algo de tiempo.',
        ],
        images: [
            'osfedemy_0.jpg',
            'osfedemy_1.jpg',
            'osfedemy_2.jpg',
            'osfedemy_3.jpg',
            'osfedemy_4.jpg',
            'osfedemy_5.jpg',
            'osfedemy_6.jpg',
            'osfedemy_7.jpg',
            'osfedemy_8.jpg',
            'osfedemy_9.jpg',
            'osfedemy_10.jpg',
            'osfedemy_11.jpg',
            'osfedemy_12.jpg',
            'osfedemy_13.jpg',
        ],
	    technologies: ['Svelte', 'SQL', 'HTML', 'CSS', 'Adobe XD', 'PHP', 'JavaScript'],
        conclusion: [
            'Sabiamos que podríamos enfrentarnos a poca documentación porque Svelte es un framework relativamente nuevo.',
            'Sin embargo, aunque su comunidad es pequeña, los bugs o carencias del framework estabam bien documentadas y tomadas en cuenta para futuras iteraciones.', 
            'Definitivamente volvería a usar Svelte en proyectos futuros.',
            'Cuando me quedé sólo me sentí inseguro porque no sabía si era capaz de llevar a buen termino este proyecto.',
            'Mi síndrome de impostor salío a relucir en varias ocasiones. Entendí que no lo sé todo, pero que todo se puede aprender.',
            'Aprendí a entender el motivo de mi frustración y a tener paciencia conmigo mismo',
            'Paciencia para entender a profundidad los problemas, reflexionar como resolverlos con mi código y en caso de no saber como resolverlos no desesperar y darme el tiempo para aprender a solucionarlos.',
            'Y por último entendí muy bien a que se refiere la frase tan usada en el Design Thinking: "Falla rápido, falla barato".',
        ],
    },


    {
        name: 'Calendario Interactivo',
        description: 'Calendario de Obligaciones Generales de los Entes Públicos del Estado de Tabasco',
        role:'Front-End',
        status:'Actualmente en uso, Julio 2021',
        explanation:[
            'Cada año los Entes Públicos están sujetos a cumplir con trámites dentro de ciertos plazos de tiempo.',
            'Una excusa común era que los Entes desconocían dichos plazos y por lo cual se atrasaban o no cumplían con sus obligaciones.',
            'Por esto se requirió el diseño de un calendario donde se especificarán las fechas importantes e inicio o fin de plazos.',
            'Durante varios años se diseñaron calendarios impresos que eran distribuidos a los Entes Públicos, pero esto conllevaba un gasto presupestal que usualmente en el sector público está muy restringido.',
            'Se decidio volverlo digital. Sabia que la cantidad de texto legal que habría sería enorme por eso en el diseño original se buscaba una interfaz muy limpia y directa.',
            'Los cambios vinieron a mitad del proyecto debido al gusto de los directivos y se tuvo que seguir esa línea.',
            'Algo más que retrasó mucho la salida de este proyecto fueron los constantes cambios en los textos de la información',
            'Se pidió más tiempo para crear una versión mobile, pero la parte directiva opinó que el proyecto bastaba para las necesidades de los entes y se le dió fin.'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript'],
        images: [
            'calendario-01.jpg',
            'calendario-02.jpg',
            'calendario-03.jpg',
            'calendario-04.jpg',
            'calendario-05.jpg',
        ],
        conclusion:[
            'Me hubiera gustado tener más tiempo para completar bien el proyecto',
            'De tener la oportunidad me gustaría que en la siguiente iteración usaramos componentes, especificamente en los días del calendario y en el recuadro donde se despliega la información.',
            'Deseaba implementar una versión vertical, que en boceto se veia muy bien.',
            'Entendí que a veces tenemos que ceder a decisiones que pueden ser contrarias a nuestra forma de pensar, pero es más fácil aceptarlas si vienen con conocimiento y criterio.',
        ],
    },


    {
        name: 'Bolsa de Trabajo',
        description: 'Formulario de registro para la Bolsa de Trabajo del Órgano Superior de Fiscalización del Estado de Tabasco',
        role:'Front-End developer',
        status:'Actualmente en uso, Julio 2021',
        explanation:[
            'El OSFE necesitaba una base de datos de los posibles candidatos a ocupar alguna plaza vacante.',
            'Pidieron un formulario de registro donde se solicitara a que "sección" del OSFE deseaban entrar.',
            'Esto es a causa de que una parte de los registrados solo sería vista por el depto. de Recursos Humanos y la otra por la Unidad Técnica del Servicio Fiscalizador de Carrera.',
            'Se dió la opción de crear el formulario completamente digital, pero el depto. de Recursos Humanos pidió que los usuarios llenaran un formato en PDF y lo cargaran en el formulario.',
            'Diseñe el formulario basandome en un diseño del youtuber Kevin Powell.',
            'Diseñé el formato en Illustrator y en Acrobat se colocaron los espacios a llenar.',
            'Modelé la base de datos en MySQL',
            'Cree los scripts de escritura y consulta a la base de datos en PHP.',
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'PHP', 'Illustrator', 'Acrobat'],
        images: [
            'bolsaDeTrabajo_1.jpg',
            'bolsaDeTrabajo_2.jpg',
            'bolsaDeTrabajo_3.jpg',
            'bolsaDeTrabajo_4.jpg',
            'bolsaDeTrabajo_5.jpg',
        ],
        conclusion:[
            'Aprendí mucho en este proyecto ya que era la primera vez usaba PHP, que trabajaba tanto con formularios, que modelaba y hacia consultas a una base de datos.',
        ],
    },


    {
        name: 'Sitio Oficial del OSFE Tabasco',
        description: 'Sitio Web Oficial del Órgano Superior de Fiscalización del Estado de Tabasco',
        role:'Front-End',
        status:'Actualmente en uso, Julio 2021',
        explanation: [
            'Nos solicitaron el rediseño de la página del sitio oficial del OSFE Tabasco.',
            'Se presentaron 2 propuestas de diseño. El Fiscal Superior eligió una versión "híbrida" de las 2.',
            'Este proyecto lo realizé en conjunto con un compañero. Él se enfocó en el BackEnd y en el manejo de WordPress.',
            'Yo me enfoqué principalmente en el menú desplegable y en animaciónes y estilos con CSS.'
        ],
        technologies: ['HTML', 'CSS', 'WordPress', 'JavaScript' ],
        images: [
            'osfeTabasco_1.jpg',
            'osfeTabasco_2.jpg',
        ],
        conclusion: [
            'Fue la primera vez que trabajaba en conjunto con otro compañero en un proyecto de software.',
            'Conjugar nuestras propuestas y adaptar nuestras formas de trabajo fue un proceso muy interesante.',
            'Era la primera vez que trabajaba con WordPress.',
            'Recibimos muchos comentarios elogiando el resultado final de nuestro trabajo.',
        ],
    },


    {
        name: 'Reygar',
        description:'Construcción y Mantenimiento Insdustrial',
        role:'Diseñador Gráfico y Front-End developer',
        status:'Actualmente en uso, Julio 2021',
        explanation:[
            'Un amigo se dedica al negocio de la construcción. Su empresa comenzó a crecer, compañías grandes le pedían su página web, curriculum o portafolio de servicios.',
            'Compro un dominio, una plantilla prediseñada para su página. Diseñó su logo, su imagen corporativa, su papelería empresarial.',
            'Algunos de sus colegas le comentaron que se veía algo "informal" o que "le faltaba diseño". Es cuando me pide ayuda.',
            'La empresa ya era reconocida con el logo que mi amigo diseñó y con él se personalizaron varios artículos.',
            'Por esto considere que por el momento no valía la pena cambiar su logo, ya que cumplía con su función principal, identificar. Cambié todo el diseño editorial de su CV y portafolio.',
            'En cuanto a la página web, la plantilla se adaptó de acuerdo a la imagen de la empresa.',
        ],
        technologies: ['InDesign', 'Photoshop', 'Illustrator', 'HTML', 'CSS', 'JavaScript',],
        images: [
            'reygar1.jpg',
            'reygar2.jpg',
        ],
        conclusion:[
            'Nunca había trabajado con páginas prediseñadas y me llamo mucho la atención como están estructuradas.',
            'Había tomado un pequeño curso de Bootstrap y eso me facilitó el cambiar la estructura sin romper la página.',
        ]
    },

    {
        name: 'Diseño Gráfico',
        description: 'Diseño de material gráfico para el OSFE Tabasco',
        role:'Diseñador Gráfico',
        status:'Actualmente en uso, Julio 2021',
        explanation:[
            'En el OSFE Tabasco, aparte de desempeñarme como Front-End developer, también he diseñado mucho material para medios electrónico o impresos.',
            'Desde portadas de revista, reconocimientos, personificadores, pasando por articulos promocionales hasta posts de redes sociales.'
        ],
        technologies: ['Indesign', 'Illustrator', 'Photoshop',],
        images: [
            'editorial0.jpg',
            'editorial1.jpg',
            'editorial2.jpg',
            'editorial3.jpg',
            'editorial4.jpg',
            'editorial5.jpg',
            'editorial6.jpg',
            'editorial7.jpg',
            'logo_1.jpg',
            'logo_2.jpg',
            'logo_3.jpg',
        ],
        conclusion:'',
    },

    {
        name: 'Ilustración y Animación',
        description:'',
        role:'Ilustrador y/o Animador',
        status:'Finalizado, julio ',
        explanation:[
            'Dentro de mis primeras experiencias en el mundo laboral fue como ilustrador y animador.',
            'Primero fue en el estudio de animación DiezyMedia.',
            'Ilustré personajes, objetos y fondos para una serie de cápsulas animadas llamadas "Dosis de Ciencia" con el Dr. René Druke para el Universum, Museo de las Ciencias de la UNAM. Algunas aún se pueden ver en YouTube.',
            'Posteriormente trabajé en la Dirección General de Televisión Educativa donde ilustré y animé material educativo para Telesecundarias y spots del gobierno federal.',
        ],
        technologies: [ 'Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro', 'ToonBoom',],
        images: [
            'escena1.jpg',
            'escena2.jpg',
            'escena3.jpg'
        ],
        conclusion:[
            'Disfrute de gran manera está primera etapa de mi carrera.',
            'Amo la ilustración, pero sobre todo la animación.',
            'Lo que aprendi de animación y edición me sirvió de mucho para entender de forma más fácil las animaciones en la web.',
        ],
    },
]