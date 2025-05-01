export default function GalleryBlock({ contentData }) {
  const images = Object.entries(contentData).filter(([label]) =>
    label.includes("img")
  );
  return (
    <div className="page__content">
      <div className="gallery-div">
        {images.map(([label, url], idx) => (
          <div key={label + idx}>
            {url && <img className={label} src={url} />}
          </div>
        ))}
      </div>
    </div>
  );
}
