import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Header from "../shared/Header/Header";
import { useEffect, useState } from "react";
import { getLocalTheme, setLocalTheme } from "../utils/localStorage";
AOS.init();

function Root() {
  const [theme, setTheme] = useState(() => getLocalTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setLocalTheme();
  };
  return (
    <div
      className={`max-w-[90%] mx-auto font-rob ${theme === "dark" && "dark"}`}
    >
      <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Outlet />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default Root;
