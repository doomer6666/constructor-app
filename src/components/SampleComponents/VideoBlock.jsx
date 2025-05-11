export default function VideoBlock({ contentData }) {
  console.log(contentData.video);
  return (
    <div className="page__content">
      {contentData.video && contentData.video !== "none" ? (
        <video key={contentData.video} controls>
          <source src={contentData.video} type="video/mp4" />
        </video>
      ) : contentData.video === "none" ? (
        <img src="/video-placeholder.png" alt="Video placeholder" />
      ) : null}
      {contentData.videoLink && (
        <iframe
          className="videoLink"
          width="560"
          height="315"
          src={contentData.videoLink}
          title="Other video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
