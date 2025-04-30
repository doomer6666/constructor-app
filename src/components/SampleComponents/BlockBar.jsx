import { useState } from "react";
import BlockLib from "./BlockLib";

export default function BlockBar({ setIsVisibleBlockBar, handleAddBlock }) {
  const [activeType, setActiveType] = useState("");
  const [libIsVisible, setLibIsVisible] = useState(true);
  const blocks = [
    ["header", "Обложка"],
    ["text", "Текстовый блок"],
  ];
  return (
    <>
      <section className="block-bar">
        <div className="title-bar">
          <h4>Библиотека шаблонов</h4>
          <button className="exit" onClick={() => setIsVisibleBlockBar(false)}>
            <img src="/cross.svg" height="48px" width="51px" />
          </button>
        </div>
        <ul className="block-list">
          {blocks.map((block, index) => (
            <li className="block-item" key={index}>
              <button
                className={`title-button template-button ${
                  activeType === block[0] ? "active" : ""
                }`}
                onClick={() => {
                  setActiveType(block[0]);
                  setLibIsVisible(!!libIsVisible);
                }}
              >
                {block[1]}
              </button>
            </li>
          ))}
        </ul>
      </section>
      {libIsVisible && (
        <BlockLib type={activeType} handleAddBlock={handleAddBlock} />
      )}
    </>
  );
}
