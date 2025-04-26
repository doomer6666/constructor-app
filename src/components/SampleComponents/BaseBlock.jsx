import { useState } from "react";
import HeaderBlockContent from "./HeaderBlockContent";
import HeaderBlockSetting from "./HeaderBlockSetting";
import Buttons from "./HeaderButtons";

const BaseBlock = ({ type, data, sample, pageContent }) => {
  const [isRender, setIsRender] = useState(true);
  const [isSettingVisible, setIsSettingVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [contentData, setContentData] = useState({ ...data.content });
  const [settingData, setSettingData] = useState({ ...data.settings });
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
    setIsBackImage(settingData.backgroundImage !== undefined);
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

  return (
    <section
      className={`block ${type} ${sample}`}
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

      <>{pageContent({ contentData, settingData })}</>

      {isContentVisible && (
        <HeaderBlockContent
          contentTempData={contentData}
          setContentTempData={setContentData}
          handleContentSave={handleContentSave}
          handleContentClose={handleContentClose}
          labels={data.labels}
          divs={data.divs}
        />
      )}
      {isSettingVisible && (
        <HeaderBlockSetting
          settingTempData={settingData}
          setSettingTempData={setSettingData}
          handleSettingSave={handleSettingSave}
          handleSettingClose={handleSettingClose}
          setIsActualyBackImage={setIsBackImage}
          labels={data.labels}
          divs={data.divs}
        />
      )}
    </section>
  );
};

export default BaseBlock;
