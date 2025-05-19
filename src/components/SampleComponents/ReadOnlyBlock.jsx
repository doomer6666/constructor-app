const ReadOnlyBlock = ({ type, data, sample, pageContent }) => {
  const settingData = data?.settings || {};
  const contentData = data?.content || {};
  const isBackImage = settingData.backgroundImage !== undefined;
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
      <>{pageContent({ contentData, settingData })}</>
    </section>
  );
};

export default ReadOnlyBlock;
