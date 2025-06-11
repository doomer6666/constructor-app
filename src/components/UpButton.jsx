import { useState, useEffect } from "react";

export default function UpButton({ isMenuVisible = false }) {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isMenuVisible);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const showButton = isVisible && !isMenuVisible;
  return (
    <button
      className="up-button"
      style={{
        transform: showButton ? "translateX(0)" : "translateX(100%)",
        opacity: showButton ? 1 : 0,
        transition: "transform 0.3s ease, opacity 0.3s ease",
        pointerEvents: showButton ? "auto" : "none",
      }}
      onClick={scrollToTop}
    >
      <img src="/up-arrow.svg" alt="Наверх" />
    </button>
  );
}
