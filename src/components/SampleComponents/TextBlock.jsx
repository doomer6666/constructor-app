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
      style={{ borderColor: settingData?.borderColor }}
    >
      {titles.map(([label, text]) => (
        <h2
          key={label + text}
          className={label}
          style={{
            "--c": settingData.borderTitleColor,
            "--dynamic-font": `${settingData.fontSize[0] / 16}rem`,
            color: settingData.colors[0],
          }}
        >
          {text}
        </h2>
      ))}
      <div className="text-container">
        {texts.map(([label, text]) => {
          const index = parseInt(label.match(/\d+/), 10) + 1;
          return (
            <>
              {settingData.textTimeLine && (
                <>
                  <div className="block">
                    <div
                      class="circle"
                      styte={{ backgroundColor: settingData.textTimeLine }}
                    >
                      {index}
                    </div>
                    <p
                      class="text"
                      style={{
                        "--dynamic-font-p": `${
                          settingData.fontSize[index] / 16
                        }rem`,
                        color: settingData.colors[index],
                      }}
                    >
                      {text}
                    </p>
                  </div>
                  <div
                    class="line"
                    styte={{ backgroundColor: settingData.textTimeLine }}
                  ></div>
                </>
              )}
              <div
                key={label + text}
                className="text-div"
                style={{ borderColor: settingData.borderTextColor }}
              >
                {settingData.textIconColor && (
                  <img
                    src="/text_lib/text-icon.svg"
                    style={{
                      "--font-data": `${settingData.fontSize[index] / 16}rem`,
                      color: settingData.colors[index],
                    }}
                  />
                )}
                {!settingData.textTimeLine && (
                  <p
                    className={label}
                    style={{
                      "--dynamic-font-p": `${
                        settingData.fontSize[index] / 16
                      }rem`,
                      color: settingData.colors[index],
                    }}
                  >
                    {text}
                  </p>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
