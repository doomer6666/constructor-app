import {
  handleFontColorChange,
  handleFontSizeChange,
  handleFileUpload,
} from "./Utils";
import { HEADER_LABELS } from "../const";

export default function HeaderBlockSetting({
  settingTempData,
  setSettingTempData,
  handleSettingSave,
  setIsActualyBackImage,
}) {
  return (
    <div className="setting-bar setting-header-bar">
      <button className="save-header" onClick={handleSettingSave}>
        Сохранить
      </button>
      <p>Размер шрифта</p>
      {HEADER_LABELS.map((field, index) => (
        <div key={`position-x-div${index}`} className="position-x-div">
          <div className="little-div">
            <p>{field}</p>
            <input
              type="number"
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
        </div>
      ))}
      <p>Цвет шрифта</p>
      {HEADER_LABELS.map((field, index) => (
        <div key={`position-x-div1${index}`} className="position-x-div">
          <div className="little-div">
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
        </div>
      ))}
      <p>Цвет декора</p>
      <div>
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
      <input
        className="input-img"
        type="file"
        onChange={(e) =>
          handleFileUpload(setSettingTempData, setIsActualyBackImage)(e)
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
