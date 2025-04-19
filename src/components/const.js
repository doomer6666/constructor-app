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
        borderTitleColor: "#FF7700",
        backgroundColor: "#ffffff",
        backgroundImage: "none"
      }
    }
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
  info:[
    {
      name:'sample1',
      previewImg: "/header_lib/sample1.png",
      title:"ТБ1",
      description:"загловок,текст, обводка"
    }
  ]
}