const jobItems = [
    {
        name: 'Extracto',
        description: 'Las noticias más relevantes de los medios locales del Estado de Tabasco, México.',
        role: 'Full Stack Developer',
        status: 'Actualmente en uso, julio 2021',
        explanation:[
            `Dentro del OSFE Tabasco, una de las actividades diarias es recopilar dos veces al día las noticias más recientes para mantener informado al Fiscal Superior del acontecer diario. 
            Estás noticias son de temas como la vida política del Estado, obras públicas, uso de dinero público, menciones a la institución, etc.
            Para reunirlas visito los sitios web de los distintos medios, sus páginas de Twitter y Facebook.
            Después las noticias se entregan en un documento PDF. Es un proceso de 'extracción' que consume mucho tiempo.`,
            `Este proyecto surge por iniciativa propia. Por curiosidad en el tema de Web Scraping tomo dos cursos, uno de fundamentos de Web Scraping con Python y otro de Scrapy.
            Ya que sé cómo extraer información de forma automática de las páginas web entiendo que el proceso de creación de la síntesis de noticias puede ser acelerado.`,
            `Busco un diseño sencillo donde la información fuera la prioridad.
            Sé que el principal lector es el Fiscal Superior, que usa anteojos, por lo cual el tamaño de letra debe ser mayor de lo usual.
            También sé que el principal medio de visualización es por teléfono móvil, por eso el desarrollo es Mobile First.`,
            `El mayor obstáculo es usar la API de Zyte. Durante el desarrollo, ScrapingHub pasa a ser Zite. 
            Su API cambia, la documentación no es lo bastante clara o hay ciertos huecos en como mandar a iniciar el trabajo de la araña para hacer scraping. 
            Tado un poco en resolver eso pero al final cada trabajo es llamado de forma correcta.`,
            `Por cada extracción se manda a llamar la araña de Scrapy, por eso es necesario calendarizan los trabajos para hacerlos de forma automática.
            La licencia gratuita de Zyte no permite calendarizar los trabajos. Por esto es que opte por Azure Functions, que usa CRON. 
            Este servicio es gratuito hasta cierta cantidad de funciones y de uso computacional.
            Se usa Firebase para almacenar el número de identificación de cada trabajo y ser llamado en la API de Zyte. Uso Vue por ser un framework fácil de usar y con un buen desempeño.`,
            `Cada noticia es rankeada de acuerdo a un sistema de puntos. Entre más palabras contenga la noticia mayor puntuación obtiene. Esto es para medir su relevancia. 
            Existen ciertas palabras que destacan demasiado por ser directamente relacionadas con el OSFE y existe la posibilidad de agregar o quitar palabras si así lo deseamos.`,
        ],
        technologies: ['Python', 'Scrapy', 'Zyte-Scrapinghub', 'Azure', 'Firebase', 'Vue', 'HTML', 'CSS', 'Javascript', 'Figma'],
        images: [
            'extracto0.jpg',
            'extracto1.jpg',
            'extracto2.jpg',
            'extracto3.jpg',
        ],
        conclusion:[
            `Este fue un proyecto bastante divertido de desarrollar. Tuve momentos felices y tristes pero al final el resultado me parece bueno para ser mi primer proyecto de iniciativa completamene propia.`,
            `Para la siguiente iteración me gustaría probar otras formas de hacer el ranking de noticias, debe existir una forma más eficiente de hacerlo. Posiblemente con inteligencia artificial.`,
            `Tiempo más tarde descubrí un problema, los medios locales no siempre actualizan de forma inmediata sus páginas principales o aparecen noticias de fechas pasadas. 
            Dónde sí que publican los links de sus noticias más recientes es en Twitter, por eso conseguí mi cuenta de desarrollador. Extraeré los twits relevantes y apareceran en el feed.`,
            `También sería buena idea poner un tipo de alerta cuando una noticia hable directamente de la institución, ya qué en teoría son las que más importan.`,
            `El crear este proyecto por mi cuenta me permitió entender dos cosas: el poder y responsabilidad de quién toma las decisiones en el proyecto y la importancia de tener un equipo de desarrollo.`,
        ],
    },


    {
        name: 'OSFEdemy / SICAP',
        description: 'Sistema de Registro y Control de Capacitaciones',
        role: 'Full Stack Developer',
        status: 'Actualmente en uso, julio 2021',
        explanation:[
            'A causa de la pandemia de COVID-19 se solicita desarrollar una plataforma de enseñanza en línea para los cursos que ofrece el OSFE Tabasco.',
            'Un compañero se encarga del Back-End mientras yo del Front-End. La propuesta es tener las clases de los cursos grabadas en formato de video para así servirlas on demand.',
            'Se da luz verde a lo planeado, pero al enumerar los servicios e infraestructura necesarias para la cantidad de usuarios que la institución pretende instruir, la parte administrativa de la institución se da cuenta que el presupuesto es más alto del que se pretende destinar al proyecto. Se pide simplificar el proyecto y unicamente sea la plataforma de registro para los cursos.',
            'El diseño y prototipo original son creados en Adobe XD. Buscamos un diseño Desktop first, amigable para el usuario y agradable a la vista. Por curiosidad tomo un curso de Svelte y en conjunto con mi compañero decidimos usarlo por lo novedoso que es. En medio del proyecto, a mi compañero lo asignan a otro proyecto. Se hacen cambios en el diseño de la interfaz y me quedo a cargo del proyecto.',
            'Modelo las bases de datos de alumnos, profesores y cursos en SQL. La API para la consulta de datos, los scripts para el registro de alumnos, subida de archivos para material de curso, logueo de usuarios y creación cursos nuevos son desarrollados en PHP. Uso jsPDF para la generación de constancias y/o reconocimientos, js-base64 para sus imagenes de fondo. SheetJS para listas de registro y de asistencia. IziToast para notificaciones. También maqueto un correo electrónico a modo de respuesta ante el registro exitoso a un curso.',
            'Un obstaculo al que me enfrento y que me lleva a varios momentos de frustración es que Svelte tiene ciertos problemas con el manejo de varios archivos con formularios. Al final pude dar la vuelta al problema, aunque llevo algo de tiempo.',
        ],
        images: [
            'osfedemy_0.jpg',
            'osfedemy_1.jpg',
            'osfedemy_2.jpg',
            'osfedemy_3.jpg',
            'osfedemy_4.jpg',
            'osfedemy_5.jpg',
            'osfedemy_6.jpg',
            'osfedemy_11.jpg',
            'osfedemy_7.jpg',
            'osfedemy_8.jpg',
            'osfedemy_9.jpg',
            'osfedemy_10.jpg',
            'osfedemy_12.jpg',
        ],
	    technologies: ['Svelte', 'SQL', 'HTML', 'CSS', 'Adobe XD', 'PHP', 'Javascript'],
        conclusion: [
            'Sabiamos que podríamos enfrentarnos a poca documentación porque Svelte es un framework relativamente nuevo. Sin embargo, aunque su comunidad es pequeña, los bugs o carencias del framework estaban bien documentadas y tomadas en cuenta para futuras iteraciones. Definitivamente volvería a usar Svelte en proyectos futuros.',
            'Cuando me quedé sólo sentí inseguridad por no saber si era capaz de llevar a buen termino este proyecto. Mi síndrome de impostor salío a relucir en varias ocasiones. Entendí que no lo sé todo, pero que todo se puede aprender.',
            'Aprendí a entender el motivo de mi frustración y a tener paciencia conmigo mismo. Paciencia para entender a profundidad los problemas, reflexionar como resolverlos con mi código y en caso de no saber como resolverlos no desesperar y darme el tiempo para aprender a solucionarlos.',
            'Entendí a que se refiere la frase tan usada en el Design Thinking: "Falla rápido, falla barato".',
        ],
    },


    {
        name: 'Calendario Interactivo',
        description: 'Calendario de Obligaciones Generales de los Entes Públicos del Estado de Tabasco',
        role:'Front-End',
        status:'Actualmente en uso, julio 2021',
        explanation:[
            'Cada año los Entes Públicos están sujetos a cumplir con trámites dentro de ciertos plazos de tiempo. Una excusa común de los Entes es que desconocen dichos plazos y por lo tanto se atrasaban o no cumplían con sus obligaciones.',
            'Por esto se pide el diseño de un calendario donde se especifiquen las fechas importantes e inicio o fin de plazos. Durante varios años se diseñan calendarios impresos que eran distribuidos a los Entes Públicos, pero esto conlleva un gasto y es usual en el sector público que esto sea muy restringido.',
            'Se vuelve digital. Sé que la cantidad de texto legal es enorme por esto en el diseño original se busca una interfaz limpia y directa.',
            'Los cambios vienen a mitad del proyecto debido decisiones de parte de los directivos. Los cambios constantes en los textos de la información retrasan mucho la salida de este proyecto',
            'Solicito más tiempo para crear una versión mobile, pero los directivos deciden que el proyecto bastaba para las necesidades de los entes y se le da fin.'
        ],
        technologies: ['HTML', 'CSS', 'Javascript'],
        images: [
            'calendario-00.jpg',
            'calendario-01.jpg',
            'calendario-02.jpg',
            'calendario-03.jpg',
            'calendario-04.jpg',
            'calendario-05.jpg',
        ],
        conclusion:[
            'Me encantaría regresar al proyecto para completarlo de forma adecuada.',
            'De tener la oportunidad en la siguiente iteración usaría componentes, especificamente en los días del calendario y en el recuadro donde se despliega la información. Deseaba implementar una versión vertical, que en boceto se veia muy bien.',
            'Entendí que a veces tenemos que ceder a decisiones que pueden ser contrarias a nuestra forma de pensar, pero es más fácil aceptarlas si vienen con conocimiento y criterio.',
        ],
    },


    {
        name: 'Bolsa de Trabajo',
        description: 'Formulario de registro para la Bolsa de Trabajo del Órgano Superior de Fiscalización del Estado de Tabasco',
        role:'Front-End developer',
        status:'Actualmente en uso, julio 2021',
        explanation:[
            'El OSFE necesita una base de datos de los posibles candidatos a ocupar alguna plaza vacante.',
            'Se pide un formulario de registro donde se especifica a que "sección" del OSFE se desea entrar. Esto es por que una parte de los registrados solo es vista por el depto. de Recursos Humanos y la otra por la Unidad Técnica del Servicio Fiscalizador de Carrera.',
            'Se da la opción de crear el formulario completamente digital, pero el depto. de Recursos Humanos exige que los usuarios llenen un formato en PDF y lo carguen en el formulario.',
            'Diseño el formulario basandome en un diseño del youtuber Kevin Powell. Se crea el formato en Illustrator y en Acrobat se colocaron los espacios a llenar.',
            'Modelé la base de datos en MySQL. Cree los scripts de escritura y consulta a la base de datos en PHP.',
        ],
        technologies: ['HTML', 'CSS', 'Javascript', 'SQL', 'PHP', 'Illustrator', 'Acrobat'],
        images: [
            'bolsaDeTrabajo_0.jpg',
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
        status:'Actualmente en uso, julio 2021',
        explanation: [
            'Se solicita el rediseño de la página del sitio oficial del OSFE Tabasco. Presentamos dos propuestas de diseño. El Fiscal Superior elige una versión "híbrida" entre las dos propuestas.',
            'Un compañero se enfoca en el BackEnd y en el manejo de WordPress. Yo me enfoco en el menú desplegable, en animaciónes y estilos con CSS.'
        ],
        technologies: ['HTML', 'CSS', 'WordPress', 'Javascript' ],
        images: [
            'osfeTabasco_0.jpg',
            'osfeTabasco_1.jpg',
            'osfeTabasco_2.jpg',
        ],
        conclusion: [
            'Fue la primera vez que trabajaba en conjunto con otro compañero en un proyecto de software. Conjugar nuestras propuestas y adaptar nuestras formas de trabajo fue un proceso muy interesante.',
            'También fue la primera vez que trabajaba con WordPress.',
            'Recibimos muchos comentarios elogiando el resultado final de nuestro trabajo. 😁',
        ],
    },


    {
        name: 'Reygar',
        description:'Construcción y Mantenimiento Insdustrial',
        role:'Diseñador Gráfico y Front-End developer',
        status:'Actualmente en uso, julio 2021',
        explanation:[
            'Un amigo se dedica al negocio de la construcción. Su empresa comienza a crecer. Compañías grandes piden su página web, curriculum o portafolio de servicios.',
            'Mi amigo compra un dominio y una plantilla prediseñada para su página. Él diseña su logo, su imagen corporativa y su papelería empresarial. Algunos de sus colegas le comentan que luce algo "informal" o el famoso "le falta diseño". Es cuando pide mi ayuda.',
            'La empresa empezaba a ser reconocida con el logo que mi amigo diseñó y se personalizaron varios artículos con ese mismo logo. Por esta razón considero que por el momento no valía la pena cambiar su logo, ya que cumple con su función primordial, que es identificar a la empresa. Yo cambio todo el diseño editorial de su CV y portafolio. También realizo el diseño editorial de su manual de seguridad.',
            'En cuanto a la página web, la plantilla se adapta de acuerdo a la imagen de la empresa.',
        ],
        technologies: ['InDesign', 'Photoshop', 'Illustrator', 'HTML', 'CSS', 'Bootstrap', 'Javascript',],
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
        status:'Actualmente en uso, julio 2021',
        explanation:[
            'En el OSFE Tabasco, aparte de desempeñarme como Front-End developer, también diseño mucho material para medios electrónicos o impresos.',
            'Desde portadas de revista, reconocimientos, personificadores, toma y edición de video, pasando por articulos promocionales hasta posts de redes sociales.'
        ],
        technologies: ['InDesign', 'Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro',],
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
            'Mis primeras experiencias en el mundo laboral fueron siendo ilustrador y animador.',
            'Primero, en el estudio de animación DiezyMedia. Ilustro personajes, objetos y fondos para una serie de cápsulas animadas llamadas "Dosis de Ciencia" con el Dr. René Druke para el Universum, Museo de las Ciencias de la UNAM. Algunas aún se pueden ver en YouTube.',
            'Después trabajo en la Dirección General de Televisión Educativa, donde ilustro y animo material educativo para Telesecundarias y spots del gobierno federal.',
        ],
        technologies: [ 'Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro', 'ToonBoom',],
        images: [
            'escena0.jpg',
            'escena1.jpg',
            'escena2.jpg',
            'escena3.jpg',
            'escena4.jpg',
            'escena5.jpg',
            'escena6.jpg',
            'escena7.jpg',
            'escena8.jpg',
            'escena9.jpg',
            'escena10.jpg',
            'escena11.jpg',
            'escena12.jpg',
            'escena13.jpg',
            'escena14.jpg',
            'escena15.jpg',
            'escena16.jpg',
            'escena17.jpg',
            'escena18.jpg',
            'escena19.jpg',
            'escena20.jpg',
            'escena21.jpg',
            'escena22.jpg',
            'escena23.jpg',
            'escena24.jpg',
        ],
        conclusion:[
            'Disfrute mucho esta primer etapa de mi carrera.',
            'Amo la ilustración, pero sobre todo la animación. Lo que aprendí de animación y edición me sirvió mucho para entender de forma más fácil las animaciones en la web.',
        ],
    },
]