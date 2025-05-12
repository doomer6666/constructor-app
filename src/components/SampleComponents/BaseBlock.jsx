import { useState } from "react";
import BlockContent from "./BlockContent";
import BlockSetting from "./BlockSetting";
import Buttons from "./HeaderButtons";

const BaseBlock = ({ type, data, sample, pageContent, onUpdate }) => {
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
    onUpdate({ content: contentData, settings: settingData });
  };

  const handleSettingSave = () => {
    setLastSettingData(settingData);
    setIsSettingVisible(false);
    onUpdate({ content: contentData, settings: settingData });
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
        <BlockContent
          contentTempData={contentData}
          setContentTempData={setContentData}
          handleContentSave={handleContentSave}
          handleContentClose={handleContentClose}
          labels={data.labels}
          divs={data.divs}
        />
      )}
      {isSettingVisible && (
        <BlockSetting
          blockType={type}
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
