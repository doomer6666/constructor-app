export const blockTemplates = {
  header: {
    sample1: {
      labels: ["Надзаголовок", "Заголовок", "Изображение"],
      divs: ["title0", "title1", "title2", "img1"],
      content: {
        title0: "Надзаголовок",
        title1: "Заголовок",
        title2: "Описание",
        img1: "/content-img-sample1.png",
      },
      settings: {
        fontSize: [40, 90, 40],
        colors: ["#000000", "#000000", "#000000"],
        borderColor: "#000000",
        backgroundColor: "#ffffff",
      },
    },
    sample2: {
      labels: ["Надзаголовок", "Заголовок", "Описание"],
      divs: ["title0", "title1", "title2"],
      content: {
        title0: "Надзаголовок",
        title1: "Заголовок",
        title2: "Описание",
      },
      settings: {
        fontSize: [40, 90, 40],
        colors: ["#ffffff", "#ffffff", "#ffffff"],
        borderColor: "#FF7700",
        backgroundColor: "#ffffff",
        backgroundImage: "/title1.jpg",
      },
    },
    sample3: {
      labels: ["", "Заголовок", "Описание"],
      divs: ["", "title1", "title2"],
      content: {
        title1: "Заголовок",
        title2: "Описание",
      },
      settings: {
        fontSize: [0, 90, 40],
        colors: ["", "#000000", "#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample4: {
      labels: ["", "Заголовок", "Описание", "Изображение 1", "Изображение 2"],
      divs: ["", "title1", "title2", "img1", "img2"],
      content: {
        title1: "Заголовок",
        title2: "Описание",
        img1: "/sample-icon2.jpg",
        img2: "/sample-icon1.jpg",
      },
      settings: {
        fontSize: [0, 90, 40],
        colors: ["", "#ffffff", "#ffffff"],
        backgroundColor: "#474747",
      },
    },
  },
  text: {
    sample1: {
      labels: ["Заголовок", "Текст"],
      divs: ["title0", "text0"],
      content: {
        title0: "Заголовок",
        text0: "Текст",
      },
      settings: {
        fontSize: [40, 24],
        colors: ["#000000", "#000000"],
        borderColor: "#FF7700",
        borderTitleColor: "#fff1e3",
        backgroundColor: "#ffffff",
      },
    },
    sample2: {
      labels: ["Заголовок", "Текст"],
      divs: ["title0", "text0"],
      content: {
        title0: "Заголовок",
        text0: "Текст",
      },
      settings: {
        fontSize: [40, 24],
        colors: ["#000000", "#000000"],
        borderTextColor: "#000000",
        borderTitleColor: "#f3f3f3",
        backgroundColor: "#ffffff",
      },
    },
    sample3: {
      labels: ["Заголовок", "Текст1", "Текст2"],
      divs: ["title0", "text0", "text1"],
      content: {
        title0: "Заголовок",
        text0: "Текст1",
        text1: "Текст2",
      },
      settings: {
        fontSize: [40, 24, 24],
        colors: ["#000000", "#000000", "#000000"],
        borderTextColor: "#000000",
        borderTitleColor: "#f3f3f3",
        backgroundColor: "#ffffff",
      },
    },
    sample4: {
      labels: ["Заголовок", "Текст"],
      divs: ["title0", "text0"],
      content: {
        title0: "Заголовок",
        text0:
          "Всегда, когда провожу секции, смотрю не на конечный результат, а на ход размышлений. Можно выучить все типы задач, прийти, решить все заготовленные интервьюером задачи за 10 минут и молчать, но это не совсем то, что хочется видеть! Живой ум, поток мыслей, желание рассказать и обсудить своё решение — это то, что хочется видеть в первую очередь. Конечно, есть фактор волнения, который заставляет вас быстрее «закончить» всё это. Но и с ним можно бороться — просто решайте больше, не сдавайтесь даже после неудачных попыток, и тогда удача будет на вашей стороне.",
      },
      settings: {
        fontSize: [40, 24],
        colors: ["#000000", "#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample5: {
      labels: ["Текст"],
      divs: ["text0"],
      content: {
        text0:
          "Всегда, когда провожу секции, смотрю не на конечный результат, а на ход размышлений. Можно выучить все типы задач, прийти, решить все заготовленные интервьюером задачи за 10 минут и молчать, но это не совсем то, что хочется видеть! Живой ум, поток мыслей, желание рассказать и обсудить своё решение — это то, что хочется видеть в первую очередь. Конечно, есть фактор волнения, который заставляет вас быстрее «закончить» всё это. Но и с ним можно бороться — просто решайте больше, не сдавайтесь даже после неудачных попыток, и тогда удача будет на вашей стороне.",
      },
      settings: {
        fontSize: [24],
        colors: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample6: {
      labels: ["Текст", "Текст1", "Текст2"],
      divs: ["text0", "text1", "text2"],
      content: {
        text0:
          "Всегда, когда провожу секции, смотрю не на конечный результат, а на ход размышлений. Можно выучить все типы задач, прийти, решить все заготовленные интервьюером задачи за 10 минут и молчать, но это не совсем то, что хочется видеть! Живой ум, поток мыслей, желание рассказать и обсудить своё решение — это то, что хочется видеть в первую очередь. Конечно, есть фактор волнения, который заставляет вас быстрее «закончить» всё это. Но и с ним можно бороться — просто решайте больше, не сдавайтесь даже после неудачных попыток, и тогда удача будет на вашей стороне.",
        text1:
          "Всегда, когда провожу секции, смотрю не на конечный результат, а на ход размышлений. Можно выучить все типы задач, прийти, решить все заготовленные интервьюером задачи за 10 минут и молчать, но это не совсем то, что хочется видеть! Живой ум, поток мыслей, желание рассказать и обсудить своё решение — это то, что хочется видеть в первую очередь. Конечно, есть фактор волнения, который заставляет вас быстрее «закончить» всё это. Но и с ним можно бороться — просто решайте больше, не сдавайтесь даже после неудачных попыток, и тогда удача будет на вашей стороне.",
        text2:
          "Всегда, когда провожу секции, смотрю не на конечный результат, а на ход размышлений. Можно выучить все типы задач, прийти, решить все заготовленные интервьюером задачи за 10 минут и молчать, но это не совсем то, что хочется видеть! Живой ум, поток мыслей, желание рассказать и обсудить своё решение — это то, что хочется видеть в первую очередь. Конечно, есть фактор волнения, который заставляет вас быстрее «закончить» всё это. Но и с ним можно бороться — просто решайте больше, не сдавайтесь даже после неудачных попыток, и тогда удача будет на вашей стороне.",
      },
      settings: {
        fontSize: [24, 24, 24],
        colors: ["#000000", "#000000", "#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample7: {
      labels: ["Заголовок", "Текст1", "Текст2", "Текст3", "Текст4"],
      divs: ["title0", "text0", "text1", "text2", "text3"],
      content: {
        title0: "Заголовок",
        text0: "Текст1",
        text1: "Текст2",
        text2: "Текст3",
        text3: "Текст4",
      },
      settings: {
        fontSize: [40, 24, 24, 24, 24],
        colors: ["#000000", "#000000", "#000000", "#000000", "#000000"],
        borderTextColor: "#000000",
        backgroundColor: "#ffffff",
      },
    },
    sample8: {
      labels: ["Заголовок", "Текст1", "Текст2", "Текст3", "Текст4"],
      divs: ["title0", "text0", "text1", "text2", "text3"],
      content: {
        title0: "Заголовок",
        text0: "Текст1",
        text1: "Текст2",
        text2: "Текст3",
        text3: "Текст4",
      },
      settings: {
        fontSize: [40, 24, 24, 24, 24],
        colors: ["#000000", "#000000", "#000000", "#000000", "#000000"],
        textIconColor: true,
        backgroundColor: "#ffffff",
      },
    },
    sample9: {
      labels: ["Заголовок", "Текст1", "Текст2", "Текст3", "Текст4"],
      divs: ["title0", "text0", "text1", "text2", "text3"],
      content: {
        title0: "Заголовок",
        text0: "Текст1",
        text1: "Текст2",
        text2: "Текст3",
        text3: "Текст4",
      },
      settings: {
        fontSize: [40, 24, 24, 24, 24],
        colors: ["#000000", "#000000", "#000000", "#000000", "#000000"],
        textTimeLine: "#FFAA5F",
        backgroundColor: "#ffffff",
      },
    },
    sample10: {
      labels: ["Заголовок", "Текст1", "Текст2", "Текст3", "Текст4"],
      divs: ["title0", "text0", "text1", "text2", "text3"],
      content: {
        title0: "Заголовок",
        text0: "Текст1",
        text1: "Текст2",
        text2: "Текст3",
        text3: "Текст4",
      },
      settings: {
        fontSize: [40, 24, 24, 24, 24],
        colors: ["#000000", "#000000", "#000000", "#000000", "#000000"],
        textTimeLine: "#FFAA5F",
        backgroundColor: "#ffffff",
      },
    },
  },
  gallery: {
    sample1: {
      labels: ["Изображение 1", "Изображение 2", "Изображение 3"],
      divs: ["img1", "img2", "img3"],
      content: {
        img1: "none",
        img2: "none",
        img3: "none",
      },
      settings: {
        backgroundColor: "#ffffff",
      },
    },
    sample2: {
      labels: ["Изображение 1", "Изображение 2"],
      divs: ["img1", "img2"],
      content: {
        img1: "none",
        img2: "none",
      },
      settings: {
        backgroundColor: "#ffffff",
      },
    },
    sample3: {
      labels: [
        "Изображение 1",
        "Изображение 2",
        "Изображение 3",
        "Изображение 4",
        "Изображение 5",
        "Изображение 6",
      ],
      divs: ["img1", "img2", "img3", "img4", "img5", "img6"],
      content: {
        img1: "none",
        img2: "none",
        img3: "none",
        img4: "none",
        img5: "none",
        img6: "none",
        isGrid: true,
      },
      settings: {
        backgroundColor: "#ffffff",
      },
    },
    sample4: {
      labels: [
        "Изображение 1",
        "Изображение 2",
        "Изображение 3",
        "Изображение 4",
        "Изображение 5",
        "Изображение 6",
      ],
      divs: ["img1"],
      content: {
        img1: "none",
        isInfinite: true,
      },
      settings: {
        backgroundColor: "#ffffff",
      },
    },
    sample5: {
      labels: ["Изображение"],
      divs: ["img1"],
      content: {
        img1: "none",
      },
      settings: {
        backgroundColor: "#ffffff",
      },
    },
  },
  button: {
    sample1: {
      labels: ["Текст", "Ссылка"],
      divs: ["text", "link"],
      content: {
        text: "Кнопка",
        link: "#",
      },
      settings: {
        fontSize: 24,
        textColor: "#000000",
        buttonColor: ["#FFB677"],
        borderColor: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample2: {
      labels: ["Текст", "Ссылка"],
      divs: ["text", "link"],
      content: {
        text: "Кнопка",
        link: "#",
      },
      settings: {
        fontSize: 24,
        textColor: "#000000",
        buttonColor: ["#FFB677"],
        borderColor: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample3: {
      labels: ["Текст", "Ссылка"],
      divs: ["text", "link"],
      content: {
        text: "Кнопка",
        link: "#",
      },
      settings: {
        fontSize: 24,
        textColor: "#000000",
        buttonColor: ["#FFB677"],
        borderColor: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample4: {
      labels: ["Текст", "Ссылка"],
      divs: ["text", "link"],
      content: {
        text: "Кнопка",
        link: "#",
      },
      settings: {
        fontSize: 24,
        textColor: "#000000",
        buttonColor: ["#FFB677"],
        borderColor: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample5: {
      labels: ["Текст", "Ссылка"],
      divs: ["text", "link"],
      content: {
        text: "Кнопка",
        link: "#",
      },
      settings: {
        fontSize: 24,
        textColor: "#000000",
        buttonColor: ["#ffffff"],
        borderColor: ["#F600FF", "#4400FF"],
        backgroundColor: "#ffffff",
      },
    },
    sample6: {
      labels: ["Текст", "Ссылка"],
      divs: ["text", "link"],
      content: {
        text: "Кнопка",
        link: "#",
      },
      settings: {
        fontSize: 24,
        textColor: "#000000",
        buttonColor: ["#0900FF99", "#FFFFFF"],
        borderColor: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample7: {
      labels: ["Текст", "Ссылка"],
      divs: ["text", "link"],
      content: {
        text: "Кнопка",
        link: "#",
      },
      settings: {
        fontSize: 24,
        textColor: "#000000",
        buttonColor: ["#72E3FF", "#FF64EA"],
        borderColor: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample8: {
      labels: ["Текст", "Ссылка"],
      divs: ["text", "link"],
      content: {
        text: "Кнопка",
        link: "#",
      },
      settings: {
        fontSize: 24,
        textColor: "#000000",
        buttonColor: ["#FFFC54", "#FF64EA"],
        borderColor: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
  },
  contacts: {
    sample1: {
      labels: ["Заголовок", "ВКонтакте", "Whatsapp", "Telegram"],
      divs: ["title0"],
      content: {
        title0: "Контакты",
        link0: "#",
        link1: "#",
        link2: "#",
      },
      settings: {
        fontSize: [40],
        colors: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample2: {
      labels: ["Заголовок", "Номер", "Почта", "Адрес"],
      divs: ["title0", "title1", "title2", "title3"],
      content: {
        title0: "Контакты",
        title1: "+7 (909) 000 00 00",
        title2: "IvanovIvan2000@gmail.com",
        title3: "г. Екатеринбург, ул. Мира, 19",
      },
      settings: {
        fontSize: [40, 24, 24, 24],
        colors: ["#000000", "#000000", "#000000", "#4A4A4A"],
        backgroundColor: "#ffffff",
      },
    },
    sample3: {
      labels: ["", "ВКонтакте", "Whatsapp", "Telegram"],
      divs: ["contacts"],
      content: {
        link0: "#",
        link1: "#",
        link2: "#",
        isBlack: true,
      },
      settings: {
        colors: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample4: {
      labels: ["", "ВКонтакте", "Telegram", "Почта"],
      divs: ["contacts"],
      content: {
        link0: "#",
        link1: "#",
        link2: "#",
        isBlack: true,
        withMail: true,
      },
      settings: {
        colors: ["#000000"],
        backgroundColor: "#ffffff",
      },
    },
    sample5: {
      labels: ["Заголовок", "Номер", "Почта", "Адрес"],
      divs: ["title0", "title1", "title2", "title3"],
      content: {
        title0: "Контакты",
        title1: "+7 (909) 000 00 00",
        title2: "IvanovIvan2000@gmail.com",
        title3: "г. Екатеринбург, ул. Мира, 19",
        withMap: true,
      },
      settings: {
        fontSize: [40, 24, 24, 24],
        colors: ["#000000", "#000000", "#000000", "#4A4A4A"],
        backgroundColor: "#ffffff",
        underlayColor: "#efefef"
      },
    },
  },
  video: {
    sample1: {
      labels: ["Видео"],
      divs: ["video"],
      content: {
        video: "none",
      },
      settings: {
        backgroundColor: "#ffffff",
      },
    },
    sample2: {
      labels: ["Видео"],
      divs: ["video"],
      content: {
        videoLink: "http\\none",
      },
      settings: {
        backgroundColor: "#ffffff",
      },
    },
  },
};

export const SampleLib = {
  header: [
    {
      name: "sample1",
      previewImg: "/header_lib/sample1.png",
      title: "О1",
      description: "надзаголовок, заголовок, описание, картинка",
    },
    {
      name: "sample2",
      previewImg: "/header_lib/sample2.png",
      title: "О2",
      description: "надзаголовок, заголовок, описание, фон",
    },
    {
      name: "sample3",
      previewImg: "/header_lib/sample3.png",
      title: "О3",
      description: "заголовок, описание",
    },
    {
      name: "sample4",
      previewImg: "/header_lib/sample4.png",
      title: "О4",
      description: "заголовок, описание, картинки",
    },
  ],
  text: [
    {
      name: "sample1",
      previewImg: "/text_lib/sample1.jpg",
      title: "ТБ1",
      description: "загловок,текст, обводка",
    },
    {
      name: "sample2",
      previewImg: "/text_lib/sample2.jpg",
      title: "ТБ2",
      description: "загловок, текст, обводка",
    },
    {
      name: "sample3",
      previewImg: "/text_lib/sample3.jpg",
      title: "ТБ3",
      description: "загловок, текст, текст, обводка",
    },
    {
      name: "sample4",
      previewImg: "/text_lib/sample4.jpg",
      title: "ТБ4",
      description: "загловок, текст",
    },
    {
      name: "sample5",
      previewImg: "/text_lib/sample5.jpg",
      title: "ТБ5",
      description: "текст",
    },
    {
      name: "sample6",
      previewImg: "/text_lib/sample6.jpg",
      title: "ТБ6",
      description: "3 текста",
    },
    {
      name: "sample7",
      previewImg: "/text_lib/sample7.jpg",
      title: "ТБ7",
      description: "заголовок, 4 текста, обводка",
    },
    {
      name: "sample8",
      previewImg: "/text_lib/sample8.jpg",
      title: "ТБ8",
      description: "заголовок, 4 текста, обводка",
    },
    {
      name: "sample9",
      previewImg: "/text_lib/sample9.jpg",
      title: "ТБ9",
      description: "загловок, 4 текста, этапы",
    },
    {
      name: "sample10",
      previewImg: "/text_lib/sample10.jpg",
      title: "ТБ10",
      description: "загловок, 4 текста, этапы",
    },
  ],
  gallery: [
    {
      name: "sample1",
      previewImg: "/gallery_lib/sample1.jpg",
      title: "Г1",
      description: "3 изображения",
    },
    {
      name: "sample2",
      previewImg: "/gallery_lib/sample2.jpg",
      title: "Г2",
      description: "2 изображения",
    },
    {
      name: "sample3",
      previewImg: "/gallery_lib/sample3.jpg",
      title: "Г3",
      description: "6 изображений",
    },
    {
      name: "sample4",
      previewImg: "/gallery_lib/sample4.png",
      title: "Г4",
      description: "лента изображений",
    },
    {
      name: "sample5",
      previewImg: "/gallery_lib/sample5.jpg",
      title: "Г5",
      description: "1 изображение",
    },
  ],
  button: [
    {
      name: "sample1",
      previewImg: "/button_lib/sample1.jpg",
      title: "Кн1",
      description: "округлая кнопка",
    },
    {
      name: "sample2",
      previewImg: "/button_lib/sample2.jpg",
      title: "Кн2",
      description: "остроугольная кнопка",
    },
    {
      name: "sample3",
      previewImg: "/button_lib/sample3.jpg",
      title: "Кн3",
      description: "длинная кнопка",
    },
    {
      name: "sample4",
      previewImg: "/button_lib/sample4.jpg",
      title: "Кн4",
      description: "кнопка с тенью",
    },
    {
      name: "sample5",
      previewImg: "/button_lib/sample5.jpg",
      title: "Кн5",
      description: "кнопка с границами",
    },
    {
      name: "sample6",
      previewImg: "/button_lib/sample6.jpg",
      title: "Кн6",
      description: "кнопка с градиенотом",
    },
    {
      name: "sample7",
      previewImg: "/button_lib/sample7.jpg",
      title: "Кн7",
      description: "кнопка с градиенотом",
    },
    {
      name: "sample8",
      previewImg: "/button_lib/sample8.jpg",
      title: "Кн8",
      description: "кнопка с градиенотом",
    },
  ],
  contacts: [
    {
      name: "sample1",
      previewImg: "/contacts_lib/sample1.jpg",
      title: "Кон1",
      description: "заголовок, вконтакте, whatsapp, телеграм",
    },
    {
      name: "sample2",
      previewImg: "/contacts_lib/sample2.jpg",
      title: "Кон2",
      description: "заголовок, телефон, почта, адрес",
    },
    {
      name: "sample3",
      previewImg: "/contacts_lib/sample3.jpg",
      title: "Кон3",
      description: "вконтакте, whatsapp, телеграм",
    },
    {
      name: "sample4",
      previewImg: "/contacts_lib/sample4.jpg",
      title: "Кон4",
      description: "вконтакте, телеграм, почта",
    },
    {
      name: "sample5",
      previewImg: "/contacts_lib/sample5.jpg",
      title: "Кон5",
      description: "заголовок, телефон, почта, адрес, карта",
    },
  ],
  video: [
    {
      name: "sample2",
      previewImg: "/video_lib/sample2.jpg",
      title: "B1",
      description: "видео-ссылка на сторонюю платформу",
    },
  ],
};

export const deviceSize = {
  pc: {
    width: "100%",
    height: "100vh",
  },
  tablet: {
    width: "768px",
    height: "1024px",
  },
  phone: {
    width: "480px",
    height: "800px",
  },
};
