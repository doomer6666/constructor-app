import { Modal as AntdModal, Checkbox, ConfigProvider } from "antd";
import { handleFileUpload } from "./Utils";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, onSave, modalData, setModalData }) => {
  const navigate = useNavigate();
  const handleSave = async () => {
    await onSave();
    navigate("/redactor");
  };
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
          placeholder="Добавьте название страницы"
          onChange={(e) =>
            setModalData({
              ...modalData,
              ["text"]: e.target.value,
            })
          }
          className={`input-title-modal`}
        />
        <button className="new-block save-page" onClick={handleSave}>
          Сохранить страницу
        </button>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#fa8c16",
            },
          }}
        >
          <Checkbox
            checked={modalData.temp}
            onChange={(e) =>
              setModalData({ ...modalData, temp: e.target.checked })
            }
            style={{ marginTop: 10 }}
          >
            Сохранить в шаблоны
          </Checkbox>
          {modalData.temp && (
            <input
              type="text"
              value={modalData.tempName || ""}
              placeholder="Добавьте название шаблона"
              onChange={(e) =>
                setModalData({
                  ...modalData,
                  ["tempName"]: e.target.value,
                })
              }
              className={`input-title-modal`}
            />
          )}
        </ConfigProvider>
      </div>
    </AntdModal>
  );
};

export default Modal;
