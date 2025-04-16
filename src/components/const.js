export const HEADER_LABELS = {sample1:["Надзаголовок", "Заголовок", "Изображение"],sample2:["Надзаголовок", "Заголовок", "Описание"], sample3:["","Заголовок", "Описание"],sample4:["","Заголовок", "Описание", "Изображение1", "Изображение2"]};
export const HEADER_DIVS = {sample1:["title0", "title1", "title2","img1"],sample2:["title0", "title1", "title2"], sample3:["","title1", "title2"],sample4:["","title1", "title2","img1","img2"]};
export const blockTemplates = {
    header: {
      sample1:{
        content: {
          title0: "Надзаголовок",
          title1: "Заголовок",
          title2: "Описание",
          img1:"/content-img-sample1.png"
        },
        setting:{
          fontSize: [40, 90, 40],
          colors: ["#000000", "#000000", "#000000"],
          borderColor: "#000000",
          backgroundColor: "#ffffff",
        }
      },
      sample2:{
        content: {
          title0: "Надзаголовок",
          title1: "Заголовок",
          title2: "Описание",
        },
        setting:{
          fontSize: [40, 90, 40],
          colors: ["#ffffff", "#ffffff", "#ffffff"],
          borderColor: "#FF7700",
          backgroundColor: "#ffffff",
          backgroundImage: "/title1.jpg",
        }
    },
    sample3:{
      content: {
      title1: "Заголовок",
      title2: "Описание",
      },
      setting:{
      fontSize: [0, 90, 40],
      colors: ["","#000000", "#000000"],
      backgroundColor: "#ffffff",
      }
    },
    sample4:{
      content: {
      title1: "Заголовок",
      title2: "Описание",
      img1:"/sample-icon2.jpg",
      img2:"/sample-icon1.jpg"
      },
      setting:{
      fontSize: [0, 90, 40],
      colors: ["","#ffffff", "#ffffff"],
      backgroundColor: "#474747",
      }
    },
  },
    info: {
      title0: "Заголовок",
      title1: "Описание",
      fontSize: [40, 24],
      colors: ["#000000", "#000000"],
      borderColor: "#FF7700",
      borderTitleColor: "#FF7700",
      backgroundColor: "#ffffff",
      backgroundImage: "none",
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
}