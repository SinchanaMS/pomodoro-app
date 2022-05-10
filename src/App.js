import "App.css";
import Header from "components/Header";
import { useTheme } from "contexts/ThemeContext";
import Router from "utils/Router";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" ? "App" : "App dark"}>
      <Header />
      <Router />
    </div>
  );
}

export default App;
