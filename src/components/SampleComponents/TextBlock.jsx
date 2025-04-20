export default function TextBlock({ contentData, settingData }) {
  const titles = Object.entries(contentData).filter(([label]) =>
    label.includes("title")
  );
  const texts = Object.entries(contentData).filter(([label]) =>
    label.includes("text")
  );
  return (
    <div
      className="page__content"
      style={{ borderColor: settingData.borderColor }}
    >
      {titles.map(([label, text]) => (
        <h2
          key={label + text}
          className={label}
          style={{
            "--dynamic-font": `${settingData.fontSize[0] / 16}rem`,
            color: settingData.colors[0],
          }}
        >
          {text}
        </h2>
      ))}
      {texts.map(([label, text]) => {
        const index = parseInt(label.match(/\d+/), 10) + 1;
        return (
          <p
            key={label + text}
            className={label}
            style={{
              "--dynamic-font-p": `${settingData.fontSize[index] / 16}rem`,
              color: settingData.colors[index],
            }}
          >
            {text}
          </p>
        );
      })}
    </div>
  );
}
