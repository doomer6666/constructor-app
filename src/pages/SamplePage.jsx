import { useState } from "react";
import BlockHeader from "../components/SampleComponents/HeaderBlock";
import { blockTemplates } from "../components/const";
const SamplePage = () => {
  const [blocks, setBlocks] = useState([]);
  const [isVisibleBlockBar, setIsVisibleBlockBar] = useState(false);
  const handleAddBlock = (type) => {
    const newBlock = {
      id: Date.now(),
      type: type,
      data: blockTemplates[type] || {},
    };

    setBlocks([...blocks, newBlock]);
    setIsVisibleBlockBar(false);
  };

  const updateBlockData = (id, newData) => {
    setBlocks(
      blocks.map((block) =>
        block.id === id
          ? { ...block, data: { ...block.data, ...newData } }
          : block
      )
    );
  };

  return (
    <section>
      <section className="page">
        {blocks.map((block) => (
          <div key={block.id}>
            {block.type === "header" && (
              <BlockHeader
                data={block.data}
                onUpdate={(newData) => updateBlockData(block.id, newData)}
              />
            )}
          </div>
        ))}
      </section>
      <button className="new-block" onClick={() => setIsVisibleBlockBar(true)}>
        Добавить блоки
      </button>
      <div className="page-buttons">
        <button className="new-block save-page hidden">
          Сохранить страницу
        </button>
        <button className="new-block submit-page hidden">
          Выгрузить страницу
        </button>
      </div>
      {isVisibleBlockBar && (
        <section className="block-bar">
          <div className="title-bar">
            <h4>Библиотека шаблонов</h4>
            <button
              className="exit"
              onClick={() => setIsVisibleBlockBar(false)}
            >
              <img src="/cross.svg" height="48px" width="51px" />
            </button>
          </div>
          <ul className="block-list">
            <li className="block-item">
              <button
                className="title-button template-button"
                data-template-type="header"
                onClick={() => handleAddBlock("header")}
              >
                Обложка
              </button>
            </li>
          </ul>
        </section>
      )}
    </section>
  );
};

export default SamplePage;
