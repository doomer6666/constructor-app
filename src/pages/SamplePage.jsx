import { useState } from "react";
import BlockHeader from "../components/SampleComponents/HeaderBlock";
import { blockTemplates } from "../components/const";
import BlockBar from "../components/SampleComponents/BlockBar";
const SamplePage = () => {
  const [blocks, setBlocks] = useState([]);
  const [isVisibleBlockBar, setIsVisibleBlockBar] = useState(false);
  const handleAddBlock = (type, sample) => {
    const newBlock = {
      id: Date.now(),
      type: type,
      sample: sample,
      data: blockTemplates[type][sample] || {},
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
    <section className="redactor-page">
      <section className="page" key={"page1"}>
        {blocks.map(
          (block) =>
            block.type === "header" && (
              <BlockHeader
                key={block.id}
                data={block.data}
                onUpdate={(newData) => updateBlockData(block.id, newData)}
                sample={block.sample}
              />
            )
        )}
      </section>
      {!isVisibleBlockBar && (
        <button
          className="new-block"
          onClick={() => setIsVisibleBlockBar(true)}
        >
          Добавить блоки
        </button>
      )}
      <div className="page-buttons">
        <button className="new-block save-page hidden">
          Сохранить страницу
        </button>
        <button className="new-block submit-page hidden">
          Выгрузить страницу
        </button>
      </div>
      {isVisibleBlockBar && (
        <BlockBar
          setIsVisibleBlockBar={setIsVisibleBlockBar}
          handleAddBlock={handleAddBlock}
        />
      )}
    </section>
  );
};

export default SamplePage;
