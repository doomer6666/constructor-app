import { ColorPicker } from "antd";
import {
  handleFontColorChange,
  handleFontSizeChange,
  handleFileUpload,
} from "./Utils";
import { useState, useCallback } from "react";

export default function HeaderBlockSetting({
  settingTempData,
  setSettingTempData,
  handleSettingSave,
  handleSettingClose,
  setIsActualyBackImage,
  divs,
  labels,
}) {
  const [imgText, setImgText] = useState(
    setIsActualyBackImage ? "Загружено" : "Загрузить"
  );
  const memoizedHandleFontSizeChange = useCallback(
    (e, index) => {
      handleFontSizeChange(settingTempData, setSettingTempData)(e, index);
    },
    [settingTempData, setSettingTempData]
  );
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
      <div>
        {!divs.includes("title0") && divs.includes("text0") && (
          <>
            <p>Размер шрифта</p>
            <div className="position-x-div">
              {divs.map((field, index) => {
                index = field.includes("text") ? index + 1 : index;
                return (
                  (field.includes("title") || field.includes("text")) && (
                    <div className="little-div" key={`little-div${index}`}>
                      <p>{labels[index]}</p>
                      <input
                        type="number"
                        value={settingTempData.fontSize[index]}
                        onChange={(e) => {
                          memoizedHandleFontSizeChange(e, index);
                        }}
                        className={`input-setting-${index}`}
                      />
                    </div>
                  )
                );
              })}
            </div>
          </>
        )}
        {divs.includes("title0") && (
          <>
            <p>Размер шрифта</p>
            <div className="position-x-div">
              {divs.map((field, index) => {
                return (
                  (field.includes("title") || field.includes("text")) && (
                    <div className="little-div" key={`little-div${index}`}>
                      <p>{labels[index]}</p>
                      <input
                        type="number"
                        value={settingTempData.fontSize[index]}
                        onChange={(e) => {
                          memoizedHandleFontSizeChange(e, index);
                        }}
                        className={`input-setting-${index}`}
                      />
                    </div>
                  )
                );
              })}
            </div>
          </>
        )}
        {(divs.includes("title0") || divs.includes("text0")) && (
          <>
            <p>Цвет шрифта</p>
            <div className="position-x-div">
              {divs.map(
                (field, index) =>
                  (field.includes("title") || field.includes("text")) && (
                    <div className="little-div" key={`little-div${index}`}>
                      <p>{labels[index]}</p>
                      <ColorPicker
                        className="colorPicker"
                        value={settingTempData.colors[index]}
                        onChange={(color) => {
                          handleFontColorChange(
                            settingTempData,
                            setSettingTempData
                          )(color, index);
                        }}
                      />
                    </div>
                  )
              )}
            </div>
          </>
        )}
        {(settingTempData.borderColor ||
          settingTempData.borderTitleColor ||
          settingTempData.borderTextColor ||
          settingTempData.textTimeLine) && (
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
            </div>
          </>
        )}
        {settingTempData.backgroundImage && (
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
        )}
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
      </div>
    </div>
  );
}
