export default function HeaderBlock({
  contentData,
  settingData,
  blockId,
  isReadOnly,
}) {
  const titles = Object.entries(contentData).filter(([label]) =>
    label.includes("title")
  );
  const images = Object.entries(contentData).filter(([label]) =>
    isReadOnly ? label.includes("img") : label.startsWith(`${blockId}-img`)
  );

  return (
    <div className="page__content">
      <div className="titles">
        {titles.map(([label, text]) => {
          const index = parseInt(label.match(/\d+/), 10);
          const HIndex = label.includes("1") ? "h1" : "h2";
          return (
            <HIndex
              key={label + index}
              className={`title-${index}`}
              style={{
                "--dynamic-font": `${settingData.fontSize[index] / 16}rem`,
                color: settingData.colors[index],
                borderColor: settingData.borderColor,
              }}
            >
              {text}
            </HIndex>
          );
        })}
      </div>
      <div className="gallery">
        {images.map(([label, url]) => (
          <img className={label} key={label} src={url} alt={label} />
        ))}
      </div>
    </div>
  );
}
