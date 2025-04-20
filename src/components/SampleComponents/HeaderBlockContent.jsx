export default function HeaderBlockContent({
  contentTempData,
  setContentTempData,
  handleContentSave,
  handleContentClose,
  divs,
  labels,
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
      {divs.map((field, index) => {
        return (
          <div key={`${field}-${index}`}>
            {(field.includes("title") || field.includes("text")) && (
              <div>
                <p>{labels[index]}</p>
                {field.includes("text") ? (
                  <textarea
                    value={contentTempData[field] || ""}
                    onChange={(e) =>
                      setContentTempData({
                        ...contentTempData,
                        [field]: e.target.value,
                      })
                    }
                    className={`textarea-text-${index}`}
                  />
                ) : (
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
                )}
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
