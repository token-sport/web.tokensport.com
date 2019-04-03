import React from 'react';

// COMPONENTS
import { WordsColor } from 'components/LayoutHome/styles';

// CONSTANTS
import DREAMTEAM from 'constants/dreamTeam';
import TSPNETWORKS from 'constants/tspNetworks';
import AUTHOR from 'constants/author';

const NAVLINKS = [
  { name: "Recursos", path: "#features" },
  { name: "Roteiro", path: "#roadmap" },
  { name: "Dream Team", path: "#dreamteam" },
  { name: "Interrupção", path: "/disruption" }
];

const PT = {
  navLinks: NAVLINKS,
  hero: {
    title: "TOKENIZE SUAS EMOÇÕES",
    description: "O primeiro Dapp que dá valor às suas emoções. Faça chover Tokens!",
    cta: "Junte-se",
    scta: "Litepaper"
  },
  features: [
    {
      isReverse: true,
      title: <span>Que diabos é <WordsColor color="neonBlue"></WordsColor>Token Sport?</span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FQue-rayos-es-token-sport%402x.png?alt=media&token=7b471b90-2675-4b52-a742-cefbbba70ed4",
      description: "É o primeiro Dapp (aplicativo descentralizado) que permite aos usuários compartilhar suas emoções no esporte e, através da tecnologia BlockChain, tokenizar seus dados.",
      secondaryInfo: [
        {
          title: "O que é TSP?",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAduenate-de-tus-datos%402x.png?alt=media&token=89491ea8-7a17-437d-850d-21d0af7afd4c",
          altImage: "¿Qué es TSP?",
          description: "O token TSP é um ativo digital Token Sport que representa o valor das interações.  Quanto maior o número de usuários e interações, maior o valor que seus TSPs terão."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Compartilhe suas <WordsColor color="neonOrange">emoções</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComparte-emociones%402x.png?alt=media&token=4fe6a441-16cf-49b0-8465-1d32cf297e13",
      description: "Escolha o jogo de futebol no qual você quer interagir com a comunidade. Jogadores, juízes e treinadores em todos os jogos.",
      secondaryInfo: [
        {
          title: "Apostas ao vivo",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FNotificaciones-tiempo-real%402x.png?alt=media&token=979f2660-fd2a-47b2-a72c-24179f4332f4",
          altImage: "Apuestas en vivo",
          description: "Escolha o jogador que você acha que será o mais aplaudido e vaiado em cada partida e ganhe mais fichas TSP."
        },
        {
          title: "Faça o seu onze ideal",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2F11-ideal%402x.png?alt=media&token=371e34bf-6e27-4e2d-902b-5a9fd3bdae66",
          altImage: "Arma tu once ideal",
          description: "Escolha sua equipe perfeita com os jogadores que você acha que serão os mais aplaudidos durante todo o ano e competir com os onze ideais de toda a comunidade. O vencedor ganhará um grande pote de fichas TSP no final do torneio."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Estamos na <WordsColor color="neonGreen">TV</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSalimos-en-tv%402x.png?alt=media&token=9b2bec23-79c9-4d5e-8843-892ff13734f3",
      description: "Através de uma API, a mídia e os patrocinadores poderão receber estatísticas ao vivo dos jogadores mais aplaudidos e/ou vaiados do momento e compartilhá-las durante a transmissão.",
      secondaryInfo: [
        {
          title: "Estatística",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FEstadisticas-en-vivo%402x.png?alt=media&token=ace364a7-ccd6-45ed-a4e7-5722cd15e3ac",
          altImage: "Estadisticas",
          description: "Clubes, jornalistas, mídia e empresas poderão acessar os dados específicos de cada jogador, técnico ou juiz. Ao fazer isso, você deve pagar com tokens TSP que serão distribuídos em toda a comunidade."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Nós <WordsColor color="neonBlue">Tokenize!</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FTokenizamos%402x.png?alt=media&token=5d46e731-aadc-4754-aeea-689cdf8db3a2",
      description: "Através de Contratos Inteligentes os usuários recebem TSP, que podem trocar por Bitcoin, ou consumir diretamente em Lojas Aliadas e Comerciantes.",
      secondaryInfo: [
        {
          title: "Merchandising",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComercios-aliados%402x.png?alt=media&token=320b387a-c964-43f8-9581-7570f9baf8c7",
          altImage: "Merchandasing",
          description: "Você pode trocar seus tokens TSP por merchandising de seu clube favorito, ingressos para o estádio, assinaturas em centros esportivos e produtos e serviços infinitos de aliados à Token Sport."
        },
        {
          title: "Troca Própria",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPaso-a-paso%402x.png?alt=media&token=b6bf0a40-3618-4695-8668-1871297a8b3a",
          altImage: "Exchange",
          description: "Você pode trocar seus TSPs por Bitcoin, Ethereum ou outros criptoativos aliados, assim você pode economizar ou monetizar por dinheiro FIAT se desejar."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Faça parte da <WordsColor color="neonOrange">comunidade</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSe-parte-de-la-comunidad%402x.png?alt=media&token=f93624de-5ecf-4392-89bd-230f31f2057a",
      description: "Editar, corrigir e actualizar os dados da liga para manter a informação da equipa actualizada. Para cada ação validada você receberá grandes recompensas",
      secondaryInfo: [
        {
          title: "Economia Perturbadora",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FDisruptiva-colaborativa%402x.png?alt=media&token=be871c20-9a9f-4d78-a944-e2e7861475a4",
          altImage: "Economia Disruptiva",
          description: "Você será capaz de ver uma lista de tarefas relacionadas ao projeto e selecionar aquela em que você acha que pode ajudar. À medida que progredir, receberá TSP para o seu trabalho importante."
        },
        {
          title: "Ajude-nos testando!",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPrimero-en-probar%402x.png?alt=media&token=93a6b08a-db50-4986-afc3-d8f001f07017",
          altImage: "Ayudanos testeando",
          description: "Junte-se à comunidade primeiro, sendo um “tester user” e nos ajude no desenvolvimento do Dapp com sugestões, propostas, análises, e assim por diante. Um Dapp feito pelos usuários, para os usuários!"
        }
      ]
    }
  ],
  roadmap: {
    title: "O que é que se passa?",
    content: [
      {
        id: 1,
        date: "Q3 2018",
        goals: [
          "Lançamento público do projecto.",
          "Whitepaper 1.0b."
        ],
        color: "neonBlue"
      },
      {
        id: 2,
        date: "Q4 2018",
        goals: [
          "Formação de Equipes de Sonho.",
          "Desenvolvimento da prova de conceito."
        ],
        color: "neonOrange"
      },
      {
        id: 3,
        date: "Q1 2019",
        goals: [
          "Início do desenvolvimento do aplicativo 1.0b.",
          "Criação de estratégias de marketing."
        ],
        color: "neonGreen"
      },
      {
        id: 4,
        date: "Q2 2019",
        goals: [
          "Lançamento da prova de conceito para o público.",
          "1ª Rodada de Investimentos Antecipados."
        ],
        color: "opaqueBlue"
      },
      {
        id: 5,
        date: "Q3 2019",
        goals: [
          "Início do desenvolvimento da Data Api.",
          "Início do desenvolvimento da Blockchain."
        ],
        color: "neonBlue"
      },
      {
        id: 6,
        date: "Q4 2019",
        goals: [
          "Atualização de Whitepaper.",
          "2ª Rodada de Investimentos."
        ],
        color: "neonOrange"
      },
      {
        id: 7,
        date: "Q1 2020",
        goals: [
          "App 1.0b lançado.",
          "Criação da comunidade de usuários.",
          "Novos Negócios (Alianças Estratégicas).",
          "Data Api 1.0b."
        ],
        color: "neonGreen"
      },
      {
        id: 8,
        date: "Q2 2020",
        goals: [
          "Desenvolvimento de sistemas de segurança.",
          "Lançamento do App 1.0.",
          "Contratos Inteligentes.",
        ],
        color: "opaqueBlue"
      },
      {
        id: 9,
        date: "Q3 2020",
        goals: [
          "Início do desenvolvimento do Exchange.",
          "Data Api 1.0.",
        ],
        color: "neonBlue"
      },
      {
        id: 10,
        date: "Q4 2020",
        goals: [
          "Abertura ao mercado (ITO).",
          "Criação de DAO.",
          "Lançamento do Dapp."
        ],
        color: "neonOrange"
      }
    ]
  },
  tokenDist: {
    title: "Distribuição de fichas",
    values: [
      {
        title: "Desenvolvimento Inicial ",
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
    title: "Equipe de Sonho",
    description: "Descubra o time titular da Token Sport",
    team: DREAMTEAM
  },
  partners: {
    title: "Parceiros & Amigos",
    description: "Quem confia e apoia a Token Sport?"
  },
  subscribe: {
    isReverse: true,
    title: <span>Inscreva-se e faça parte desta <WordsColor color="neonGreen">Grande Equipe!</WordsColor></span>,
    description: "Você terá acesso antecipado, avaliações gratuitas e receberá atualizações com todas as prévias do Token Sport.",
    secondaryInfo: [
      {
        title: "Contribua com o seu granito",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAporta-tu-granito%402x.png?alt=media&token=a3b30ae2-674a-4c09-a701-31eac03c44d6',
        altImage: 'Aporta tu granito',
        description: "Junte-se a nós e você terá a oportunidade de trazer seu grande talento e fazer da Token Sport um projeto melhor e melhor. Não se preocupe se você não conhece a tecnologia, você também pode nos ajudar sendo um testador oficial da Token Sport."
      },
      {
        title: "Torne-se um VIP",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FConviertete-en-vip%402x.png?alt=media&token=e3186a33-aaf6-439e-baad-6af7060a0a9a',
        altImage: 'Conviértete en VIP',
        description: "Não pense que este é outro coletor de e-mails que vai receber lixo todos os dias para o seu e-mail Não! em Token Sport agradecemos que você se juntar a nós e por isso vamos dar-lhe as melhores informações relacionadas com o projeto ... e, claro, um ou outro presente :)."
      }
    ],
    form: {
      title: "Junte-se a nós",
      nameInput: "Nome próprio",
      surnameInput: "Sobrenome",
      emailInput: "Email",
      copyButton: "Junte-se"
    }
  },
  footer: {
    copyright: "todos os direitos reservados ©",
    networks: {
      title: "Redes Sociais",
      description: "Siga-nos para ficarmos a par de tudo.",
      icons: TSPNETWORKS
    }
  },
  disruptivePost: {
    body: [
      {
        paragraph: "Nos últimos 15 anos vimos como as grandes empresas desapareceram graças aos avanços tecnológicos e à criação de diferentes ferramentas para ganhar terreno e conquistar o mercado."
      },
      {
        paragraph: "A Netflix desenvolveu uma plataforma poderosa e compreende perfeitamente os benefícios e o alcance da internet, criou um plano de negócios único e está a deslocar as salas de cinema, tendo mesmo ido mais longe, fazendo as suas próprias produções cinematográficas, liderando o mercado com cada produto."
      },
      {
        paragraph: "Há também outras empresas que engenhosamente criaram plataformas sob o lema \"Economia Colaborativa\" e alcançaram impacto em centenas de países e estão gradualmente ganhando terreno nos mercados."
      },
      {
        paragraph: "Facebook, Google, Amazon, e centenas de outras empresas que podemos nomear e que realmente geraram uma grande mudança na humanidade."
      },
      {
        paragraph: "Algo em comum entre todas essas empresas é que elas geram centenas de milhares de empregos em todo o mundo, criando assim oportunidades para milhões de pessoas, algumas questionadas pelo tipo de contratação. Deve-se também notar que mesmo aqueles que falam de \"Economia Colaborativa\" são corporações com proprietários e executivos multimilionários que tomam decisões para gerar maiores rendas, independentemente da decisão de seus funcionários e / ou consumidores."
      },
      {
        paragraph: "Uber, Rappi, Beat, AirBnb e muitas outras plataformas ao redor do mundo geraram centenas de milhões de dólares através de uma economia colaborativa, onde os usuários se beneficiam fazendo trabalho e em alguns casos arriscando suas vidas, gerando mais vendas, mais rápido, para aumentar ainda mais o valor da empresa e, obviamente, distribuir esses lucros entre os conselhos de administração e acionistas."
      },
      {
        paragraph: "Há anos, novos negócios e estilos de vida vêm surgindo, com base na descentralização que utiliza uma ferramenta para sua execução cada vez mais ouvida em todo o mundo e que se chama BlockChain ou Cadeia de Blocos."
      },
      {
        paragraph: "Mas como todo Blockbuster recebe seu Netflix, estas empresas estão recebendo seu Blockchain, permitindo-lhes criar projetos descentralizados, baseando a confiança da comunidade na abençoada cadeia de blocos, permitindo que todos os usuários sejam proprietários e participantes na tomada de decisões, desenvolvimento e crescimento de novas organizações descentralizadas."
      },
      {
        paragraph: "Baseado num projecto há 6 anos e através de um sistema disruptivo, lançámos a comunidade Token Sport, a primeira empresa que promete descentralizar e envolver os utilizadores no desenvolvimento e crescimento do Dapp (Aplicação Descentralizada) que permite aos fãs tokenizar as suas emoções."
      },
      {
        paragraph: "O impacto do Blockchain, somado a uma \"Economia Perturbadora\" emergente, está mudando a forma de entender os negócios e gerar comunidades totalmente proativas."
      },
      {
        paragraph: "Chegou a hora de escrever o futuro e temos em nossas mãos a possibilidade de fazer parte da 4ª evolução industrial."
      },
      {
        paragraph: "Economia Perturbadora para o desenvolvimento e expansão da Token Sport:"
      },
      {
        paragraph: "Utilizando a tecnologia BlockChain foram criados vários tokens TSP, registrados na cadeia NEM sob a autoria e responsabilidade de Alejandro Fernandez, criador da idéia e fundador do projeto Token Sport."
      },
      {
        paragraph: "Durante o início do projecto, será atribuído um valor de 0,00771 a cada ficha que for entregue aos membros da equipa estável, que confiam 100% no projecto e estão dispostos a contribuir com todos os seus conhecimentos e competências, trabalhando apaixonadamente para levar a cabo o projecto."
      },
      {
        paragraph: "Estes membros tornam-se a Dream Team da Token Sport, o principal motor, que através de contratos com o fundador da empresa (palco centralizado), receberá TSP em troca da sua contribuição para o desenvolvimento. "
      },
      {
        paragraph: "Durante a primeira ronda de investimento, os membros da Dream Team terão prioridade na venda de fichas; ao vendê-las, toda a transacção será registada sob um contrato com a Token Sport como mediadora. Os investidores receberão TSPs e o Dream Team receberá moedas Fiat ou Bitcoin."
      },
      {
        paragraph: "Além disso, uma vez criados os contratos inteligentes, as carteiras dos membros da Dream Team manterão sempre as percentagens de participação desse utilizador, obtendo sempre fichas TSP (segundo o litepaper)."
      },
      {
        paragraph: "Uma vez que a empresa é descentralizada e através de um sistema DAO (organização autónoma descentralizada em inglês), os utilizadores que têm mais TSP (investidores, Dream Team, utilizadores, etc.) serão capazes de tomar decisões para o crescimento da Token Sport e continuarão constantemente a gerir contratos inteligentes, programados com a sua percentagem de participação."
      },
      {
        paragraph: "Sendo uma empresa global, o crescimento da Token Sport é exponencial e requer as pessoas mais qualificadas e apaixonadas no que fazem, apostando em impactar positivamente a economia e a disrupção do sistema tal como o conhecemos."
      },
      {
        paragraph: "Se você é uma pessoa criativa, pró-ativa e comprometida em fazer o que você ama, a ponto de não chamá-lo de \"trabalho\", mas de \"estilo de vida\", convido-o a fazer parte das novas comunidades disruptivas e compartilhar seu conhecimento pessoal e/ou profissional com projetos descentralizados que estão sendo criados em todo o mundo."
      },
      {
        paragraph: "Meu compromisso é trazer conhecimento sobre blockchain e talento latino-americano para conquistar comunidades ao redor do mundo, gerando oportunidades e impactando positivamente a sociedade."
      },
      {
        paragraph: "Se você quiser aprender mais sobre Blockchain e a nova economia disruptiva, você tem à sua disposição todo o meu conhecimento para compartilhá-lo com você, e se você quiser nos acompanhar no crescimento da Token Sport para conquistar novos horizontes, \"BEM-VINDO\" estávamos esperando por você."
      }
    ],
    author: AUTHOR
  }
}

export default PT;