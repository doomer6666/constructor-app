import { useRef, useState } from "react";
import BlockLib from "./BlockLib";
import { useOuterClick } from "./Utils";

export default function BlockBar({
  setIsVisibleBlockBar,
  handleAddBlock,
  specialClass,
  setIsAnyMenuOpen,
}) {
  const [activeType, setActiveType] = useState("");
  const [libIsVisible, setLibIsVisible] = useState(false);
  const ref = useRef(null);
  const blocks = [
    ["header", "Обложка"],
    ["text", "Текстовый блок"],
    ["gallery", "Галерея"],
    ["button", "Кнопка"],
    ["contacts", "Контакты"],
    ["video", "Видео"],
  ];
  useOuterClick(ref, () => {
    setIsVisibleBlockBar(false);
    setLibIsVisible(false);
    setIsAnyMenuOpen(false);
  });
  const handleTypeClick = (blockType) => {
    if (activeType === blockType) {
      setLibIsVisible(!libIsVisible);
    } else {
      setActiveType(blockType);
      setLibIsVisible(true);
    }
  };

  return (
    <div ref={ref} style={{ display: "contents" }}>
      <section className={specialClass}>
        <div className="title-bar">
          <h4>Библиотека блоков</h4>
          <button
            className="exit"
            onClick={() => {
              setIsVisibleBlockBar(false);
              setLibIsVisible(false);
              setIsAnyMenuOpen(false);
              setActiveType("");
            }}
          >
            <img src="/cross.svg" height="48px" width="51px" alt="Закрыть" />
          </button>
        </div>
        <ul className="block-list">
          {blocks.map((block, index) => (
            <li className="block-item" key={index}>
              <button
                className={`title-button template-button ${
                  activeType === block[0] && libIsVisible ? "active" : ""
                }`}
                onClick={() => handleTypeClick(block[0])}
              >
                {block[1]}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <BlockLib
        isVisible={libIsVisible}
        setIsVisible={setLibIsVisible}
        type={activeType}
        handleAddBlock={handleAddBlock}
      />
    </div>
  );
}
