import { handleFileUpload } from "./Utils";
import { useState } from "react";

export default function HeaderBlockContent({
  contentTempData,
  setContentTempData,
  handleContentSave,
  handleContentClose,
  divs,
  labels,
}) {
  const images = Object.entries(contentTempData).filter(([label]) =>
    label.includes("img")
  );
  const [imgTexts, setImgTexts] = useState(
    images.map(([, value]) => (value === "none" ? "Загрузить" : "Загружено"))
  );

  return (
    <div className="content-bar header-bar">
      <div className="buttons-div">
        <button className="save" onClick={handleContentClose}>
          Закрыть
        </button>
        <button className="close" onClick={handleContentSave}>
          Сохранить и закрыть
        </button>
      </div>
      {divs.map((field, index) => {
        let imgCounter = -1;
        const isImageField = field.includes("img");

        if (isImageField) {
          imgCounter = images.findIndex(([key]) => key === field);
        }
        return (
          <div key={`${field}-${index}`}>
            {(field.includes("title") || field.includes("text")) && (
              <div>
                <p>{labels[index]}</p>
                {field.includes("text") ? (
                  <textarea
                    value={contentTempData[field] || ""}
                    onChange={(e) => {
                      setContentTempData({
                        ...contentTempData,
                        [field]: e.target.value.replace(/(\r\n|\r|\n)/g, "\n"),
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
                    htmlFor={`input-img-${imgCounter}`}
                    className="input-img"
                  >
                    {imgTexts[imgCounter]}
                  </label>
                  <input
                    id={`input-img-${imgCounter}`}
                    type="file"
                    onChange={(e) =>
                      handleFileUpload(field, setContentTempData, (newText) =>
                        setImgTexts((prev) => {
                          const newState = [...prev];
                          newState[imgCounter] = newText;
                          return newState;
                        })
                      )(e)
                    }
                  />
                  <button
                    className="remove-img"
                    onClick={() => {
                      setImgTexts((prev) => {
                        const newState = [...prev];
                        newState[index] = "Загрузить";
                        return newState;
                      });
                      setContentTempData({
                        ...contentTempData,
                        [field]: "none",
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
    </div>
  );
}
