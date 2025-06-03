import { getEmbedSrc, handleFileUpload, handleVideoUpload } from "./Utils";
import { useState } from "react";

export default function BlockContent({
  contentTempData,
  setContentTempData,
  handleContentSave,
  handleContentClose,
  divs,
  labels,
  blockId,
}) {
  const initialImgTexts = divs.reduce((acc, field) => {
    if (field.includes("img")) {
      const prefixedField = `${blockId}-${field}`;
      acc[prefixedField] =
        contentTempData[prefixedField] === "none" ? "Загрузить" : "Загружено";
    }
    return acc;
  }, {});

  const [imgTexts, setImgTexts] = useState(initialImgTexts);

  const [videoText, setVideoText] = useState(
    contentTempData.video === "none" ? "Загрузить" : "Загружено"
  );

  return (
    <>
      <div className="buttons-div">
        <button className="save" onClick={handleContentClose}>
          Закрыть
        </button>
        <button className="close" onClick={handleContentSave}>
          Сохранить и закрыть
        </button>
      </div>
      <div className="bar-content">
        {divs.map((field, index) => {
          const isImageField = field.includes("img");
          const prefixedField = isImageField ? `${blockId}-${field}` : field;

          return (
            <div key={`${prefixedField}-${index}`}>
              {(field.includes("title") || field.includes("text")) && (
                <div>
                  <p>{labels[index]}</p>
                  {/(?<=text)\d/.test(field) ? (
                    <textarea
                      value={contentTempData[field] || ""}
                      onChange={(e) => {
                        setContentTempData({
                          ...contentTempData,
                          [field]: e.target.value.replace(
                            /(\r\n|\r|\n)/g,
                            "\n"
                          ),
                        });
                      }}
                      className={`textarea-text-${index}`}
                    />
                  ) : (
                    <input
                      type="text"
                      value={contentTempData[field] || ""}
                      onChange={(e) =>
                        setContentTempData({
                          ...contentTempData,
                          [field]: e.target.value,
                        })
                      }
                      className={`input-title-${index}`}
                    />
                  )}
                </div>
              )}
              {isImageField && (
                <>
                  <p>{labels[index]}</p>
                  <div className="div-img">
                    <label
                      htmlFor={`input-${prefixedField}`}
                      className="input-img"
                    >
                      {imgTexts[prefixedField]}
                    </label>
                    <input
                      id={`input-${prefixedField}`}
                      type="file"
                      onChange={(e) =>
                        handleFileUpload(
                          prefixedField,
                          setContentTempData,
                          (newText) =>
                            setImgTexts((prev) => ({
                              ...prev,
                              [prefixedField]: newText,
                            }))
                        )(e)
                      }
                    />
                    <button
                      className="remove-img"
                      onClick={() => {
                        setImgTexts((prev) => ({
                          ...prev,
                          [prefixedField]: "Загрузить",
                        }));
                        setContentTempData({
                          ...contentTempData,
                          [prefixedField]: "none",
                        });
                      }}
                    >
                      Удалить
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}

        {contentTempData.isInfinite && (
          <div className="infinite-add">
            <p>Загрузить еще</p>
            <div className="div-img">
              <label htmlFor="input-img-new" className="input-img">
                Загрузить
              </label>
              <input
                id="input-img-new"
                type="file"
                onChange={(e) => {
                  const imageKeys = Object.keys(contentTempData).filter((key) =>
                    key.startsWith(`${blockId}-img`)
                  );
                  const nextField = `${blockId}-img${imageKeys.length + 1}`;
                  handleFileUpload(nextField, setContentTempData, (newText) => {
                    setImgTexts((prev) => ({
                      ...prev,
                      [nextField]: newText,
                    }));
                  })(e);
                }}
              />
            </div>
          </div>
        )}

        {(() => {
          const links = Object.entries(contentTempData).filter(([label]) =>
            label.includes("link")
          );
          if (links.length === 1) {
            return (
              <div>
                <p>Ссылка</p>
                <input
                  value={contentTempData.link}
                  onChange={(e) =>
                    setContentTempData({
                      ...contentTempData,
                      link: e.target.value,
                    })
                  }
                />
              </div>
            );
          } else if (links.length > 1) {
            return links.map((link, index) => (
              <div key={link[0] + index}>
                <p>Ссылка на {labels[index + 1]}</p>
                <input
                  value={link[1] === "#" ? "" : link[1]}
                  onChange={(e) =>
                    setContentTempData({
                      ...contentTempData,
                      [link[0]]: e.target.value || "",
                    })
                  }
                />
              </div>
            ));
          }
          return null;
        })()}

        {contentTempData.video && (
          <>
            <p>Видео(файл)</p>
            <div className="div-img">
              <label htmlFor={`input-video`} className="input-img">
                {videoText}
              </label>
              <input
                id="input-video"
                type="file"
                onChange={(e) =>
                  handleVideoUpload(
                    "video",
                    setContentTempData,
                    setVideoText
                  )(e)
                }
              />
            </div>
          </>
        )}
        {contentTempData.videoLink && (
          <div>
            <p>Видео (ссылка)</p>
            <textarea
              type="text"
              value={
                contentTempData.videoLink === "none"
                  ? ""
                  : contentTempData.videoLink
              }
              placeholder="Вставьте сюда ссылку на видео (YouTube, Rutube, VK Видео)"
              onChange={(e) =>
                setContentTempData({
                  ...contentTempData,
                  videoLink: getEmbedSrc(e.target.value),
                })
              }
            />
          </div>
        )}
      </div>
    </>
  );
}
