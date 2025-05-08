export default function VideoBlock({ contentData }) {
  return (
    <div className="page__content">
      {contentData.video && (
        <video key={contentData.video} controls>
          <source src={contentData.video} type="video/mp4" />
        </video>
      )}
      {contentData.videoLink && (
        <iframe
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
