import React from 'react';

// COMPONENTS
import { WordsColor } from 'components/LayoutHome/styles';

// CONSTANTS
import DREAMTEAM from 'constants/dreamTeam';
import TSPNETWORKS from 'constants/tspNetworks';
import AUTHOR from 'constants/author';

const NAVLINKS = [
  { name: "Caratteristiche", path: "#features" },
  { name: "Tabella di marcia", path: "#roadmap" },
  { name: " Squadra dei sogni", path: "#dreamteam" },
  { name: "Interruzione", path: "/disruption" }
];

const ITA = {
  navLinks: NAVLINKS,
  hero: {
    title: "PER SIMBOLEGGIARE LE TUE EMOZIONI",
    description: "Il primo Dapp che dà valore alle tue emozioni. Fai piovere gettoni!",
    cta: "unirsi",
    scta: "Carta da lettere"
  },
  features: [
    {
      isReverse: true,
      title: <span>Che diavolo è <WordsColor color="neonBlue">Token Sport?</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FQue-rayos-es-token-sport%402x.png?alt=media&token=7b471b90-2675-4b52-a742-cefbbba70ed4",
      description: "È la prima Dapp (applicazione decentralizzata) che permette agli utenti di condividere le proprie emozioni nello sport e, attraverso la tecnologia BlockChain, di simboleggiare i propri dati.",
      secondaryInfo: [
        {
          title: "Che cos'è il TSP?",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAduenate-de-tus-datos%402x.png?alt=media&token=89491ea8-7a17-437d-850d-21d0af7afd4c",
          altImage: "¿Qué es TSP?",
          description: "Il token TSP è un asset digitale Token Sport che rappresenta il valore delle interazioni.  Maggiore è il numero di utenti e interazioni, maggiore è il valore che i FST avranno."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Condividi le tue <WordsColor color="neonOrange">emozioni</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComparte-emociones%402x.png?alt=media&token=4fe6a441-16cf-49b0-8465-1d32cf297e13",
      description: "Scegli la partita di calcio in cui vuoi interagire con la comunità. Giocatori, giudici e allenatori ad ogni partita.",
      secondaryInfo: [
        {
          title: "Scommesse dal vivo",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FNotificaciones-tiempo-real%402x.png?alt=media&token=979f2660-fd2a-47b2-a72c-24179f4332f4",
          altImage: "Apuestas en vivo",
          description: "Scegliete il giocatore che pensate sarà il più applaudito e fischiato in ogni partita e vincere più gettoni TSP."
        },
        {
          title: "Crea il tuo ideale undici",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2F11-ideal%402x.png?alt=media&token=371e34bf-6e27-4e2d-902b-5a9fd3bdae66",
          altImage: "Arma tu once ideal",
          description: "Scegli la tua squadra perfetta con i giocatori che pensi saranno i più applauditi durante tutto l'anno e competere con gli undici ideali dell'intera comunità. Il vincitore vincerà un grande piatto di gettoni TSP alla fine del torneo."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Siamo in <WordsColor color="neonGreen">TV</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSalimos-en-tv%402x.png?alt=media&token=9b2bec23-79c9-4d5e-8843-892ff13734f3",
      description: "Attraverso un'Api, i media e gli sponsor potranno ricevere in diretta le statistiche dei giocatori più applauditi e/o fischiati del momento e condividerle durante la trasmissione.",
      secondaryInfo: [
        {
          title: "Statistiche",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FEstadisticas-en-vivo%402x.png?alt=media&token=ace364a7-ccd6-45ed-a4e7-5722cd15e3ac",
          altImage: "Estadisticas",
          description: "Club, giornalisti, giornalisti, media e aziende potranno accedere ai dati specifici di ogni giocatore, tecnico o giudice. In questo modo, è necessario pagare con gettoni TSP che saranno distribuiti in tutta la comunità."
        }
      ]
    },
    {
      isReverse: false,
      title: <span><WordsColor color="neonBlue">Gettoniamo!</WordsColor></span>,
      description: "Attraverso i contratti intelligenti gli utenti ricevono TSP, che possono scambiare con Bitcoin, o consumare direttamente nei negozi e commercianti alleati.",
      secondaryInfo: [
        {
          title: "Merchandising",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComercios-aliados%402x.png?alt=media&token=320b387a-c964-43f8-9581-7570f9baf8c7",
          altImage: "Merchandasing",
          description: "Puoi scambiare i tuoi gettoni TSP con il merchandising del tuo club preferito, biglietti per lo stadio, iscrizioni in centri sportivi e prodotti e servizi infiniti dagli alleati a Token Sport."
        },
        {
          title: "Scambio proprio",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPaso-a-paso%402x.png?alt=media&token=b6bf0a40-3618-4695-8668-1871297a8b3a",
          altImage: "Exchange",
          description: "Puoi scambiare i tuoi FST con Bitcoin, Ethereum o altri crittoattivi alleati, in modo da poter risparmiare o monetizzare con denaro FIAT, se lo desideri."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Essere parte della <WordsColor color="neonOrange">comunità</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSe-parte-de-la-comunidad%402x.png?alt=media&token=f93624de-5ecf-4392-89bd-230f31f2057a",
      description: "Modificare, correggere e aggiornare i dati dei campionati per mantenere aggiornate le informazioni sulla squadra. Per ogni azione convalidata riceverai grandi ricompense",
      secondaryInfo: [
        {
          title: "Economia dirompente",
          altImage: "Economia Disruptiva",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FDisruptiva-colaborativa%402x.png?alt=media&token=be871c20-9a9f-4d78-a944-e2e7861475a4",
          description: "Potrai vedere un elenco di attività relative al progetto e selezionare quella in cui pensi di poter essere d'aiuto. Man mano che procedete, riceverete TSP per il vostro importante lavoro."
        },
        {
          title: "Aiutaci testandoci!",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPrimero-en-probar%402x.png?alt=media&token=93a6b08a-db50-4986-afc3-d8f001f07017",
          altImage: "Ayudanos testeando",
          description: "Unisciti alla comunità prima di tutto, essendo un “utente tester” e aiutaci nello sviluppo della Dapp con suggerimenti, proposte, analisi e così via. Una Dapp fatta dagli utenti, per gli utenti!"
        }
      ]
    }
  ],
  roadmap: {
    title: "Tabella di marcia",
    content: [
      {
        id: 1,
        date: "Q3 2018",
        goals: [
          "Lancio pubblico del progetto.",
          "Carta bianca 1.0b."
        ],
        color: "neonBlue"
      },
      {
        id: 2,
        date: "Q4 2018",
        goals: [
          "Dream Team Formation.",
          "Sviluppo di prove di concetto."
        ],
        color: "neonOrange"
      },
      {
        id: 3,
        date: "Q1 2019",
        goals: [
          "Inizio dello sviluppo dell'applicazione 1.0b.",
          "Creazione di strategie di marketing."
        ],
        color: "neonGreen"
      },
      {
        id: 4,
        date: "Q2 2019",
        goals: [
          "Lancio della prova di concetto al pubblico.",
          "Primo ciclo di investimenti iniziali."
        ],
        color: "opaqueBlue"
      },
      {
        id: 5,
        date: "Q3 2019",
        goals: [
          "Inizio dello sviluppo di Data Api.",
          "Inizio dello sviluppo della Blockchain."
        ],
        color: "neonBlue"
      },
      {
        id: 6,
        date: "Q4 2019",
        goals: [
          "Aggiornamento Whitepaper.",
          "Secondo ciclo di investimenti."
        ],
        color: "neonOrange"
      },
      {
        id: 7,
        date: "Q1 2020",
        goals: [
          "Rilasciata l'App 1.0b.",
          "Creazione della comunità di utenti.",
          "Nuovo business (Alleanze strategiche).",
          "Dati Api 1.0b."
        ],
        color: "neonGreen"
      },
      {
        id: 8,
        date: "Q2 2020",
        goals: [
          "Sviluppo di sistemi di sicurezza.",
          "Lancio dell'App 1.0.",
          "Contratti intelligenti.",
        ],
        color: "opaqueBlue"
      },
      {
        id: 9,
        date: "Q3 2020",
        goals: [
          "Inizio dello sviluppo dello scambio.",
          "Dati Api 1.0.",
        ],
        color: "neonBlue"
      },
      {
        id: 10,
        date: "Q4 2020",
        goals: [
          "Apertura al mercato (ITO).",
          "Creazione di DAO.",
          "Dapp lancio."
        ],
        color: "neonOrange"
      }
    ]
  },
  tokenDist: {
    title: "Distribuzione di gettoni",
    values: [
      {
        title: "Sviluppo iniziale",
        percent: "1.13%",
        color: "neonBlue"
      },
      {
        title: "Fase ITO",
        percent: "3.75%",
        color: "neonOrange"
      },
      {
        title: "Airdrops",
        percent: "2.5%",
        color: "neonGreen"
      },
      {
        title: "Premi",
        percent: "1.25%",
        color: "opaqueBlue"
      },
    ]
  },
  dreamTeam: {
    title: "Squadra dei sogni",
    description: "Scopri la squadra titolare di Token Sport",
    team: DREAMTEAM
  },
  partners: {
    title: "Partner e amici",
    description: "Chi si fida e sostiene Token Sport?"
  },
  subscribe: {
    isReverse: true,
    title: <span>Iscriviti ed entra a far parte di questa <WordsColor color="neonGreen">grande squadra!</WordsColor></span>,
    description: "Avrete accesso anticipato, prove gratuite e riceverete aggiornamenti con tutte le anteprime di Token Sport.",
    secondaryInfo: [
      {
        title: "Contribuisci con il tuo granito",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAporta-tu-granito%402x.png?alt=media&token=a3b30ae2-674a-4c09-a701-31eac03c44d6',
        altImage: 'Aporta tu granito',
        description: "Unisciti a noi e avrai l'opportunità di portare il tuo grande talento e rendere Token Sport un progetto migliore e migliore. Non preoccupatevi se non conoscete la tecnologia, potete anche aiutarci come Token Sport Tester ufficiale."
      },
      {
        title: "Diventa un VIP",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FConviertete-en-vip%402x.png?alt=media&token=e3186a33-aaf6-439e-baad-6af7060a0a9a',
        altImage: 'Conviértete en VIP',
        description: "Non pensate che questo sia un altro raccoglitore di email che ogni giorno riceverà rifiuti alla vostra mail No! In Token Sport apprezziamo che vi unirete a noi e così vi daremo le migliori informazioni relative al progetto.... e, naturalmente, uno o l'altro regalo :)."
      }
    ],
    form: {
      title: "Unisciti a noi",
      nameInput: "Nome",
      surnameInput: "Cognome",
      emailInput: "Email",
      copyButton: "Iscriviti"
    }
  },
  footer: {
    copyright: "Tutti i diritti riservati©",
    networks: {
      title: "Social Networking",
      description: "Seguiteci per rimanere al passo con tutto.",
      icons: TSPNETWORKS
    }
  },
  disruptivePost: {
    body: [
      {
        paragraph: "Negli ultimi 15 anni abbiamo visto come le grandi aziende sono scomparse grazie ai progressi tecnologici e alla creazione di diversi strumenti per guadagnare terreno e conquistare il mercato."
      },
      {
        paragraph: "Netflix sviluppando una piattaforma potente e comprendendo perfettamente i benefici e la portata di internet, ha messo a punto un unico business plan e sta spostando le sale, si sono spinti oltre, realizzando le proprie produzioni cinematografiche, leader di mercato con ogni prodotto."
      },
      {
        paragraph: "Ci sono anche altre aziende che hanno genialmente creato piattaforme sotto lo slogan \"Collaborative Economy\" e hanno raggiunto un impatto in centinaia di paesi e stanno gradualmente guadagnando terreno sui mercati."
      },
      {
        paragraph: "Facebook, Google, Amazon, Amazon, e centinaia di altre aziende che possiamo nominare e che hanno davvero generato un cambiamento epocale nell'umanità."
      },
      {
        paragraph: "Qualcosa in comune tra tutte queste aziende è che generano centinaia di migliaia di posti di lavoro in tutto il mondo, creando così opportunità per milioni di persone, alcune delle quali messe in discussione dal tipo di assunzione. Va anche notato che anche quelli che parlano di \"Economia Collaborativa\" sono società con proprietari e dirigenti multimilionari che prendono decisioni per generare redditi più elevati, indipendentemente dalla decisione dei loro dipendenti e/o consumatori."
      },
      {
        paragraph: "Uber, Rappi, Beat, AirBnb e molte altre piattaforme in tutto il mondo hanno generato centinaia di milioni di dollari attraverso un'economia collaborativa, in cui gli utenti beneficiano facendo lavoro e in alcuni casi rischiando la loro vita, generando più vendite, più velocemente, per aumentare ulteriormente il valore dell'azienda, e, ovviamente, distribuire questi profitti tra i consigli di amministrazione e gli azionisti."
      },
      {
        paragraph: "Da anni stanno emergendo nuovi business e stili di vita, basati sul decentramento che utilizza per la sua esecuzione uno strumento sempre più sentito in tutto il mondo, chiamato BlockChain o Chain of Blocks."
      },
      {
        paragraph: "Ma come tutti i Blockbuster ottiene il suo Netflix, queste aziende stanno ottenendo la loro Blockchain, permettendo loro di creare progetti decentralizzati, basando la fiducia della comunità nella catena benedetta di blocchi, permettendo a tutti gli utenti di essere proprietari e partecipanti al processo decisionale, allo sviluppo e alla crescita di nuove organizzazioni decentralizzate."
      },
      {
        paragraph: "Sulla base di un progetto di 6 anni fa e attraverso un sistema dirompente, abbiamo lanciato la comunità Token Sport, la prima azienda che promette di decentralizzare e coinvolgere gli utenti nello sviluppo e nella crescita della Dapp (Decentralized Application) che permette ai fan di simboleggiare le loro emozioni."
      },
      {
        paragraph: "L'impatto di Blockchain, aggiunto all'emergente \"Disruptive Economy\" sta cambiando il modo di intendere il business e generando comunità completamente proattive."
      },
      {
        paragraph: "È giunto il momento di scrivere il futuro e abbiamo nelle nostre mani la possibilità di far parte della quarta evoluzione industriale."
      },
      {
        paragraph: "Economia dirompente per lo sviluppo e l'espansione di Token Sport:"
      },
      {
        paragraph: "Utilizzando la tecnologia BlockChain sono stati creati alcuni gettoni TSP, registrati nella catena NEM sotto la paternità e la responsabilità di Alejandro Fernandez, ideatore dell'idea e fondatore del progetto Token Sport."
      },
      {
        paragraph: "Durante l'inizio del progetto, un valore di 0,00771 sarà assegnato ad ogni gettone che viene dato ai membri del team stabile, che si fidano al 100% del progetto e sono disposti a contribuire con tutte le loro conoscenze e competenze, lavorando con passione alla realizzazione del progetto."
      },
      {
        paragraph: "Questi membri diventano il Dream Team di Token Sport, il motore principale, che attraverso contratti con il fondatore dell'azienda (fase centralizzata), riceverà TSP in cambio del loro contributo allo sviluppo. "
      },
      {
        paragraph: "Durante il primo round di investimento, i membri del Dream Team avranno la priorità nella vendita dei gettoni; al momento della vendita, l'intera transazione sarà registrata in base a un contratto con Token Sport come mediatore. Gli investitori riceveranno i TSP e il Dream Team riceverà le monete Fiat o Bitcoin."
      },
      {
        paragraph: "Inoltre, una volta creati i contratti intelligenti, i portafogli dei membri del Dream Team manterranno sempre le percentuali di partecipazione di quell'utente, ottenendo sempre gettoni TSP (secondo il litepaper)."
      },
      {
        paragraph: "Una volta che l'azienda è decentralizzata e attraverso un sistema DAO (organizzazione autonoma decentralizzata in inglese), quegli utenti che hanno più TSP (investitori, Dream Team, utenti, utenti, ecc.) potranno prendere decisioni per la crescita di Token Sport e continueranno costantemente a governare contratti intelligenti, programmati con la loro percentuale di partecipazione."
      },
      {
        paragraph: "Essendo un'azienda globale, la crescita di Token Sport è esponenziale e richiede le persone più qualificate e appassionate in quello che fanno, scommettendo di avere un impatto positivo sull'economia e la rottura del sistema così come lo conosciamo noi."
      },
      {
        paragraph: "Se sei una persona creativa, proattiva e impegnata nel fare ciò che ami, al punto che non lo chiami \"lavoro\", ma \"stile di vita\", ti invito a far parte delle nuove comunità dirompenti e a condividere le tue conoscenze personali e/o professionali con progetti decentralizzati che si stanno creando in tutto il mondo."
      },
      {
        paragraph: "Il mio impegno è quello di portare la conoscenza della catena di blocco e dei talenti latinoamericani per conquistare le comunità di tutto il mondo, generando opportunità e con un impatto positivo sulla società."
      },
      {
        paragraph: "Se vuoi saperne di più su Blockchain e la nuova economia dirompente, hai a tua disposizione tutte le mie conoscenze per condividerle con te, e se vuoi accompagnarci nella crescita di Token Sport per conquistare nuovi orizzonti, \"WELCOME\" ti aspettavamo."
      }
    ],
    author: AUTHOR
  }
}

export default ITA;