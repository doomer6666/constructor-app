import { useState } from "react";
import BaseBlock from "../components/SampleComponents/BaseBlock";
import { blockTemplates } from "../components/const";
import BlockBar from "../components/SampleComponents/BlockBar";
import HeaderBlock from "../components/SampleComponents/HeaderBlock";
import TextBlock from "../components/SampleComponents/TextBlock";
import GalleryBlock from "../components/SampleComponents/GalleryBlock";
import ButtonBlock from "../components/SampleComponents/ButtonBlock";
import ContactsBlock from "../components/SampleComponents/ContactsBlock";
import VideoBlock from "../components/SampleComponents/VideoBlock";
import { useSavePageMutation } from "../api/pageApi";
const SamplePage = () => {
  const [blocks, setBlocks] = useState([]);
  const [isVisibleBlockBar, setIsVisibleBlockBar] = useState(false);
  const componentMap = {
    header: HeaderBlock,
    text: TextBlock,
    gallery: GalleryBlock,
    button: ButtonBlock,
    contacts: ContactsBlock,
    video: VideoBlock,
  };
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
  const [savePage, { isLoading, error, data }] = useSavePageMutation();

  // Обработчик кнопки "Сохранить страницу"
  const handleSavePage = async () => {
    try {
      // Отправляем массив blocks
      const response = await savePage(blocks).unwrap();
      console.log("Страница сохранена успешно:", response);
      // можно добавить уведомление или редирект
    } catch (err) {
      console.error("Ошибка при сохранении страницы:", err);
    }
  };

  return (
    <section className="redactor-page">
      <section className="page" key={"page1"}>
        {blocks.map((block) => (
          <BaseBlock
            key={block.id}
            type={block.type}
            data={block.data}
            onUpdate={(newData) => updateBlockData(block.id, newData)}
            sample={block.sample}
            pageContent={componentMap[block.type]}
          />
        ))}
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
        <button
          className="new-block save-page"
          onClick={handleSavePage}
          disabled={isLoading}
        >
          {isLoading ? "Сохранение..." : "Сохранить страницу"}
        </button>
        <button
          className="new-block submit-page hidden"
          // onClick={ }
        >
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
