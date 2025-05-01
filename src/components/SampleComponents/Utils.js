export const handleFileUpload =
  (field,setSettingTempData,setImgText, setIsActualyBackImage = () => {}) => (e) => {
    console.log(field)
    const file = e.target.files[0];
    if (!file) return;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
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
    setImgText("Загружено")
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

