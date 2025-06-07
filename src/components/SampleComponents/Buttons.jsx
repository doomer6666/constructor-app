export default function Buttons({
  isAnyMenuOpen,
  setIsSettingVisible,
  setIsContentVisible,
  onDelete,
}) {
  return (
    <div className="buttons">
      <button
        className="header-setting setting"
        onClick={() => {
          return setIsSettingVisible(true);
        }}
        disabled={isAnyMenuOpen}
      >
        <img src="/setting.svg" height="30px" width="30px" />
      </button>
      <button
        className="header-content content"
        onClick={() => setIsContentVisible(true)}
        disabled={isAnyMenuOpen}
      >
        <img src="/content.svg" height="25px" width="25px" />
      </button>
      <button className="trash" onClick={onDelete} disabled={isAnyMenuOpen}>
        <img src="/trash.svg" height="25px" width="23px" />
      </button>
    </div>
  );
}
