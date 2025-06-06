import { ColorPicker } from "antd";
import {
  handleFontColorChange,
  handleFontSizeChange,
  handleFileUpload,
} from "./Utils";
import { useState, useCallback, useEffect } from "react";

export default function BlockSetting({
  blockType,
  settingTempData,
  setSettingTempData,
  handleSettingSave,
  handleSettingClose,
  setIsActualyBackImage,
  divs,
  labels,
}) {
  useEffect(() => {
    if (settingTempData.buttonColor) {
      if (settingTempData.buttonColor.length > 1) {
        document.documentElement.style.setProperty(
          "--btn-bg-color-1",
          settingTempData.buttonColor[0]
        );
        document.documentElement.style.setProperty(
          "--btn-bg-color-2",
          settingTempData.buttonColor[1]
        );
      } else {
        document.documentElement.style.setProperty(
          "--btn-bg-color-1",
          settingTempData.buttonColor
        );
      }
    }
    if (settingTempData.borderColor) {
      if (settingTempData.borderColor.length > 1) {
        document.documentElement.style.setProperty(
          "--btn-border-color-1",
          settingTempData.borderColor[0]
        );
        document.documentElement.style.setProperty(
          "--btn-border-color-2",
          settingTempData.borderColor[1]
        );
      } else {
        document.documentElement.style.setProperty(
          "--btn-border-color-1",
          settingTempData.buttonColor
        );
      }
    }
  }, [settingTempData]);

  const [imgText, setImgText] = useState(
    setIsActualyBackImage ? "Загружено" : "Загрузить"
  );

  const memoizedHandleFontSizeChange = useCallback(
    (e, index) => {
      handleFontSizeChange(settingTempData, setSettingTempData)(e, index);
    },
    [settingTempData, setSettingTempData]
  );

  // Общие функции для рендеринга настроек
  const renderFontSizeSettings = () => (
    <>
      <p>Размер шрифта</p>
      <div className="position-x-div">
        {divs.map((field, index) => {
          if (field.includes("title") || field.includes("text")) {
            return (
              <div className="little-div" key={`little-div${index}`}>
                <p>{labels[index]}</p>
                <input
                  type="number"
                  value={settingTempData.fontSize[index] ?? ""}
                  onChange={(e) => memoizedHandleFontSizeChange(e, index)}
                  className={`input-setting-${index}`}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );

  const renderFontColorSettings = () => (
    <>
      <p>Цвет шрифта</p>
      <div className="position-x-div">
        {divs.map((field, index) => {
          if (field.includes("title") || field.includes("text")) {
            return (
              <div className="little-div" key={`little-div-color${index}`}>
                <p>{labels[index]}</p>
                <ColorPicker
                  className="colorPicker"
                  value={settingTempData.colors[index] ?? "#000000"}
                  onChange={(color) => {
                    handleFontColorChange(settingTempData, setSettingTempData)(
                      color,
                      index
                    );
                  }}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );

  const renderDecorColors = () => (
    <>
      <p>Цвет декора</p>
      <div className="position-x-div">
        {settingTempData.borderColor && (
          <div className="little-div">
            <p>Обводка блока</p>
            <ColorPicker
              className="colorPicker"
              value={settingTempData.borderColor}
              onChange={(color) => {
                setSettingTempData({
                  ...settingTempData,
                  borderColor: color.toHexString(),
                });
              }}
            />
          </div>
        )}
        {settingTempData.borderTitleColor && (
          <div className="little-div">
            <p>Рисунок под заголовком</p>
            <ColorPicker
              className="colorPicker"
              value={settingTempData.borderTitleColor}
              onChange={(color) => {
                setSettingTempData({
                  ...settingTempData,
                  borderTitleColor: color.toHexString(),
                });
              }}
            />
          </div>
        )}
        {settingTempData.borderTextColor && (
          <div className="little-div">
            <p>Обводка блоков</p>
            <ColorPicker
              className="colorPicker"
              value={settingTempData.borderTextColor}
              onChange={(color) => {
                setSettingTempData({
                  ...settingTempData,
                  borderTextColor: color.toHexString(),
                });
              }}
            />
          </div>
        )}
        {settingTempData.textTimeLine && (
          <div className="little-div">
            <p>Обводка таймлайна</p>
            <ColorPicker
              className="colorPicker"
              value={settingTempData.textTimeLine}
              onChange={(color) => {
                setSettingTempData({
                  ...settingTempData,
                  textTimeLine: color.toHexString(),
                });
              }}
            />
          </div>
        )}
        {settingTempData.underlayColor && (
          <div className="little-div">
            <p>Подложка контактов</p>
            <ColorPicker
              className="colorPicker"
              value={settingTempData.underlayColor}
              onChange={(color) => {
                setSettingTempData({
                  ...settingTempData,
                  underlayColor: color.toHexString(),
                });
              }}
            />
          </div>
        )}
      </div>
    </>
  );

  const renderBackgroundImage = () => (
    <>
      <p>Фоновое изображение</p>
      <div className="div-img">
        <label htmlFor="input-img" className="input-img">
          {imgText}
        </label>
        <input
          id="input-img"
          type="file"
          onChange={(e) =>
            handleFileUpload(
              "backgroundImage",
              setSettingTempData,
              setImgText,
              setIsActualyBackImage
            )(e)
          }
        />
        <button
          className="remove-img"
          onClick={() => {
            setImgText("Загрузить");
            setSettingTempData({
              ...settingTempData,
              backgroundImage: "none",
            });
            setIsActualyBackImage(false);
          }}
        >
          Удалить
        </button>
      </div>
    </>
  );

  const renderBackgroundColor = () => (
    <>
      <p>Фоновый цвет</p>
      <ColorPicker
        className="colorPicker"
        value={settingTempData.backgroundColor}
        onChange={(color) => {
          setSettingTempData({
            ...settingTempData,
            backgroundColor: color.toHexString(),
          });
        }}
      />
    </>
  );

  // Функции для каждого типа блока
  const renderHeaderSettings = () => (
    <>
      {divs.some((d) => d.includes("title") || d.includes("text")) &&
        renderFontSizeSettings()}
      {divs.some((d) => d.includes("title") || d.includes("text")) &&
        renderFontColorSettings()}
      {(settingTempData.borderColor ||
        settingTempData.borderTitleColor ||
        settingTempData.borderTextColor ||
        settingTempData.textTimeLine) &&
        renderDecorColors()}
      {settingTempData.backgroundImage && renderBackgroundImage()}
      {renderBackgroundColor()}
    </>
  );

  const renderTextSettings = () => (
    <>
      {divs.some((d) => d.includes("title") || d.includes("text")) &&
        renderFontSizeSettings()}
      {divs.some((d) => d.includes("title") || d.includes("text")) &&
        renderFontColorSettings()}
      {(settingTempData.borderColor ||
        settingTempData.borderTitleColor ||
        settingTempData.borderTextColor ||
        settingTempData.textTimeLine) &&
        renderDecorColors()}
      {renderBackgroundColor()}
    </>
  );

  const renderGallerySettings = () => <>{renderBackgroundColor()}</>;
  const renderVideoSettings = () => <>{renderBackgroundColor()}</>;
  const renderContactsSetting = () => (
    <>
      {renderTextSettings()}{" "}
      {settingTempData.underlayColor && renderDecorColors()}
    </>
  );
  const renderButtonSettings = () => {
    return (
      <>
        <p>Размер шрифта</p>
        <div className="position-x-div">
          <div className="little-div">
            <p>Текст</p>
            <input
              type="number"
              value={settingTempData.fontSize ?? ""}
              onChange={(e) =>
                setSettingTempData({
                  ...settingTempData,
                  fontSize: e.target.value,
                })
              }
              className="input-setting-button"
            />
          </div>
        </div>

        <p>Цвет текста</p>
        <div className="position-x-div">
          <div className="little-div">
            <p>Текст</p>
            <ColorPicker
              className="colorPicker"
              value={settingTempData.textColor}
              onChange={(color) =>
                setSettingTempData({
                  ...settingTempData,
                  textColor: color.toHexString(),
                })
              }
            />
          </div>
        </div>

        <p>
          {`Цвета кнопки ${
            settingTempData.buttonColor.length > 1 ? "(Градиент)" : ""
          }`}
        </p>
        <div className="position-x-div">
          {settingTempData.buttonColor.map((color, index) => (
            <div className="little-div" key={`btn-color-${index}`}>
              <p>
                {settingTempData.buttonColor.length > 1
                  ? `Градиент ${index + 1}`
                  : "Сплошной"}
              </p>
              <ColorPicker
                className="colorPicker"
                value={color}
                onChange={(newColor) => {
                  const newButtonColors = [...settingTempData.buttonColor];
                  newButtonColors[index] = newColor.toHexString();
                  setSettingTempData({
                    ...settingTempData,
                    buttonColor: newButtonColors,
                  });
                }}
              />
            </div>
          ))}
        </div>

        <p>
          {`Цвета обводки ${
            settingTempData.borderColor.length > 1 ? "(Градиент)" : ""
          }`}
        </p>
        <div className="position-x-div">
          {settingTempData.borderColor.map((color, index) => (
            <div className="little-div" key={`border-color-${index}`}>
              <p>
                {settingTempData.borderColor.length > 1
                  ? `Цвет ${index + 1}`
                  : "Сплошная"}
              </p>
              <ColorPicker
                className="colorPicker"
                value={color}
                onChange={(newColor) => {
                  const newBorderColors = [...settingTempData.borderColor];
                  newBorderColors[index] = newColor.toHexString();
                  setSettingTempData({
                    ...settingTempData,
                    borderColor: newBorderColors,
                  });
                }}
              />
            </div>
          ))}
        </div>

        {renderBackgroundColor()}
      </>
    );
  };

  return (
    <>
      <div className="buttons-div">
        <button className="save" onClick={handleSettingClose}>
          Закрыть
        </button>
        <button className="close" onClick={handleSettingSave}>
          Сохранить и закрыть
        </button>
      </div>
      <div className="bar-content">
        {blockType === "header" && renderHeaderSettings()}
        {blockType === "text" && renderTextSettings()}
        {blockType === "gallery" && renderGallerySettings()}
        {blockType === "button" && renderButtonSettings()}
        {blockType === "contacts" && renderContactsSetting()}
        {blockType === "video" && renderVideoSettings()}
      </div>
    </>
  );
}
