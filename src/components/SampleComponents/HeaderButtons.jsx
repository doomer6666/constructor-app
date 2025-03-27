export default function Buttons({
  setIsSettingVisible,
  setIsContentVisible,
  setIsRender,
}) {
  return (
    <div className="buttons">
      <button
        className="header-setting setting"
        onClick={() => {
          return setIsSettingVisible(true);
        }}
      >
        Настройки
      </button>
      <button
        className="header-content content"
        onClick={() => setIsContentVisible(true)}
      >
        Контент
      </button>
      <button className="trash" onClick={() => setIsRender(false)}>
        <img src="/trash.svg" height="25px" width="23px" />
      </button>
    </div>
  );
}
