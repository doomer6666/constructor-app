const ReadOnlyBlock = ({ type, data, sample, pageContent }) => {
  const settingData = data?.settings || {};
  const contentData = data?.content || {};
  const isBackImage =
    settingData.backgroundImage && settingData.backgroundImage !== "none";
  const bgImage = isBackImage ? `url(${settingData.backgroundImage})` : "none";
  const bgColor = !isBackImage
    ? settingData.backgroundColor || "#ffffff"
    : "transparent";

  return (
    <section
      className={`block ${type} ${sample || ""}`}
      style={{
        backgroundImage: bgImage,
        backgroundColor: bgColor,
      }}
    >
      <>{pageContent({ contentData, settingData, isReadOnly: true })}</>
    </section>
  );
};

export default ReadOnlyBlock;
