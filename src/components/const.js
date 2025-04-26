export const blockTemplates = {
  header: {
    sample1: {
      labels: ["Надзаголовок", "Заголовок", "Изображение"],
      divs: ["title0", "title1", "img1"],
      content: {
        title0: "Надзаголовок",
        title1: "Заголовок",
        title2: "Описание",
        img1: "/content-img-sample1.png"
      },
      settings: {
        fontSize: [40, 90, 40],
        colors: ["#000000", "#000000", "#000000"],
        borderColor: "#000000",
        backgroundColor: "#ffffff"
      }
    },
    sample2: {
      labels: ["Надзаголовок", "Заголовок", "Описание"],
      divs: ["title0", "title1", "title2"],
      content: {
        title0: "Надзаголовок",
        title1: "Заголовок",
        title2: "Описание"
      },
      settings: {
        fontSize: [40, 90, 40],
        colors: ["#ffffff", "#ffffff", "#ffffff"],
        borderColor: "#FF7700",
        backgroundColor: "#ffffff",
        backgroundImage: "/title1.jpg"
      }
    },
    sample3: {
      labels: ["", "Заголовок", "Описание"],
      divs: ["", "title1", "title2"],
      content: {
        title1: "Заголовок",
        title2: "Описание"
      },
      settings: {
        fontSize: [0, 90, 40],
        colors: ["", "#000000", "#000000"],
        backgroundColor: "#ffffff"
      }
    },
    sample4: {
      labels: ["", "Заголовок", "Описание", "Изображение1", "Изображение2"],
      divs: ["", "title1", "title2", "img1", "img2"],
      content: {
        title1: "Заголовок",
        title2: "Описание",
        img1: "/sample-icon2.jpg",
        img2: "/sample-icon1.jpg"
      },
      settings: {
        fontSize: [0, 90, 40],
        colors: ["", "#ffffff", "#ffffff"],
        backgroundColor: "#474747"
      }
    }
  },
  text: {
    sample1: {
      labels: ["Заголовок", "Текст"],
      divs: ["title0", "text0"],
      content: {
        title0: "Заголовок",
        text0: "Текст"
      },
      settings: {
        fontSize: [40, 24],
        colors: ["#000000", "#000000"],
        borderColor: "#FF7700",
        borderTitleColor: "#fff1e3",
        backgroundColor: "#ffffff",
      }
    },
    sample2: {
      labels: ["Заголовок", "Текст"],
      divs: ["title0", "text0"],
      content: {
        title0: "Заголовок",
        text0: "Текст"
      },
      settings: {
        fontSize: [40, 24],
        colors: ["#000000", "#000000"],
        borderTextColor: "#000000",
        borderTitleColor: "#f3f3f3",
        backgroundColor: "#ffffff",
      }
    },
    sample3: {
      labels: ["Заголовок", "Текст", "Текст"],
      divs: ["title0", "text0", "text1"],
      content: {
        title0: "Заголовок",
        text0: "Текст",
        text1: "Текст"
      },
      settings: {
        fontSize: [40, 24, 24],
        colors: ["#000000", "#000000", "#000000"],
        borderTextColor: "#000000",
        borderTitleColor: "#f3f3f3",
        backgroundColor: "#ffffff",
      }
    },
    sample4: {
      labels: ["Заголовок", "Текст"],
      divs: ["title0", "text0"],
      content: {
        title0: "Заголовок",
        text0: "Всегда, когда провожу секции, смотрю не на конечный результат, а на ход размышлений. Можно выучить все типы задач, прийти, решить все заготовленные интервьюером задачи за 10 минут и молчать, но это не совсем то, что хочется видеть! Живой ум, поток мыслей, желание рассказать и обсудить своё решение — это то, что хочется видеть в первую очередь. Конечно, есть фактор волнения, который заставляет вас быстрее «закончить» всё это. Но и с ним можно бороться — просто решайте больше, не сдавайтесь даже после неудачных попыток, и тогда удача будет на вашей стороне."
      },
      settings: {
        fontSize: [40, 24],
        colors: ["#000000", "#000000"],
        backgroundColor: "#ffffff",
      }
    },
    sample5: {
      labels: ["Текст"],
      divs: ["text0"],
      content: {
        text0: "Всегда, когда провожу секции, смотрю не на конечный результат, а на ход размышлений. Можно выучить все типы задач, прийти, решить все заготовленные интервьюером задачи за 10 минут и молчать, но это не совсем то, что хочется видеть! Живой ум, поток мыслей, желание рассказать и обсудить своё решение — это то, что хочется видеть в первую очередь. Конечно, есть фактор волнения, который заставляет вас быстрее «закончить» всё это. Но и с ним можно бороться — просто решайте больше, не сдавайтесь даже после неудачных попыток, и тогда удача будет на вашей стороне."
      },
      settings: {
        fontSize: [0,24],
        colors: ["#000000"],
        backgroundColor: "#ffffff",
      }
    },
  }
};

export const SampleLib = {
  header: [
    {
      name:'sample1',
      previewImg: "/header_lib/sample1.png",
      title:"О1",
      description:"надзаголовок, заголовок, описание, картинка"
    },
    {
      name:'sample2',
      previewImg: "/header_lib/sample2.png",
      title:"О2",
      description:"надзаголовок, заголовок, описание, фон"
    },
    {
      name:'sample3',
      previewImg: "/header_lib/sample3.png",
      title:"О3",
      description:"заголовок, описание"
    },
    {
      name:'sample4',
      previewImg: "/header_lib/sample4.png",
      title:"О4",
      description:"заголовок, описание, картинки"
    },
  ],
  text:[
    {
      name:'sample1',
      previewImg: "/text_lib/sample1.jpg",
      title:"ТБ1",
      description:"загловок,текст, обводка"
    },
    {
      name:'sample2',
      previewImg: "/text_lib/sample2.jpg",
      title:"ТБ2",
      description:"загловок, текст, обводка"
    },
    {
      name:'sample3',
      previewImg: "/text_lib/sample3.jpg",
      title:"ТБ3",
      description:"загловок, текст, текст, обводка"
    },
    {
      name:'sample4',
      previewImg: "/text_lib/sample4.jpg",
      title:"ТБ4",
      description:"загловок, текст"
    },
    {
      name:'sample5',
      previewImg: "/text_lib/sample5.jpg",
      title:"ТБ5",
      description:"текст"
    }
  ]
}