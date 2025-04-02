export const handleFileUpload =
  (setSettingTempData, setIsActualyBackImage,setImgText) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImgText(file.name.slice(0,7)+'...')
    const reader = new FileReader();
    reader.onload = (event) => {
      const newImageUrl = event.target.result;
      setSettingTempData((prev) => ({
        ...prev,
        backgroundImage: newImageUrl,
      }));
      setIsActualyBackImage(true);
    };
    reader.readAsDataURL(file);
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
  (settingTempData, setSettingTempData) => (e, index) => {
    const newFontColors = [...settingTempData.colors];
    newFontColors[index] = e.target.value;
    setSettingTempData({
      ...settingTempData,
      colors: newFontColors,
    });
  };
