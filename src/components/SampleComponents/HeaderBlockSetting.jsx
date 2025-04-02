import {
  handleFontColorChange,
  handleFontSizeChange,
  handleFileUpload,
} from "./Utils";
import { HEADER_LABELS } from "../const";
import { useState } from "react";

export default function HeaderBlockSetting({
  settingTempData,
  setSettingTempData,
  handleSettingSave,
  setIsActualyBackImage,
}) {
  const [imgText, setImgText] = useState("Выберите файл");
  return (
    <div className="setting-bar setting-header-bar">
      <button className="save" onClick={handleSettingSave}>
        Сохранить
      </button>
      <p>Размер шрифта</p>
      <div className="position-x-div">
        {HEADER_LABELS.map((field, index) => (
          <div className="little-div" key={`little-div${index}`}>
            <p>{field}</p>
            <input
              type="number"
              //доработаь
              // max={`--max-font-h${index === 1 ? 1 : 2}`.slice(0, -2)}
              value={settingTempData.fontSize[index] || ""}
              onChange={(e) => {
                handleFontSizeChange(settingTempData, setSettingTempData)(
                  e,
                  index
                );
              }}
              className={`input-setting-header-${index}`}
            />
          </div>
        ))}
      </div>
      <p>Цвет шрифта</p>
      <div className="position-x-div">
        {HEADER_LABELS.map((field, index) => (
          <div className="little-div" key={`little-div${index}`}>
            <p>{field}</p>
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
        ))}
      </div>
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
      <p>Только цвет</p>
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
