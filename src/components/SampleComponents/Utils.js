export const handleFileUpload =
  (field, setSettingTempData, setImgText, setIsActualyBackImage = () => { }) =>
    (e) => {
      console.log(field);
      const file = e.target.files[0];
      if (!file) return;
      const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        setImgText("Ошибка");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImageUrl = event.target.result;
        setSettingTempData((prev) => ({
          ...prev,
          [field]: newImageUrl,
        }));
        setIsActualyBackImage(true);
      };
      reader.readAsDataURL(file);
      setImgText("Загружено");
    };

export const handleFontSizeChange =
  (settingTempData, setSettingTempData) => (e, index) => {
    const newFontSizes = [...settingTempData.fontSize];
    newFontSizes[index] = e.target.value;
    setSettingTempData({
      ...settingTempData,
      fontSize: newFontSizes,
    });
  };

export const handleFontColorChange =
  (settingTempData, setSettingTempData) => (color, index) => {
    const newFontColors = [...settingTempData.colors];
    newFontColors[index] = color.toHexString();
    setSettingTempData({
      ...settingTempData,
      colors: newFontColors,
    });
  };

export const getEmbedSrc = (url) => {
  console.log(url)
  // Проверяем, что входная ссылка не пустая
  if (typeof url !== "string" || url.trim() === "") {
    console.error("Ошибка: пустая ссылка");
    return "none";
  }

  let embedURL = "";

  try {
    const parsedURL = new URL(url);
    const domain = parsedURL.hostname;

    // --- YouTube ---
    if (domain.includes("youtube.com") || domain.includes("youtu.be")) {
      let videoId = "";
      if (domain.includes("youtube.com")) {
        // Если ссылка уже в формате embed (например, /embed/VIDEO_ID)
        if (parsedURL.pathname.startsWith("/embed/")) {
          const parts = parsedURL.pathname.split("/");
          if (parts[2]) videoId = parts[2];
        } else {
          // Из обычной ссылки вида youtube.com/watch?v=VIDEO_ID
          videoId = parsedURL.searchParams.get("v");
        }
      } else if (domain.includes("youtu.be")) {
        // Из ссылок вида youtu.be/VIDEO_ID
        videoId = parsedURL.pathname.substring(1);
      }
      if (videoId && videoId.trim() !== "") {
        embedURL = `https://www.youtube.com/embed/${videoId}`;
      }
    }

    // --- ВКонтакте ---
    else if (domain.includes("vk.com") || domain.includes("vkvideo.ru")) {
      // Если ссылка уже в формате video_ext.php
      if (parsedURL.pathname.includes("video_ext.php")) {
        const oid = parsedURL.searchParams.get("oid");
        const id = parsedURL.searchParams.get("id");
        if (oid && id) {
          embedURL = `https://vk.com/video_ext.php?oid=${oid}&id=${id}`;
        }
      } else {
        // Если ссылка вида vk.com/video{oid}_{id} или vkvideo.ru/video{oid}_{id}
        const vkRegex = /video(-?\d+)_([\d]+)/;
        const match = url.match(vkRegex);
        if (match && match[1] && match[2]) {
          embedURL = `https://vk.com/video_ext.php?oid=${match[1]}&id=${match[2]}`;
        }
      }
    }

    // --- RuTube ---
    else if (domain.includes("rutube.ru")) {
      // Обрабатываем форматы: /video/ID, /tracks/ID или /play/embed/ID
      const rtRegex = /rutube\.ru\/(?:video|tracks|play\/embed)\/([\w-]+)/;
      const match = url.match(rtRegex);
      if (match && match[1]) {
        embedURL = `https://rutube.ru/play/embed/${match[1]}`;
      }
    }
  } catch (e) {
    console.error("Ошибка при обработке URL:", e);
  }

  // Если embedURL так и остался пустым, возвращаем сообщение об ошибке
  if (!embedURL || embedURL.trim() === "") {
    return "none";
  }

  return embedURL;
};

export const handleVideoUpload =
  (field, setSettingTempData, setVideoText) => (e) => {
    console.log(field);
    const file = e.target.files[0];
    if (!file) return;

    // Допустимые видеоформаты
    const allowedTypes = ["video/mp4", "video/webm", "video/ogg"];
    if (!allowedTypes.includes(file.type)) {
      setVideoText("Ошибка: неподдерживаемый формат");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const newVideoUrl = event.target.result;
      setSettingTempData((prev) => ({
        ...prev,
        [field]: newVideoUrl,
      }));
    };

    reader.readAsDataURL(file);
    setVideoText("Загружено");
  };
