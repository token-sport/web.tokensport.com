import React from 'react';

// COMPONENTS
import { WordsColor } from 'components/LayoutHome/styles';

// CONSTANTS
import DREAMTEAM from 'constants/dreamTeam';
import TSPNETWORKS from 'constants/tspNetworks';
import AUTHOR from 'constants/author';

const NAVLINKS = [
  { name: "Caractéristiques", path: "#features" },
  { name: "Feuille de route", path: "#roadmap" },
  { name: "Équipe de rêve", path: "#dreamteam" },
  { name: "Perturbation", path: "/disruption" }
];

const FR = {
  navLinks: NAVLINKS,
  hero: {
    title: "SYMBOLISER VOS ÉMOTIONS",
    description: "Le premier Dapp qui donne de la valeur à vos émotions. Faites pleuvoir des Tokens !",
    cta: "Rejoindre",
    scta: "Litepaper"
  },
  features: [
    {
      isReverse: true,
      // eslint-disable-next-line react/no-unescaped-entities
      title: <span>C'est quoi <WordsColor color="neonBlue">Token Sport?</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FQue-rayos-es-token-sport%402x.png?alt=media&token=7b471b90-2675-4b52-a742-cefbbba70ed4",
      description: "C'est le premier Dapp (application décentralisée) qui permet aux utilisateurs de partager leurs émotions dans le sport et grâce à la technologie BlockChain, de symboliser leurs données.",
      secondaryInfo: [
        {
          title: "Qu'est-ce que TSP ?",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAduenate-de-tus-datos%402x.png?alt=media&token=89491ea8-7a17-437d-850d-21d0af7afd4c",
          altImage: "¿Qué es TSP?",
          description: "Le jeton TSP est un actif numérique Token Sport qui représente la valeur des interactions.  Plus le nombre d'utilisateurs et d'interactions est élevé, plus vos FST auront de la valeur."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Partagez vos <WordsColor color="neonOrange">émotions</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComparte-emociones%402x.png?alt=media&token=4fe6a441-16cf-49b0-8465-1d32cf297e13",
      description: "Choisissez le match de football dans lequel vous voulez interagir avec la communauté. Applaudissez ou huez les joueurs, les juges et les entraîneurs à chaque match.",
      secondaryInfo: [
        {
          title: "Pari en direct",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FNotificaciones-tiempo-real%402x.png?alt=media&token=979f2660-fd2a-47b2-a72c-24179f4332f4",
          altImage: "Apuestas en vivo",
          description: "Choisissez le joueur qui, selon vous, sera le plus applaudi et hué à chaque match et gagnez plus de jetons TSP."
        },
        {
          title: "Faites de votre onze idéal",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2F11-ideal%402x.png?alt=media&token=371e34bf-6e27-4e2d-902b-5a9fd3bdae66",
          altImage: "Arma tu once ideal",
          description: "Choisissez votre équipe parfaite avec les joueurs qui, selon vous, seront les plus applaudis tout au long de l'année et rivaliseront avec les onze idéaux de la communauté entière. Le gagnant gagnera un gros pot de jetons TSP à la fin du tournoi."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Nous sommes à la <WordsColor color="neonGreen">télé</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSalimos-en-tv%402x.png?alt=media&token=9b2bec23-79c9-4d5e-8843-892ff13734f3",
      description: "Grâce à un Api, les médias et les sponsors pourront recevoir en direct les statistiques des joueurs les plus applaudis et/ou hué du moment et les partager pendant la diffusion.",
      secondaryInfo: [
        {
          title: "Statistiques",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FEstadisticas-en-vivo%402x.png?alt=media&token=ace364a7-ccd6-45ed-a4e7-5722cd15e3ac",
          altImage: "Estadisticas",
          description: "Clubs, journalistes, médias et entreprises pourront accéder aux données spécifiques de chaque joueur, technicien ou juge. Ce faisant, vous devez payer avec des jetons TSP qui seront distribués dans toute la communauté."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Nous <WordsColor color="neonBlue">Tokenize!</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FTokenizamos%402x.png?alt=media&token=5d46e731-aadc-4754-aeea-689cdf8db3a2",
      description: "Grâce à Intelligent Contracts, les utilisateurs reçoivent des TSP qu'ils peuvent échanger contre des Bitcoin ou consommer directement dans les Allied Shops et les Merchants.",
      secondaryInfo: [
        {
          title: "Merchandising",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComercios-aliados%402x.png?alt=media&token=320b387a-c964-43f8-9581-7570f9baf8c7",
          altImage: "Merchandasing",
          description: "Vous pouvez échanger vos jetons TSP contre des produits dérivés de votre club préféré, des billets pour le stade, des abonnements à des centres sportifs et des produits et services sans fin de la part d'alliés à Token Sport."
        },
        {
          title: "Propre échange",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPaso-a-paso%402x.png?alt=media&token=b6bf0a40-3618-4695-8668-1871297a8b3a",
          altImage: "Exchange",
          description: "Vous pouvez échanger vos FST contre du bitcoin, de l'éthéréum ou d'autres cryptoactifs alliés, de sorte que vous pouvez économiser ou monétiser pour de l'argent FIAT si vous le souhaitez."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Faire partie de la <WordsColor color="neonOrange">communauté</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSe-parte-de-la-comunidad%402x.png?alt=media&token=f93624de-5ecf-4392-89bd-230f31f2057a",
      description: "Modifier, corriger et mettre à jour les données de la ligue pour tenir à jour les informations de l'équipe. Pour chaque action validée, vous recevrez de grandes récompenses",
      secondaryInfo: [
        {
          title: "Économie perturbatrice",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FDisruptiva-colaborativa%402x.png?alt=media&token=be871c20-9a9f-4d78-a944-e2e7861475a4",
          altImage: "Economia Disruptiva",
          description: "Vous pourrez voir une liste de tâches liées au projet et sélectionner celle pour laquelle vous pensez pouvoir aider. Au fur et à mesure que vous progresserez, vous recevrez une FST pour votre travail important."
        },
        {
          title: "Aidez-nous en testant !",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPrimero-en-probar%402x.png?alt=media&token=93a6b08a-db50-4986-afc3-d8f001f07017",
          altImage: "Ayudanos testeando",
          description: "Rejoignez d'abord la communauté, en étant un “utilisateur testeur” et aidez-nous dans le développement du Dapp avec des suggestions, propositions, analyses, etc. Un Dapp fait par les utilisateurs, pour les utilisateurs !"
        }
      ]
    }
  ],
  roadmap: {
    title: "Feuille de route",
    content: [
      {
        id: 1,
        date: "Q3 2018",
        goals: [
          "Lancement public du projet.",
          "Livre blanc 1.0b."
        ],
        color: "neonBlue"
      },
      {
        id: 2,
        date: "Q4 2018",
        goals: [
          "Formation d'une équipe de rêve.",
          "Développement de la preuve de concept."
        ],
        color: "neonOrange"
      },
      {
        id: 3,
        date: "Q1 2019",
        goals: [
          "Début du développement de l'application 1.0b.",
          "Création de stratégies marketing."
        ],
        color: "neonGreen"
      },
      {
        id: 4,
        date: "Q2 2019",
        goals: [
          "Lancement de la preuve de concept au public.",
          "1er cycle d'investissements précoces."
        ],
        color: "opaqueBlue"
      },
      {
        id: 5,
        date: "Q3 2019",
        goals: [
          "Début du développement de Data Api.",
          "Début du développement de Blockchain."
        ],
        color: "neonBlue"
      },
      {
        id: 6,
        date: "Q4 2019",
        goals: [
          "Mise à jour du livre blanc.",
          "2ème cycle d'investissement."
        ],
        color: "neonOrange"
      },
      {
        id: 7,
        date: "Q1 2020",
        goals: [
          "App 1.0b publié.",
          "Création de la communauté des utilisateurs.",
          "Nouvelles affaires (alliances stratégiques).",
          "Data Api 1.0b."
        ],
        color: "neonGreen"
      },
      {
        id: 8,
        date: "Q2 2020",
        goals: [
          "Développement de systèmes de sécurité.",
          "Lancement de l'application 1.0.",
          "Contrats intelligents.",
        ],
        color: "opaqueBlue"
      },
      {
        id: 9,
        date: "Q3 2020",
        goals: [
          "Début du développement d'Exchange.",
          "Data Api 1.0.",
        ],
        color: "neonBlue"
      },
      {
        id: 10,
        date: "Q4 2020",
        goals: [
          "Ouverture au marché (ITO).",
          "Création de la DAO.",
          "Lancement de Dapp."
        ],
        color: "neonOrange"
      }
    ]
  },
  tokenDist: {
    title: "Distribution de jetons",
    values: [
      {
        title: "Développement initial",
        percent: "1.13%",
        color: "neonBlue"
      },
      {
        title: "Stade ITO",
        percent: "3.75%",
        color: "neonOrange"
      },
      {
        title: "Gouttes pour oiseaux",
        percent: "2.5%",
        color: "neonGreen"
      },
      {
        title: "Récompenses",
        percent: "1.25%",
        color: "opaqueBlue"
      },
    ]
  },
  dreamTeam: {
    title: "Équipe de rêve",
    description: "Découvrez l'équipe titulaire de Token Sport",
    team: DREAMTEAM
  },
  partners: {
    title: "Partenaires et amis",
    description: "Qui fait confiance et soutient Token Sport ?"
  },
  subscribe: {
    isReverse: true,
    title: <span>Inscrivez-vous et faites partie de cette <WordsColor color="neonGreen">grande équipe!</WordsColor></span>,
    description: "Vous aurez un accès anticipé, des essais gratuits et recevrez des mises à jour avec toutes les avant-premières de Token Sport.",
    secondaryInfo: [
      {
        title: "Apportez votre granit",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAporta-tu-granito%402x.png?alt=media&token=a3b30ae2-674a-4c09-a701-31eac03c44d6',
        altImage: 'Aporta tu granito',
        description: "Rejoignez-nous et vous aurez l'opportunité d'apporter votre grand talent et de faire de Token Sport un projet toujours meilleur. Ne vous inquiétez pas si vous ne connaissez pas la technologie, vous pouvez aussi nous aider en étant un testeur officiel de Token Sport."
      },
      {
        title: "Devenez un VIP",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FConviertete-en-vip%402x.png?alt=media&token=e3186a33-aaf6-439e-baad-6af7060a0a9a',
        altImage: 'Conviértete en VIP',
        description: "Ne pensez pas que c'est un autre collecteur d'Emails qui va recevoir des ordures chaque jour à votre mail Non ! dans Token Sport nous apprécions que vous vous joignez à nous et ainsi nous vous donnerons les meilleures informations relatives au projet... et bien sûr, l'un ou l'autre cadeau :)."
      }
    ],
    form: {
      title: "Rejoignez-nous",
      nameInput: "Prénom",
      surnameInput: "Nom de famille",
      emailInput: "Courriel",
      copyButton: "Rejoindre"
    }
  },
  footer: {
    copyright: "Tous droits réservés ©",
    networks: {
      title: "Réseautage social",
      description: "Suivez-nous pour rester au courant de tout.",
      icons: TSPNETWORKS
    }
  },
  disruptivePost: {
    body: [
      {
        paragraph: "Au cours des 15 dernières années, nous avons vu comment les grandes entreprises ont disparu grâce aux avancées technologiques et à la création de différents outils pour gagner du terrain et conquérir le marché."
      },
      {
        paragraph: "Netflix développant une plate-forme puissante et comprenant parfaitement les avantages et la portée de l'Internet, a mis en place un plan d'affaires unique et déplace les salles de cinéma, ils sont même allés plus loin, faisant leurs propres productions cinématographiques, leader du marché avec chaque produit."
      },
      {
        paragraph: "Il y a aussi d'autres entreprises qui ont ingénieusement créé des plates-formes sous le slogan de \"l'économie collaborative\" et qui ont eu un impact dans des centaines de pays et gagnent progressivement du terrain sur les marchés."
      },
      {
        paragraph: "Facebook, Google, Amazon, et des centaines d'autres entreprises que nous pouvons nommer et qui ont vraiment généré un changement capital dans l'humanité."
      },
      {
        paragraph: "Toutes ces entreprises ont en commun de générer des centaines de milliers d'emplois dans le monde, créant ainsi des opportunités pour des millions de personnes, dont certaines sont remises en question par le type d'embauche. Il convient également de noter que même ceux qui parlent d'\"économie collaborative\" sont des entreprises avec des propriétaires et des cadres multimillionnaires qui prennent des décisions pour générer des revenus plus élevés, indépendamment de la décision de leurs employés et / ou des consommateurs."
      },
      {
        paragraph: "Uber, Rappi, Beat, AirBnb et bien d'autres plates-formes dans le monde ont généré des centaines de millions de dollars grâce à une économie collaborative, où les utilisateurs bénéficient en travaillant et, dans certains cas, en risquant leur vie, en générant plus de ventes, plus rapidement, pour augmenter encore la valeur de l'entreprise, et bien évidemment, distribuer ces bénéfices parmi les conseils d'administration et les actionnaires."
      },
      {
        paragraph: "Depuis des années, de nouvelles entreprises et de nouveaux modes de vie ont vu le jour, fondés sur la décentralisation qui utilise pour son exécution un outil de plus en plus connu dans le monde entier et appelé BlockChain ou chaîne de blocs."
      },
      {
        paragraph: "Mais au fur et à mesure que Blockbuster obtient son Netflix, ces entreprises obtiennent leur Blockchain, ce qui leur permet de créer des projets décentralisés, fondant la confiance de la communauté dans la chaîne bénie des blocs, permettant à tous les utilisateurs d'être propriétaires et participants dans la prise de décision, le développement et la croissance des nouvelles organisations décentralisées."
      },
      {
        paragraph: "Sur la base d'un projet réalisé il y a 6 ans et à travers un système perturbateur, nous avons lancé la communauté Token Sport, la première entreprise qui promet de décentraliser et d'impliquer les utilisateurs dans le développement et la croissance de la Dapp (Decentralized Application) qui permet aux fans de symboliser leurs émotions."
      },
      {
        paragraph: "L'impact de Blockchain, ajouté à l'émergence d'une \"économie perturbatrice\", change la façon de comprendre les affaires et de générer des communautés pleinement proactives."
      },
      {
        paragraph: "Le temps est venu d'écrire l'avenir et nous avons entre nos mains la possibilité de faire partie de la 4ème évolution industrielle."
      },
      {
        paragraph: "Une économie perturbatrice pour le développement et l'expansion de Token Sport :"
      },
      {
        paragraph: "Grâce à la technologie BlockChain, un certain nombre de jetons TSP ont été créés, enregistrés dans la chaîne NEM sous la paternité et la responsabilité d'Alejandro Fernandez, le créateur de l'idée et fondateur du projet Token Sport."
      },
      {
        paragraph: "Au début du projet, une valeur de 0,00771 sera attribuée à chaque jeton remis aux membres de l'équipe de l'écurie, qui font confiance à 100% au projet et sont prêts à y apporter toutes leurs connaissances et compétences, travaillant avec passion à la réalisation du projet."
      },
      {
        paragraph: "Ces membres deviennent la Dream Team de Token Sport, le moteur principal, qui par le biais de contrats avec le fondateur de l'entreprise (étape centralisée), recevra TSP en échange de leur contribution au développement. "
      },
      {
        paragraph: "Lors du premier tour d'investissement, les membres de la Dream Team auront la priorité lors de la vente des jetons ; lors de leur vente, l'ensemble de la transaction sera enregistrée sous contrat avec Token Sport comme médiateur. Les investisseurs recevront des FST et la Dream Team recevra des pièces Fiat ou Bitcoin."
      },
      {
        paragraph: "De plus, une fois créés les contrats intelligents, les portefeuilles des membres de la Dream Team maintiendront toujours les pourcentages de participation de cet utilisateur, obtenant toujours des jetons TSP (selon litepaper)."
      },
      {
        paragraph: "Une fois l'entreprise décentralisée et au moyen d'un système DAO (organisation autonome décentralisée en anglais), les utilisateurs qui ont plus de TSP (investisseurs, Dream Team, utilisateurs, etc.) pourront prendre des décisions pour la croissance de Token Sport et continueront constamment à gérer des contrats intelligents, programmés avec leur taux de participation."
      },
      {
        paragraph: "En tant qu'entreprise mondiale, la croissance de Token Sport est exponentielle et nécessite les personnes les plus qualifiées et les plus passionnées dans ce qu'elles font, pariant pour avoir un impact positif sur l'économie et la perturbation du système comme nous le savons."
      },
      {
        paragraph: "Si vous êtes une personne créative, proactive et engagée dans ce que vous aimez, au point de ne pas l'appeler \"travail\", mais \"style de vie\", je vous invite à faire partie des nouvelles communautés perturbatrices et à partager vos connaissances personnelles et/ou professionnelles avec les projets décentralisés qui se créent dans le monde entier."
      },
      {
        paragraph: "Mon engagement est d'apporter des connaissances sur la chaîne de blocs et les talents latino-américains pour conquérir des communautés à travers le monde, générer des opportunités et avoir un impact positif sur la société."
      },
      {
        paragraph: "Si vous voulez en savoir plus sur Blockchain et la nouvelle économie perturbatrice, vous avez à votre disposition toutes mes connaissances pour les partager avec vous, et si vous voulez nous accompagner dans la croissance de Token Sport pour conquérir de nouveaux horizons, \"Bienvenue\" nous vous attendions."
      }
    ],
    author: AUTHOR
  }
};

export default FR;
