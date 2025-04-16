import { useState } from "react";
import BlockLib from "./BlockLib";

export default function BlockBar({ setIsVisibleBlockBar, handleAddBlock }) {
  const [activeType, setActiveType] = useState("");
  const [libIsVisible, setLibIsVisible] = useState(false);
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
          <li className="block-item">
            <button
              className="title-button template-button"
              data-template-type="header"
              onClick={() => {
                setActiveType("header");
                setLibIsVisible(!libIsVisible);
              }}
            >
              Обложка
            </button>
          </li>
        </ul>
      </section>
      {libIsVisible && (
        <BlockLib type={activeType} handleAddBlock={handleAddBlock} />
      )}
    </>
  );
}
