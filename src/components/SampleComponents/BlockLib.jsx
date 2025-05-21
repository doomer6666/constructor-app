import { SampleLib } from "../const";

export default function BlockLib({
  type,
  handleAddBlock,
  isVisible,
  setIsVisible,
}) {
  const typeLib = SampleLib[type] || SampleLib["header"];

  if (!typeLib) return null;

  return (
    <section className={`lib ${isVisible ? "active" : ""}`}>
      <ul>
        {typeLib.map((sample) => (
          <li
            key={sample.title}
            onClick={() => {
              handleAddBlock(type, sample.name);
              setIsVisible(false);
            }}
          >
            <img
              src={sample.previewImg}
              alt={`Шаблон ${sample.title}`}
              style={{ maxWidth: "100%" }}
            />
            <p>
              <strong>{sample.title}</strong>: {sample.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
