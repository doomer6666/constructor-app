import { useRef, useState, useEffect } from "react";
import HeaderBlockContent from "./HeaderBlockContent";
import HeaderBlockSetting from "./HeaderBlockSetting";
import { HEADER_DIVS } from "../const";
import Buttons from "./HeaderButtons";

const BlockHeader = ({ data, onUpdate }) => {
  const [isRender, setIsRender] = useState(true);
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

  if (!isRender) {
    return null;
  }

  const bgImage =
    isSettingVisible && trueImg
      ? `url(${oldData.current.backgroundImage})`
      : trueImg
      ? `url(${data.backgroundImage})`
      : "none";

  const bgColor = isSettingVisible
    ? oldData.current.backgroundColor
    : !trueImg
    ? data.backgroundColor
    : "transparent";

  return (
    <section
      className="header block"
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
      <div className="titles">
        {HEADER_DIVS.map((label, index) => {
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
        <HeaderBlockContent
          contentTempData={contentTempData}
          setContentTempData={setContentTempData}
          handleContentSave={handleContentSave}
        />
      )}
      {isSettingVisible && (
        <HeaderBlockSetting
          settingTempData={settingTempData}
          setSettingTempData={setSettingTempData}
          handleSettingSave={handleSettingSave}
          setIsActualyBackImage={setIsActualyBackImage}
        />
      )}
    </section>
  );
};

export default BlockHeader;
