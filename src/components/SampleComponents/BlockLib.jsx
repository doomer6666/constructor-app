import { SampleLib } from "../const";

export default function BlockLib({ type, handleAddBlock }) {
  const typeLib = SampleLib[type] || null;
  return (
    typeLib !== null && (
      <section className="lib">
        <ul>
          {typeLib.map((sample) => (
            <li
              onClick={() => handleAddBlock(type, sample.name)}
              key={sample.title}
            >
              <img src={sample.previewImg} alt="Шаблон 1" />
              <p>
                <strong>{sample.title}</strong>:{sample.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    )
  );
}
