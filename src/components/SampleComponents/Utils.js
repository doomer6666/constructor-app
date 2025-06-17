import { useEffect } from "react";
import { BASE_URL } from "../../api/authApi";
import { postImage } from "../../api/postImage";

export const handleFileUpload =
  (field, setSettingTempData, setImgText = () => { }, setIsActualyBackImage = () => { }) =>
    async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        setImgText("Ошибка");
        return;
      }
      const formData = new FormData();
      formData.set('image', file);
      try {
        let newImageUrl = await postImage(formData);
        console.log(newImageUrl)
        newImageUrl = BASE_URL + newImageUrl.image;
        setSettingTempData((prev) => ({
          ...prev,
          [field]: newImageUrl,
        }));
        setIsActualyBackImage(true);
        setImgText("Загружено");
      }
      catch (err) {
        console.log(err)
      }
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
  if (typeof url !== "string" || url.trim() === "") {
    console.error("Ошибка: пустая ссылка");
    return "none";
  }

  let embedURL = "";

  try {
    const parsedURL = new URL(url);
    const domain = parsedURL.hostname;

    if (domain.includes("youtube.com") || domain.includes("youtu.be")) {
      let videoId = "";
      if (domain.includes("youtube.com")) {
        if (parsedURL.pathname.startsWith("/embed/")) {
          const parts = parsedURL.pathname.split("/");
          if (parts[2]) videoId = parts[2];
        } else {
          videoId = parsedURL.searchParams.get("v");
        }
      } else if (domain.includes("youtu.be")) {
        videoId = parsedURL.pathname.substring(1);
      }
      if (videoId && videoId.trim() !== "") {
        embedURL = `https://www.youtube.com/embed/${videoId}`;
      }
    }

    else if (domain.includes("vk.com") || domain.includes("vkvideo.ru")) {
      if (parsedURL.pathname.includes("video_ext.php")) {
        const oid = parsedURL.searchParams.get("oid");
        const id = parsedURL.searchParams.get("id");
        if (oid && id) {
          embedURL = `https://vk.com/video_ext.php?oid=${oid}&id=${id}`;
        }
      } else {
        const vkRegex = /video(-?\d+)_([\d]+)/;
        const match = url.match(vkRegex);
        if (match && match[1] && match[2]) {
          embedURL = `https://vk.com/video_ext.php?oid=${match[1]}&id=${match[2]}`;
        }
      }
    }

    else if (domain.includes("rutube.ru")) {
      const rtRegex = /rutube\.ru\/(?:video|tracks|play\/embed)\/([\w-]+)/;
      const match = url.match(rtRegex);
      if (match && match[1]) {
        embedURL = `https://rutube.ru/play/embed/${match[1]}`;
      }
    }
  } catch (e) {
    console.error("Ошибка при обработке URL:", e);
  }

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

export function useOuterClick(ref, callback) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" || event.key === "Esc") {
        callback();
      }
    };

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}