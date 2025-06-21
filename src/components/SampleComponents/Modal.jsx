import { useState, useEffect } from "react";
import { Modal as AntdModal, Checkbox, ConfigProvider, Alert } from "antd";
import { handleFileUpload } from "./Utils";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, onSave, modalData, setModalData }) => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const isSaveDisabled =
    !modalData.file ||
    !modalData.text ||
    (modalData.temp && !modalData.tempName);

  useEffect(() => {
    if (!isSaveDisabled && showAlert) {
      setShowAlert(false);
    }
  }, [isSaveDisabled, showAlert]);

  const handleSave = async () => {
    if (isSaveDisabled) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    await onSave();
    navigate("/redactor");
  };
  const handleCancel = () => {
    onClose();
  };

  return (
    <AntdModal
      open={isOpen}
      onCancel={handleCancel}
      maskClosable={false}
      footer={null}
      width={600}
      className="modal"
    >
      <div>
        <div className="gallery-div">
          {modalData.img !== "none" && (
            <img src={modalData.img} alt="Изображение" />
          )}
        </div>
        <div className="div-img">
          <label htmlFor="input-img-modal" className="input-img">
            Загрузить изображение
          </label>
          <input
            required
            id="input-img-modal"
            type="file"
            onChange={(e) => {
              handleFileUpload("img", setModalData)(e);
              setModalData({ ...modalData, file: e.target.files[0] });
            }}
          />
        </div>
        <input
          required
          type="text"
          value={modalData.text || ""}
          placeholder="Добавьте название страницы"
          onChange={(e) =>
            setModalData({
              ...modalData,
              text: e.target.value,
            })
          }
          className="input-title-modal"
        />
        <button className="new-block save-page" onClick={handleSave}>
          Сохранить страницу
        </button>
        {showAlert && (
          <Alert
            message="Пожалуйста, заполните все обязательные поля"
            type="warning"
            showIcon
            closable
            onClose={() => setShowAlert(false)}
            style={{ marginTop: 10 }}
          />
        )}
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
              required
              type="text"
              value={modalData.tempName || ""}
              placeholder="Добавьте название шаблона"
              onChange={(e) =>
                setModalData({
                  ...modalData,
                  tempName: e.target.value,
                })
              }
              className="input-title-modal"
            />
          )}
        </ConfigProvider>
      </div>
    </AntdModal>
  );
};

export default Modal;
