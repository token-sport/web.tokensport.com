import React from 'react';

// COMPONENTS
import { WordsColor } from 'components/LayoutHome/styles';

// CONSTANTS
import DREAMTEAM from 'constants/dreamTeam';
import TSPNETWORKS from 'constants/tspNetworks';
import AUTHOR from 'constants/author';

const NAVLINKS = [
  { name: "Особенности", path: "#features" },
  { name: "Дорожная карта", path: "#roadmap" },
  { name: "Команда мечты", path: "#dreamteam" },
  { name: "Прерывание работы", path: "/disruption" }
];

const RU = {
  navLinks: NAVLINKS,
  hero: {
    title: "СИМВОЛИЗИРУЮТ ТВОИ ЭМОЦИИ.",
    description: "Первый Dapp, который придает ценность вашим эмоциям. Заставьте Жетоны дождя!",
    cta: "Join us",
    scta: "Litepaper"
  },
  features: [
    {
      isReverse: true,
      title: <span>Что такое <WordsColor color="neonBlue">“Токен Спорт”</WordsColor>, черт возьми?</span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FQue-rayos-es-token-sport%402x.png?alt=media&token=7b471b90-2675-4b52-a742-cefbbba70ed4",
      description: "Это первое децентрализованное приложение Dapp (Dapp), которое позволяет пользователям делиться своими эмоциями в спорте и с помощью технологии BlockChain токенизировать свои данные.",
      secondaryInfo: [
        {
          title: "Что такое TSP?",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAduenate-de-tus-datos%402x.png?alt=media&token=89491ea8-7a17-437d-850d-21d0af7afd4c",
          altImage: "¿Qué es TSP?",
          description: "Токен TSP является цифровым активом Token Sport, представляющим ценность взаимодействия.  Чем больше пользователей и взаимодействий, тем большую ценность будут иметь ваши провайдеры услуг связи."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Поделитесь <WordsColor color="neonOrange">эмоциями</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComparte-emociones%402x.png?alt=media&token=4fe6a441-16cf-49b0-8465-1d32cf297e13",
      description: "Выберите футбольный матч, в котором вы хотите пообщаться с сообществом. Хлопать или бут игроков, судей и тренеров на каждой игре.",
      secondaryInfo: [
        {
          title: "Ставки в прямом эфире",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FNotificaciones-tiempo-real%402x.png?alt=media&token=979f2660-fd2a-47b2-a72c-24179f4332f4",
          altImage: "Apuestas en vivo",
          description: "Выберите игрока, который, по вашему мнению, будет наиболее аплодировать и освистывать в каждом матче, и выиграйте больше жетонов TSP."
        },
        {
          title: "Сделай свой идеальный одиннадцать.",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2F11-ideal%402x.png?alt=media&token=371e34bf-6e27-4e2d-902b-5a9fd3bdae66",
          altImage: "Arma tu once ideal",
          description: "Выберите свою идеальную команду с игроками, которые, как вы думаете, будут наиболее аплодировали в течение всего года и будут соревноваться с одиннадцатью идеалами всего сообщества. Победитель выиграет большой банк жетонов TSP по окончании турнира."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Нас показывают по <WordsColor color="neonGreen">телевизору.</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSalimos-en-tv%402x.png?alt=media&token=9b2bec23-79c9-4d5e-8843-892ff13734f3",
      description: "С помощью апири, средства массовой информации и спонсоры смогут в прямом эфире получать статистику от самых аплодисментированных и/или освидетельствованных игроков на данный момент и делиться ею во время трансляции.",
      secondaryInfo: [
        {
          title: "Статистика",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FEstadisticas-en-vivo%402x.png?alt=media&token=ace364a7-ccd6-45ed-a4e7-5722cd15e3ac",
          altImage: "Estadisticas",
          description: "Клубы, журналисты, СМИ и компании смогут получить доступ к конкретным данным каждого игрока, техника или судьи. При этом вы должны платить токенами TSP, которые будут распространяться по всему сообществу."
        }
      ]
    },
    {
      isReverse: false,
      title: <span>Мы <WordsColor color="neonBlue">жетонизируем!</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FTokenizamos%402x.png?alt=media&token=5d46e731-aadc-4754-aeea-689cdf8db3a2",
      description: "Посредством интеллектуальных контрактов пользователи получают TSP, который они могут обменять на Bitcoin, или потреблять непосредственно в магазинах и торговых точках союзников.",
      secondaryInfo: [
        {
          title: "Мерчендайзинг",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FComercios-aliados%402x.png?alt=media&token=320b387a-c964-43f8-9581-7570f9baf8c7",
          altImage: "Merchandasing",
          description: "Вы можете обменять свои жетоны TSP на товары любимого клуба, билеты на стадион, членство в спортивных центрах и бесконечные товары и услуги от союзников в Token Sport."
        },
        {
          title: "Собственная биржа",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPaso-a-paso%402x.png?alt=media&token=b6bf0a40-3618-4695-8668-1871297a8b3a",
          altImage: "Exchange",
          description: "Вы можете обменять свои TSP на Bitcoin, Ethereum или другие смежные криптоактивы, чтобы при желании экономить или монетизировать на FIAT деньги."
        }
      ]
    },
    {
      isReverse: true,
      title: <span>Быть частью <WordsColor color="neonOrange">общества</WordsColor></span>,
      image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FSe-parte-de-la-comunidad%402x.png?alt=media&token=f93624de-5ecf-4392-89bd-230f31f2057a",
      description: "Редактируйте, исправляйте и обновляйте данные лиги, чтобы держать информацию о команде в актуальном состоянии. За каждое валидированное действие вы будете получать большие награды.",
      secondaryInfo: [
        {
          title: "Подрывная экономика",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FDisruptiva-colaborativa%402x.png?alt=media&token=be871c20-9a9f-4d78-a944-e2e7861475a4",
          altImage: "Economia Disruptiva",
          description: "Вы сможете увидеть список задач, связанных с проектом и выбрать те, в которых, по вашему мнению, вы можете помочь. По мере продвижения вы будете получать TSP за вашу важную работу."
        },
        {
          title: "Помогите нам с тестированием!",
          image: "https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FPrimero-en-probar%402x.png?alt=media&token=93a6b08a-db50-4986-afc3-d8f001f07017",
          altImage: "Ayudanos testeando",
          description: "Присоединяйтесь к сообществу в первую очередь, будучи “пользователем тестера” и помогая нам в разработке Dapp'а с предложениями, предложениями, анализом и так далее. Dapp, созданный пользователями, для пользователей!"
        }
      ]
    }
  ],
  roadmap: {
    title: "Дорожная карта",
    content: [
      {
        id: 1,
        date: "Q3 2018",
        goals: [
          "Публичный запуск проекта.",
          "Белая книга 1.0b."
        ],
        color: "neonBlue"
      },
      {
        id: 2,
        date: "Q4 2018",
        goals: [
          "Формирование команды мечты.",
          "Доказательство концептуальной разработки."
        ],
        color: "neonOrange"
      },
      {
        id: 3,
        date: "Q1 2019",
        goals: [
          "Начало разработки приложения 1.0b.",
          "Создание маркетинговых стратегий."
        ],
        color: "neonGreen"
      },
      {
        id: 4,
        date: "Q2 2019",
        goals: [
          "Выпуск документа, подтверждающего концепцию, для широкой публики.",
          "1-й раунд ранних инвестиций."
        ],
        color: "opaqueBlue"
      },
      {
        id: 5,
        date: "Q3 2019",
        goals: [
          "Начало развития Data Api.",
          "Начало развития Блокчейн."
        ],
        color: "neonBlue"
      },
      {
        id: 6,
        date: "Q4 2019",
        goals: [
          "Обновление технической документации.",
          "2-й инвестиционный раунд."
        ],
        color: "neonOrange"
      },
      {
        id: 7,
        date: "Q1 2020",
        goals: [
          "Приложение 1.0b выпущено.",
          "Создание сообщества пользователей.",
          "Новый бизнес (стратегические альянсы).",
          "Data Api 1.0b."
        ],
        color: "neonGreen"
      },
      {
        id: 8,
        date: "Q2 2020",
        goals: [
          "Разработка систем безопасности.",
          "Запуск приложения 1.0.",
          "Интеллектуальные контракты.",
        ],
        color: "opaqueBlue"
      },
      {
        id: 9,
        date: "Q3 2020",
        goals: [
          "Начало развития Exchange-сервера.",
          "Данные Апи 1.0.",
        ],
        color: "neonBlue"
      },
      {
        id: 10,
        date: "Q4 2020",
        goals: [
          "Открытие рынка (ITO).",
          "Создание ДАО.",
          "Dapp старт."
        ],
        color: "neonOrange"
      }
    ]
  },
  tokenDist: {
    title: "Распределение жетонов",
    values: [
      {
        title: "Первоначальное развитие",
        percent: "1.13%",
        color: "neonBlue"
      },
      {
        title: "Стадия",
        percent: "3.75%",
        color: "neonOrange"
      },
      {
        title: "Капли воздуха",
        percent: "2.5%",
        color: "neonGreen"
      },
      {
        title: "Награды",
        percent: "1.25%",
        color: "opaqueBlue"
      },
    ]
  },
  dreamTeam: {
    title: "Команда мечты",
    description: "Откройте для себя титульную команду команды Token Sport.",
    team: DREAMTEAM
  },
  partners: {
    title: "Партнеры и друзья",
    description: "Кто доверяет и поддерживает Token Sport?"
  },
  subscribe: {
    isReverse: true,
    title: <span>Подпишитесь и станьте частью этой <WordsColor color="neonGreen">замечательной команды!</WordsColor></span>,
    description: "У вас будет расширенный доступ, бесплатные пробные версии и обновления всех предварительных просмотров Token Sport.",
    secondaryInfo: [
      {
        title: "Внести свой вклад в развитие гранита",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FAporta-tu-granito%402x.png?alt=media&token=a3b30ae2-674a-4c09-a701-31eac03c44d6',
        altImage: 'Aporta tu granito',
        description: "Присоединяйтесь к нам, и у вас будет возможность привнести свой великий талант и сделать Token Sport лучшим и интересным проектом. Не волнуйтесь, если вы не знаете о технологиях, вы также можете помочь нам, будучи официальным спортивным тестером Token Sport Tester."
      },
      {
        title: "Стать VIP-персоной",
        image: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/illustrations%2FConviertete-en-vip%402x.png?alt=media&token=e3186a33-aaf6-439e-baad-6af7060a0a9a',
        altImage: 'Conviértete en VIP',
        description: "Не думайте, что это еще один коллекционер писем, который будет ежедневно вывозить мусор на вашу почту Нет! В Token Sport мы ценим, что вы присоединились к нам и поэтому предоставим вам лучшую информацию, связанную с проектом... и, конечно же, тот или иной подарок :)."
      }
    ],
    form: {
      title: "Присоединяйтесь к нам",
      nameInput: "Имя",
      surnameInput: "Фамилия",
      emailInput: "Электронная почта",
      copyButton: "JOIN"
    }
  },
  footer: {
    copyright: "Все права защищены ©",
    networks: {
      title: "Социальные сети",
      description: "Следуйте за нами, чтобы быть в курсе всего.",
      icons: TSPNETWORKS
    }
  },
  disruptivePost: {
    body: [
      {
        paragraph: "За последние 15 лет мы стали свидетелями исчезновения крупных компаний благодаря технологическому прогрессу и созданию различных инструментов для завоевания позиций и захвата рынка."
      },
      {
        paragraph: "Netflix развивает мощную платформу и прекрасно понимает преимущества и охват Интернета, разработал уникальный бизнес-план и вытесняет театры, они пошли еще дальше, создавая собственные кинопроизводства, лидируя на рынке с каждым продуктом."
      },
      {
        paragraph: "Есть и другие компании, которые изобретательно создали платформы под лозунгом \"Совместная экономика\", добились успеха в сотнях стран и постепенно завоевывают позиции на рынках."
      },
      {
        paragraph: "Facebook, Google, Amazon и сотни других компаний, которых мы можем назвать и которые действительно произвели кардинальные изменения в человечестве."
      },
      {
        paragraph: "Общей чертой всех этих компаний является то, что они создают сотни тысяч рабочих мест по всему миру, создавая тем самым возможности для миллионов людей, некоторые из которых ставят под сомнение тип найма. Следует также отметить, что даже те, кто говорит об \"экономике сотрудничества\", - это корпорации с многомиллионными владельцами и руководителями, которые принимают решения о повышении доходов, независимо от решения своих работников и/или потребителей."
      },
      {
        paragraph: "Uber, Rappi, Beat, AirBnb и многие другие платформы по всему миру заработали сотни миллионов долларов благодаря совместной экономике, где пользователи получают выгоду, выполняя работу и в некоторых случаях рискуя своей жизнью, генерируя больше продаж, быстрее, для дальнейшего повышения стоимости компании, и, очевидно, распределяя эту прибыль между советами директоров и акционерами."
      },
      {
        paragraph: "В течение многих лет появляются новые виды бизнеса и стили жизни, основанные на децентрализации, которая использует инструмент для его реализации, который все больше слышен во всем мире и называется BlockChain или Chain of Blocks."
      },
      {
        paragraph: "Но как только все Blockbuster получает свой Netflix, эти компании получают свой Blockchain, позволяющий им создавать децентрализованные проекты, основывая доверие сообщества в благословенной цепочке блоков, позволяя всем пользователям быть владельцами и участниками процесса принятия решений, развития и роста новых децентрализованных организаций."
      },
      {
        paragraph: "Основываясь на проекте 6 лет назад и используя разрушительную систему, мы запустили сообщество Token Sport, первую компанию, которая обещает децентрализовать и вовлечь пользователей в развитие и рост децентрализованного приложения (Dapp), позволяющего болельщикам выразить свои эмоции."
      },
      {
        paragraph: "Влияние блокчейн, добавленное к формирующейся \"разрушительной экономике\", меняет способ понимания бизнеса и формирования полностью активных сообществ."
      },
      {
        paragraph: "Пришло время написать будущее, и у нас в руках есть возможность стать частью 4-й промышленной эволюции."
      },
      {
        paragraph: "Подрыв экономики для развития и расширения сети спортивных клубов Token Sport:"
      },
      {
        paragraph: "С помощью технологии BlockChain был создан ряд токенов TSP, зарегистрированных в сети NEM под авторством и ответственностью Алехандро Фернандеса, создателя идеи и основателя проекта Token Sport."
      },
      {
        paragraph: "В начале проекта каждому символу, который вручается членам стабильной команды, которые на 100% доверяют проекту и готовы поделиться всеми своими знаниями и навыками, с энтузиазмом работая над его реализацией, будет присвоено значение 0,00771."
      },
      {
        paragraph: "Этими членами становятся Dream Team of Token Sport, главный двигатель, который по контрактам с учредителем компании (централизованная сцена) получит TSP в обмен на свой вклад в развитие. "
      },
      {
        paragraph: "Во время первого раунда инвестиций члены команды Dream Team будут иметь приоритет при продаже жетонов; при их продаже вся сделка будет учитываться в контракте с Token Sport в качестве посредника. Инвесторы получат ТСП, а команда Dream Team - монеты Fiat или Bitcoin."
      },
      {
        paragraph: "Кроме того, после создания интеллектуальных контрактов, кошельки членов Dream Team всегда будут поддерживать процент участия этого пользователя, всегда получая жетоны TSP (в соответствии с литературой)."
      },
      {
        paragraph: "Как только компания будет децентрализована и с помощью системы DAO (децентрализованная автономная организация на английском языке), те пользователи, которые имеют больше TSP (инвесторы, Dream Team, пользователи и т.д.) смогут принимать решения для роста Token Sport и будут постоянно регулировать интеллектуальные контракты, запрограммированные с их процентом участия."
      },
      {
        paragraph: "Являясь глобальной компанией, Token Sport развивается экспоненциально и требует наиболее квалифицированных и страстных людей в своей деятельности, делая ставку на положительное влияние на экономику и перебои в работе системы, как мы ее знаем."
      },
      {
        paragraph: "Если вы творческий, активный и преданный своему делу человек, занимающийся тем, что вы любите, до такой степени, что вы называете это не \"работой\", а \"образом жизни\", я приглашаю вас стать частью новых разрушительных сообществ и поделиться своими личными и/или профессиональными знаниями с децентрализованными проектами, которые создаются по всему миру."
      },
      {
        paragraph: "Моя цель - донести знания о технологии блокчейн и талантах латиноамериканцев до сообществ по всему миру, создавая возможности и оказывая положительное влияние на общество."
      },
      {
        paragraph: "Если вы хотите узнать больше о Блокчейн и новой разрушительной экономике, то в вашем распоряжении есть все мои знания, чтобы поделиться ими с вами, и если вы хотите сопровождать нас в развитии Token Sport, чтобы покорить новые горизонты, \"WELCOME\" мы вас ждали."
      }
    ],
    author: AUTHOR
  }
}

export default RU;