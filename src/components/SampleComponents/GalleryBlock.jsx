import { Carousel } from "antd";

export default function GalleryBlock({ contentData }) {
  const images = Object.entries(contentData).filter(([label]) =>
    label.includes("img")
  );
  return (
    <div className="page__content">
      <div className="gallery-div">
        {contentData.isGrid === true ? (
          <>
            <div className="path-1">
              <div className="big-img">
                <img src={images[0][1]} alt="Big" />
              </div>
              <div className="x-gallery">
                {images.map(([label, url], idx) =>
                  idx === 1 || idx === 2 ? (
                    <div key={label + idx}>
                      {url && <img className={label} src={url} alt={label} />}
                    </div>
                  ) : null
                )}
              </div>
            </div>
            <div className="path-2">
              {images.map(([label, url], idx) =>
                idx > 2 ? (
                  <div key={label + idx}>
                    {url && <img className={label} src={url} alt={label} />}
                  </div>
                ) : null
              )}
            </div>
          </>
        ) : contentData.isInfinite === true ? (
          <Carousel className="carousel" arrows infinite={true}>
            {images.map(([label, url], idx) => (
              <div key={label + idx}>
                {url && <img className={label} src={url} alt={label} />}
              </div>
            ))}
          </Carousel>
        ) : (
          images.map(([label, url], idx) => (
            <div key={label + idx}>
              {url && <img className={label} src={url} alt={label} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
