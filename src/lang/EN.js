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
  { name: "Disruption", path: "/disruption" }
];

const EN = {
  navLinks: NAVLINKS,
  hero: {
    title: "Tokenize your emotions",
    description: "The first Dapp that gives value to your emotions. Make Tokens rain!.",
    cta: "Join us",
    scta: "Litepaper"
  },
  features: [
    {
      isReverse: true,
      title: <span>What the hell is <WordsColor color="neonBlue">Token Sport?</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FQue-rayos-es-token-sport%402x.png?alt=media&token=7b471b90-2675-4b52-a742-cefbbba70ed4",
      description: "It is the first Dapp (decentralized application) that allows users to share their emotions in sports and through BlockChain technology, tokenize their data.",
      secondaryInfo: [
        {
          title: "What is TSP?",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAduenate-de-tus-datos%402x.png?alt=media&token=89491ea8-7a17-437d-850d-21d0af7afd4c",
          altImage: "¿Qué es TSP?",
          description: "The TSP token is a Token Sport digital asset that represents the value of interactions.  The greater the number of users and interactions, the more value your TSPs will have."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Share your <WordsColor color="neonOrange">emotions</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComparte-emociones%402x.png?alt=media&token=4fe6a441-16cf-49b0-8465-1d32cf297e13",
      description: "Choose the football match in which you want to interact with the community. Clap or boo players, judges and coaches at every game.",
      secondaryInfo: [
        {
          title: "Live Betting",
          altImage: "Apuestas en vivo",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FNotificaciones-tiempo-real%402x.png?alt=media&token=979f2660-fd2a-47b2-a72c-24179f4332f4",
          description: "Choose the player you think will be the most applauded and booed in each match and win more TSP tokens."
        },
        {
          title: "Make your ideal eleven",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2F11-ideal%402x.png?alt=media&token=371e34bf-6e27-4e2d-902b-5a9fd3bdae66",
          altImage: "Arma tu once ideal",
          description: "Choose your perfect team with the players you think will be the most applauded throughout the year and compete with the eleven ideals of the entire community. The winner will win a large pot of TSP tokens at the end of the tournament."
        }
      ]
    },
    {
      isReverse: true,
      // eslint-disable-next-line react/no-unescaped-entities
      title: <span>We're on <WordsColor color="neonGreen">TV</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSalimos-en-tv%402x.png?alt=media&token=9b2bec23-79c9-4d5e-8843-892ff13734f3",
      description: "Through an API, media and sponsors will be able to receive live statistics from the most applauded and/or booed players of the moment and share it during the broadcast.",
      secondaryInfo: [
        {
          title: "Statistics",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FEstadisticas-en-vivo%402x.png?alt=media&token=ace364a7-ccd6-45ed-a4e7-5722cd15e3ac",
          altImage: "Estadisticas",
          description: "Clubs, journalists, media and companies will be able to access the specific data of each player, technician or judge. In doing so, you must pay with TSP tokens that will be distributed throughout the community."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>We <WordsColor color="neonBlue">Tokenize!</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FTokenizamos%402x.png?alt=media&token=5d46e731-aadc-4754-aeea-689cdf8db3a2",
      description: "Through Intelligent Contracts users receive TSP, which they can exchange for Bitcoin, or consume directly in Allied Shops and Merchants.",
      secondaryInfo: [
        {
          title: "Merchandising",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComercios-aliados%402x.png?alt=media&token=320b387a-c964-43f8-9581-7570f9baf8c7",
          altImage: "Merchandasing",
          description: "You can exchange your TSP tokens for merchandising of your favorite club, tickets to the stadium, memberships in sports centers and endless products and services from allies to Token Sport."
        },
        {
          title: "Own Exchange",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPaso-a-paso%402x.png?alt=media&token=b6bf0a40-3618-4695-8668-1871297a8b3a",
          altImage: "Exchange",
          description: "You can exchange your TSPs for Bitcoin, Ethereum or other allied cryptoactives, so you can save or monetize for FIAT money if you wish."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Be part of the <WordsColor color="neonOrange">community</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSe-parte-de-la-comunidad%402x.png?alt=media&token=f93624de-5ecf-4392-89bd-230f31f2057a",
      description: "Edit, correct and update league data to keep team information up to date. For each validated action you will receive great rewards",
      secondaryInfo: [
        {
          title: "Disruptive Economy",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FDisruptiva-colaborativa%402x.png?alt=media&token=be871c20-9a9f-4d78-a944-e2e7861475a4",
          altImage: "Economia Disruptiva",
          description: "You will be able to see a list of tasks related to the project and select the one in which you think you can help. As you progress you will receive TSP for your important work."
        },
        {
          title: "Help us by testing!",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPrimero-en-probar%402x.png?alt=media&token=93a6b08a-db50-4986-afc3-d8f001f07017",
          altImage: "Ayudanos testeando",
          description: "Join the community first, being a “tester user” and help us in the development of the Dapp with suggestions, proposals, analysis, and so on. A Dapp made by the users, for the users!"
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
          "Public launch of the project.",
          "Whitepaper 1.0b."
        ],
        color: "neonBlue"
      },
      {
        id: 2,
        date: "Q4 2018",
        goals: [
          "Dream Team Formation.",
          "Proof-of-concept development."
        ],
        color: "neonOrange"
      },
      {
        id: 3,
        date: "Q1 2019",
        goals: [
          "Beginning of development of app 1.0b.",
          "Creation of marketing strategies."
        ],
        color: "neonGreen"
      },
      {
        id: 4,
        date: "Q2 2019",
        goals: [
          "Launch of proof of concept to the public.",
          "1st Round of Early Investment."
        ],
        color: "opaqueBlue"
      },
      {
        id: 5,
        date: "Q3 2019",
        goals: [
          "Beginning of Data Api development.",
          "Beginning of Blockchain development."
        ],
        color: "neonBlue"
      },
      {
        id: 6,
        date: "Q4 2019",
        goals: [
          "Whitepaper Update.",
          "2nd Investment Round."
        ],
        color: "neonOrange"
      },
      {
        id: 7,
        date: "Q1 2020",
        goals: [
          "App 1.0b release.",
          "Creation of the user community.",
          "New Business (Strategic Alliances).",
          "Data Api 1.0b."
        ],
        color: "neonGreen"
      },
      {
        id: 8,
        date: "Q2 2020",
        goals: [
          "Development of security systems.",
          "Launch App 1.0.",
          "Smart Contracts.",
        ],
        color: "opaqueBlue"
      },
      {
        id: 9,
        date: "Q3 2020",
        goals: [
          "Start of Exchange development.",
          "Data API 1.0.",
        ],
        color: "neonBlue"
      },
      {
        id: 10,
        date: "Q4 2020",
        goals: [
          "Opening to the market (ITO).",
          "Creation of DAO.",
          "Dapp launch."
        ],
        color: "neonOrange"
      }
    ]
  },
  tokenDist: {
    title: "Token Distribution",
    values: [
      {
        title: "Initial Development",
        percent: "1.13%",
        color: "neonBlue"
      },
      {
        title: "ITO Stage",
        percent: "3.75%",
        color: "neonOrange"
      },
      {
        title: "Airdrops",
        percent: "2.5%",
        color: "neonGreen"
      },
      {
        title: "Rewards",
        percent: "1.25%",
        color: "opaqueBlue"
      },
    ]
  },
  dreamTeam: {
    title: "Dream Team",
    description: "Discover Token Sport's lineup",
    team: DREAMTEAM
  },
  partners: {
    title: "Partners & Friends",
    description: "Who trusts and supports Token Sport?"
  },
  subscribe: {
    isReverse: true,
    title: <span>Subscribe and be part of this <WordsColor color="neonGreen">Great Team!</WordsColor></span>,
    description: "You'll have advance access, free trials and receive updates with all of Token Sport's previews.",
    secondaryInfo: [
      {
        title: "Contribute your granite",
        altImage: 'Aporta tu granito',
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAporta-tu-granito%402x.png?alt=media&token=a3b30ae2-674a-4c09-a701-31eac03c44d6',
        description: "Join us and you'll have the opportunity to bring your great talent and make Token Sport a better and better project. Don't worry if you don't know about technology, you can also help us by being an official Token Sport Tester."
      },
      {
        title: "Become a VIP",
        altImage: 'Conviértete en VIP',
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FConviertete-en-vip%402x.png?alt=media&token=e3186a33-aaf6-439e-baad-6af7060a0a9a',
        description: "Do not think that this is another collector of Emails that will get garbage every day to your mail No! in Token Sport we appreciate that you join us and so we will give you the best information related to the project... and of course, one or another gift :)."
      }
    ],
    form: {
      title: "Join us",
      nameInput: "First Name",
      surnameInput: "Surname",
      emailInput: "Email",
      copyButton: "JOIN"
    }
  },
  footer: {
    copyright: "All rights reserved ©",
    networks: {
      title: "Social Networks",
      description: "Follow us to stay on top of everything.",
      icons: TSPNETWORKS
    }
  },
  disruptivePost: {
    body: [
      {
        paragraph: "In the last 15 years we have seen how big companies have disappeared thanks to technological advances and the creation of different tools to gain ground and take over the market."
      },
      {
        paragraph: "Netflix developing a powerful platform and understanding perfectly the benefits and reach of the internet, has set up a unique business plan and is displacing theatres, they have even gone further, making their own film productions, leading the market with each product."
      },
      {
        paragraph: "There are also other companies that ingeniously created platforms under the slogan of \"Collaborative Economy\" and have achieved impact in hundreds of countries and are gradually gaining ground in the markets."
      },
      {
        paragraph: "Facebook, Google, Amazon, and hundreds of other companies we can name and have really generated a momentous change in humanity."
      },
      {
        paragraph: "Something in common among all these companies is that they generate hundreds of thousands of jobs around the world, thus creating opportunities for millions of people, some questioned by the type of hiring. It should also be noted that even those that speak of \"Collaborative Economy\" are corporations with multimillionaire owners and executives who make decisions to generate higher incomes, regardless of the decision of their employees and / or consumers."
      },
      {
        paragraph: "Uber, Rappi, Beat, AirBnb and many other platforms around the world have generated hundreds of millions of dollars through a collaborative economy, where users benefit by doing labor and in some cases risking their lives, generating more sales, faster, to further increase the value of the company, and obviously, distribute those profits among the boards of directors and shareholders."
      },
      {
        paragraph: "For years, new businesses and lifestyles have been emerging, based on decentralization that uses a tool for its execution that is increasingly heard around the world and is called BlockChain or Chain of Blocks."
      },
      {
        paragraph: "But as all Blockbuster gets its Netflix, these companies are getting their Blockchain, allowing them to create decentralized projects, basing the trust of the community in the blessed chain of blocks, allowing all users to be owners and participants in decision-making, development and growth of new decentralized organizations."
      },
      {
        paragraph: "Based on a project 6 years ago and through a disruptive system, we launched the Token Sport community, the first company that promises to decentralize and involve users in the development and growth of the Dapp (Decentralized Application) that allows fans to tokenize their emotions."
      },
      {
        paragraph: "The impact of Blockchain, added to an emerging \"Disruptive Economy\" is changing the way of understanding business and generating fully proactive communities."
      },
      {
        paragraph: "The time has come to write the future and we have in our hands the possibility of being part of the 4th industrial evolution."
      },
      {
        paragraph: "Disruptive Economy for the development and expansion of Token Sport:"
      },
      {
        paragraph: "Using BlockChain technology a number of TSP tokens have been created, registered in the NEM chain under the authorship and responsibility of Alejandro Fernandez, the creator of the idea and founder of the Token Sport project."
      },
      {
        paragraph: "During the beginning of the project, a value of 0.00771 will be given to each token that is given to the members of the stable team, who trust 100% in the project and are willing to contribute all their knowledge and skills, working passionately to carry out the project."
      },
      {
        paragraph: "These members become the Dream Team of Token Sport, the main engine, who through contracts with the founder of the company (centralized stage), will receive TSP in exchange for their contribution to development. "
      },
      {
        paragraph: "During the first round of investment, members of the Dream Team will have priority when selling tokens; when selling them, the entire transaction will be recorded under a contract with Token Sport as mediator. Investors will receive TSPs and the Dream Team will receive Fiat or Bitcoin coins."
      },
      {
        paragraph: "In addition, once created the intelligent contracts, the wallets of the members of the Dream Team will always maintain the percentages of participation of that user, always obtaining tokens TSP (according to litepaper)."
      },
      {
        paragraph: "Once the company is decentralized and by means of a DAO system (decentralized autonomous organization in English), those users who have more TSP (investors, Dream Team, users, etc.) will be able to make decisions for the growth of Token Sport and will constantly continue to govern intelligent contracts, programmed with their percentage of participation."
      },
      {
        paragraph: "Being a global company, the growth of Token Sport is exponential and requires the best qualified and passionate people in what they do, betting to positively impact the economy and disruption of the system as we know it."
      },
      {
        paragraph: "If you are a creative, pro-active and committed person in doing what you love, to the point that you do not call it \"work\", but \"lifestyle\", I invite you to be part of the new disruptive communities and share your personal and/or professional knowledge with decentralized projects that are being created all over the world."
      },
      {
        paragraph: "My commitment is to bring knowledge about blockchain and Latin American talent to conquer communities around the world, generating opportunities and positively impacting society."
      },
      {
        paragraph: "If you want to learn more about Blockchain and the new disruptive economy, you have at your disposal all my knowledge to share it with you, and if you want to accompany us in the growth of Token Sport to conquer new horizons, \"WELCOME\" we were waiting for you."
      }
    ],
    author: AUTHOR
  }
};

export default EN;
