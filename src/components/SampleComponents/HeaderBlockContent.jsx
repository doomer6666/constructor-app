import { HEADER_DIVS, HEADER_LABELS } from "../const";

export default function HeaderBlockContent({
  contentTempData,
  setContentTempData,
  handleContentSave,
  handleContentClose,
  sample,
}) {
  return (
    <div className="content-bar header-bar">
      <div className="buttons-div">
        <button className="save" onClick={handleContentClose}>
          Закрыть
        </button>
        <button className="close" onClick={handleContentSave}>
          Сохранить и закрыть
        </button>
      </div>
      {HEADER_DIVS[sample].map((field, index) => {
        return (
          <div key={`${field}-${index}`}>
            {field.includes("title") && (
              <div>
                <p>{HEADER_LABELS[sample][index]}</p>
                <input
                  type="text"
                  value={contentTempData[field] || ""}
                  onChange={(e) =>
                    setContentTempData({
                      ...contentTempData,
                      [field]: e.target.value,
                    })
                  }
                  className={`input-title-${index}`}
                />
              </div>
            )}
            {field.includes("img") && (
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const newImageUrl = event.target.result;
                    setContentTempData((prev) => ({
                      ...prev,
                      [field]: newImageUrl,
                    }));
                  };
                  reader.readAsDataURL(file);
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
