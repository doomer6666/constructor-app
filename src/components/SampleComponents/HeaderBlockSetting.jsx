import {
  handleFontColorChange,
  handleFontSizeChange,
  handleFileUpload,
} from "./Utils";
import { useState } from "react";

export default function HeaderBlockSetting({
  settingTempData,
  setSettingTempData,
  handleSettingSave,
  handleSettingClose,
  setIsActualyBackImage,
  divs,
  labels,
}) {
  const [imgText, setImgText] = useState("Выберите файл");
  return (
    <div className="setting-bar setting-header-bar">
      <div className="buttons-div">
        <button className="save" onClick={handleSettingClose}>
          Закрыть
        </button>
        <button className="close" onClick={handleSettingSave}>
          Сохранить и закрыть
        </button>
      </div>

      <p>Размер шрифта</p>
      <div className="position-x-div">
        {divs.map(
          (field, index) =>
            field.includes("title") && (
              <div className="little-div" key={`little-div${index}`}>
                <p>{labels[index]}</p>
                <input
                  type="number"
                  value={settingTempData.fontSize[index]}
                  onChange={(e) => {
                    handleFontSizeChange(settingTempData, setSettingTempData)(
                      e,
                      index
                    );
                  }}
                  className={`input-setting-header-${index}`}
                />
              </div>
            )
        )}
      </div>
      <p>Цвет шрифта</p>
      <div className="position-x-div">
        {divs.map(
          (field, index) =>
            field.includes("title") && (
              <div className="little-div" key={`little-div${index}`}>
                <p>{labels[index]}</p>
                <input
                  type="color"
                  className={`header-color-${index}`}
                  name="header"
                  value={settingTempData.colors[index] || ""}
                  onChange={(e) => {
                    handleFontColorChange(settingTempData, setSettingTempData)(
                      e,
                      index
                    );
                  }}
                />
              </div>
            )
        )}
      </div>
      {settingTempData.borderColor && (
        <div className="little-div">
          <p>Цвет декора</p>
          <input
            type="color"
            className="header-border-color"
            name="header-border"
            value={settingTempData.borderColor || ""}
            onChange={(e) => {
              setSettingTempData({
                ...settingTempData,
                borderColor: e.target.value,
              });
            }}
          />
        </div>
      )}
      {settingTempData.backgroundImage && (
        <>
          <p>Фоновое изображение</p>
          <label htmlFor="input-img" className="input-img">
            {imgText}
          </label>
          <input
            id="input-img"
            type="file"
            onChange={(e) =>
              handleFileUpload(
                setSettingTempData,
                setIsActualyBackImage,
                setImgText
              )(e)
            }
          />
        </>
      )}
      <p>Фоновый цвет</p>
      <input
        type="color"
        className="head-color"
        name="head"
        value={settingTempData.backgroundColor}
        onChange={(e) => {
          setSettingTempData({
            ...settingTempData,
            backgroundColor: e.target.value,
          });
          setIsActualyBackImage(false);
        }}
      />
    </div>
  );
}
