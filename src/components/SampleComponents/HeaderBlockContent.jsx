import { HEADER_DIVS, HEADER_LABELS } from "../const";

export default function HeaderBlockContent({
  contentTempData,
  setContentTempData,
  handleContentSave,
}) {
  return (
    <div className="content-bar header-bar">
      <button className="save" onClick={handleContentSave}>
        Сохранить
      </button>
      {HEADER_DIVS.map((field, index) => (
        <div key={field}>
          <p>{HEADER_LABELS[index]}</p>
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
      ))}
    </div>
  );
}
