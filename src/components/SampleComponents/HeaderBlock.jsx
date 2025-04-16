import { useState } from "react";
import HeaderBlockContent from "./HeaderBlockContent";
import HeaderBlockSetting from "./HeaderBlockSetting";
import Buttons from "./HeaderButtons";

const BlockHeader = ({ data, sample }) => {
  const [isRender, setIsRender] = useState(true);
  const [isSettingVisible, setIsSettingVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [contentData, setContentData] = useState({ ...data.content });
  const [settingData, setSettingData] = useState({ ...data.setting });
  const [lastContentData, setLastContentData] = useState(contentData);
  const [lastSettingData, setLastSettingData] = useState(settingData);
  const [isBackImage, setIsBackImage] = useState(
    settingData.backgroundImage !== undefined
  );
  const handleContentClose = () => {
    setContentData(lastContentData);
    setIsContentVisible(false);
  };

  const handleSettingClose = () => {
    setSettingData(lastSettingData);
    setIsSettingVisible(false);
  };

  const handleContentSave = () => {
    setLastContentData(contentData);
    setIsContentVisible(false);
  };

  const handleSettingSave = () => {
    setLastSettingData(settingData);
    setIsSettingVisible(false);
  };

  if (!isRender) {
    return null;
  }
  const bgImage = isBackImage ? `url(${settingData.backgroundImage})` : "none";
  const bgColor = !isBackImage ? settingData.backgroundColor : "transparent";
  const titles = Object.entries(contentData).filter(([label]) =>
    label.includes("title")
  );
  const images = Object.entries(contentData).filter(([label]) =>
    label.includes("img")
  );

  return (
    <section
      className={`header block ${sample}`}
      style={{
        backgroundImage: bgImage,
        backgroundColor: bgColor,
      }}
    >
      <Buttons
        setIsSettingVisible={setIsSettingVisible}
        setIsContentVisible={setIsContentVisible}
        setIsRender={setIsRender}
      />
      <div className="page__content">
        <div className="titles">
          {titles.map(([label, text]) => {
            const index = parseInt(label.match(/\d+/), 10);
            const HIndex = label.includes("1") ? "h1" : "h2";
            return (
              <HIndex
                key={label + index}
                className={`title-${index}`}
                style={{
                  "--dynamic-font": `${settingData.fontSize[index] / 16}rem`,
                  color: settingData.colors[index],
                  borderColor: settingData.borderColor,
                }}
              >
                {text}
              </HIndex>
            );
          })}
        </div>
        <div className="gallery">
          {images.map(([label, url]) => (
            <img className={label} key={label} src={url} />
          ))}
        </div>
      </div>
      {isContentVisible && (
        <HeaderBlockContent
          contentTempData={contentData}
          setContentTempData={setContentData}
          handleContentSave={handleContentSave}
          handleContentClose={handleContentClose}
          sample={sample}
        />
      )}
      {isSettingVisible && (
        <HeaderBlockSetting
          settingTempData={settingData}
          setSettingTempData={setSettingData}
          handleSettingSave={handleSettingSave}
          handleSettingClose={handleSettingClose}
          setIsActualyBackImage={setIsBackImage}
          sample={sample}
        />
      )}
    </section>
  );
};

export default BlockHeader;
