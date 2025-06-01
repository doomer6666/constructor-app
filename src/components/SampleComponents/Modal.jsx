// import { Checkbox } from "antd";
import { Modal as AntdModal, Checkbox, ConfigProvider } from "antd";
import { useState } from "react";
import { handleFileUpload } from "./Utils";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose, onSave, modalData, setModalData }) => {
  const [withTemplates, setWithTemplates] = useState(false);
  return (
    <AntdModal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={600}
      className="modal"
    >
      <div>
        <div className="gallery-div">
          {modalData.img !== "none" && <img src={modalData.img} />}
        </div>
        <div className="div-img">
          <label htmlFor="input-img-modal" className="input-img">
            Загрузить изорбажение
          </label>
          <input
            id="input-img-modal"
            type="file"
            onChange={(e) => {
              handleFileUpload("img", setModalData)(e);
              setModalData({ ...modalData, file: e.target.files[0] });
            }}
          />
        </div>
        <input
          type="text"
          value={modalData.text || ""}
          placeholder="Добавьте текст к странице"
          onChange={(e) =>
            setModalData({
              ...modalData,
              ["text"]: e.target.value,
            })
          }
          className={`input-title-modal`}
        />
        <Link to={"/redactor"}>
          <button
            className="new-block save-page"
            onClick={() => onSave(withTemplates)}
          >
            Сохранить страницу
          </button>
        </Link>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#fa8c16",
            },
          }}
        >
          <Checkbox
            checked={withTemplates}
            onChange={(e) => setWithTemplates(e.target.checked)}
            style={{ marginTop: 10 }}
          >
            Сохранить в шаблоны
          </Checkbox>
        </ConfigProvider>
      </div>
    </AntdModal>
  );
};

export default Modal;
