import { useRef, useEffect } from "react";
import { renderToString } from "react-dom/server";
import ReadOnlyBlock from "./ReadOnlyBlock";
import sampleCSS from "../../styles/sample.scss?raw"; // Импорт скомпилированного CSS (нужно настроить сборщик)

const PreviewFrame = ({ blocks, componentMap, deviceSize }) => {
  const iframeRef = useRef();

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument;

    // Очистка содержимого
    iframeDoc.body.innerHTML = "";
    iframeDoc.head.innerHTML = "";

    // Добавление meta-тега viewport
    const viewportMeta = iframeDoc.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1.0";
    iframeDoc.head.appendChild(viewportMeta);

    const fontLink1 = iframeDoc.createElement("link");
    fontLink1.rel = "stylesheet";
    fontLink1.href =
      "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";
    iframeDoc.head.appendChild(fontLink1);

    const fontLink2 = iframeDoc.createElement("link");
    fontLink2.rel = "stylesheet";
    fontLink2.href =
      "https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&display=swap";
    iframeDoc.head.appendChild(fontLink2);

    // Инъекция стилей из sample.scss
    const styleElement = iframeDoc.createElement("style");
    styleElement.textContent = sampleCSS; // Вставляем скомпилированный CSS
    iframeDoc.head.appendChild(styleElement);

    // Копирование локальных стилей (дополнительно)
    const styleSheets = Array.from(document.styleSheets);
    styleSheets.forEach((sheet) => {
      try {
        if (sheet.href && !sheet.href.startsWith(window.location.origin)) {
          return;
        }
        const cssRules = Array.from(sheet.cssRules)
          .map((rule) => rule.cssText)
          .join("\n");
        const iframeStyle = iframeDoc.createElement("style");
        iframeStyle.textContent = cssRules;
        iframeDoc.head.appendChild(iframeStyle);
      } catch (err) {
        console.warn("Не удалось скопировать стили:", err);
      }
    });

    // Генерация HTML с использованием ReadOnlyBlock
    const htmlContent = renderToString(
      <section className="redactor-page">
        <section className="page">
          {blocks.map((block) => (
            <ReadOnlyBlock
              key={block.id}
              type={block.type}
              data={block.data || {}}
              sample={block.sample || ""}
              pageContent={
                componentMap && componentMap[block.type]
                  ? componentMap[block.type]
                  : () => null
              }
            />
          ))}
        </section>
        <div className="page-buttons" />
      </section>
    );

    // Вставка HTML в ифрейм
    const div = document.createElement("div");
    div.innerHTML = htmlContent;
    while (div.firstChild) {
      iframeDoc.body.appendChild(div.firstChild);
    }
  }, [blocks, componentMap]);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: deviceSize.width,
        height: deviceSize.height,
        border: "none",
      }}
      title="Preview"
    />
  );
};

export default PreviewFrame;
