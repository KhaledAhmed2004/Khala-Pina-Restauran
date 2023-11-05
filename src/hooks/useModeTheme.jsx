import { useEffect, useState } from "react";

export const useModeTheme = () => {
  const [mode, setMode] = useState("light");
  const [modeIcon, setModeIcon] = useState(false);

  const changeTheme = () => {
    const html = document.documentElement;
    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      setModeIcon(!modeIcon);
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      setModeIcon(!modeIcon);
      localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    document.documentElement.classList.add(currentMode);
    setMode(currentMode);
  }, []);
  return { changeTheme, mode, modeIcon };
};

export default useModeTheme;
