import { useEffect, useState } from "react";
import BlockContent from "./BlockContent";
import BlockSetting from "./BlockSetting";
import Buttons from "./Buttons";

const BaseBlock = ({
  type,
  data,
  sample,
  pageContent,
  onUpdate,
  setIsVisibleBar,
  onDelete,
  isAnyMenuOpen,
  setIsAnyMenuOpen,
}) => {
  const [isSettingVisible, setIsSettingVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (isContentVisible || isSettingVisible) {
      setIsVisibleBar(true);
      setIsAnyMenuOpen(true);
    } else {
      setIsVisibleBar(false);
      setIsAnyMenuOpen(false);
    }
  }, [isContentVisible, isSettingVisible, setIsAnyMenuOpen, setIsVisibleBar]);

  const [blockId] = useState(() => {
    return `block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  });

  const [contentData, setContentData] = useState(() => {
    const prefixedContent = {};
    for (const [key, value] of Object.entries(data.content)) {
      if (key.includes("img")) {
        prefixedContent[`${blockId}-${key}`] = value;
      } else {
        prefixedContent[key] = value;
      }
    }
    return prefixedContent;
  });

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
    const unprefixedContent = {};
    for (const [key, value] of Object.entries(contentData)) {
      if (key.includes("img")) {
        const originalKey = key.replace(`${blockId}-`, "");
        unprefixedContent[originalKey] = value;
      } else {
        unprefixedContent[key] = value;
      }
    }
    onUpdate({ content: unprefixedContent, settings: settingData });
  };

  const handleSettingSave = () => {
    setLastSettingData(settingData);
    setIsSettingVisible(false);
    onUpdate({ content: contentData, settings: settingData });
  };

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
        onDelete={onDelete}
        isAnyMenuOpen={isAnyMenuOpen}
      />

      <>{pageContent({ contentData, settingData, blockId })}</>

      <div
        className={`content-bar content-header-bar ${
          isContentVisible ? "active" : ""
        }`}
      >
        <BlockContent
          blockType={type}
          blockId={blockId}
          contentTempData={contentData}
          setContentTempData={setContentData}
          handleContentSave={handleContentSave}
          handleContentClose={handleContentClose}
          labels={data.labels}
          divs={data.divs}
        />
      </div>
      <div
        className={`setting-bar setting-header-bar ${
          isSettingVisible ? "active" : ""
        }`}
      >
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
      </div>
    </section>
  );
};

export default BaseBlock;
