import React from "react";

export default function TextBlock({ contentData, settingData }) {
  const titles = Object.entries(contentData).filter(([label]) =>
    label.includes("title")
  );
  const texts = Object.entries(contentData).filter(([label]) =>
    label.includes("text")
  );
  const titleCount = titles.length;

  return (
    <div
      className="page__content"
      style={{ borderColor: settingData?.borderColor }}
    >
      {titles.map(([label, text], index) => (
        <h2
          key={`${label}-${index}`}
          className={label}
          style={{
            "--c": settingData.borderTitleColor,
            "--dynamic-font": `${settingData.fontSize[index] / 16}rem`,
            color: settingData.colors[index],
          }}
        >
          {text}
        </h2>
      ))}
      <div
        className="text-container"
        style={{ "--custom-color": settingData.textTimeLine }}
      >
        {texts.map(([label, text], index) => {
          const textIndex = titleCount + index;
          return (
            <React.Fragment key={`text-block-${label}-${index}`}>
              {settingData.textTimeLine && (
                <>
                  <div className={`block ${index % 2 === 0 ? "even" : "odd"}`}>
                    <div
                      className="circle"
                      style={{ backgroundColor: settingData.textTimeLine }}
                    >
                      {index}
                    </div>
                    <p
                      className="text"
                      style={{
                        "--dynamic-font-p": `${
                          settingData.fontSize[textIndex] / 16
                        }rem`,
                        color: settingData.colors[textIndex],
                      }}
                    >
                      {text}
                    </p>
                  </div>
                  <div className="line"></div>
                </>
              )}
              {!settingData.textTimeLine && (
                <div
                  key={label + text}
                  className="text-div"
                  style={{ borderColor: settingData.borderTextColor }}
                >
                  {settingData.textIconColor && (
                    <img
                      src="/text_lib/text-icon.svg"
                      style={{
                        "--font-data": `${
                          settingData.fontSize[textIndex] / 16
                        }rem`,
                        color: settingData.colors[textIndex],
                      }}
                    />
                  )}
                  <p
                    className={label}
                    style={{
                      "--dynamic-font-p": `${
                        settingData.fontSize[textIndex] / 16
                      }rem`,
                      color: settingData.colors[textIndex],
                    }}
                  >
                    {text}
                  </p>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
