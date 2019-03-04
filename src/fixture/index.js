export const LANGUAGES = [
  { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FSpain-flag%402x.png?alt=media&token=868ff8a7-0afd-4532-9f6f-f237042aab38', name: 'ES' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FFrench-flag%402x.png?alt=media&token=185a032c-632b-402c-af87-c6eb2dcd5aa2', name: 'FR' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FDutch-flag%402x.png?alt=media&token=34436d8f-347a-495c-9f67-71fbee701b7d', name: 'NLD' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FEnglish-flag%402x.png?alt=media&token=5da5afc1-967b-46fd-b83e-4c4b6f286560', name: 'EN' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FPortuguese-flag%402x.png?alt=media&token=43b57c7a-90a1-4e48-82a2-5492b0b75938', name: 'PT' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FGerman-flag%402x.png?alt=media&token=3d937cc6-d1af-4e01-9f78-9fd46ab12bcf', name: 'DE' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FItalian-flag%402x.png?alt=media&token=d1ffac99-eb15-4c1b-b1e8-45775e523bb0', name: 'ITA' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FRussian-flag%402x.png?alt=media&token=a58dd98a-cdd3-4b59-b4cf-d53942a96ad0', name: 'RU' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FChinese-flag%402x.png?alt=media&token=bb317012-132f-4d00-a780-21053a912f52', name: 'ZH' }
]

export const LINKS = [
  { name: 'Features', path: '#feature' },
  { name: 'Roadmap', path: '#roadmap' },
  { name: 'Dream Team', path: '#dreamteam' }
]

const ICONS = {
  behance: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/networks%2Fbehance.svg?alt=media&token=7a3bc16c-44cf-4acc-827a-3c93a66be510',
  web: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/networks%2Fglobal.svg?alt=media&token=71ed996c-9012-4ca0-8530-0117f094a1fd',
  facebook: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/networks%2Ffacebook.svg?alt=media&token=48669955-411e-4654-a943-af913cfe35e9',
  email: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/networks%2Femail.svg?alt=media&token=83f25599-0ba8-494f-968d-00503ab5f29f',
  linkedin: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/networks%2Flinkedin.svg?alt=media&token=c2ff61da-6c75-44bd-abdf-f6799467f725',
  medium: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/networks%2Fmedium.svg?alt=media&token=96e743e3-e702-4d1f-9e32-0a5dda9a4cca',
  twitter: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/networks%2Ftwitter.svg?alt=media&token=5cc12ae5-5979-4ad5-84af-650d82e15d78',
  telegram: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/networks%2Ftelegram.svg?alt=media&token=56cd41c3-1d23-423e-9d2f-079da2c2d931'
}

export const TSPNETWORKS = [
  {
    name: 'telegram',
    icon: ICONS['telegram'],
    link: 'https://t.me/joinchat/GkegLhMEtPyYkHzsD6BQ_Q'
  },
  {
    name: 'facebook',
    icon: ICONS['facebook'],
    link: 'https://www.facebook.com/Tokensport'
  },
  {
    name: 'medium',
    icon: ICONS['medium'],
    link: 'https://medium.com/@AleFernandez/el-siguiente-texto-es-el-resumen-y-publicaci%C3%B3n-de-un-proyecto-que-utiliza-la-tecnolog%C3%ADa-f6c219daf090'
  }
]

export const ROADMAP = [
  {
    id: 1,
    date: 'Enero 2014',
    title: 'Nace la idea',
    description: 'A puertas del Mundial Brasil 2014, surge la idea de crear una aplicación que permita a los hinchas interactuar en los partidos de dicho evento sin importar las distancias. Creando así interacciones en Vivo donde los usuarios pueden expresarse.',
    color: 'neonBlue'
  },
  {
    id: 2,
    date: 'Abril 2014',
    title: 'Prueba de concepto 0.1',
    description: 'Luego de meses de desarrollo, nace "Puteame o Aplaudime" una WebApp que permitía a amigos interactuar en una red privada y compartir sus Emociones, Apostar con Tokens y elegir los 11 jugadores más puteados y/o más aplaudidos de todo el torneo. (Activada y Utilizada en Bogotá y Buenos Aires).',
    color: 'neonOrange'
  },
  {
    id: 3,
    date: 'Enero 2015',
    title: 'Investigación',
    description: 'Conociendo la tecnología BlockChain, se investiga sobre la tecnología BlockChain y se crean las primeras líneas para darle forma y perfeccionar el sistema de Gamification, con el fin de incorporar esta tecnología.',
    color: 'neonGreen'
  },
  {
    id: 4,
    date: 'Junio 2018',
    title: 'Alianzas Estratégicas',
    description: 'Influenciando y Compartiendo la investigación realizada sobre la tecnología BlockChain, se crean lazos con Token Partner, cámara de comercio BlockChain.',
    color: 'opaqueBlue'
  },
  {
    id: 5,
    date: 'Septiembre 2018',
    title: 'Creación de Tokens',
    description: 'Se crea la primer tanda de Tokens (9.090.000) en la blockchain de NEM (acceso únicamente del fundador), que serán distribuídos al finalizar la Fase 1.',
    color: 'neonBlue'
  },
  {
    id: 6,
    date: 'Noviembre 2018',
    title: 'Equipo disruptivo',
    description: 'Creación de Programa de Trabajo Colaborativo-Disruptivo que permite a los actores activos ser parte de la primer Airdrop por trabajo.',
    color: 'neonOrange'
  },
  {
    id: 7,
    date: 'Diciembre 2018',
    title: 'Información abierta al público',
    description: 'Se lanza el LitePaper con un resúmen de la Token Sport con el objetivo de dar a conocer el proyecto y recibir propuestas de participación en el Equipo Disruptivo.',
    color: 'neonGreen'
  }
]

export const TOKENDIST = [
  {
    description: 'Equipo inicial',
    percent: '1.13%',
    color: 'neonBlue'
  },
  {
    description: 'Drop Inicial',
    percent: '2.5%',
    color: 'neonOrange'
  },
  {
    description: 'Inversión Temprana',
    percent: '15.18%',
    color: 'neonGreen'
  },
  {
    description: 'ICO',
    percent: '10%',
    color: 'opaqueBlue'
  }
]

export const team = [
  {
    name: 'Alejandro Fernandez',
    profession: 'Founder & CEO',
    photo: 'https://tokensport.co/wp-content/uploads/2018/11/pp.jpg',
    country: 'Argentina',
    color: 'neonGreen',
    networks: [
      {
        name: 'linkedin',
        icon: ICONS['linkedin'],
        link: 'https://www.linkedin.com/in/alejandroezequielfernandez/'
      },
      {
        name: 'twitter',
        icon: ICONS['twitter'],
        link: 'https://twitter.com/soyalefernandez'
      },
      {
        name: 'telegram',
        icon: ICONS['telegram'],
        link: 'https://www.telegram.com/@AlejoFernandez'
      }
    ]
  },
  {
    name: 'Camilo Suárez',
    profession: 'BlockChain Legal Lead',
    photo: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/dreamTeam%2FCamilo.png?alt=media&token=8c123a25-35a6-4e05-ae20-dc819bf573ee',
    country: 'Colombia',
    color: 'neonGreen',
    networks: [
      {
        name: 'email',
        icon: ICONS['email'],
        link: 'mailto:tuasesoriahoy@gmail.com'
      }
    ]
  },
  {
    name: 'Philippe Boland',
    profession: 'Advisor',
    photo: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/dreamTeam%2FPhilip.jpg?alt=media&token=db0c8133-3d04-4d5c-bf84-0f86dba490a4',
    country: 'Francia',
    color: 'neonGreen',
    networks: [
      {
        name: 'linkedin',
        icon: ICONS['linkedin'],
        link: 'https://www.linkedin.com/in/boland/'
      },
      {
        name: 'twitter',
        icon: ICONS['twitter'],
        link: 'https://twitter.com/enREDo'
      }
    ]
  },
  {
    name: 'Carolina Velásquez',
    profession: 'CTO & CBO',
    photo: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/dreamTeam%2FCarolina.jpg?alt=media&token=4d712eed-207d-4ab9-8214-4f7dc78208bc',
    country: 'Colombia',
    color: 'neonOrange',
    networks: [
      {
        name: 'linkedin',
        icon: ICONS['linkedin'],
        link: 'https://www.linkedin.com/in/nathalia-carolina-vel%C3%A1squez/'
      }
    ]
  },
  {
    name: 'Esteban Aragón',
    profession: 'Fullstack Developer',
    photo: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/dreamTeam%2FEsteban.jpg?alt=media&token=405f1670-9a26-481a-a8a3-f19cdcfde07c',
    country: 'Colombia',
    color: 'neonOrange',
    networks: [
      {
        name: 'linkedin',
        icon: ICONS['linkedin'],
        link: 'https://www.linkedin.com/in/juan-esteban-aragon-montealegre-7134a0115/?originalSubdomain=co'
      },
      {
        name: 'web',
        icon: ICONS['web'],
        link: 'https://esteban-aragon.herokuapp.com/'
      }
    ]
  },
  {
    name: 'Steven Anaya',
    profession: 'UI / UX Designer',
    photo: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/dreamTeam%2FSteven.png?alt=media&token=1685655a-a759-4409-9aa8-6213a1f487a2',
    country: 'Colombia',
    color: 'neonOrange',
    networks: [
      {
        name: 'web',
        icon: ICONS['web'],
        link: 'https://steven-anaya.herokuapp.com/'
      },
      {
        name: 'behance',
        icon: ICONS['behance'],
        link: 'https://www.behance.net/stvanaya'
      }
    ]
  },
  {
    name: 'Manuel Reyes',
    profession: 'Director de Marketing',
    photo: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/dreamTeam%2FPerfil%20negro.jpg?alt=media&token=68356190-2900-4a24-bf94-e32ec9922afa',
    country: 'México',
    color: 'neonBlue',
    networks: [
      {
        name: 'linkedin',
        icon: ICONS['linkedin'],
        link: 'https://www.linkedin.com/in/manuelreyesart/'
      }
    ]
  },
  {
    name: 'Fabian Delgado',
    profession: 'Media Partner',
    photo: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/dreamTeam%2FFabian.png?alt=media&token=f12ab55a-bef7-4de6-98d4-5733984f5b3d',
    country: 'Colombia',
    color: 'neonBlue',
    networks: [
      {
        name: 'linkedin',
        icon: ICONS['linkedin'],
        link: 'https://www.linkedin.com/in/fabian-delgado-621935164/'
      }
    ]
  },
  {
    name: 'Santiago Guzmán',
    profession: 'Media Partner',
    photo: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/dreamTeam%2FSantiago.png?alt=media&token=c23d73fb-2b6c-4c38-81d6-1ef3d8742f3c',
    country: 'Colombia',
    color: 'neonBlue',
    networks: [
      {
        name: 'linkedin',
        icon: ICONS['linkedin'],
        link: 'https://www.linkedin.com/in/santiago-guzman-5abb85b6/'
      }
    ]
  },
]

export const PARTNERS = [
  {
    photo: 'https://www.criptolatinfest.com/wp-content/themes/criptolanding/img/logo_cripto.png',
    name: 'CriptoLatin Fest',
  },
  {
    photo: 'https://www.criptolatinfest.com/wp-content/themes/criptolanding/img/logo_cripto.png',
    name: 'CriptoLatin Fest',
  },
  {
    photo: 'https://www.criptolatinfest.com/wp-content/themes/criptolanding/img/logo_cripto.png',
    name: 'CriptoLatin Fest',
  },
  {
    photo: 'https://www.criptolatinfest.com/wp-content/themes/criptolanding/img/logo_cripto.png',
    name: 'CriptoLatin Fest',
  },
  {
    photo: 'https://www.criptolatinfest.com/wp-content/themes/criptolanding/img/logo_cripto.png',
    name: 'CriptoLatin Fest',
  },
]