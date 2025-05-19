export default function PreviewPageBlock({
  isPreview,
  setIsPreview,
  currentDevice,
  setCurrentDevice,
}) {
  return (
    <section className="preview-section">
      <p>{isPreview ? "Предпросмотр" : "Конструктор"}</p>
      <button
        onClick={() => setIsPreview(!isPreview)}
        className={isPreview ? "preview hidden" : "preview"}
      >
        Предпросмотр страницы
      </button>
      {isPreview && (
        <>
          <div className="preview-div">
            <button
              className={`preview-item ${
                currentDevice === "pc" ? "active" : ""
              }`}
              onClick={() => setCurrentDevice("pc")}
            >
              <img src="/preview/pc.svg" alt="PC" />
            </button>
            <button
              className={`preview-item ${
                currentDevice === "tablet" ? "active" : ""
              }`}
              onClick={() => setCurrentDevice("tablet")}
            >
              <img src="/preview/tablet.svg" alt="Tablet" />
            </button>
            <button
              className={`preview-item ${
                currentDevice === "phone" ? "active" : ""
              }`}
              onClick={() => setCurrentDevice("phone")}
            >
              <img src="/preview/phone.svg" alt="Phone" />
            </button>
          </div>
          <button className="exit" onClick={() => setIsPreview(false)}>
            <img src="/cross.svg" height="38px" width="36px" alt="Закрыть" />
          </button>
        </>
      )}
    </section>
  );
}
