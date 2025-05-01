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
      labels: ["Заголовок", "Текст1", "Текст2"],
      divs: ["title0", "text0", "text1"],
      content: {
        title0: "Заголовок",
        text0: "Текст1",
        text1: "Текст2"
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
      labels: ["Текст","Текст","Текст"],
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
    sample6: {
      labels: ["Текст","Текст1","Текст2","Текст3"],
      divs: ["text0","text1","text2"],
      content: {
        text0: "Всегда, когда провожу секции, смотрю не на конечный результат, а на ход размышлений. Можно выучить все типы задач, прийти, решить все заготовленные интервьюером задачи за 10 минут и молчать, но это не совсем то, что хочется видеть! Живой ум, поток мыслей, желание рассказать и обсудить своё решение — это то, что хочется видеть в первую очередь. Конечно, есть фактор волнения, который заставляет вас быстрее «закончить» всё это. Но и с ним можно бороться — просто решайте больше, не сдавайтесь даже после неудачных попыток, и тогда удача будет на вашей стороне.",
        text1: "Всегда, когда провожу секции, смотрю не на конечный результат, а на ход размышлений. Можно выучить все типы задач, прийти, решить все заготовленные интервьюером задачи за 10 минут и молчать, но это не совсем то, что хочется видеть! Живой ум, поток мыслей, желание рассказать и обсудить своё решение — это то, что хочется видеть в первую очередь. Конечно, есть фактор волнения, который заставляет вас быстрее «закончить» всё это. Но и с ним можно бороться — просто решайте больше, не сдавайтесь даже после неудачных попыток, и тогда удача будет на вашей стороне.",
        text2: "Всегда, когда провожу секции, смотрю не на конечный результат, а на ход размышлений. Можно выучить все типы задач, прийти, решить все заготовленные интервьюером задачи за 10 минут и молчать, но это не совсем то, что хочется видеть! Живой ум, поток мыслей, желание рассказать и обсудить своё решение — это то, что хочется видеть в первую очередь. Конечно, есть фактор волнения, который заставляет вас быстрее «закончить» всё это. Но и с ним можно бороться — просто решайте больше, не сдавайтесь даже после неудачных попыток, и тогда удача будет на вашей стороне."

      },
      settings: {
        fontSize: [0,24,24,24],
        colors: ["#000000","#000000","#000000"],
        backgroundColor: "#ffffff",
      }
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
        colors: ["#000000", "#000000","#000000", "#000000","#000000"],
        borderTextColor: "#000000",
        backgroundColor: "#ffffff",
      }
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
        colors: ["#000000", "#000000","#000000", "#000000","#000000"],
        textIconColor:true,
        backgroundColor: "#ffffff",
      }
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
        colors: ["#000000", "#000000","#000000", "#000000","#000000"],
        textTimeLine:"#FFAA5F",
        backgroundColor: "#ffffff",
      }
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
        colors: ["#000000", "#000000","#000000", "#000000","#000000"],
        textTimeLine:"#FFAA5F",
        backgroundColor: "#ffffff",
      }
    },
  },
  gallery: {
    sample1: {
      labels: ["Изображение1","Изображение2","Изображение3",],
      divs: ["img1", "img2", "img3"],
      content: {
        img1: "none",
        img2: "none",
        img3: "none",
      },
      settings: {
        backgroundColor: "#ffffff",
      }
    },
    sample2: {
      labels: ["Изображение1","Изображение2"],
      divs: ["img1", "img2"],
      content: {
        img1: "none",
        img2: "none",
      },
      settings: {
        backgroundColor: "#ffffff",
      }
    },
  },
  button: {
    sample1: {
      labels: ["Надзаголовок", "Заголовок", "Изображение"],
      divs: ["title0", "title1", "img1"],
      content: {
        title0: "Надзаголовок",
        title1: "Заголовок",
        title2: "Описание",
        img1: "/content-img-sample1.png"
      },
    },
  },
  contacts: {
    sample1: {
      labels: ["Надзаголовок", "Заголовок", "Изображение"],
      divs: ["title0", "title1", "img1"],
      content: {
        title0: "Надзаголовок",
        title1: "Заголовок",
        title2: "Описание",
        img1: "/content-img-sample1.png"
      },
    },
  },
  video: {
    sample1: {
      labels: ["Надзаголовок", "Заголовок", "Изображение"],
      divs: ["title0", "title1", "img1"],
      content: {
        title0: "Надзаголовок",
        title1: "Заголовок",
        title2: "Описание",
        img1: "/content-img-sample1.png"
      },
    },
  },
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
    },
    {
      name:'sample6',
      previewImg: "/text_lib/sample6.jpg",
      title:"ТБ6",
      description:"3 текста"
    },
    {
      name:'sample7',
      previewImg: "/text_lib/sample7.jpg",
      title:"ТБ7",
      description:"заголовок, 4 текста, обводка"
    },
    {
      name:'sample8',
      previewImg: "/text_lib/sample8.jpg",
      title:"ТБ8",
      description:"заголовок, 4 текста, обводка"
    },
    {
      name:'sample9',
      previewImg: "/text_lib/sample9.jpg",
      title:"ТБ9",
      description:"загловок, 4 текста, этапы"
    },
    {
      name:'sample10',
      previewImg: "/text_lib/sample10.jpg",
      title:"ТБ10",
      description:"загловок, 4 текста, этапы"
    }
  ],
  gallery: [
    {
      name:'sample1',
      previewImg: "/gallery_lib/sample1.jpg",
      title:"Г1",
      description:"3 изображения"
    },
    {
      name:'sample2',
      previewImg: "/gallery_lib/sample2.jpg",
      title:"Г2",
      description:"2 изображения"
    },
    {
      name:'sample3',
      previewImg: "/gallery_lib/sample3.jpg",
      title:"Г3",
      description:"6 изображений"
    },
    {
      name:'sample4',
      previewImg: "/gallery_lib/sample4.jpg",
      title:"Г4",
      description:"лента изображений"
    },
    {
      name:'sample5',
      previewImg: "/gallery_lib/sample5.jpg",
      title:"Г5",
      description:"1 изображение"
    },
  ],
  button: [
    {
      name:'sample1',
      previewImg: "/header_lib/sample1.png",
      title:"О1",
      description:"надзаголовок, заголовок, описание, картинка"
    },
  ],
  contacts: [
    {
      name:'sample1',
      previewImg: "/header_lib/sample1.png",
      title:"О1",
      description:"надзаголовок, заголовок, описание, картинка"
    },
  ],
  video: [
    {
      name:'sample1',
      previewImg: "/header_lib/sample1.png",
      title:"О1",
      description:"надзаголовок, заголовок, описание, картинка"
    },
  ],
}