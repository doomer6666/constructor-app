import { useState, useEffect } from "react";

function VideoPlayer({ videoLink }) {
  const [isAvailable, setIsAvailable] = useState(null);

  useEffect(() => {
    fetch(videoLink, { method: "HEAD" })
      .then((response) => {
        setIsAvailable(response.ok);
      })
      .catch(() => setIsAvailable(false));
  }, [videoLink]);

  if (isAvailable === null) {
    return <p>Проверка ссылки...</p>;
  }

  return isAvailable ? (
    <iframe
      className="videoLink"
      width="560"
      height="315"
      src={videoLink}
      title="Видео"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ) : (
    <img src="/video-placeholder.png" alt="Video placeholder" />
  );
}

export default VideoPlayer;
