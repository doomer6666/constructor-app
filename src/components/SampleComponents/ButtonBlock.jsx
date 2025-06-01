export default function ButtonBlock({ contentData, settingData, disabled }) {
  console.log(contentData.link);
  const styleObj = {
    "--dynamic-font": `${settingData.fontSize / 16}rem`,
    color: settingData.textColor,
  };
  for (let i = 0; i < settingData.borderColor.length; i++) {
    styleObj[`--btn-border-color-${i + 1}`] = settingData.borderColor[i];
  }
  for (let i = 0; i < settingData.buttonColor.length; i++) {
    styleObj[`--btn-bg-color-${i + 1}`] = settingData.buttonColor[i];
  }
  return (
    <div className="page__content">
      <div className="button-div">
        <button
          className="new-block"
          style={styleObj}
          onClick={() =>
            window.open(contentData.link, "_blank", "noopener,noreferrer")
          }
          disabled={disabled}
        >
          {contentData.text}
        </button>
      </div>
    </div>
  );
}
