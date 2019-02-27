export const languages = [
  { src: '-', name: 'ES' },
  { src: '-', name: 'FR' },
  { src: '-', name: 'NLD' },
  { src: '-', name: 'EN' },
  { src: '-', name: 'PT' },
  { src: '-', name: 'DE' },
  { src: '-', name: 'ITA' },
  { src: '-', name: 'RU' },
  { src: '-', name: 'ZH' }
]

export const links = [
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
    photo: 'https://tokensport.co/wp-content/uploads/2018/12/Diseño-sin-título-1.png',
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
    photo: 'https://tokensport.co/wp-content/uploads/2018/11/pp-1.jpg',
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
    photo: 'https://tokensport.co/wp-content/uploads/2019/01/caro-01-01.png',
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
    photo: 'https://tokensport.co/wp-content/uploads/2018/12/IMG_20171118_135504_729.jpg',
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
    photo: 'https://tokensport.co/wp-content/uploads/2018/12/photo-steven.jpg-4.png',
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
    photo: 'https://tokensport.co/wp-content/uploads/2019/01/Perfil-negro.jpg',
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
  // {
  //   name: 'Fabian Delgado',
  //   profession: 'Media Partner',
  //   photo: 'https://tokensport.co/wp-content/uploads/2018/12/foto.png',
  //   country: 'Colombia',
  //   color: 'neonBlue',
  //   networks: [
  //     {
  //       name: 'linkedin',
  //       icon: ICONS['linkedin'],
  //       link: 'https://www.linkedin.com/in/fabian-delgado-621935164/'
  //     }
  //   ]
  // },
  // {
  //   name: 'Santiago Guzmán',
  //   profession: 'Media Partner',
  //   photo: 'https://tokensport.co/wp-content/uploads/2018/12/Diseño-sin-título.png',
  //   country: 'Colombia',
  //   color: 'neonBlue',
  //   networks: [
  //     {
  //       name: 'linkedin',
  //       icon: ICONS['linkedin'],
  //       link: 'https://www.linkedin.com/in/santiago-guzman-5abb85b6/'
  //     }
  //   ]
  // },
]