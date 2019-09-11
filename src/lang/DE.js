import React from 'react';

// COMPONENTS
import { WordsColor } from 'components/LayoutHome/styles';

// CONSTANTS
import DREAMTEAM from 'constants/dreamTeam';
import TSPNETWORKS from 'constants/tspNetworks';
import AUTHOR from 'constants/author';

const NAVLINKS = [
  { name: "Funktionen", path: "#features" },
  { name: "Roadmap", path: "#roadmap" },
  { name: "Dream Team", path: "#dreamteam" },
  { name: "Störung", path: "/disruption" }
];

const DE = {
  navLinks: NAVLINKS,
  hero: {
    title: "IHRE EMOTIONEN ZU SYMBOLISIEREN.",
    description: "Der erste Dapp, der Ihren Emotionen Wert verleiht: Lassen Sie Token regnen!",
    cta: "Beitreten",
    scta: "Litepaper"
  },
  features: [
    {
      isReverse: true,
      title: <span>Was zum Teufel ist <WordsColor color="neonBlue">Token Sport?</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FQue-rayos-es-token-sport%402x.png?alt=media&token=7b471b90-2675-4b52-a742-cefbbba70ed4",
      description: "Es ist die erste Dapp (dezentrale Anwendung), die es den Benutzern ermöglicht, ihre Emotionen im Sport zu teilen und durch die BlockChain-Technologie ihre Daten zu tokenisieren.",
      secondaryInfo: [
        {
          title: "Was ist TSP?",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAduenate-de-tus-datos%402x.png?alt=media&token=89491ea8-7a17-437d-850d-21d0af7afd4c",
          altImage: "¿Qué es TSP?",
          description: "Der TSP-Token ist ein Token Sport Digital Asset, das den Wert von Interaktionen darstellt.  Je größer die Anzahl der Benutzer und Interaktionen, desto mehr Wert haben Ihre TSPs."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Teilen Sie Ihre <WordsColor color="neonOrange">Emotionen</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComparte-emociones%402x.png?alt=media&token=4fe6a441-16cf-49b0-8465-1d32cf297e13",
      description: "Wählen Sie das Fußballspiel, in dem Sie mit der Community interagieren möchten. Klatsch- oder Boo-Spieler, Richter und Trainer bei jedem Spiel.",
      secondaryInfo: [
        {
          title: "Live-Wetten",
          altImage: "Apuestas en vivo",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FNotificaciones-tiempo-real%402x.png?alt=media&token=979f2660-fd2a-47b2-a72c-24179f4332f4",
          description: "Wählen Sie den Spieler, von dem Sie denken, dass er in jedem Spiel am meisten applaudiert und ausgepfiffen wird, und gewinnen Sie mehr TSP-Token."
        },
        {
          title: "Machen Sie Ihre ideale 11.",
          altImage: "Arma tu once ideal",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2F11-ideal%402x.png?alt=media&token=371e34bf-6e27-4e2d-902b-5a9fd3bdae66",
          description: "Wählen Sie Ihr perfektes Team mit den Spielern, von denen Sie denken, dass sie das ganze Jahr über am meisten applaudiert werden und treten Sie gegen die elf Ideale der gesamten Community an. Der Gewinner gewinnt am Ende des Turniers einen großen Pot mit TSP-Token."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Wir sind im <WordsColor color="neonGreen">Fernsehen.</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSalimos-en-tv%402x.png?alt=media&token=9b2bec23-79c9-4d5e-8843-892ff13734f3",
      description: "Durch eine Api können Medien und Sponsoren Live-Statistiken von den am meisten applaudierten und/oder gebuhten Spielern des Augenblicks erhalten und während der Sendung teilen.",
      secondaryInfo: [
        {
          title: "Statistik",
          altImage: "Estadisticas",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FEstadisticas-en-vivo%402x.png?alt=media&token=ace364a7-ccd6-45ed-a4e7-5722cd15e3ac",
          description: "Vereine, Journalisten, Medien und Unternehmen können auf die spezifischen Daten der einzelnen Spieler, Techniker oder Richter zugreifen. Dabei müssen Sie mit TSP-Token bezahlen, die in der gesamten Community verteilt werden."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Wir <WordsColor color="neonBlue">Tokenisieren!</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FTokenizamos%402x.png?alt=media&token=5d46e731-aadc-4754-aeea-689cdf8db3a2",
      description: "Durch Intelligent Contracts erhalten die Nutzer TSP, die sie gegen Bitcoin eintauschen oder direkt in Allied Shops und Händlern konsumieren können.",
      secondaryInfo: [
        {
          title: "Merchandising",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComercios-aliados%402x.png?alt=media&token=320b387a-c964-43f8-9581-7570f9baf8c7",
          altImage: "Merchandasing",
          description: "Sie können Ihre TSP-Token gegen Merchandising Ihres Lieblingsvereins, Tickets für das Stadion, Mitgliedschaften in Sportzentren und endlose Produkte und Dienstleistungen von Verbündeten bis Token Sport eintauschen."
        },
        {
          title: "Eigene Börse",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPaso-a-paso%402x.png?alt=media&token=b6bf0a40-3618-4695-8668-1871297a8b3a",
          altImage: "Exchange",
          description: "Sie können Ihre TSPs gegen Bitcoin, Ethereum oder andere verbündete Kryptoaktives austauschen, so dass Sie gegen FIAT-Geld sparen oder monetarisieren können, wenn Sie möchten."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Werden Sie Teil der <WordsColor color="neonOrange">Community</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSe-parte-de-la-comunidad%402x.png?alt=media&token=f93624de-5ecf-4392-89bd-230f31f2057a",
      description: "Bearbeiten, korrigieren und aktualisieren Sie die Ligadaten, um die Teaminformationen auf dem neuesten Stand zu halten. Für jede validierte Aktion erhalten Sie große Belohnungen.",
      secondaryInfo: [
        {
          title: "Zerrüttende Wirtschaft",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FDisruptiva-colaborativa%402x.png?alt=media&token=be871c20-9a9f-4d78-a944-e2e7861475a4",
          altImage: "Economia Disruptiva",
          description: "Sie können eine Liste von Aufgaben im Zusammenhang mit dem Projekt sehen und diejenige auswählen, bei der Sie Ihrer Meinung nach helfen können. Im Laufe des Prozesses erhalten Sie TSP für Ihre wichtige Arbeit."
        },
        {
          title: "Hilf uns beim Testen!",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPrimero-en-probar%402x.png?alt=media&token=93a6b08a-db50-4986-afc3-d8f001f07017",
          altImage: "Ayudanos testeando",
          description: "Werde zuerst Mitglied der Community, sei ein “Testerbenutzer” und hilf uns bei der Entwicklung des Dapp mit Vorschlägen, Vorschlägen, Analysen und so weiter. Ein Dapp von den Anwendern, für die Anwender!"
        }
      ]
    }
  ],
  roadmap:{
    title: "Roadmap",
    content: [
      {
        id: 1,
        date: "Q3 2018",
        goals: [
          "Öffentlicher Start des Projekts.",
          "Whitepaper 1.0b."
        ],
        color: "neonBlue"
      },
      {
        id: 2,
        date: "Q4 2018",
        goals: [
          "Dream Team Bildung.",
          "Proof-of-Concept-Entwicklung."
        ],
        color: "neonOrange"
      },
      {
        id: 3,
        date: "Q1 2019",
        goals: [
          "Beginn der Entwicklung der App 1.0b.",
          "Erstellung von Marketingstrategien."
        ],
        color: "neonGreen"
      },
      {
        id: 4,
        date: "Q2 2019",
        goals: [
          "Einführung des Proof of Concept in der Öffentlichkeit.",
          "1. Runde der Frühinvestitionen."
        ],
        color: "opaqueBlue"
      },
      {
        id: 5,
  
        date: "Q3 2019",
        goals: [
          "Beginn der Daten-Api-Entwicklung.",
          "Beginn der Blockchain-Entwicklung."
        ],
        color: "neonBlue"
      },
      {
        id: 6,
        date: "Q4 2019",
        goals: [
          "Whitepaper Update.",
          "Investitionsrunde."
        ],
        color: "neonOrange"
      },
      {
        id: 7,
        date: "Q1 2020",
        goals: [
          "App 1.0b freigegeben.",
          "Erstellung der Benutzer-Community.",
          "New Business (Strategische Allianzen).",
          "Daten Api 1.0b."
        ],
        color: "neonGreen"
      },
      {
        id: 8,
        date: "Q2 2020",
        goals: [
          "Entwicklung von Sicherheitssystemen.",
          "App 1.0 starten.",
          "Intelligente Verträge.",
        ],
        color: "opaqueBlue"
      },
      {
        id: 9,
        date: "Q3 2020",
        goals: [
          "Beginn der Börsenentwicklung.",
          "Daten Api 1.0.",
        ],
        color: "neonBlue"
      },
      {
        id: 10,
        date: "Q4 2020",
        goals: [
          "Öffnung für den Markt (ITO).",
          "Erstellung von DAO.",
          "Dapp-Start."
        ],
        color: "neonOrange"
      }
    ]
  },
  tokenDist: {
    title: "Verteilung der Token",
    values: [
      {
        title: "Erste Entwicklung",
        percent: "1.13%",
        color: "neonBlue"
      },
      {
        title: "Stufe ITO",
        percent: "3.75%",
        color: "neonOrange"
      },
      {
        title: "Vogeltropfen",
        percent: "2.5%",
        color: "neonGreen"
      },
      {
        title: "Belohnungen",
        percent: "1.25%",
        color: "opaqueBlue"
      },
    ]
  },
  dreamTeam: {
    title: "Dream Team",
    description: "Entdecken Sie das einzigartige Team von Token Sport.",
    team: DREAMTEAM
  },
  partners: {
    title: "Partner & Freunde",
    description: "Wer vertraut und unterstützt Token Sport?"
  },
  subscribe: {
    isReverse: true,
    title: <span>Melden Sie sich an und werden Sie Teil dieses <WordsColor color="neonGreen">großartigen Teams!</WordsColor></span>,
    description: "Sie haben erweiterten Zugriff, kostenlose Testversionen und erhalten Updates mit allen Vorschauen von Token Sport.",
    secondaryInfo: [
      {
        title: "Bringen Sie Ihren Granit ein",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAporta-tu-granito%402x.png?alt=media&token=a3b30ae2-674a-4c09-a701-31eac03c44d6',
        altImage: 'Aporta tu granito',
        description: "Kommen Sie zu uns und Sie haben die Möglichkeit, Ihr großes Talent einzubringen und Token Sport zu einem immer besseren Projekt zu machen. Machen Sie sich keine Sorgen, wenn Sie nichts über Technologie wissen, Sie können uns auch helfen, indem Sie ein offizieller Token Sport Tester sind."
      },
      {
        title: "Werden Sie VIP",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FConviertete-en-vip%402x.png?alt=media&token=e3186a33-aaf6-439e-baad-6af7060a0a9a',
        altImage: 'Conviértete en VIP',
        description: "Denken Sie nicht, dass dies ein weiterer Sammler von E-Mails ist, der jeden Tag Müll zu Ihrer Mail No! in Token Sport bekommt, wir freuen uns, dass Sie sich uns anschließen und deshalb werden wir Ihnen die besten Informationen über das Projekt geben.... und natürlich das eine oder andere Geschenk :)."
      }
    ],
    form: {
      title: "Schließen Sie sich uns an",
      nameInput: "Vorname",
      surnameInput: "Nachname",
      emailInput: "E-Mail",
      copyButton: "Beitreten"
    }
  },
  footer: {
    copyright: "Alle Rechte vorbehalten ©",
    networks: {
      title: "Soziale Netzwerke",
      description: "Folgen Sie uns, um auf dem Laufenden zu bleiben.",
      icons: TSPNETWORKS
    }
  },
  disruptivePost: {
    body: [
      {
        paragraph: "In den letzten 15 Jahren haben wir gesehen, wie große Unternehmen dank des technologischen Fortschritts und der Schaffung verschiedener Instrumente zur Bodenbildung und Markterschließung verschwunden sind."
      },
      {
        paragraph: "Netflix entwickelt eine leistungsstarke Plattform und versteht perfekt die Vorteile und die Reichweite des Internets, hat einen einzigartigen Businessplan aufgestellt und verdrängt die Theater, sie sind sogar noch weiter gegangen, machen ihre eigenen Filmproduktionen und sind mit jedem Produkt marktführend."
      },
      {
        paragraph: "Es gibt auch andere Unternehmen, die unter dem Motto \"Collaborative Economy\" geniale Plattformen geschaffen haben und in Hunderten von Ländern Wirkung gezeigt haben und sich allmählich in den Märkten durchsetzen."
      },
      {
        paragraph: "Facebook, Google, Amazon und Hunderte anderer Unternehmen, die wir nennen können und die wirklich einen tiefgreifenden Wandel in der Menschheit bewirkt haben."
      },
      {
        paragraph: "Allen diesen Unternehmen ist gemeinsam, dass sie Hunderttausende von Arbeitsplätzen auf der ganzen Welt schaffen und damit Möglichkeiten für Millionen von Menschen schaffen, die teilweise durch die Art der Einstellung in Frage gestellt werden. Es sei auch darauf hingewiesen, dass selbst diejenigen, die von \"Collaborative Economy\" sprechen, Unternehmen mit Multimillionärseigentümern und Führungskräften sind, die Entscheidungen zur Generierung höherer Einkommen treffen, unabhängig von der Entscheidung ihrer Mitarbeiter und / oder Verbraucher."
      },
      {
        paragraph: "Uber, Rappi, Beat, AirBnb und viele andere Plattformen auf der ganzen Welt haben Hunderte von Millionen Dollar durch eine kollaborative Wirtschaft generiert, in der die Benutzer davon profitieren, indem sie Arbeit leisten und in einigen Fällen ihr Leben riskieren, mehr Umsatz generieren, schneller, um den Wert des Unternehmens weiter zu steigern und diese Gewinne natürlich an die Vorstände und Aktionäre zu verteilen."
      },
      {
        paragraph: "Seit Jahren entstehen neue Unternehmen und Lebensstile, die auf einer Dezentralisierung basieren, die ein immer häufiger weltweit zu hörendes Werkzeug zur Umsetzung einsetzt und als BlockChain oder Chain of Blocks bezeichnet wird."
      },
      {
        paragraph: "Aber da alle Blockbuster ihr Netflix bekommen, bekommen diese Unternehmen ihre Blockchain, die es ihnen ermöglicht, dezentrale Projekte zu erstellen, die das Vertrauen der Gemeinschaft in die gesegnete Blockkette begründen und es allen Nutzern ermöglichen, Eigentümer und Teilnehmer an der Entscheidungsfindung, Entwicklung und dem Wachstum neuer dezentraler Organisationen zu sein."
      },
      {
        paragraph: "Basierend auf einem Projekt vor 6 Jahren und durch ein disruptives System haben wir die Token Sport Community ins Leben gerufen, das erste Unternehmen, das verspricht, die Nutzer zu dezentralisieren und in die Entwicklung und das Wachstum der Dapp (Decentralized Application) einzubeziehen, die es den Fans ermöglicht, ihre Emotionen zu tokenisieren."
      },
      {
        paragraph: "Die Auswirkungen von Blockchain, die zu einer aufkommenden \"Disruptive Economy\" hinzukommen, verändern die Art und Weise, wie Unternehmen verstanden werden und erzeugen voll proaktive Gemeinschaften."
      },
      {
        paragraph: "Es ist an der Zeit, die Zukunft zu schreiben, und wir haben die Möglichkeit, Teil der vierten industriellen Evolution zu sein."
      },
      {
        paragraph: "Disruptive Economy für die Entwicklung und den Ausbau von Token Sport:"
      },
      {
        paragraph: "Mit Hilfe der BlockChain-Technologie wurden eine Reihe von TSP-Token erstellt, die in der NEM-Kette unter der Autorschaft und Verantwortung von Alejandro Fernandez, dem Ideengeber und Gründer des Token-Sport-Projekts, registriert wurden."
      },
      {
        paragraph: "Zu Beginn des Projekts wird jedem Token, das den Mitgliedern des stabilen Teams gegeben wird, ein Wert von 0,00771 zugewiesen, die zu 100% in das Projekt vertrauen und bereit sind, ihr ganzes Wissen und Können einzubringen und leidenschaftlich an der Durchführung des Projekts zu arbeiten."
      },
      {
        paragraph: "Diese Mitglieder werden zum Dream Team von Token Sport, dem Hauptmotor, der durch Verträge mit dem Unternehmensgründer (zentralisierte Bühne) TSP im Austausch für seinen Entwicklungsbeitrag erhält. "
      },
      {
        paragraph: "In der ersten Investitionsrunde haben die Mitglieder des Dream Teams Vorrang beim Verkauf von Token; beim Verkauf wird die gesamte Transaktion im Rahmen eines Vertrages mit Token Sport als Mediator erfasst. Investoren erhalten TSPs und das Dream Team erhält Fiat- oder Bitcoin-Münzen."
      },
      {
        paragraph: "Darüber hinaus, sobald die intelligenten Verträge erstellt wurden, werden die Wallets der Mitglieder des Dream Teams immer die Prozentsätze der Teilnahme dieses Benutzers beibehalten und erhalten immer Token TSP (laut Litepaper)."
      },
      {
        paragraph: "Sobald das Unternehmen dezentralisiert ist und mittels eines DAO-Systems (dezentrale autonome Organisation in englischer Sprache), werden diejenigen Benutzer, die mehr TSPs haben (Investoren, Dream Team, Benutzer, etc.), in der Lage sein, Entscheidungen für das Wachstum von Token Sport zu treffen und werden weiterhin intelligente Verträge verwalten, die mit ihrem Anteil an der Teilnahme programmiert sind."
      },
      {
        paragraph: "Als globales Unternehmen ist das Wachstum von Token Sport exponentiell und erfordert die am besten qualifizierten und leidenschaftlichen Menschen in dem, was sie tun, und wettet darauf, die Wirtschaft und die Störung des Systems, wie wir es kennen, positiv zu beeinflussen."
      },
      {
        paragraph: "Wenn Sie ein kreativer, proaktiver und engagierter Mensch sind, der das tut, was Sie lieben, bis zu dem Punkt, dass Sie es nicht \"Arbeit\", sondern \"Lebensstil\" nennen, lade ich Sie ein, Teil der neuen disruptiven Gemeinschaften zu sein und Ihr persönliches und/oder berufliches Wissen mit dezentralen Projekten zu teilen, die auf der ganzen Welt entstehen."
      },
      {
        paragraph: "Mein Ziel ist es, Wissen über Blockchain und lateinamerikanische Talente zu vermitteln, um Gemeinschaften auf der ganzen Welt zu erobern, Chancen zu schaffen und die Gesellschaft positiv zu beeinflussen."
      },
      {
        paragraph: "Wenn Sie mehr über Blockchain und die neue disruptive Wirtschaft erfahren möchten, haben Sie all mein Wissen zur Verfügung, um es mit Ihnen zu teilen, und wenn Sie uns beim Wachstum von Token Sport begleiten wollen, um neue Horizonte zu erobern, \"WILLKOMMEN\" haben wir auf Sie gewartet."
      }
    ],
    author: AUTHOR
  }
}

export default DE;
