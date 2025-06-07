import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaseBlock from "../components/SampleComponents/BaseBlock";
import { blockTemplates, deviceSize } from "../components/const";
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
import { savePage } from "../api/postPageApi";
import { getOnlyPage } from "../api/getOnlyPageApi";
import { BASE_URL } from "../api/authApi";

const SamplePage = () => {
  const [currentDevice, setCurrentDevice] = useState("pc");
  const [isPreview, setIsPreview] = useState(false);

  const [isAnyMenuOpen, setIsAnyMenuOpen] = useState(false);
  const [isopenModal, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    img: "none",
    file: "",
    text: "",
    state: "close",
    temp: false,
    tempName: "",
  });

  const [isVisibleBlockBar, setIsVisibleBlockBar] = useState(false);
  const [isVisibleOtherBar, setIsVisibleOtherBar] = useState(false);

  const [blocks, setBlocks] = useState([]);

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

  const handleSavePage = () => {
    try {
      const formData = new FormData();
      formData.set("name", modalData.text);
      if (modalData.file) {
        formData.set("image", modalData.file);
      }
      if (modalData.temp && modalData.state !== "temp") {
        formData.set("temp", modalData.temp.toString());
        formData.set("temp_name", modalData.tempName);
        formData.set("state", modalData.state);
      } else {
        formData.set("state", "close");
        formData.set("temp", "false");
      }
      formData.set("sample_data", JSON.stringify(blocks));
      if (id) {
        formData.set("id", id);
      }
      savePage(formData, id);
    } catch (err) {
      console.error("Ошибка при сохранении страницы:", err);
    }
  };

  function onClose() {
    setIsModalOpen(false);
  }

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const response = await getOnlyPage(id);
          const parsedData = await JSON.parse(response.sample_data);
          setBlocks(parsedData);
          setModalData({
            text: response.name,
            //временно
            img: BASE_URL + response.image,
            state: response.state,
          });
          console.log(modalData);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleDeleteBlock = (id) => {
    setBlocks(blocks.filter((block) => block.id !== id));
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;
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
                isAnyMenuOpen={isAnyMenuOpen}
                setIsAnyMenuOpen={setIsAnyMenuOpen}
                sample={block.sample}
                pageContent={componentMap[block.type]}
                setIsVisibleBar={setIsVisibleOtherBar}
                onDelete={() => handleDeleteBlock(block.id)}
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
