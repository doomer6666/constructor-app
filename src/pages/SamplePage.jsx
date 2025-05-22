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
import Modal from "../components/SampleComponents/Modal";
import PreviewPageBlock from "../components/SampleComponents/PreviewPageBar";
import PreviewFrame from "../components/SampleComponents/PreviewPage";
import { savePage } from "../api/pageApi";

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

  const [isopenModal, setIsModalOpen] = useState(false);

  const [modalData, setModalData] = useState({
    img: "none",
    file: "",
    text: "",
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

  const handleSavePage = (withTemp) => {
    try {
      savePage({
        name: modalData.text,
        image: modalData.file,
        sample_data: blocks.toString(),
        state: withTemp ? "temp" : "close",
      });
    } catch (err) {
      console.error("Ошибка при сохранении страницы:", err);
    }
  };
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
          <BlockBar
            specialClass={`block-bar ${isVisibleBlockBar ? "active" : ""}`}
            setIsVisibleBlockBar={setIsVisibleBlockBar}
            handleAddBlock={handleAddBlock}
          />
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
