import React from 'react';

// COMPONENTS
import { WordsColor } from 'components/LayoutHome/styles';

// CONSTANTS
import DREAMTEAM from 'constants/dreamTeam';
import TSPNETWORKS from 'constants/tspNetworks';
import AUTHOR from 'constants/author';

const NAVLINKS = [
  { name: "Features", path: "#features" },
  { name: "Roadmap", path: "#roadmap" },
  { name: "Dream Team", path: "#dreamteam" },
  { name: "Disrupción", path: "/disruption" }
];

const ES = {
  navLinks: NAVLINKS,
  hero: {
    title: "Tokeniza tus emociones",
    description: "La primer Dapp que le dá valor a tus emocione. ¡Haz llover Tokens!",
    cta: "Súmate",
    scta: "Litepaper"
  },
  features: [
    {
      isReverse: true,
      title: <span>¿Qué rayos es <WordsColor color="neonBlue">Token Sport?</WordsColor></span>,
      description: "Es la primer Dapp (aplicación descentralizada) que permite a los usuarios compartir sus emociones en los deportes y por medio de tecnología BlockChain, tokenizar sus datos.",
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FQue-rayos-es-token-sport%402x.png?alt=media&token=7b471b90-2675-4b52-a742-cefbbba70ed4",
      secondaryInfo: [
        {
          title: "¿Qué es TSP?",
          description: "El token TSP es un activo digital de Token Sport que representa el valor de las interacciones.  Cuanto mayor sea la cantidad de usuarios e interacciones, más valor tendrán tus TSP.",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAduenate-de-tus-datos%402x.png?alt=media&token=89491ea8-7a17-437d-850d-21d0af7afd4c",
          altImage: "¿Qué es TSP?"
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Comparte tus <WordsColor color="neonOrange">emociones</WordsColor></span>,
      description: "Elige el partido de fútbol en el que quieras interactuar con la comunidad. Aplaude o Abuchea a los jugadores, jueces y técnicos en cada partido.",
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComparte-emociones%402x.png?alt=media&token=4fe6a441-16cf-49b0-8465-1d32cf297e13",
      secondaryInfo: [
        {
          title: "Apuestas en vivo",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FNotificaciones-tiempo-real%402x.png?alt=media&token=979f2660-fd2a-47b2-a72c-24179f4332f4",
          altImage: "Apuestas en vivo",
          description: "Elige el jugador que creas que será el más Aplaudo y el más Abucheado en cada partido y gana más tokens TSP"
        },
        {
          title: "Arma tu once ideal",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2F11-ideal%402x.png?alt=media&token=371e34bf-6e27-4e2d-902b-5a9fd3bdae66",
          altImage: "Arma tu once ideal",
          description: "Elige tu equipo perfecto con los jugadores que creas que serán los más aplaudidos en todo el año y compite con los once ideales de toda la comunidad. El ganador se llevará un gran bote de tokens TSP al finalizar el torneo."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Salimos en <WordsColor color="neonGreen">TV</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSalimos-en-tv%402x.png?alt=media&token=9b2bec23-79c9-4d5e-8843-892ff13734f3",
      description: "Por medio de una API, los medios y auspiciantes podrán recibir estadísticas en vivo de los jugadores más aplaudidos y/o abucheados del momento y compartirlo durante la transmisión.",
      secondaryInfo: [
        {
          title: "Estadísticas",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FEstadisticas-en-vivo%402x.png?alt=media&token=ace364a7-ccd6-45ed-a4e7-5722cd15e3ac",
          altImage: "Estadisticas",
          description: "Clubes, periodistas, medios y compañías podrán acceder a los datos específicos de cada jugador, técnico o juez. Al hacerlo, deberá abonar con tokens TSP que serán distribuidos entre toda la comunidad"
        }
      ]
    },
    {
      isReverse: false,
      title: <span><WordsColor color="neonBlue">¡Tokenizamos!</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FTokenizamos%402x.png?alt=media&token=5d46e731-aadc-4754-aeea-689cdf8db3a2",
      description: "Por medio de Contratos Inteligentes los usuarios reciben TSP, que podrán intercambiar por Bitcoin, o consumir directamente en Tiendas y Comercios Aliados.",
      secondaryInfo: [
        {
          title: "Merchandising",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComercios-aliados%402x.png?alt=media&token=320b387a-c964-43f8-9581-7570f9baf8c7",
          altImage: "Merchandasing",
          description: "Podrás cambiar tus tokens TSP por merchandising de tu club favorito, entradas al estadio, membresías en centros deportivos y un sinfín de productos y servicios de aliados a Token Sport."
        },
        {
          title: "Exchange Propio",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPaso-a-paso%402x.png?alt=media&token=b6bf0a40-3618-4695-8668-1871297a8b3a",
          altImage: "Exchange",
          description: "Podrás intercambiar tus TSP por Bitcoin, Ethereum u otros criptoactivos aliados, para que puedas guardar o monetizar por dinero FIAT si lo deseas."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Sé parte de la <WordsColor color="neonOrange">comunidad</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSe-parte-de-la-comunidad%402x.png?alt=media&token=f93624de-5ecf-4392-89bd-230f31f2057a",
      description: "Edita, corrige y actualiza los datos de las ligas para mantener al día la información de los equipos. Por cada acción validada recibirás grandes recompensas",
      secondaryInfo: [
        {
          title: "Economía Disruptiva",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FDisruptiva-colaborativa%402x.png?alt=media&token=be871c20-9a9f-4d78-a944-e2e7861475a4",
          altImage: "Economia Disruptiva",
          description: "Podrás ver un listado de tareas relacionadas al proyecto y seleccionar en la que creas poder ayudar. Conforme vayas progresando recibirás TSP por tu importante labor."
        },
        {
          title: "¡Ayúdanos testeando!",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPrimero-en-probar%402x.png?alt=media&token=93a6b08a-db50-4986-afc3-d8f001f07017",
          altImage: "Ayudanos testeando",
          description: "Súmate de primeras a la comunidad, siendo “usuario tester” y ayúdanos en el desarrollo de la Dapp con sugerencias, propuestas, análisis, etc. Una Dapp hecha de los usuarios, para los usuarios!"
        }
      ]
    }
  ],
  roadmap: {
    title: "Roadmap",
    content: [
      {
        id: 1,
        date: "Q3 2018",
        goals: [
          "Lanzamiento público del proyecto.",
          "Whitepaper 1.0b."
        ],
        color: "neonBlue"
      },
      {
        id: 2,
        date: "Q4 2018",
        goals: [
          "Formación del Dream Team.",
          "Desarrollo de prueba de concepto."
        ],
        color: "neonOrange"
      },
      {
        id: 3,
        date: "Q1 2019",
        goals: [
          "Comienzo del desarrollo de app 1.0b.",
          "Creación de estrategias de marketing."
        ],
        color: "neonGreen"
      },
      {
        id: 4,
        date: "Q2 2019",
        goals: [
          "Lanzamiento al público de prueba de concepto.",
          "1era Ronda de Inversión Temprana."
        ],
        color: "opaqueBlue"
      },
      {
        id: 5,
        date: "Q3 2019",
        goals: [
          "Comienzo de desarrollo de Data API.",
          "Comienzo de desarrollo de Blockchain."
        ],
        color: "neonBlue"
      },
      {
        id: 6,
        date: "Q4 2019",
        goals: [
          "Whitepaper Update.",
          "2da Ronda de Inversión."
        ],
        color: "neonOrange"
      },
      {
        id: 7,
        date: "Q1 2020",
        goals: [
          "Lanzamiento de App 1.0b.",
          "Creación de la comunidad de usuarios.",
          "Nuevos negocios (Alianzas Estratégicas).",
          "Data Api 1.0b."
        ],
        color: "neonGreen"
      },
      {
        id: 8,
        date: "Q2 2020",
        goals: [
          "Desarrollo de sistemas de seguridad.",
          "Lanzamiento App 1.0.",
          "Contratos Inteligentes.",
        ],
        color: "opaqueBlue"
      },
      {
        id: 9,
        date: "Q3 2020",
        goals: [
          "Comienzo de desarrollo Exchange.",
          "Data API 1.0.",
        ],
        color: "neonBlue"
      },
      {
        id: 10,
        date: "Q4 2020",
        goals: [
          "Apertura a mercado (ITO).",
          "Creación de DAO.",
          "Lanzamiento Dapp."
        ],
        color: "neonOrange"
      }
    ]
  },
  tokenDist: {
    title: "Distribución de Tokens",
    values: [
      {
        title: "Desarrollo Inicial",
        percent: "1.13%",
        color: "neonBlue"
      },
      {
        title: "Etapa ITO",
        percent: "3.75%",
        color: "neonOrange"
      },
      {
        title: "Airdrops",
        percent: "2.5%",
        color: "neonGreen"
      },
      {
        title: "Recompensas",
        percent: "1.25%",
        color: "opaqueBlue"
      },
    ]
  },
  dreamTeam: {
    title: "Dream Team",
    description: "Descubre el equipo titular de Token Sport",
    team: DREAMTEAM
  },
  partners: {
    title: "Partners & Amigos",
    description: "¿Quiénes confían y apoyan a Token Sport?"
  },
  subscribe: {
    isReverse: true,
    title: <span>¡Suscríbete y sé parte de este <WordsColor color="neonGreen">Gran Equipo!</WordsColor></span>,
    description: "Tendrás acceso anticipado, pruebas gratis y recibirás novedades con todos los avances de Token Sport.",
    secondaryInfo: [
      {
        title: "Aporta tu granito",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAporta-tu-granito%402x.png?alt=media&token=a3b30ae2-674a-4c09-a701-31eac03c44d6',
        altImage: 'Aporta tu granito',
        description: "Únete a nosotros y tendrás la oportunidad de aportar tu grandioso talento y así hacer de Token Sport un proyecto cada vez mejor. No te preocupes si no sabes de tecnología, también puedes ayudarnos siendo un Tester oficial de Token Sport."
      },
      {
        title: "Conviértete en VIP",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FConviertete-en-vip%402x.png?alt=media&token=e3186a33-aaf6-439e-baad-6af7060a0a9a',
        altImage: 'Conviértete en VIP',
        description: "No creas que esto es otro recolector de Emails que te harán llegar basura cada día a tu correo ¡No!, en Token Sport apreciamos que te unas a nosotros y por eso te vamos a dar la mejor información relacionada al proyecto... y claro, uno que otro regalito :)."
      }
    ],
    form: {
      title: "Únete",
      nameInput: "Nombre",
      surnameInput: "Apellido",
      emailInput: "Email",
      copyButton: "UNIRSE"
    }
  },
  footer: {
    copyright: "Todos los derechos reservados ©",
    networks: {
      title: "Redes Sociales",
      description: "Siguenos para estar al tanto de todo",
      icons: TSPNETWORKS
    }
  },
  disruptivePost: {
    body: [
      {
        paragraph: "En los últimos 15 años hemos visto como grandes compañías han desaparecido gracias al avance tecnológico y la creación de diferentes herramientas para ganar terreno y adueñarse del mercado."
      },
      {
        paragraph: "Netflix desarrollando una poderosa plataforma y comprendiendo a la perfección los beneficios y el alcance de internet, ha montado un plan de negocio único y está desplazando a las salas de cine, incluso han ido más allá, haciendo sus propias producciones cinematográficas, liderando el mercado con cada producto."
      },
      {
        paragraph: "También existen otras compañías que, ingeniosamente crearon plataformas bajo el lema de \"Economía Colaborativa\" y han logrado impactar en cientos de países y poco a poco van ganando terreno en los mercados."
      },
      {
        paragraph: "Facebook, Google, Amazon, y cientos de compañías más podemos nombrar y realmente han generado un cambio trascendental en la humanidad."
      },
      {
        paragraph: "Algo en común entre todas estas compañías, es que generan cientos de miles de empleos en todo el mundo, creando así oportunidades para millones de personas, algunas cuestionadas por el tipo de contratación laboral. Así como también cabe destacar que incluso las que hablan de \"Economía Colaborativa\" son corporaciones con dueños y ejecutivos multimillonarios que toman decisiones para generar mayores ingresos, sin importar la decisión de sus empleados y/o consumidores."
      },
      {
        paragraph: "Uber, Rappi, Beat, AirBnb y muchas plataformas más en todo el mundo han generado cientos de millones de dolares por medio de una economía colaborativa, donde los usuarios se benefician realizando labores y en algunos casos arriesgando sus vidas, generando más ventas, más rápido, para incrementar aún más el valor de la compañía, y obviamente, repartir esas ganancias entre las juntas directivas y accionistas."
      },
      {
        paragraph: "Hace años vienen surgiendo nuevos negocios y estilos de vida, basados en la descentralización que utilizan para su ejecución una herramienta que cada vez se escucha más en todo el mundo y se llama BlockChain o Cadena de Bloques."
      },
      {
        paragraph: "Pero como a todo Blockbuster le llega su Netflix,  a estas compañías les está llegando su Blockchain, permitiendo crear proyectos descentralizados, basando la confianza de la comunidad en la bendita cadena de bloques, permitiendo a todos los usuarios ser dueños y partícipes en las tomas de decisiones, desarrollo y crecimiento de las nuevas organizaciones descentralizadas."
      },
      {
        paragraph: "Basado en un proyecto de hace 6 años y por medio de un sistema disruptivo, lanzamos a la comunidad Token Sport, la primer empresa que promete descentralizar y hacer partícipes a los usuarios en el desarollo y crecimiento de la Dapp (Aplicación Descentralizada) que permite a los hinchas tokenizar sus emociones."
      },
      {
        paragraph: "El impacto de Blockchain, sumado a una surgente \"Economía Disruptiva\" está cambiando la forma de entender los negocios y generando comunidades totalmente pro activas."
      },
      {
        paragraph: "Llegó el momento de escribir el futuro y tenemos en nuestras manos la posibilidad de ser parte de la 4ta re evolución industrial."
      },
      {
        paragraph: "Economía Disruptiva para el desarrollo y expansión de Token Sport:"
      },
      {
        paragraph: "Utilizando la tecnología BlockChain se han creado una cantidad de tokens TSP, registrados en la cadena de NEM bajo autoría y responsabilidad de Alejandro Fernandez, el creador de la idea y fundador del proyecto Token Sport."
      },
      {
        paragraph: "Durante los inicios del proyecto, se les dará un valor de 0.00771 a cada token que sea entregado a los integrantes del equipo estable, quienes confían 100% en el proyecto y estás dispuest@s a aportar todo su conocimiento y capacidades, trabajando apasionadamente para llevar adelante el proyecto."
      },
      {
        paragraph: "Estos integrantes pasan a ser el Dream Team de Token Sport, el motor principal, quienes mediante contratos con el fundador de la compañía (etapa centralizada), recibirán TSP en forma de intercambio por su aporte al desarrollo. "
      },
      {
        paragraph: "Durante la primer ronda de inversión, los integrantes del Dream Team tendrán la prioridad al momento de la venta de tokens; al momento de venderlos, toda la transacción quedará registrada bajo un contrato con Token Sport como mediador. Los inversionistas recibirán los TSP y el Dream Team recibirá moneda Fiat o Bitcoin."
      },
      {
        paragraph: "Además, una vez creados los contratos inteligentes, las billeteras de los integrantes del Dream Team mantendrán por siempre los porcentajes de participación de ese usuario, obteniendo siempre tokens TSP (según litepaper)."
      },
      {
        paragraph: "Una vez descentralizada la compañía y  mediante un sistema DAO (en inglés, organización autónoma descentralizada), aquellos usuarios que tengan mayor cantidad de TSP (inversionistas, Dream Team, usuarios, etc.), podrán tomar decisiones para el crecimiento de Token Sport y constantemente seguirán rigiendo los contratos inteligentes, programados con su porcentaje de participación."
      },
      {
        paragraph: "Al ser una compañía global, el crecimiento de Token Sport es exponencial y requiere de las personas mejor calificadas y apasionadas en lo que hacen, apostando a impactar positivamente en la economía y la disrupción del sistema como lo conocemos."
      },
      {
        paragraph: "Si eres una persona creativa, pro-activa y comprometida en hacer lo que amas, al punto tal de que no lo llamas \"trabajo\", sino \"estilo de vida\", te invito a que formes parte de las nuevas comunidades disruptivas y compartas tu conocimiento personal y/o profesional con proyectos descentralizados que se están creando en todo el mundo."
      },
      {
        paragraph: "Mi compromiso es llevar el conocimiento sobre blockchain y el talento Latinoamericano a conquistar comunidades en todo el mundo, generando oportunidades e impactando positivamente en la sociedad."
      },
      {
        paragraph: "Si quieres aprender más sobre Blockchain y la nueva economía disruptiva, tienes a tu disposición todo mi conocimiento para compartírtelo, y si quieres acompañarnos en el crecimiento de Token Sport a conquistar nuevos horizontes, \"BIENVENID@\" te estábamos esperando."
      }
    ],
    author: AUTHOR
  }
}

export default ES;
