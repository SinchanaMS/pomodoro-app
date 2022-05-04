import { MdMenu, MdLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { useTheme } from "contexts/ThemeContext";
import "styles/header.css";
import logo from "assets/zenith.png";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={theme === "light" ? "header" : "header dark"}>
      <div className="header-content-left">
        <MdMenu className="header-icon menu" />
        <div className={theme === "light" ? "logo" : "logo dark"}>
          <img src={logo} alt="zenith-logo" />
        </div>
        <h3 className="app-title">Zenith</h3>
      </div>
      <div className="theme-icon">
        {theme === "light" ? (
          <IoMoon
            className="header-icon dark-icon"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <MdLightMode
            className="header-icon light-icon"
            onClick={() => setTheme("light")}
          />
        )}
      </div>
    </div>
  );
}
