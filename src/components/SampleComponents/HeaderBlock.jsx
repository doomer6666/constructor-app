import { useRef, useState, useEffect } from "react";

const BlockHeader = ({ data, onUpdate }) => {
  const [isSettingVisible, setIsSettingVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isActualyBackImage, setIsActualyBackImage] = useState(true);
  const [trueImg, setTrueImg] = useState(true);
  const oldData = useRef(data);
  const [contentTempData, setContentTempData] = useState({
    title0: data.title0 || "",
    title1: data.title1 || "",
    title2: data.title2 || "",
  });

  const [settingTempData, setSettingTempData] = useState({
    fontSize: data.fontSize || [],
    colors: data.colors || "",
    borderColor: data.borderColor || "",
    backgroundColor: data.backgroundColor || "",
    backgroundImage: data.backgroundImage || "",
  });

  useEffect(() => {
    oldData.current = data;
  }, [data]);

  const handleContentSave = () => {
    onUpdate(contentTempData);
    setIsContentVisible(false);
  };

  const handleSettingSave = () => {
    onUpdate(settingTempData);
    setIsSettingVisible(false);
    setTrueImg(isActualyBackImage);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const newImageUrl = event.target.result;
      setSettingTempData((prev) => ({
        ...prev,
        backgroundImage: newImageUrl,
      }));
      setIsActualyBackImage(true);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section
      className="header block"
      data-template="header"
      style={{
        backgroundImage:
          isSettingVisible && trueImg
            ? `url(${oldData.current.backgroundImage})`
            : trueImg
            ? `url(${data.backgroundImage})`
            : "none",

        backgroundColor: isSettingVisible
          ? oldData.current.backgroundColor
          : !trueImg
          ? data.backgroundColor
          : "transparent",
      }}
    >
      <div className="buttons">
        <button
          className="header-setting setting"
          onClick={() => {
            return setIsSettingVisible(true);
          }}
        >
          Настройки
        </button>
        <button
          className="header-content content"
          onClick={() => setIsContentVisible(true)}
        >
          Контент
        </button>
        <button className="trash">
          <img src="/trash.svg" height="25px" width="23px" />
        </button>
      </div>

      <div className="titles">
        {["title0", "title1", "title2"].map((label, index) => {
          const HIndex = index === 1 ? "h1" : "h2";
          return (
            <HIndex
              key={label + index}
              className={`title-${index}`}
              style={{
                fontSize: data.fontSize[index] + "px",
                color: data.colors[index],
                borderColor: data.borderColor,
              }}
            >
              {data[label]}
            </HIndex>
          );
        })}
      </div>
      {isContentVisible && (
        <div className="content-bar header-bar">
          <button className="save" onClick={handleContentSave}>
            Сохранить
          </button>
          {["title0", "title1", "title2"].map((field, index) => (
            <div key={field}>
              <p>{["Надзаголовок", "Заголовок", "Описание"][index]}</p>
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
            </div>
          ))}
        </div>
      )}
      {isSettingVisible && (
        <div className="setting-bar setting-header-bar">
          <button className="save-header" onClick={handleSettingSave}>
            Сохранить
          </button>
          <p>Размер шрифта</p>
          {[0, 1, 2].map((index) => (
            <div key={`position-x-div${index}`} className="position-x-div">
              <div className="little-div">
                <p>{["Надзаголовок", "Заголовок", "Описание"][index]}</p>
                <input
                  type="number"
                  value={settingTempData.fontSize[index] || ""}
                  onChange={(e) => {
                    const newFontSizes = [...settingTempData.fontSize];
                    newFontSizes[index] = e.target.value;
                    setSettingTempData({
                      ...settingTempData,
                      fontSize: newFontSizes,
                    });
                  }}
                  className={`input-setting-header-${index}`}
                />
              </div>
            </div>
          ))}
          <p>Цвет шрифта</p>
          {[0, 1, 2].map((index) => (
            <div key={`position-x-div1${index}`} className="position-x-div">
              <div className="little-div">
                <p>{["Надзаголовок", "Заголовок", "Описание"][index]}</p>
                <input
                  type="color"
                  className={`header-color-${index}`}
                  name="header"
                  value={settingTempData.colors[index] || ""}
                  onChange={(e) => {
                    const newFontColors = [...settingTempData.colors];
                    newFontColors[index] = e.target.value;
                    setSettingTempData({
                      ...settingTempData,
                      colors: newFontColors,
                    });
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
            onChange={(e) => handleFileUpload(e)}
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
      )}
    </section>
  );
};

export default BlockHeader;
