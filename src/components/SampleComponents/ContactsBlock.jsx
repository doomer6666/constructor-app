export default function ContactsBlock({ contentData, settingData }) {
  const info = Object.entries(contentData).filter(
    ([label]) => label.includes("title") && !label.includes("0")
  );
  const linkList =
    contentData.isBlack && contentData.withMail
      ? ["vk-black", "tg-black", "mail-black"]
      : contentData.isBlack
      ? ["vk-black", "wh-black", "tg-black"]
      : ["vk", "wh", "tg"];
  return (
    <div className="page__content">
      {contentData.title0 && (
        <h2
          style={{
            "--dynamic-font-p": `${settingData.fontSize[0] / 16}rem`,
            color: settingData.colors[0],
          }}
        >
          {contentData.title0}
        </h2>
      )}
      {contentData.link0 && (
        <div className="icon-div">
          {linkList.map((imgName, index) => (
            <a
              key={imgName + index}
              href={contentData[`link${index}`]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`/contacts_lib/${imgName}.svg`} />
            </a>
          ))}
        </div>
      )}
      {contentData.title1 && (
        <div className="text-map-div">
          <div className="text-div">
            {info.map(([label, text], index) => (
              <p
                key={label}
                style={{
                  color: settingData.colors[index + 1],
                  "--dynamic-font-p": `${
                    settingData.fontSize[index + 1] / 16
                  }rem`,
                }}
              >
                {text}
              </p>
            ))}
          </div>
          {contentData.withMap && (
            <iframe
              title="Яндекс Карта"
              style={{ border: 0 }}
              src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(
                contentData.title3
              )}&lang=ru_RU&z=10`}
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}
    </div>
  );
}
