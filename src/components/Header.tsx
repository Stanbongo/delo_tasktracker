import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={`page-header theme-${theme}`}>
      <h1>Task Manager</h1>

      <label>
        <input
          type="checkbox"
          role="switch"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        Темная тема
      </label>
    </header>
  );
}

export default Header;
