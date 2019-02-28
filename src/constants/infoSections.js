import React from 'react'
import { WordsColor } from 'components/LayoutHome/styles'

import logo from 'assets/logo.png'

export const INFO_SECTIONS = {
  sectionTwo: {
    image: logo,
    secondaryInfo: {
      title: <span>¿Qué rayos es <WordsColor color="neonBlue" >Token Sport?</WordsColor> </span>,
      description: <span>Es la primer Dapp (aplicación descentralizada) que permite a los usuarios compartir sus emociones en los deportes y por medio de tecnología BlockChain, tokenizar sus datos.</span>
    },
    'tertiaryInfo-1': {
      image: logo,
      altImage: 'Aduéñate de tus datos',
      title: <span>Aduéñate de tus datos</span>,
      description: <span>A diferencia de las redes sociales, nosotros sabemos lo mucho que vale tu interacción en internet y por eso te devolvemos con creces todas las emociones que compartes con nosotros. ¡Todo porque te lo mereces!</span>
    }
  },

  sectionThree: {
    image: logo,
    secondaryInfo: {
      title: <> <span>Comparte</span> <span>tus <WordsColor color="neonOrange">emociones</WordsColor></span> </>,
      description: <span>Elige el partido de fútbol en el que quieras interactuar con la comunidad. Aplaude y/o Abuchea a los Jugadores, Técnicos y Jueces de cada partido.</span>
    },
    'tertiaryInfo-1': {
      image: logo,
      altImage: 'Notificaciones en tiempo real',
      title: <span>Notificaciones en tiempo real</span>,
      description: <span>Paga tu boleta de partido con TSP y te mantendremos al tanto de todo lo que pase en el evento, alineaciones, lesiones, horarios, lo que sea que pase.</span>
    },
    'tertiaryInfo-2': {
      image: logo,
      altImage: 'Arma tu once ideal',
      title: <span>Arma tu once ideal</span>,
      description: <span>Selecciona los 11 jugadores que crees serán más abucheados o aplaudidos durante los 30 días siguientes. Si tu once resulta ser el más acertado recibirás TSP como premio.</span>
    }
  },

  sectionFour: {
    image: logo,
    secondaryInfo: {
      title: <span>Salimos en <WordsColor color="neonGreen">TV</WordsColor> </span>,
      description: <span>Los Medios de Comunicación realizan un pago en cada partido y reciben la transmisión en Vivo de como la comunidad Aplaude y Abuchea durante cada partido.</span>
    },
    'tertiaryInfo-1': {
      image: logo,
      altImage: 'Estadística en vivo',
      title: <span>Estadística en vivo</span>,
      description: <span>Una vez los Medios realicen el pago, podrán obtener mediante una API las estadísticas de la sensación que tienen los hinchas durante el partido.</span>
    }
  },

  sectionFive: {
    image: logo,
    secondaryInfo: {
      title: <WordsColor color="neonBlue">Tokenizamos</WordsColor>,
      description: <span>Por medio de Contratos Inteligentes los Usuarios reciben TSP, que podrán ser intercambiados por Bitcoin, o consumir directamente en Tiendas y Comercios Aliados.</span>
    },
    'tertiaryInfo-1': {
      image: logo,
      altImage: 'Comercios Aliados',
      title: <span>Comercios Aliados</span>,
      description: <span>En Token Sport trabajamos fuerte para realizar grandes alianzas que te permitan cambiar TSP por un sin fin de artículos deportivos, ya sean desde, la camiseta de tu equipo o entradas para ver el super clásico en el estadio.</span>
    },
    'tertiaryInfo-2': {
      image: logo,
      altImage: 'Paso a Paso',
      title: <span>Paso a Paso</span>,
      description: <span>Gracias a los Contratos Inteligentes podemos generar una estructura consistente en la cual las recompensas son obtenidas al completar determinadas tareas. Ganar es tan fácil como: Comprar, Interactuar y Aportar.</span>
    }
  },

  sectionSix: {
    image: logo,
    secondaryInfo: {
      title: <> <span>Sé parte</span> <span>de la <WordsColor color="neonOrange">comunidad</WordsColor></span> </>,
      description: <span>Edita, corrige y actualiza los datos de las ligas para mantener al día la información de los equipos. Por cada acción validada recibirás grandes recompensas.</span>
    },
    'tertiaryInfo-1': {
      image: logo,
      altImage: 'Disruptiva y colaborativa',
      title: <span>Disruptiva y colaborativa</span>,
      description: <span>Podrás ver un listado de tareas relacionadas al proyecto y seleccionar las tareas en las que crees poder ayudar. Conforme vayas progresando recibirás beneficios por tu importante labor.</span>
    },
    'tertiaryInfo-2': {
      image: logo,
      altImage: 'Sé el primero en probar',
      title: <span>Sé el primero en probar</span>,
      description: <span>Al ser parte de nuestra comunidad tendrás el beneficio de probar y ayudar a mejorar el ecosistema de Token Sport, además recibirás grandiosas recompensas por contribuir a que Token Sport sea cada vez mejor.</span>
    }
  },

  sectionEleven: {
    image: logo,
    secondaryInfo: {
      title: <span>¡Suscríbete y sé parte de este<WordsColor color="neonGreen"> Gran Equipo!</WordsColor></span>,
      description: <span>Tendrás acceso anticipado, pruebas gratis y toda la información del proyecto.</span>
    },
    'tertiaryInfo-1': {
      image: logo,
      altImage: 'Aporta tu granito',
      title: <span>Aporta tu granito</span>,
      description: <span>Únete a nosotros y tendrás la oportunidad de aportar tu grandioso talento y así hacer de Token Sport un proyecto cada vez mejor. No te preocupes si no sabes de tecnología, también puedes ayudarnos siendo un Tester oficial de Token Sport.</span>
    },
    'tertiaryInfo-2': {
      image: logo,
      altImage: 'Conviértete en VIP',
      title: <span>Conviértete en VIP</span>,
      description: <span>No creas que esto es otro recolector de Emails que te harán llegar basura cada día a tu correo ¡No!, en Token Sport apreciamos que te unas a nosotros y por eso te vamos a dar la mejor información relacionada al proyecto... y claro, uno que otro regalito :).</span>
    }
  }
}