import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BaseBlock from "../components/SampleComponents/BaseBlock";
import { blockTemplates } from "../components/const";
import BlockBar from "../components/SampleComponents/BlockBar";
import HeaderBlock from "../components/SampleComponents/HeaderBlock";
import TextBlock from "../components/SampleComponents/TextBlock";
import GalleryBlock from "../components/SampleComponents/GalleryBlock";
import ButtonBlock from "../components/SampleComponents/ButtonBlock";
import ContactsBlock from "../components/SampleComponents/ContactsBlock";
import VideoBlock from "../components/SampleComponents/VideoBlock";
import { useSavePageMutation, useGetPageQuery } from "../api/pageApi";
import Modal from "../components/SampleComponents/Modal";
import PreviewPageBlock from "../components/SampleComponents/PreviewPageBar";
import PreviewFrame from "../components/SampleComponents/PreviewPage";

const deviceSize = {
  pc: {
    width: "100%",
    height: "100vh",
  },
  tablet: {
    width: "768px",
    height: "1024px",
  },
  phone: {
    width: "480px",
    height: "800px",
  },
};

const SamplePage = () => {
  const [currentDevice, setCurrentDevice] = useState("pc");
  const [isPreview, setIsPreview] = useState(false);

  const [isBlocked, setIsBlocked] = useState(false);
  const [isopenModal, setIsModalOpen] = useState(false);
  const { pageId } = useParams();
  const { data: pageData } = useGetPageQuery(undefined, {
    skip: pageId === "new",
  });
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
    console.log(newData);
    setBlocks(
      blocks.map((block) =>
        block.id === id
          ? { ...block, data: { ...block.data, ...newData } }
          : block
      )
    );
  };
  const [savePage, { isLoading }] = useSavePageMutation();

  // useEffect(() => {
  //   if (pageId === "new") {
  //     setBlocks([]);
  //   } else if (pageData) {
  //     setBlocks(pageData.blocks || []);
  //   }
  // }, [pageId, pageData]);
  // Обработчик кнопки "Сохранить страницу"
  const handleSavePage = async () => {
    try {
      // Отправляем массив blocks
      console.log(blocks);
      const response = await savePage(blocks).unwrap();
      console.log("Страница сохранена успешно:", response);
      // можно добавить уведомление или редирект
    } catch (err) {
      console.error("Ошибка при сохранении страницы:", err);
    }
  };
  const [modalData, setModalData] = useState({ img: "none", text: "" });
  function onClose() {
    setIsModalOpen(false);
    setModalData({ img: "none", text: "" });
  }
  const [isVisibleOtherBar, setIsVisibleOtherBar] = useState(false);
  return (
    <>
      {!(isVisibleBlockBar || isVisibleOtherBar) && (
        <PreviewPageBlock
          currentDevice={currentDevice}
          setCurrentDevice={setCurrentDevice}
          isPreview={isPreview}
          setIsPreview={setIsPreview}
        />
      )}
      {isPreview ? (
        <PreviewFrame
          blocks={blocks}
          componentMap={componentMap}
          deviceSize={deviceSize[currentDevice]}
        />
      ) : (
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
                setIsVisibleBar={setIsVisibleOtherBar}
              />
            ))}
          </section>
          {!(isVisibleOtherBar || isVisibleBlockBar) && (
            <div className="page-buttons">
              <button
                className="new-block"
                onClick={() => setIsVisibleBlockBar(true)}
              >
                Добавить блоки
              </button>

              <button
                className="new-block save-page "
                onClick={() => setIsModalOpen(true)}
              >
                Сохранить страницу
              </button>
            </div>
          )}
          {isVisibleBlockBar && (
            <BlockBar
              setIsVisibleBlockBar={setIsVisibleBlockBar}
              handleAddBlock={handleAddBlock}
            />
          )}
          <Modal
            isOpen={isopenModal}
            onClose={onClose}
            onSave={handleSavePage}
            modalData={modalData}
            setModalData={setModalData}
          ></Modal>
        </section>
      )}
    </>
  );
};

export default SamplePage;
